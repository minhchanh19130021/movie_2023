package com.fit.nlu.backend.entity;

import com.fit.nlu.backend.enums.MovieStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "movie_actor")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieActor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "actor_id")
    private Integer actorId;

    @Column(name = "status")
    private MovieStatus status;

    @Column(name = "inserted_date")
    private Date insertedDate;

    @Column(name = "updated_date")
    private Date updatedDate;

    public MovieActor(Integer movieId, Integer actorId, MovieStatus status) {
        this.movieId = movieId;
        this.actorId = actorId;
        this.status = status;
    }
}
