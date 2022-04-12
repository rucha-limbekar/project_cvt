package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.HospitaltHistory;


@Repository
public interface IHospitalHistoryDao extends JpaRepository<HospitaltHistory, Integer>{
	@Query("select h from HospitaltHistory h")
	public List<HospitaltHistory> getHospitalHistory();
}
