package com.WooJoo09.controller;

import com.WooJoo09.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value="/developerkirby")
public class ChatController {
    private final JwtController jwtController;
    private final ChatService chatService;

    @PostMapping("/chatreadcheck")
    public ResponseEntity<Map<?,?>> tradeSearchSelect(
            @CookieValue(value = "token", required = false) String token,
            @RequestBody Map<String, String> Data) throws Exception {
        Map<String, String> result = new HashMap<>();
        if(token != null){
            log.info("로그인상태입니당");
            String memberNumStr = jwtController.tokenCheck(token);
            if (memberNumStr.equals("admin")) {
                result.put("state", "admin");
                return ResponseEntity.ok().body(result);
            }
            int memberNum = Integer.parseInt(memberNumStr);
            return ResponseEntity.ok().body(chatService.chatReadCheck(memberNum));
        }else {
            result.put("state", "logout");
            return ResponseEntity.ok().body(result);
        }
    }

    // 삽질...
//    @PostMapping("/chatinsert")
//    // 일부러 로그인 체크 안함(공구 참여후 쿠키 사라져서 로그인 실패하면 채팅방이 생성되지 않는 문제 발생함)
//    public ResponseEntity<Map<?, ?>> partnerInsert(
//            @CookieValue(value = "token", required = false) String token,
//            @RequestBody Map<String, String> Data) throws Exception {
//        Map<String ,String> map = new HashMap<>();
//        String partnerNumStr = Data.get("partnerNum"); // 파트너 번호
//        Long partnerNum = Long.parseLong(partnerNumStr);
//        String partMemNumStr = Data.get("partMemNum"); // 공구 신청하는 회원 번호
//        Long partMemNum = Long.parseLong(partMemNumStr);
//        map = chatService.chatInsert(partnerNum, partMemNum);
//        return ResponseEntity.ok().body(map);
//    }
}
