package com.fit.nlu.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "episode")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Episode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "title")
    private String title;

    @Column(name = "episode_number")
    private Integer episodeNumber;

    @Column(name = "duration")
    private String duration;

    @Column(name = "link")
    private String link;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;

    public Episode(Integer movieId, String title, Integer episodeNumber, String duration, String link) {
        this.movieId = movieId;
        this.title = title;
        this.episodeNumber = episodeNumber;
        this.duration = duration;
        this.link = link;
    }
}
