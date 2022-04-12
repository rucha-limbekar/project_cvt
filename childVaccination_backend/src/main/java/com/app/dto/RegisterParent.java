package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterParent {
	private String fname;
	private String lname;
	private String email;
	private long contactNo;
	private String address;
	private long adharNo;
	private String username;
	private String password;
	
	/*
	 "fname":"shri",
	    "lname":"shri",
	    "email":"shivam@gmail.com",
	    "contactNo":7841892752,
	    "address":"nanded",
	    "adharNo":803435099394,
	    "username":"shri",
	    "password":"shri"
	   */
	
}
