package com.transport.demo.services;

import com.transport.demo.Entity.BusTracking;
import com.transport.demo.repositories.BusTrackingRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusTrackingService {

    private final BusTrackingRepository busTrackingRepository;

    public BusTrackingService(BusTrackingRepository busTrackingRepository) {
        this.busTrackingRepository = busTrackingRepository;
    }
    /**
    public BusTracking getStat() {
        return new BusTracking();
    }
    */
    public List<BusTracking> getStats() {
        return busTrackingRepository.findAll(); // Récupère tout depuis la base
    }
    public BusTracking createBus(BusTracking bus) {
        // Réinitialiser l'ID pour forcer une création
        bus.setId(null);

        try {
            return busTrackingRepository.save(bus);
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Erreur de duplication : Ce bus existe déjà");
        }
    }
    }
