package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HospitalHistory {
	private int hid;
	private String hname;
	private String regNo;
	private String oldEmail;
	private String newEmail;
	private String oldAddress;
	private String newAddress;
	private long oldContact;
	private long newContact;
}
