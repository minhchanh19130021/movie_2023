package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Episode;
import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.repository.EpisodeRepository;
import com.fit.nlu.backend.repository.MovieDetailsRepository;
import com.fit.nlu.backend.repository.MovieRepository;
import com.fit.nlu.backend.utils.DateUtils;
import com.fit.nlu.backend.utils.SlugUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.List;
import java.util.Optional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Autowired
    private MovieDetailsRepository movieDetailRepository;

    @Autowired
    private EpisodeRepository episodeRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private SlugUtils slugUtils;

    @Autowired
    private DateUtils dateUtils;

    public List<Movie> getMovies() {
        return repository.findAll();
    }

    public List<Movie> findByMovieIds(List<Integer> movieIds) {
        return repository.findAllById(movieIds);
    }

    public MovieDetail getMovieDetail(Integer movie_id) {
        return movieDetailRepository.findById(movie_id).get();
    }

    public List<Episode> getEpisodesOfMovie(Integer movie_id) {
        return episodeRepository.findByMovieId(movie_id);
    }

    public Page<Movie> getMovies(int page, int size, String sortBy, String sortOrder) {
        Sort.Direction sortDirection = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        return repository.findAll(pageable);
    }

    public Page<Movie> searchMoviesByName(String keyword, int page, int size, String sortBy, String sortOrder) {
        Sort.Direction sortDirection = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        if (keyword == null || keyword.trim().isEmpty()) {
            return repository.findAll(pageable);
        }
        return repository.searchMoviesByName(keyword, pageable);
    }

    public void movieCreated(Movie movie) {
        repository.save(movie);
    }

    public void movieDetailCreate(MovieDetail movieDetail) {
        movieDetailRepository.save(movieDetail);
    }

    public List<Movie> getMoviesNonDetail() {
        return repository.getMoviesNonDetail();
    }

    public List<Movie> getMoviesInAdminPage(String movieName, int offsetPage, int pageSize, String sortBy) throws CustomException {
        Pageable pageable = PageRequest.of(offsetPage, pageSize);

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Movie> criteriaQuery = criteriaBuilder.createQuery(Movie.class);
        Root<Movie> movieRoot = criteriaQuery.from(Movie.class);

        Predicate hasLikeMovieName = criteriaBuilder.like(movieRoot.get("name"), "%" + movieName + "%");
        Predicate hasLikeMovieSubName = criteriaBuilder.like(movieRoot.get("subName"), "%" + movieName + "%");
        Predicate hasLikeMovieNameOrHasLikeMovieSubName = criteriaBuilder.or(hasLikeMovieName, hasLikeMovieSubName);

        Order orderBy = null;
        if (sortBy.equals("insertedDateDESC")) {
            orderBy = criteriaBuilder.desc(movieRoot.get("insertedDate"));
        } else if (sortBy.equals("insertedDateASC")) {
            orderBy = criteriaBuilder.asc(movieRoot.get("insertedDate"));
        } else if (sortBy.equals("numberOfReviewsDESC")) {
            orderBy = criteriaBuilder.desc(movieRoot.get("reviewNumber"));
        } else if (sortBy.equals("numberOfReviewsASC")) {
            orderBy = criteriaBuilder.asc(movieRoot.get("reviewNumber"));
        } else if (sortBy.equals("numberOfCommentsDESC")) {
            orderBy = criteriaBuilder.desc(movieRoot.get("commentNumber"));
        } else if (sortBy.equals("numberOfCommentsASC")) {
            orderBy = criteriaBuilder.asc(movieRoot.get("commentNumber"));
        } else if (sortBy.equals("numberOfViewsASC")) {
            orderBy = criteriaBuilder.asc(movieRoot.get("viewNumber"));
        } else if (sortBy.equals("numberOfViewsDESC")) {
            orderBy = criteriaBuilder.desc(movieRoot.get("viewNumber"));
        } else {
            throw new CustomException(HttpStatus.BAD_REQUEST, "cannot sort by " + sortBy);
        }

        criteriaQuery.select(movieRoot)
                .where(hasLikeMovieNameOrHasLikeMovieSubName)
                .orderBy(orderBy);

        return entityManager.createQuery(criteriaQuery)
                .setFirstResult((int) pageable.getOffset())
                .setMaxResults(pageable.getPageSize())
                .getResultList();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public int increaseNumberOfViewsInMovie(int movieId) throws CustomException {
        Movie movie = repository.findWithLockingById(movieId).orElseThrow(() ->
                new CustomException(HttpStatus.NOT_FOUND, "can" +
                        " not find movie by movie id")
        );
        movie.setViewNumber(movie.getViewNumber() + 1);
        repository.save(movie);
        return movie.getViewNumber() + 1;
    }

    public MovieDetail getMovieAndMovieDetailBySlug(String slug) throws CustomException {
        MovieDetail movieDetail = movieDetailRepository.findMovieDetailBySlug(slug)
                .orElseThrow(() ->
                        new CustomException(HttpStatus.NOT_FOUND, "not found movie by slug")
                );
        return movieDetail;
    }

    public List<Movie> suggestionsMovie(String byField) {
        List<Movie> list= new ArrayList<>();
        if (byField.equals("inserted_date"))
          list = repository.suggestionsByInsertedDate();
        else if (byField.equals("updated_date"))
            list = repository.suggestionsByUpdatedDate();
        int size = list.size();

        if (size >= 8) return list.subList(0, 8);
        else if (size >= 4) return list.subList(0, 4);
        return list;

    }

    public void importMoviesFromCsv(List<String[]> lines) {
        List<Movie> moviesToSave = new ArrayList<>();
        List<MovieDetail> movieDetailsToSave = new ArrayList<>();

        boolean isFirstLine = true;

        for (String[] line : lines) {
            if (isFirstLine) {
                isFirstLine = false;
                continue;
            }

            Movie movie = createMovieFromCsvLine(line);
//            repository.save(movie);
            moviesToSave.add(movie);

        }

        List<Movie> savedMovies = repository.saveAll(moviesToSave);

        for (int i = 0; i < lines.size() - 1; i++) {
            String[] line = lines.get(i + 1); // Skip the header line

            MovieDetail movieDetail = createMovieDetailFromCsvLine(line, savedMovies.get(i).getId());
            movieDetailsToSave.add(movieDetail);
        }

        movieDetailRepository.saveAll(movieDetailsToSave);
    }


    private Movie createMovieFromCsvLine(String[] line) {
        Movie movie = new Movie();
        movie.setSlug(slugUtils.createSlug(line[0]));
        movie.setName(line[0]);
        movie.setReleaseDate(dateUtils.convertStringToDate(line[1]));
        movie.setType(line[2]);
        movie.setStatus(line[3]);
        movie.setPoster(line[4]);
        movie.setSubName(line[5]);
        movie.setInsertedDate(new Date());
        movie.setUpdatedDate(new Date());
        movie.setReviewNumber(0);
        movie.setCommentNumber(0);
        movie.setViewNumber(0);
        movie.setVersion(0L);
        return movie;
    }

    private MovieDetail createMovieDetailFromCsvLine(String[] line, Integer movieId) {
        MovieDetail movieDetail = new MovieDetail();
        movieDetail.setMovieId(movieId);
        movieDetail.setSummary(line[6]);
        movieDetail.setTrailerUrl(line[7]);
        movieDetail.setLang(line[8]);
        movieDetail.setQuality(line[9]);
        movieDetail.setEpisodeTotal(1);
        movieDetail.setEpisodeCurrent(1);
        movieDetail.setDuration(line[12]);
        movieDetail.setView(0);
        movieDetail.setCategory(line[14]);
        movieDetail.setCountry(line[15]);
        movieDetail.setActor(line[16]);
        movieDetail.setDirector(line[17]);
        movieDetail.setInsertedDate(new Date());
        movieDetail.setUpdatedDate(new Date());
        return movieDetail;
    }

    public Page<Movie> searchMoviesByType(String type, int page, int size, String sortBy, String sortOrder) {
        Sort.Direction sortDirection = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        if (type == null || type.trim().isEmpty()) {
            return repository.findAll(pageable);
        }
        return repository.searchMoviesByType(type, pageable);
    }
}
