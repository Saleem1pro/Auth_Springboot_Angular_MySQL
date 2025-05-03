package com.transport.demo.services;

import com.transport.demo.Entity.LineInfos;
import com.transport.demo.repositories.LineInfoRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LineInfoService {

    private final LineInfoRepository lineInfosRepository ;

    public LineInfoService(LineInfoRepository lineInfosRepository) {
        this.lineInfosRepository = lineInfosRepository;
    }
    public List<LineInfos> getAllLines() {

        return lineInfosRepository.findAll();
    }
    public LineInfos createLine(LineInfos lineInfos) {
        // Reinitialise l'ID pour forcer une création
        lineInfos.setId(null);

        try {
            return lineInfosRepository.save(lineInfos);
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Erreur de duplication : Ce bus existe déjà");
        }
    }

}

