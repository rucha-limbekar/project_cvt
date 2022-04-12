package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChangePassword;
import com.app.pojos.Hospital;
import com.app.pojos.HospitaltHistory;
import com.app.pojos.Parent;
import com.app.pojos.ParentHistory;
import com.app.service.AdminService;
import com.app.service.HospitalService;
import com.app.service.ParentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private ParentService parentService;
	
	@Autowired
	private HospitalService hospitalService;
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/getallparent")
	public List<Parent> getAllParent(){
		return parentService.getAllParent();
	}
	
	@GetMapping("/getallhospital")
	public List<Hospital> getAllHospital(){
		return hospitalService.getAllHospital();
	}
	

	@GetMapping("/getparenthistory")
	public List<ParentHistory>getParentHistory(){
		return parentService.getParentHistory();
	}
	
	@GetMapping("/gethospitalhistory")
	public List<HospitaltHistory>getHospitalHistory(){
		return hospitalService.getHospitalHistory();
	}
	
	//tested
	@DeleteMapping("/deleteParent/{pid}")
	public void deleteParent(@PathVariable int pid) {
		parentService.deleteParent(pid);
	}
	//tested
	@DeleteMapping("/deleteHospital/{hid}")
	public void deleteHospital(@PathVariable int hid) {
		System.out.println("hid : "+hid);
		hospitalService.deleteHospital(hid);
	}
	
	@PatchMapping("/changepassword")
	public void changePassword(@RequestBody ChangePassword obj) {
		System.out.println(obj.toString());
		adminService.changePassword(obj);
	}

}
