package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer> {
    Optional<Like> findLikeByUserIdAndCommentId(Integer userId, Integer commentId);
}
