package com.fit.nlu.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "orders")
@Builder
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "inserted_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date insertedDate;

    @Column(name = "updated_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedDate;

    @Column(name = "expiration_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date expirationDate;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "order_id")
    private String orderId;
}
