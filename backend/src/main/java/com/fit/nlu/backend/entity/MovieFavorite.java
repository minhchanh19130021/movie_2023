package com.fit.nlu.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity(name = "movie_favorite")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieFavorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;

    public MovieFavorite(Integer movieId, Integer userId) {
        this.movieId = movieId;
        this.userId = userId;
    }
}
