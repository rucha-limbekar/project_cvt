package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterChild {
	
	private String fname;
	private String lname;
	private LocalDate dob;
	private int hid;
	
	/*
	"fname" :"sai",
	"lname" :"mogal",
	"dob" :"2003-05-11",
	"hid" : 1
	*/
}
