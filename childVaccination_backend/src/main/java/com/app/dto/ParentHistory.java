package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParentHistory {
	private int pid;
	private String fname;
	private String lname;
	private String oldEmail;
	private String newEmail;
	private String oldAddress;
	private String newAddress;
	private long oldContact;
	private long newContact;
	

}
