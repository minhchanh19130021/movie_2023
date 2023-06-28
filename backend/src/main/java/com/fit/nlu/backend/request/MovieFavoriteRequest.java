package com.fit.nlu.backend.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

public class MovieFavoriteRequest {
    @JsonProperty("movie_id")
    @NotNull(message = "Movie id is required")
    private Integer movieId;

    @JsonProperty("user_id")
    @NotNull(message = "User id is required")
    private Integer userId;

    public MovieFavoriteRequest() {
    }

    public MovieFavoriteRequest(Integer movieId, Integer userId) {
        this.movieId = movieId;
        this.userId = userId;
    }

    public Integer getMovieId() {
        return this.movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getUserId() {
        return this.userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
