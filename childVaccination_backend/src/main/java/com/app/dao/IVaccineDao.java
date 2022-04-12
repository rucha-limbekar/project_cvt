package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Vaccine_Details;

@Repository
public interface IVaccineDao extends JpaRepository<Vaccine_Details, Integer>{

}
