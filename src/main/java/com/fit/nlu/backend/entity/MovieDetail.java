package com.fit.nlu.backend.entity;

import javax.persistence.*;

@Entity(name = "movie_detail")
@Table
public class MovieDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "view")
    private Integer view;

    @Column(name = "lang")
    private String lang;

    @Column(name = "quality")
    private String quality;

    @Column(name = "episode_total")
    private Integer episodeTotal;

    @Column(name = "episode_current")
    private Integer episodeCurrent;

    @Column(name = "time")
    private String time;

    @Column(name = "trailer_url")
    private String trailerUrl;

    @Column(name = "content")
    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getView() {
        return view;
    }

    public void setView(Integer view) {
        this.view = view;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getQuality() {
        return quality;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }

    public Integer getEpisodeTotal() {
        return episodeTotal;
    }

    public void setEpisodeTotal(Integer episodeTotal) {
        this.episodeTotal = episodeTotal;
    }

    public Integer getEpisodeCurrent() {
        return episodeCurrent;
    }

    public void setEpisodeCurrent(Integer episodeCurrent) {
        this.episodeCurrent = episodeCurrent;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTrailerUrl() {
        return trailerUrl;
    }

    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
