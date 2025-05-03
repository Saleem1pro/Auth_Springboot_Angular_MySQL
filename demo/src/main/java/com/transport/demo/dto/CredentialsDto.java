package com.transport.demo.dto;

//remember record are Immutable
//the file is just for receptions
public record CredentialsDto (String login, char[] password){
}
