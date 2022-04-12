package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="vaccine")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
public class Vaccine_Details implements Serializable{
	@Id
	@GeneratedValue
	private int vid;
	@NotEmpty(message = "Invalid vaccine name ")
	//@Length(max=45)
	@Column(length=45)
	private String vname;
	@NotEmpty(message = "Invalid description ")
	//@Length(max=200)
	@Column(length=200)
	private String description;
	@NotEmpty(message = "Invalid brand name ")
	@Length(max=45)
	@Column(length=45)
	private String brand;
	@Column(length=45)
	private String type;
	@Column
	private double price;
	
//	@ManyToOne
//	@JoinColumn(name="hid",nullable = false,updatable = false)
//	private Hospital hospital;
//	
	
	public Vaccine_Details(String vname,String description,String brand, String type, double price) {		 
		super();
		this.vname = vname;
		this.description = description;
		this.brand = brand;
		this.type = type;
		this.price = price;
	}
		

}
