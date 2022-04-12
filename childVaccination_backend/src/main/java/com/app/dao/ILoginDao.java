package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Login;

public interface ILoginDao extends JpaRepository<Login, Integer>{
	Login findByUsernameAndPassword(String username,String passwiord);
	
	Login findByUsername(String username);
}
