package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalDao;
import com.app.dao.IChildDao;
import com.app.dao.ILoginDao;
import com.app.dao.IParentDao;
import com.app.dao.IParentHistoryDao;
import com.app.dao.IRoleDao;
import com.app.dao.IVaccineDao;

import com.app.dto.RegisterChild;
import com.app.dto.RegisterParent;
import com.app.dto.UpdateInformation;
import com.app.pojos.Child;
import com.app.pojos.Hospital;
import com.app.pojos.Login;
import com.app.pojos.Parent;
import com.app.pojos.ParentHistory;
import com.app.pojos.Role;
import com.app.pojos.Status;
import com.app.pojos.Vaccine_Details;

@Service
@Transactional
public class ParentService {
	
	@Autowired
	private IParentDao parentDao;
	
	@Autowired
	private ILoginDao loginDao;
	@Autowired
	private IRoleDao roleDao;
	@Autowired
	private IVaccineDao vaccineDao;
	
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IChildDao childDao;
	@Autowired
	private IParentHistoryDao parentHistoryDao;
	
	
	public Parent registerParent(RegisterParent regP) {
		//System.out.println(regP);
		Role role = roleDao.findById(101).orElseThrow(()->new ResourceNotFoundException("Role not found !!!"));/*roleService.getSpecificRole(101);*/
				
		//System.out.println(role);
		Login plogin=loginDao.save(new Login(regP.getUsername(),regP.getPassword(),role));
		return parentDao.save(new Parent(regP.getFname(),regP.getLname(),regP.getEmail(),regP.getContactNo(),regP.getAddress(),regP.getAdharNo(),plogin));
	}
	
	public List<Vaccine_Details> getAllVaccines(){
		return vaccineDao.findAll();
	}

	public void addChildDetails( RegisterChild child,int pid) {
		Parent p=parentDao.findById(pid).orElseThrow(()->new ResourceNotFoundException("parent not found"));
		Hospital hospital=hospitalDao.findById(child.getHid()).orElseThrow(()->new ResourceNotFoundException("Hospital not found"));
		//System.out.println(hospital);
		Child child1=childDao.save(new Child(child.getFname(),child.getLname(),child.getDob(),Status.PENDING,hospital,p));
		p.addChild(child1);
		parentDao.save(p);
	}

	public String updateParentDetails(UpdateInformation p, int pid) {
		Parent p1=parentDao.findById(pid).orElseThrow(()->new ResourceNotFoundException("parent not found"));
		p1.setAddress( p.getAddress());
		p1.setEmail(p.getEmail());
		p1.setMobile( p.getMobile());
		parentDao.save(p1);
		
		return "Updated successFully";
	}

	public List<Parent> getAllParent() {
		// TODO Auto-generated method stub
		return parentDao.findAll();
		
	}

	public List<ParentHistory> getParentHistory() {
		// TODO Auto-generated method stub
		return parentHistoryDao.findAll();
	}

	public void deleteParent(int pid) {
		parentDao.deleteById(pid);
		
	}
	
	public List<Child> getAllChild(int pid){
		Parent p=parentDao.findById(pid).orElseThrow(()->new ResourceNotFoundException("Parennt on "+pid+" not found"));
		 return p.getPChilds();
	}

	
	
}
