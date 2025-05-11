package com.transport.demo.Entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime date;
    @Column(name = "clientInfo")
    private String fullName;
    private String CIN;
    private String phoneNumber;
    private String ticketNumber;
    private String state;
    private String description;
    @ManyToOne
    @JoinColumn(name = "user_id") // Nom de la colonne en base
    private User user;
}