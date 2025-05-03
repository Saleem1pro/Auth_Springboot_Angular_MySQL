package com.transport.demo.exceptions;

import org.springframework.http.HttpStatus;


public class AppException extends RuntimeException{
    private final HttpStatus httpstatus;
    public AppException(String message, HttpStatus httpStatus){
        super(message);
        this.httpstatus = httpStatus;
    }
    public HttpStatus getHttpStatus(){
        return httpstatus;
    }
}
