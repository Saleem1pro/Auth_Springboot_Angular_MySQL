package com.transport.demo.services;


import com.transport.demo.dto.ReclamationDTO;
import com.transport.demo.Entity.Reclamation;
import com.transport.demo.exceptions.NotFoundException;
import com.transport.demo.repositories.ReclamationRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReclamationService {
    private final ReclamationRepository repository;

    public ReclamationService(ReclamationRepository repository) {
        this.repository = repository;
    }

    // Add all missing methods
    public List<ReclamationDTO> getAll() {
        return repository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ReclamationDTO getById(Long id) {
        return toDTO(repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Reclamation not found")));
    }

    public ReclamationDTO create(ReclamationDTO dto) {
        Reclamation r = Reclamation.builder()
                .date(LocalDateTime.now())
                .fullName(dto.getFullName())
                .CIN(dto.getCIN())
                .phoneNumber(dto.getPhoneNumber())
                .ticketNumber(dto.getTicketNumber())
                .state(dto.getState())
                .description(dto.getDescription())
                .build();
        return toDTO(repository.save(r));
    }

    public ReclamationDTO updateState(Long id, String newState) {
        Reclamation r = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Reclamation not found"));
        r.setState(newState);
        return toDTO(repository.save(r));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private ReclamationDTO toDTO(Reclamation rec) {
        return ReclamationDTO.builder()
                .id(rec.getId())
                .date(LocalDate.from(rec.getDate()))
                .fullName(rec.getFullName())
                .CIN(rec.getCIN())
                .phoneNumber(rec.getPhoneNumber())
                .ticketNumber(rec.getTicketNumber())
                .state(rec.getState())
                .description(rec.getDescription())
                .build();
    }
}