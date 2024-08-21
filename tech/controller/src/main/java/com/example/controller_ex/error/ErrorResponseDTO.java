package com.example.controller_ex.error;

import java.util.ArrayList;
import java.util.List;

public class ErrorResponse {
    private String error;
//    list cac String
    private List<String> detail = new ArrayList<>();

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public List<String> getDetail() {
        return detail;
    }

    public void setDetail(List<String> detail) {
        this.detail = detail;
    }
}
