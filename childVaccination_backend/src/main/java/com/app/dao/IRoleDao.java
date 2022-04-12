package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Role;
import com.app.pojos.UserRole;

public interface IRoleDao extends JpaRepository<Role, Integer> {
	//Optional<Role> findByRname(String name);
	
}
