package com.transport.demo.repositories;

import com.transport.demo.Entity.BusTracking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BusTrackingRepository  extends JpaRepository<BusTracking, Long> {

    Optional<BusTracking> findBusTrackingById(Long id);
}
