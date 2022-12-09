package com.WooJoo09.service;

import com.WooJoo09.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@ToString
@Service
@RequiredArgsConstructor
public class TradeService {
    private final TradeRepository tradeRepository;

    public List<?> tradeSearchSelect(String target) {
        return tradeRepository.findTradeByProduct("%" + target + "%");
    }

}