package com.WooJoo09.controller;

import com.WooJoo09.dto.TokenDataResponse;
import com.WooJoo09.dto.TokenResponse;
import com.WooJoo09.dto.TokenResponseNoData;
import com.WooJoo09.jwt.JwtProvider;
import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class JwtController {

    private final JwtProvider jwtProvider;

    //==토큰 생성 컨트롤러==//
    @GetMapping(value = "/tokenCreate/{memberNum}")
    public TokenResponse createToken(@PathVariable("memberNum") String memberNum) throws Exception {
        String token = jwtProvider.createToken(memberNum); // 토큰 생성
        Claims claims = jwtProvider.parseJwtToken("Bearer "+ token); // 토큰 검증

        TokenDataResponse tokenDataResponse = new TokenDataResponse(token, claims.getSubject(), claims.getIssuedAt().toString(), claims.getExpiration().toString());
        TokenResponse tokenResponse = new TokenResponse("200", "OK", tokenDataResponse);

        return tokenResponse;
    }

    @GetMapping("/login")
    @ResponseBody
    public ResponseEntity<?> login(HttpServletResponse response) throws Exception {

        String jwtToken = tokenCreate2("1");

        // create a cookie
        Cookie cookie = new Cookie("token",jwtToken);

        // expires in 60min
        cookie.setMaxAge(60 * 60);

//         optional properties
//        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/");

        // add cookie to response
        response.addCookie(cookie);

        // return response entity
        return new ResponseEntity<>(cookie, HttpStatus.OK);
    }

    // 토큰 생성용 함수
    public TokenResponse tokenCreate(String memberNum) throws Exception {
        String token = jwtProvider.createToken(memberNum); // 토큰 생성
        Claims claims = jwtProvider.parseJwtToken("Bearer "+ token); // 토큰 검증

        TokenDataResponse tokenDataResponse = new TokenDataResponse(token, claims.getSubject(), claims.getIssuedAt().toString(), claims.getExpiration().toString());
        TokenResponse tokenResponse = new TokenResponse("200", "OK", tokenDataResponse);

        return tokenResponse;
    }

    // 토큰 생성만 하는 함수
    public String tokenCreate2(String memberNum) throws Exception {
        String token = jwtProvider.createToken(memberNum); // 토큰 생성
        return token;
    }

    //==토큰 인증 컨트롤러==//
    @GetMapping(value = "/checkToken")
    public TokenResponseNoData checkToken(@RequestHeader(value = "Authorization") String token, @RequestBody Map<String, String> Data) throws Exception {
        Claims claims = jwtProvider.parseJwtToken(token);
        TokenResponseNoData tokenResponseNoData = new TokenResponseNoData("200", "success");
        return tokenResponseNoData;
    }

    //==토큰 인증 + memberNum 반환 컨트롤러==//
    @GetMapping(value = "/checkTokenMember")
    public TokenResponse checkTokenMember(@RequestHeader(value = "Authorization") String token) throws Exception {
        Claims claims = jwtProvider.parseJwtToken(token);

        TokenResponse tokenResponse = new TokenResponse("200", "success", claims.getSubject());
        return tokenResponse;
    }

    // 토큰 인증 함수
    public TokenResponse tokenCheck(String token) throws Exception {
        Claims claims = jwtProvider.parseJwtToken2(token); // Bearer 제거안하는 함수
        TokenResponse tokenResponse = new TokenResponse("200", "success", claims.getSubject());
        return tokenResponse;
    }

    @PostMapping(value = "/checkTokenCookie")
    public TokenResponse checkTokenCookie(@CookieValue(value = "token", required = false) String token, @RequestBody Map<String, String> Data) throws Exception {
        log.warn(token);
        TokenResponse tokenResponse = tokenCheck(token);
        String content = Data.get("content");
        log.info(content);
        return tokenResponse;
    }
}
