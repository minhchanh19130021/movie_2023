package com.fit.nlu.backend.response;

import com.fit.nlu.backend.entity.Movie;

import java.util.List;

public class MoviePageResponse {
    private List<Movie> content;
    private boolean last;
    private boolean first;
    private long totalElements;
    private int totalPages;
    private int size;

    private int currentPage;

    public List<Movie> getContent() {
        return content;
    }

    public void setContent(List<Movie> content) {
        this.content = content;
    }

    public boolean isLast() {
        return last;
    }

    public void setLast(boolean last) {
        this.last = last;
    }
    public boolean isFirst() {
        return first;
    }

    public void setFirst(boolean first) {
        this.first = first;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }
}
