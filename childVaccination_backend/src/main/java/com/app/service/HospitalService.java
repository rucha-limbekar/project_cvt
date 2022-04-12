package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalDao;
import com.app.dao.IHospitalHistoryDao;
import com.app.dao.ILoginDao;
import com.app.dao.IRoleDao;
import com.app.dto.RegisterHospital;
import com.app.dto.UpdateInformation;
import com.app.pojos.Child;
import com.app.pojos.Hospital;
import com.app.pojos.HospitaltHistory;
import com.app.pojos.Login;
import com.app.pojos.Parent;
import com.app.pojos.Role;
import com.app.pojos.UserRole;
import com.app.pojos.Vaccine_Details;

@Service
@Transactional
public class HospitalService {
	
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IRoleDao roleDao;
	@Autowired
	private ILoginDao loginDao;
	@Autowired
	private IHospitalHistoryDao hospitalHistoryDao;
	
	
	
	public Hospital registerHospital(RegisterHospital hospital) {
		Role role=roleDao.findById(102).orElseThrow(()->new ResourceNotFoundException("Role not found !!!"));
		
		Login hlogin= loginDao.save(new Login(hospital.getUsername(),hospital.getPassword(),role));
		//System.out.println(hospital);
		return hospitalDao.save(new Hospital(hospital.getHname(),hospital.getEmail(),hospital.getContactNo(),hospital.getAddress(),hospital.getRegNo(),hlogin,hospital.getPincode()));
//		
	}
	
	public List<Hospital> getAllHospital(){
		return hospitalDao.findAll();
	}

	public String updateHospitalDetails(UpdateInformation hospital, int hid) {
		Hospital h=hospitalDao.findById(hid).orElseThrow(()->new ResourceNotFoundException("hospital not found"));
		h.setAddress(hospital.getAddress());
		h.setEmail(hospital.getEmail());
		h.setContactNo(hospital.getMobile());
		//hospitalDao.updateHospital(hospital.getEmail(),hospital.getAddress(),hospital.getMobile(),hid);
		hospitalDao.save(h);
		return "Updated successFully";
	}
	
	//****************************doubt***********************repetative data found
	public List<HospitaltHistory> getHospitalHistory() {
		// TODO Auto-generated method stub
		List<HospitaltHistory> l=hospitalHistoryDao.getHospitalHistory();
		l.forEach(System.out::println);
		return l;
	}

	public void deleteHospital(int hid) {
		hospitalDao.deleteById(hid);
		
	}
	
	public List<Child> getAllChild(int hid){
		Hospital h=hospitalDao.findById(hid).orElseThrow(()->new ResourceNotFoundException("Parennt on "+hid+" not found"));
		 return h.getHChilds();
	}

	public List<Vaccine_Details> getallVaccines(int hid) {
		Hospital h=hospitalDao.findById(hid).orElseThrow(()->new ResourceNotFoundException("Parennt on "+hid+" not found"));
		return h.getVaccines();
	}

	public void addVaccine(int hid,Vaccine_Details vaccine) {
		System.out.println("hid   :  "+hid);
		Hospital h=hospitalDao.findById(hid)
				.orElseThrow(()->new ResourceNotFoundException("Parennt on "+hid+" not found"));
		h.addVaccine(vaccine);
	}

}
