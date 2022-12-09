package com.WooJoo09.service;

import com.WooJoo09.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@ToString
@Service
@RequiredArgsConstructor
public class TradeService {
    private final TradeRepository tradeRepository;

    public Page<?> tradeSearchSelect(String target, int page, int size) {
        return tradeRepository.findTradeByProduct("%" + target + "%", PageRequest.of(page, size));
    }

    public Page<?> tradeSearchSelectLogin(String target, int memberNum, int page, int size) {
        return tradeRepository.findTradeByProductLogin("%" + target + "%", memberNum, PageRequest.of(page, size));
    }

}