package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="hospitalhistory")
public class HospitaltHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int newhid ;
	@Column
	private String newaddress ;
	@Column
	private String oldaddress;
	@Column
	private Long newcontactno ;
	@Column
	private Long oldcontactno ;
	@Column
	private LocalDate creation_date ;
	@Column
	private String newemail;
	@Column
	private String oldemail;
	@Column
	private String newhname;
	@Column
	private Long newpincode ;
	@Column
	private String newreg_no ;
	@Column
	private String action;
/*
 newhid int,
newaddress varchar(40),
oldaddress varchar(50),
newcontactno bigint,
oldcontactno bigint,
creation_date Date,
newemail varchar(40),
oldemail varchar(40),
newhname varchar(40),
newpincode bigint,
newreg_no varchar(40),
action varchar(15)
 */
}

