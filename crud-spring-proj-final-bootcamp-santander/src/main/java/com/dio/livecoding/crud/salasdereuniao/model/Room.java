package com.dio.livecoding.crud.salasdereuniao.model;

import org.aspectj.lang.annotation.After;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.FutureOrPresent;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "meetingroom")
public class Room {

  private long id;
  private String name;
  @DateTimeFormat(pattern = "dd/MM/yyyy")
  private LocalDate date;
  private LocalTime startHour;
  @FutureOrPresent()
  private LocalTime endHour;

  public Room(){

  }

  public Room(long id, String name, LocalDate date, LocalTime startHour, LocalTime endHour) {

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    String dataFormatada = date.format(formatter);
    LocalDate dataAjustada = LocalDate.parse(dataFormatada);

    this.id = id;
    this.name = name;
    this.date = dataAjustada;
    this.startHour = startHour;
    this.endHour = endHour;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  @Column(name = "name", nullable = false)
  public String getName() {
    return name;
  }

  @DateTimeFormat(pattern = "dd/MM/yyyy")
  public void setName(String name) {
    this.name = name;
  }

  @Column(name = "date", nullable = false)
  @DateTimeFormat(pattern = "dd/MM/yyyy")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  @Column(name = "startHour", nullable = false)
  public LocalTime getStartHour() {
    return startHour;
  }

  public void setStartHour(LocalTime startHour) {
    this.startHour = startHour;
  }

  @Column(name = "endHour", nullable = false)
  public LocalTime getEndHour() {
    return endHour;
  }

  public void setEndHour(LocalTime endHour) {
    this.endHour = endHour;
  }

  @Override
  public String toString() {
    return "Room [id=" + id + ", name=" + name + ", startHour=" + startHour + ", endHour=" + endHour
      + "]";
  }

}
