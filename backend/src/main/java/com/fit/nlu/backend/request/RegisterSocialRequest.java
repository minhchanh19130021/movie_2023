package com.fit.nlu.backend.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

public class RegisterSocialRequest {
    @NotNull(message = "username is required")
    @JsonProperty("username")
    private String username;

    @NotNull(message = "email is required")
    @JsonProperty("email")
    private String email;

    @NotNull(message = "password is required")
    @JsonProperty("password")
    private String password;

    @JsonProperty("role")
    private Integer role;

    @JsonProperty("flagActive")
    private Integer flagActive;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public Integer getFlagActive() {
        return flagActive;
    }

    public void setFlagActive(Integer flagActive) {
        this.flagActive = flagActive;
    }
}
