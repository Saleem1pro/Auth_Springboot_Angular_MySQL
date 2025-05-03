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
    private String clientInfo;
    private String state;
    private String title;
    private String description;
    private int user_id;
}