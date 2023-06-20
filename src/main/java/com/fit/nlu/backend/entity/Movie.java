package com.fit.nlu.backend.entity;

import com.fit.nlu.backend.enums.MovieStatus;
import com.fit.nlu.backend.enums.MovieType;
import javax.persistence.*;


import java.util.Date;
@Entity(name = "movie")
@Table
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "slug")
    private String slug;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "name")
    private String name;

    @Column(name = "origin_name")
    private String originName;

    @Column(name = "year")
    private Integer year;

    @Column(name = "country")
    private String country;

    @Column(name = "type")
    private MovieType type;

    @Column(name = "update_at")
    private Date updatedAt;

    @Column(name = "status")
    private MovieStatus status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOriginName() {
        return originName;
    }

    public void setOriginName(String originName) {
        this.originName = originName;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public MovieType getType() {
        return type;
    }

    public void setType(MovieType type) {
        this.type = type;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public MovieStatus getStatus() {
        return status;
    }

    public void setStatus(MovieStatus status) {
        this.status = status;
    }
}
