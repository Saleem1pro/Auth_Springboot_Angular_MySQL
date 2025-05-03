package com.transport.demo.controllers;

import com.transport.demo.Entity.LineInfos;
import com.transport.demo.services.LineInfoService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lineinfos")
@CrossOrigin // Authorise CORS
public class LineInfoController {

    private final LineInfoService service;

    public LineInfoController(LineInfoService service) {
        this.service = service;
    }

    @GetMapping
    /*
    public String showAllLines() {
         return service.getAllLines();
    }
    */
    public ResponseEntity<List<LineInfos>> getAllLines() {
        return ResponseEntity.ok(service.getAllLines());
    }

    @PostMapping
    public LineInfos createLineInfoRecord(@RequestBody LineInfos lineInfos){
        return service.createLine(lineInfos);
    }
}
