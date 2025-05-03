package com.transport.demo.controllers;

import com.transport.demo.dto.ReclamationDTO;
import com.transport.demo.services.ReclamationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reclamation")
@CrossOrigin(origins = "*")
public class ReclamationController {

    private final ReclamationService service;

    public ReclamationController(ReclamationService service) {
        this.service = service;
    }

    @GetMapping
    public List<ReclamationDTO> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ReclamationDTO getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public ReclamationDTO create(@RequestBody ReclamationDTO dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}/state")
    public ReclamationDTO updateState(@PathVariable Long id, @RequestParam String state) {
        return service.updateState(id, state);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}



