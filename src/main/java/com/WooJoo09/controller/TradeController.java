package com.WooJoo09.controller;

import ch.qos.logback.core.rolling.helper.TokenConverter;
import com.WooJoo09.service.TradeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value="/developerkirby")
public class TradeController {
    private final JwtController jwtController;
    private final TradeService tradeService;

//    public TradeController(TradeService tradeService) {
//        this.tradeService = tradeService;
//    }

    @PostMapping("/searchselect")
    public ResponseEntity<Page<?>> tradeSearchSelect(
            @CookieValue(value = "token", required = false) String token,
             @RequestBody Map<String, String> Data) throws Exception {
        int page = Integer.parseInt(Data.get("page"));
        int size = Integer.parseInt(Data.get("size"));
        String target = Data.get("target");
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            if (memberNumStr.equals("admin")) return ResponseEntity.ok().body(tradeService.tradeSearchSelect(target, page, size));
            int memberNum = Integer.parseInt(memberNumStr);
            return ResponseEntity.ok().body(tradeService.tradeSearchSelectLogin(target, memberNum, page, size));
        }else return ResponseEntity.ok().body(tradeService.tradeSearchSelect(target, page, size));
    }

    @PostMapping("/tradeselect")
    public ResponseEntity<Page<?>> tradeSearchOption(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        int page = Integer.parseInt(Data.get("page"));
        int size = Integer.parseInt(Data.get("size"));
        String option = Data.get("option");
        String city = Data.get("city");
        String town = Data.get("town");
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            if (memberNumStr.equals("admin")) {
                if (town.length() != 0){
                    return ResponseEntity.ok().body(tradeService.tradeSelectOptionTown(option, town, page, size));
                } else if (city.length() != 0){
                    return ResponseEntity.ok().body(tradeService.tradeSelectOptionCity(option, city, page, size));
                } else return ResponseEntity.ok().body(tradeService.tradeSelectOption(option, page, size));
            }
            int memberNum = Integer.parseInt(memberNumStr);
            if (town.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionTownLogin(option, town, memberNum, page, size));
            } else if (city.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionCityLogin(option, city, memberNum, page, size));
            } else return ResponseEntity.ok().body(tradeService.tradeSelectOptionLogin(option, memberNum, page, size));
        }
        else {
            if (town.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionTown(option, town, page, size));
            } else if (city.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionCity(option, city, page, size));
            } else return ResponseEntity.ok().body(tradeService.tradeSelectOption(option, page, size));
        }
    }

    @PostMapping("/tradeselectcategory")
    public ResponseEntity<Page<?>> tradeSearchOptionCategory(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        int page = Integer.parseInt(Data.get("page"));
        int size = Integer.parseInt(Data.get("size"));
        String option = Data.get("option");
        String city = Data.get("city");
        String town = Data.get("town");
        String category = Data.get("category");
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            if (memberNumStr.equals("admin")) {
                if (town.length() != 0){
                    return ResponseEntity.ok().body(tradeService.tradeSelectOptionTownCategory(category, option, town, page, size));
                } else if (city.length() != 0){
                    return ResponseEntity.ok().body(tradeService.tradeSelectOptionCityCategory(category, option, city, page, size));
                } else return ResponseEntity.ok().body(tradeService.tradeSelectOptionCategory(category, option, page, size));
            }
            int memberNum = Integer.parseInt(memberNumStr);
            if (town.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionTownLoginCategory(category, option, town, memberNum, page, size));
            } else if (city.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionCityLoginCategory(category, option, city, memberNum, page, size));
            } else return ResponseEntity.ok().body(tradeService.tradeSelectOptionLoginCategory(category, option, memberNum, page, size));
        }
        else {
            if (town.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionTownCategory(category, option, town, page, size));
            } else if (city.length() != 0){
                return ResponseEntity.ok().body(tradeService.tradeSelectOptionCityCategory(category, option, city, page, size));
            } else return ResponseEntity.ok().body(tradeService.tradeSelectOptionCategory(category, option, page, size));
        }
    }

    @PostMapping("/tradedetailselect")
    public ResponseEntity<Map<?,?>> tradeSelectDetail(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
//        List<?> list = new ArrayList<>();
        Map<?,?> map = new HashMap<>();
        int tradeNum = Integer.parseInt(Data.get("target"));
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            if (memberNumStr.equals("admin")) {
                map = tradeService.tradeDetail(tradeNum);
            }
            else {
                int memberNum = Integer.parseInt(memberNumStr);
                map = tradeService.tradeDetailLogin(tradeNum, memberNum);
            }
        }
        else {
            map = tradeService.tradeDetail(tradeNum);
        }
        return ResponseEntity.ok().body(map);
    }

    @PostMapping("/tradedetailimgselect")
    public ResponseEntity<List<?>> tradeSelectDetailImage(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        int tradeNum = Integer.parseInt(Data.get("target"));
        List<?> list = new ArrayList<>();
        list= tradeService.tradeDetailImage(tradeNum);
        return ResponseEntity.ok().body(list);
    }


}
