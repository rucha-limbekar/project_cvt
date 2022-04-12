package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateInformation {
	
	private String email;
	private String address;
	private long mobile;
	
	/*
	"email":"hari123@gmail.com",
	"address" : "Thane",
	"mobile" : 9874563210
	*/
}
