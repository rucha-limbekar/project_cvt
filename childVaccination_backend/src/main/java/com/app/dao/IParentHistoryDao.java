package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.ParentHistory;
@Repository
public interface IParentHistoryDao extends JpaRepository<ParentHistory, Integer>{

}
