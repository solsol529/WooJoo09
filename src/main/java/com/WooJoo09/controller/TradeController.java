package com.WooJoo09.controller;

import ch.qos.logback.core.rolling.helper.TokenConverter;
import com.WooJoo09.service.TradeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

//    @PostMapping("/tradeselect")
//    public ResponseEntity<List<?>> tradeSelect(@RequestBody Map<String, String> Data) {
//        String option = Data.get("option");
//        int size = Integer.parseInt(Data.get("size"));
//        int page = Integer.parseInt(Data.get("page"));
//        String city = Data.get("city");
//        String town = Data.get("town");
//        switch (option){
//            case "recommend":
//                if(town != null){
//                    //return ResponseEntity.ok().body(tradeService.findTradeRecommendTown());
//                }
//        }
//        // PageRequest.of(page, size, sort)
//        //PageRequest.of(page, size)
//    }
}
