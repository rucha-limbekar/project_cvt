package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Hospital;

public interface HospitalDao extends JpaRepository<Hospital, Integer>{
	@Query(value="CALL FIND_HOSPITAL_bY_LOGINID(:loginId );", nativeQuery = true)
	Hospital findHospital(@Param("loginId") Integer loginId);
	
//	@Modifying
//	@Query("update Hospital h set h.email=:email,h.address=:address,h.contactNo=:mobile where h.hid=:hid")
//	int updateHospital(String email, String address, long mobile, int hid);
	
	
}
