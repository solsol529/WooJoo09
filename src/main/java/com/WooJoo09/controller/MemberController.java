package com.WooJoo09.controller;

import com.WooJoo09.dto.MemberDTO;
import com.WooJoo09.entity.Member;
import com.WooJoo09.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping(value="/developerkirby")
public class MemberController {

    // Service 로직 연결
    private MemberService memberService;
    public  MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    public ResponseEntity<List<Member>> findMember() {
        return ResponseEntity.ok().body(memberService.findMember());
    }

    //회원가입
    @PostMapping("/memberinsert")
    public ResponseEntity<Boolean> registerMember(@RequestBody Map<String, String> regData) throws ParseException {
        String id = regData.get("regId");
        String pwd = regData.get("regPwd");
        String nickname = regData.get("regNick");
        String realName = regData.get("regName");
        String email = regData.get("regEmail");
        SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
        Date birthDate = date.parse(regData.get("birthDate"));
        String phone = regData.get("regPhone");
        String receiveAd = regData.get("adOk");
        boolean result = memberService.regMember(id, pwd, nickname, realName, email, birthDate, phone, receiveAd);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    //아이디 중복 체크
    @PostMapping("/iddup")
    public ResponseEntity<Boolean> memberIdDup(@RequestBody Map<String, String> idDupData) {
        String id = idDupData.get("regId");
        boolean result = memberService.regIdDupCk(id);
//        return ResponseEntity.ok(memberService.regIdDupCk(id));
        if(result) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
    }

    //아이디 찾기
    @PostMapping("/findid")
    public ResponseEntity<Boolean> memberFindId(@RequestBody Map<String, String> findIdData) {
        String realName = findIdData.get("findIdName");
        String email = findIdData.get("findIdEmail");
        boolean result = memberService.findId(realName, email);
        if(result) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(true, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/findidmember")
//    public ResponseEntity<List<MemberDTO>> findIdMember(@RequestParam String findIdEmail) {
//        List<MemberDTO> list = memberService.getMemberList(findIdEmail);
//        log.info(findIdEmail);
//        return new ResponseEntity<>(list, HttpStatus.OK);
//    }

    public ResponseEntity<List<MemberDTO>> findIdMember(@RequestBody Map<String, String> findIdDataEmail) {
        String email = findIdDataEmail.get("findIdEmail");
        List<MemberDTO> list = memberService.getMemberList(email);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}
