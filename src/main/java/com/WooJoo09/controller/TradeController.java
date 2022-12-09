package com.WooJoo09.controller;

import com.WooJoo09.service.TradeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping(value="/developerkirby")
public class TradeController {
    private TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @PostMapping("/searchselect")
    public ResponseEntity<List<?>> findMember(@RequestBody Map<String, String> Data) {
        String target = Data.get("target");
        return ResponseEntity.ok().body(tradeService.tradeSearchSelect(target));
    }
}
