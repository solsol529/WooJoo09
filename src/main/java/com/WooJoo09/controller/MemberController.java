package com.WooJoo09.controller;

import com.WooJoo09.entity.Member;
import com.WooJoo09.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
public class MemberController {

    // Service 로직 연결
    private MemberService memberService;
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    public ResponseEntity<List<Member>> findMember() {
        return ResponseEntity.ok().body(memberService.findMember());
    }

}
