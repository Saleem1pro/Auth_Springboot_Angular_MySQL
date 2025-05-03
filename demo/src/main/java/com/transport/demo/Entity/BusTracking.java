package com.transport.demo.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "bus_tracking")
public class BusTracking {


    @Column(name = "bus_state")
    private int busState ;

    @Column(name = "bus_on")
    private int busOn ;

    @Column(name = "bus_off")
    private int busOff ;

    @Column(name = "bus_on_time")
    private int busOnTime;

    @Column(name = "bus_late")
    private int busLate;


    @Column(name = "bus_on_accident")
    private int busOnAccident;


    @Column(name = "change_of_line")
    private int changeofLine;

    @Column(name = "date")
    @JsonFormat(shape = JsonFormat.Shape.STRING) // Format ISO : "2023-12-25T15:30:00"
    private LocalDateTime Date;

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Constructors, getters, setters

    public int getBusState() { return busState; }
    public int getBusOn() { return busOn; }
    public int getBusOff() { return busOff; }
    public int getBusOnTime() { return busOnTime; }
    public int getBusLate() { return busLate; }
    public int getBusOnAccident() { return busOnAccident; }
    public int getChangeLine() { return changeofLine; }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}