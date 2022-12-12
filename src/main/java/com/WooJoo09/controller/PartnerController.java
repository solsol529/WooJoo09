package com.WooJoo09.controller;

import com.WooJoo09.service.PartnerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value="/developerkirby")
public class PartnerController {
    private final PartnerService partnerService;
    private final JwtController jwtController;

    @PostMapping("/partnerinsert")
    public ResponseEntity<Map<?, ?>> partnerInsert(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        Map<String ,String> map = new HashMap<>();
        String target = Data.get("target");
        Long tradeNum = Long.parseLong(target);
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            Long memberNum = Long.parseLong(memberNumStr);
            map = partnerService.partnerInsert(tradeNum, memberNum);
            return ResponseEntity.ok().body(map);
        }else {
            map.put("completePartner", "loginError");
            return ResponseEntity.ok().body(map);
        }
    }

    @PostMapping("/partnerdelete") // 파트너 쪽에서 거래 거절하는거(공구 나가기)
    public ResponseEntity<Map<?, ?>> partnerDelete(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        Map<String ,String> map = new HashMap<>();
        String target = Data.get("target"); // 파트너 번호
        Long tradeNum = Long.parseLong(target);
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            Long memberNum = Long.parseLong(memberNumStr);
            map = partnerService.partnerDelete(tradeNum, memberNum);
            return ResponseEntity.ok().body(map);
        }else {
            map.put("deletePartner", "loginError");
            return ResponseEntity.ok().body(map);
        }
    }

    @PostMapping("/partnerdeletehost") // 파트너 쪽에서 거래 거절하는거(공구 나가기)
    public ResponseEntity<Map<?, ?>> partnerDeleteHost(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        Map<String ,String> map = new HashMap<>();
        String target = Data.get("target"); // 거래 번호
        Long tradeNum = Long.parseLong(target);
        String partner = Data.get("partner"); // 파트너 멤버 번호
        Long partMemNum = Long.parseLong(partner);
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token); // 토큰 체크는 정상적으로 진행
            map = partnerService.partnerDelete(tradeNum, partMemNum);
            return ResponseEntity.ok().body(map);
        }else {
            map.put("deletePartnerHost", "loginError");
            return ResponseEntity.ok().body(map);
        }
    }

}
