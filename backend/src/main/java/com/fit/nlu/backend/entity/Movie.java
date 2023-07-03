package com.fit.nlu.backend.entity;

import com.fit.nlu.backend.enums.MovieStatus;
import com.fit.nlu.backend.enums.MovieType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


import java.util.Date;
@Entity(name = "movie")
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "slug")
    private String slug;

    @Column(name = "poster")
    private String poster;

    @Column(name = "name")
    private String name;

    @Column(name = "title")
    private String title;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "country")
    private String country;

    @Column(name = "type")
    private MovieType type;

    @Column(name = "status")
    private MovieStatus status;
    @Column(name = "inserted_date")
    private Date insertedDate;

    @Column(name = "updated_date")
    private Date updatedDate;



    public Movie(String slug, String poster, String name, String title, Date releaseDate, String country,
                 MovieType type, MovieStatus status) {
        this.slug = slug;
        this.poster = poster;
        this.name = name;
        this.title = title;
        this.releaseDate = releaseDate;
        this.country = country;
        this.type = type;
        this.status = status;
    }






}