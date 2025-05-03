package com.transport.demo.controllers; // (fix typo: controllers, not controllers)

import com.transport.demo.Entity.BusTracking;
import com.transport.demo.services.BusTrackingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus-tracking")
@CrossOrigin // Autoriser CORS

public class BusTrackingController {

    private final BusTrackingService service;

    public BusTrackingController(BusTrackingService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<BusTracking>> getAllBuses() {
        return ResponseEntity.ok(service.getStats());
    }
    //the methode of getAllBuses works fine, and better than the one below showBusStats for getting all the buses
    /***
    //@GetMapping
    public BusTracking showBusStats() {
        return (BusTracking) service.getStats();
    }
    */
    @PostMapping
    public BusTracking createBusRecord(@RequestBody BusTracking bus){
        return service.createBus(bus);
    }
}
