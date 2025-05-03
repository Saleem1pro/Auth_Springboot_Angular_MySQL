package com.transport.demo.repositories;

import com.transport.demo.Entity.LineInfos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LineInfoRepository extends JpaRepository<LineInfos, Long> {
    Optional<LineInfos> findLineInfoById(Long id);
}
