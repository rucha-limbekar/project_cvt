package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestLogin {
	private String username;
	private String password;
	
	/*
	"username":"shri",
	"password":"shri"
	*/
}
