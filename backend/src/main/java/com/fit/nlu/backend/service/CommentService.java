package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.exception.CustomException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.List;

@Service
public class CommentService {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Comment> getListComment(int movieId, int currentPage, String sortBy) throws CustomException {
        Pageable pageable = PageRequest.of(currentPage, 5);

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Comment> criteriaQuery = criteriaBuilder.createQuery(Comment.class);
        Root<Comment> commentRoot = criteriaQuery.from(Comment.class);
        Predicate hasMovieId = criteriaBuilder.equal(commentRoot.get("movieId"), movieId);

        Order orderBy = null;
        if (sortBy.equals("insertedDateDESC")) {
            orderBy = criteriaBuilder.desc(commentRoot.get("insertedDate"));
        } else if (sortBy.equals("insertedDateASC")) {
            orderBy = criteriaBuilder.asc(commentRoot.get("insertedDate"));
        }
        else if (sortBy.equals("likeDESC")) {
            orderBy = criteriaBuilder.desc(commentRoot.get("numberLike"));
        }
        else {
            throw new CustomException(HttpStatus.BAD_REQUEST, "cannot sort by " + sortBy);
        }

        criteriaQuery.select(commentRoot)
                .where(hasMovieId)
                .orderBy(orderBy);

        return entityManager.createQuery(criteriaQuery)
                .setFirstResult((int) pageable.getOffset())
                .setMaxResults(pageable.getPageSize())
                .getResultList();
    }
}
