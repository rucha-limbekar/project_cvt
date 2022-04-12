package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Child;
@Repository
public interface IChildDao extends JpaRepository<Child, Integer>{
	@Query(value="CALL FIND_CHILD_bY_PARENTID(:pid);",nativeQuery = true)
	List<Child> findChildByParent(@Param("pid") Integer pid);
	

}
