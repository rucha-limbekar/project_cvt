package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RequestLogin;
import com.app.service.LogInService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class LoginController {
	
	@Autowired
	private LogInService loginService;
	
	@PostMapping("/login")
	public Object authenticateUser(@RequestBody RequestLogin credential) {
		
		return loginService.ValidateUser(credential.getUsername(), credential.getPassword());
		//parent admin hospital
	}

}
