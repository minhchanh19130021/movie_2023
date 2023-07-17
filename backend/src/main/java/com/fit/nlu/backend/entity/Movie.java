package com.fit.nlu.backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.OptimisticLockType;
import org.hibernate.annotations.OptimisticLocking;

import javax.persistence.*;


import java.util.Collection;
import java.util.Date;

@Entity(name = "movie")
@Builder
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@OptimisticLocking(type = OptimisticLockType.VERSION)
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

    @Column(name = "sub_name")
    private String subName;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "type")
    private String type;

    @Column(name = "status")
    private String status;

    @Column(name = "inserted_date")
    private Date insertedDate;

    @Column(name = "updated_date")
    private Date updatedDate;

    @Column(name = "review_number")
    @Builder.Default
    private int reviewNumber = 0;

    @Column(name = "comment_number")
    @Builder.Default
    private int commentNumber = 0;

    @Column(name = "view_number")
    @Builder.Default
    private int viewNumber = 0;

    @Version
    private Long version;

    @OneToMany(mappedBy = "movie")
    @JsonManagedReference
    private Collection<Episode> episodes;
}