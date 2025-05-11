package com.transport.demo.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Getter
@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "line_infos")
public class LineInfos {

    @Column(name = "line_number")
    private String lineNumber ;

    @Column(name = "number_of_buses")
    private int numberOfBuses ;

    @Column(name = "working")
    private int working ;

    @Column(name = "not_working")
    private int notWorking ;

    @Column(name = "date")
    @JsonFormat(shape = JsonFormat.Shape.STRING) // Format ISO : "2023-12-25T15:30:00"
    private LocalDateTime Date;
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void setId(Long id) {
        this.id = id;
    }

}