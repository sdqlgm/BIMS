package com.dsg.sims.model.param;

import java.util.Date;

/**
 * 搜索下拉框查询参数类
 * @author jianpeng
 * @createTime 2016年8月1日 上午9:47:17
 */
public class QueryConditionData {

	/**
	 * 当前页
	 */
	private int currentPage;

	/**
	 * 当前页显示记录条数
	 */
	private int pageSize;

	/**
	 * 学生ID
	 */
	private String bookId;
	/**
	 * 学生姓名
	 */
	private String name;
	/**
	 * 年级
	 */
	private String grade;
	/**
	 * 外键，学院ID
	 */
	private String schoolId;
	
	/**
	 * 班级ID
	 */
	private String classesId;
	
	
	public String getName() {
		return name;
	}
	public String getGrade() {
		return grade;
	}
	public String getSchoolId() {
		return schoolId;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public void setSchoolId(String schoolId) {
		this.schoolId = schoolId;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public String getClassesId() {
		return classesId;
	}
	public void setClassesId(String classesId) {
		this.classesId = classesId;
	}
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

}
