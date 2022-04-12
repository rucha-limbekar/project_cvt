package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterHospital {
	private String hname;	
	private String email;
	private long contactNo;
	private String address;
	private String regNo;
	private String username;
	private String password;
	private int pincode;
	/*
	 "hname" :"ashwini hospital",
	 "email" :"aswini@gmail.com",
	 "contactNo":"5635242800",
	 "address":"shivaji nagar,nanded",
	 "regNo":"9f652h242s",
	 "pincode":431700,
	 "username":"ashwini",
	 "password":"ashwini"
	 */
	
}
