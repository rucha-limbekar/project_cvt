package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IChildDao;
import com.app.pojos.Child;
import com.app.pojos.Status;
@Service
@Transactional
public class ChildService {
	
	@Autowired 
	private IChildDao childDao;
	
	public List<Child> getAllChild_asPer_Parent(int pid){
		return childDao.findChildByParent(pid);
	}
	public void updateStatus(int cid) {
		// TODO Auto-generated method stub
		Child c= childDao.findById(cid).orElseThrow(()->new ResourceNotFoundException("child not found"));	
		c.setStatus(Status.VACCINATED);
		childDao.save(c);
		
	}
	public Child getChild(int cid) {
		
		return childDao.findById(cid).orElseThrow(()->new ResourceNotFoundException("child not found"));
	}

}
