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

    public Page<?> tradeSelectOption(String option, int page, int size) {
        return tradeRepository.findTradeOption(option, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionLogin(String option, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionLogin(option, memberNum, PageRequest.of(page, size));
    }

    public Page<?> tradeSelectOptionCity(String option, String city, int page, int size) {
        return tradeRepository.findTradeOptionCity(option, city, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionCityLogin(String option, String city, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionCityLogin(option, city, memberNum, PageRequest.of(page, size));
    }

    public Page<?> tradeSelectOptionTown(String option, String town, int page, int size) {
        return tradeRepository.findTradeOptionTown(option, town, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionTownLogin(String option, String town, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionTownLogin(option, town, memberNum, PageRequest.of(page, size));
    }

}