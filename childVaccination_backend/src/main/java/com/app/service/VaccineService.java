package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IVaccineDao;
import com.app.pojos.Vaccine_Details;

@Service
@Transactional
public class VaccineService {
	
	@Autowired
	private IVaccineDao vaccineDao;
	
	public Vaccine_Details addvaccine(Vaccine_Details vaccine) {
		return vaccineDao.save(vaccine);
	}

	public Vaccine_Details getvaccine(int vid) {
		
		return vaccineDao.findById(vid)
				.orElseThrow(()->new ResourceNotFoundException("Vaccine on "+vid+" not found"));
	}

	public void updateVaccine(Vaccine_Details vaccine) {
		Vaccine_Details v=vaccineDao.findById(vaccine.getVid())
		.orElseThrow(()->new ResourceNotFoundException("Vaccine on "+vaccine.getVid()+" not found"));
		v.setBrand(vaccine.getBrand());
		v.setDescription(vaccine.getDescription());
		v.setPrice(vaccine.getPrice());
		v.setVname(vaccine.getVname());
		v.setType(vaccine.getType());
	}

}
