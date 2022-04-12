package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="parent")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Parent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	@Column(name="firstName",length=45)
	@NotEmpty(message = "Invalid first name")
	//@Length(min=2)
	private String fname;
	@NotEmpty(message = "Invalid last name")
	//@Length(min=5)
	@Column(name="lastName",length=45)
	private String lname;
	@Column(length=25)
	private String email;
	@Column(name="mobileNo")
	private long mobile;
	@NotEmpty(message = "Invalid Address")
	//@Length(min=5)
	@Column
	private String address;
	//@Length(min=12,max=12)
	@Column
	private long adharNo;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "loginid")
	//@JsonProperty(access = Access.WRITE_ONLY)
	@JsonIgnore
	private Login loginDetails;
	
	
	@OneToMany(mappedBy = "parent" , fetch = FetchType.EAGER ,cascade = CascadeType.ALL) //MAPPED BY AT OWING SIDE	
	@JsonIgnoreProperties("parent")
	//@Fetch(value = FetchMode.SUBSELECT)
	@JsonManagedReference
	private List<Child> pChilds=new ArrayList<>();


	
	@CreationTimestamp
	private LocalDate creationDate;
	
	
	//as per gavin king suggestins add helper methods in collections relation
	public void addChild(Child child) {
		pChilds.add(child);
	}
	public void removeChild(Child child) {
		pChilds.remove(child);
	}
	public Parent(String fname, String lname, String email, long mobile, String address, long adharNo,Login login) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		this.adharNo = adharNo;
		this.loginDetails=login;
	}
	public Parent(String email, long mobile, String address) {
		super();
		this.email = email;
		this.mobile = mobile;
		this.address = address;
	}
	
	
	
		
}
