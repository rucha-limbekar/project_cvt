package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.EnumType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="role_table")
//Below three annotation are taken from lombook 
@Data  //Generates getters for all fields, a useful toString method, and hashCode and equals
@AllArgsConstructor
@NoArgsConstructor
//this is our pojo corresponds to role_table
public class Role {
	@Id
	private int roleId;
	@Column(length=20)
	private String rname;
	@Column(length=45)
	private String description;
	
	
}
