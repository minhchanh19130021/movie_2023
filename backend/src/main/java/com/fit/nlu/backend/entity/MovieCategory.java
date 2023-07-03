package com.fit.nlu.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "movie_category")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MovieCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "inserted_date")
    private Date insertedDate;

    @Column(name = "updated_date")
    private Date updatedDate;

    public MovieCategory(Integer movieId, Integer categoryId) {
        this.movieId = movieId;
        this.categoryId = categoryId;
    }
}
