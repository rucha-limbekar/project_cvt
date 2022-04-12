package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RegisterChild;
import com.app.dto.RegisterParent;
import com.app.dto.UpdateInformation;
import com.app.pojos.Child;
import com.app.pojos.Hospital;
import com.app.pojos.Parent;
import com.app.pojos.Vaccine_Details;
import com.app.service.ChildService;
import com.app.service.HospitalService;
import com.app.service.ParentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/parent")
public class ParentController {
	
	@Autowired
	private ParentService parentService;
	
	@Autowired
	private HospitalService hospitalService;
	
	@Autowired
	private ChildService childService;
	
	
	
	
	@PostMapping("/registerParent")
	public Parent addParent(@RequestBody RegisterParent regP) {
		
		return parentService.registerParent(regP);
	}
	
	@GetMapping("/getallchilds/{pid}")
	public List<Child> getAllChilds(@PathVariable("pid") int pid){
		return parentService.getAllChild(pid);
		
	}
	
	@GetMapping("/getallvaccines")
	public List<Vaccine_Details> getAllVaccines(){
		return parentService.getAllVaccines();
	}
	
	@GetMapping("/addchild")
	public List<Hospital> addChild() {
		return hospitalService.getAllHospital();
	}
	
	
	@PostMapping("/addchild/{pid}")
	public void addChild(@RequestBody RegisterChild child,@PathVariable("pid") int pid ) {
		System.out.println("pid : "+pid+"\n Child : "+child);
		
		parentService.addChildDetails(child,pid);
	}
	
	@PatchMapping("/updateparent/{pid}")
	public String updateParent(@RequestBody UpdateInformation p,@PathVariable("pid") int pid) {
		
		return parentService.updateParentDetails(p,pid);
	}
	
	@GetMapping("/getchild/{cid}")
	public Child getChild(@PathVariable("cid") int cid) {	
		System.out.println("cid   : "+cid);
		return childService.getChild(cid);
	}
	

}
