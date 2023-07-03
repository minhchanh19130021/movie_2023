package com.fit.nlu.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "movie_detail")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "summary")
    private String summary;

    @Column(name = "trailer_url")
    private String trailerUrl;

    @Column(name = "lang")
    private String lang;

    @Column(name = "quality")
    private String quality;

    @Column(name = "episode_total")
    private Integer episodeTotal;

    @Column(name = "episode_current")
    private Integer episodeCurrent;

    @Column(name = "duration")
    private String duration;

    @Column(name = "view")
    private Integer view;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;

    public MovieDetail(Integer movieId, String summary, String trailerUrl, String lang, String quality,
                       Integer episodeTotal, Integer episodeCurrent, String duration, Integer view) {
        this.movieId = movieId;
        this.summary = summary;
        this.trailerUrl = trailerUrl;
        this.lang = lang;
        this.quality = quality;
        this.episodeTotal = episodeTotal;
        this.episodeCurrent = episodeCurrent;
        this.duration = duration;
        this.view = view;
    }
}
