package com.WooJoo09.service;

import com.WooJoo09.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    public Page<?> tradeSelectOptionCategory(String category, String option, int page, int size) {
        return tradeRepository.findTradeOptionCategory(category, option, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionLoginCategory(String category, String option, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionLoginCategory(category, option, memberNum, PageRequest.of(page, size));
    }

    public Page<?> tradeSelectOptionCityCategory(String category, String option, String city, int page, int size) {
        return tradeRepository.findTradeOptionCityCategory(category, option, city, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionCityLoginCategory(String category, String option, String city, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionCityLoginCategory(category, option, city, memberNum, PageRequest.of(page, size));
    }

    public Page<?> tradeSelectOptionTownCategory(String category, String option, String town, int page, int size) {
        return tradeRepository.findTradeOptionTownCategory(category, option, town, PageRequest.of(page, size));
    }
    public Page<?> tradeSelectOptionTownLoginCategory(String category, String option, String town, int memberNum, int page, int size) {
        return tradeRepository.findTradeOptionTownLoginCategory(category, option, town, memberNum, PageRequest.of(page, size));
    }

    public Map<?, ?> tradeDetail(int tradeNum){
        Map<String,Map<?,?>> map = new HashMap<>();
        map.put("detail", tradeRepository.tradeDetailSelect(tradeNum));
        map.put("member", tradeRepository.tradeDetailMemberSelect(tradeNum));
        return map;
    }
    public Map<?, ?> tradeDetailLogin(int tradeNum, int memberNum){
        Map<String,Map<?,?>> map = new HashMap<>();
        map.put("detail", tradeRepository.tradeDetailSelectLogin(tradeNum, memberNum));
        map.put("member", tradeRepository.tradeDetailMemberSelect(tradeNum));
        return map;
    }
    public List<?> tradeDetailImage(int tradeNum){
        List<Map<?, ?>> list = new ArrayList<>();
        list = (tradeRepository.tradeDetailImgSelect(tradeNum));
        return list;
    }

}