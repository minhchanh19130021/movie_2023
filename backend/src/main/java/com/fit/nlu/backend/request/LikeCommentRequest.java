package com.fit.nlu.backend.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

public class LikeCommentRequest {
    @JsonProperty("comment_id")
    @NotNull(message = "Movie id is required")
    private Integer commentId;

    @JsonProperty("user_id")
    @NotNull(message = "User id is required")
    private Integer userId;

    public LikeCommentRequest() {
    }

    public LikeCommentRequest(Integer commentId, Integer userId) {
        this.commentId = commentId;
        this.userId = userId;
    }

    public Integer getCommentId() {
        return this.commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Integer getUserId() {
        return this.userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
