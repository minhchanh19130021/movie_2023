package com.fit.nlu.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "movie_director")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieDirector {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "director_id")
    private Integer directorId;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;
    public MovieDirector(Integer movieId, Integer directorId) {
        this.movieId = movieId;
        this.directorId = directorId;
    }
}
