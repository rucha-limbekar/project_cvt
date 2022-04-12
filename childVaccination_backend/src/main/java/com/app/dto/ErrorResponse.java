package com.app.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
	
	private String message;
	private String errorDetails;
	private LocalDateTime time=LocalDateTime.now();
	
	public ErrorResponse(String message,String errorDetails) {
		this.message=message;
		this.errorDetails=errorDetails;
	}

}
