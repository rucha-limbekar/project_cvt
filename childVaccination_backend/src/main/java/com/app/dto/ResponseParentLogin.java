package com.app.dto;

import java.util.List;

import com.app.pojos.Child;
import com.app.pojos.Parent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseParentLogin {
	
	private Parent parent; 
	private List<Child> childs;
}
