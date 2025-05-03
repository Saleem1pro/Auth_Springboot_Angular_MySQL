package com.transport.demo.repositories;

import com.transport.demo.Entity.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {
    Optional<Reclamation> findReclamationById(Long id);
}
