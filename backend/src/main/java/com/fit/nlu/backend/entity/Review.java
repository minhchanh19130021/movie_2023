package com.fit.nlu.backend.entity;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;

@Entity(name = "review")
@Table
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

//    @Column(name = "user_id")
//    private Integer userId;

    @Column(name = "movie_id")
    private Integer movieId;

    @Column(name = "rating")
    @Min(1)
    @Max(5)
    private Integer rating;

    @Column(name = "review_text")
    @NotNull
    @NotBlank
    @NotEmpty
    private String reviewText;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;


    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    public Integer getUserId() {
//        return userId;
//    }

//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }

    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public Date getInsertedDate() {
        return insertedDate;
    }

    public void setInsertedDate(Date insertedDate) {
        this.insertedDate = insertedDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

}
