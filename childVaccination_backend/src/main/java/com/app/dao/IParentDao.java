package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Parent;
@Repository
public interface IParentDao extends JpaRepository<Parent, Integer>{
	
	@Query(value = "CALL FIND_PARENT_bY_LOGINID(:loginId );", nativeQuery = true)
	Parent findParent(@Param("loginId") Integer loginId);
	
	
	@Query("select p from Parent p left outer join fetch p.pChilds where p.pid=:pid")
	Parent findParent1(@Param("pid") Integer pid);
	
	
	
	@Query(value = "CALL FIND_PARENTID(:loginId );", nativeQuery = true)
	int findParentId(@Param("loginId") Integer loginId);
	
	
	@Modifying
	@Query("update Parent p set p.email=:email,p.address=:address,p.mobile=:mobile where p.pid=:pid")
	int updateParent(@Param("email")String email,@Param("address")String address,@Param("mobile")long mobile,@Param("pid")int pid);
	
}
