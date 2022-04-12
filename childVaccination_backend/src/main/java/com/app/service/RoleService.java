package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IRoleDao;
import com.app.pojos.Role;
@Service
@Transactional
public class RoleService implements IRoleService{
	
	@Autowired
	private IRoleDao roleDao;
	
	@Override
	public Role getSpecificRole(int id) {
		return roleDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Role not found !!!"));
	}

}
