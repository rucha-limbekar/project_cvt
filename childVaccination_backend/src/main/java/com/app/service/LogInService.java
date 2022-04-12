package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.HospitalDao;
import com.app.dao.IAdminDao;
import com.app.dao.IChildDao;
import com.app.dao.ILoginDao;
import com.app.dao.IParentDao;
import com.app.dto.ResponseParentLogin;
import com.app.pojos.Child;
import com.app.pojos.Login;
import com.app.pojos.Parent;

@Service
@Transactional
public class LogInService {

	@Autowired
	private ILoginDao loginDao;
	@Autowired
	private IParentDao parentDao;
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IAdminDao adminDao;
	@Autowired
	private IChildDao childDao;

	public Object ValidateUser(String username, String passwiord) {
		Login login = loginDao.findByUsernameAndPassword(username, passwiord);

		if (login.getRole().getRoleId() == 101) {
			//Parent p= parentDao.findParent(login.getLoginId());
			int pid=parentDao.findParentId(login.getLoginId());
			return parentDao.findParent1(pid);
			
//			Parent p=parentDao.findParent(login.getLoginId());
//			List<Child> childs=childDao.findChildByParent(p.getPid());
//			return new ResponseParentLogin(p,childs);
		}
		else if(login.getRole().getRoleId() == 102) {
			return hospitalDao.findHospital(login.getLoginId());
		}
		else if(login.getRole().getRoleId() == 103) {
			//System.out.println(adminDao.findByAdminName("admin"));
			return adminDao.findByAdminName("admin");
		}
			
		return null;

	}

}
