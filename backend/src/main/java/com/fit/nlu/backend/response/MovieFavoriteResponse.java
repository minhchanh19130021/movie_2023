package com.fit.nlu.backend.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MovieFavoriteResponse {
    @JsonProperty("movie_id")
    private Integer movieId;
    @JsonProperty("user_id")
    private Integer userId;

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
