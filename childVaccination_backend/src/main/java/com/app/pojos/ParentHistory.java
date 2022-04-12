package com.app.pojos;

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
@Table(name="parenthistory")
public class ParentHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int newpid;
	@Column
	private String newaddress;
	@Column
	private String oldaddress;
	@Column
	private Long newadhar_no ;
	@Column
	private String newemail;
	@Column
	private String oldemail ;
	@Column
	private String newfname ;
	@Column
	private String newlname ;
	@Column
	private Long newcontactno ;
	@Column
	private Long oldcontactno;
	@Column
	private String action;

}
