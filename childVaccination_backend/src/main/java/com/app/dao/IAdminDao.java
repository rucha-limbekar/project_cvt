package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Admin;
@Repository
public interface IAdminDao extends JpaRepository<Admin, Integer>{
	Admin findByAdminName(String name); 

}
