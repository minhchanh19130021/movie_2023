package com.fit.nlu.backend.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddOrderRequest {
    @JsonProperty("orderId")
    private String orderId;

    @JsonProperty("userId")
    private int userId;
}
