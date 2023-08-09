package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.entity.Like;
import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.repository.CommentRepository;
import com.fit.nlu.backend.repository.LikeRepository;
import com.fit.nlu.backend.repository.UserRepository;
import com.fit.nlu.backend.response.LikeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

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
        } else if (sortBy.equals("likeDESC")) {
            orderBy = criteriaBuilder.desc(commentRoot.get("numberLike"));
        } else {
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

    public LikeResponse likeComment(Integer userId, Integer commentId) {
        LikeResponse response = new LikeResponse();
        try {
            Optional<Like> like = likeRepository.findLikeByUserIdAndCommentId(userId, commentId);
            Comment comment = commentRepository.findById(commentId).get();
            if (like.isPresent()) {
                likeRepository.delete(like.get());
                comment.setNumberLike(comment.getNumberLike() - 1);
                response.setStatus("unlike");
                response.setNumber(comment.getNumberLike());
            } else {
                comment.setNumberLike(comment.getNumberLike() + 1);
                Like newLike = new Like();
                newLike.setUserId(userId);
                newLike.setComment(commentRepository.findById(commentId).get());
                newLike.setInsertedDate(new Date());
                newLike.setUpdatedDate(new Date());
                Collection<Like> c = comment.getLikes();
                c.add(newLike);
                comment.setLikes(c);
                likeRepository.save(newLike);
                response.setStatus("like");
                response.setNumber(comment.getNumberLike());
            }
            commentRepository.save(comment);
        } catch (Exception e) {
            return null;
        }
        return response;

    }
    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
