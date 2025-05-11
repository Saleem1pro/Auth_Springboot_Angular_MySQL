package com.transport.demo.dto;

import lombok.*;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReclamationDTO {
    private Long id;
    private LocalDate date;
    private String fullName;
    private String CIN;
    private String phoneNumber;
    private String ticketNumber;
    private String state;
    private String title;
    private String description;
    private int user_id;
}