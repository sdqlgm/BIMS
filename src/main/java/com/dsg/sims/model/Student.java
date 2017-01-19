package com.dsg.sims.model;

import java.util.Date;

public class Student {
	private String bookId;
	private String name;
	private String author;
	private String isbn;
	private String publishHouse;
	private Date publishTime;
	private String buyLink;
	private String classesId;
	private String schoolId;

	public String getBookId() {
		return bookId;
	}

	public String getName() {
		return name;
	}

	public String getAuthor() {
		return author;
	}

	public String getIsbn() {
		return isbn;
	}

	public String getPublishHouse() {
		return publishHouse;
	}

	public Date getPublishTime() {
		return publishTime;
	}

	public String getBuyLink() {
		return buyLink;
	}


	public String getSchoolId() {
		return schoolId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public void setPublishHouse(String publishHouse) {
		this.publishHouse = publishHouse;
	}

	public void setPublishTime(Date publishTime) {
		this.publishTime = publishTime;
	}

	public void setBuyLink(String buyLink) {
		this.buyLink = buyLink;
	}


	public void setSchoolId(String schoolId) {
		this.schoolId = schoolId;
	}

	public String getClassesId() {
		return classesId;
	}

	public void setClassesId(String classesId) {
		this.classesId = classesId;
	}
}
