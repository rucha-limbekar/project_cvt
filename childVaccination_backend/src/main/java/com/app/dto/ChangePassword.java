package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePassword {
	private String username;
	private String newPassword;
	private String cnfPassword;
	
	/*
	 "username" : "shri",
	 " newPassword" :"shri",
	 "cnfPassword" : "shri123"
	 
	 */

}
