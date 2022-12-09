package com.WooJoo09.service;

import com.WooJoo09.constant.ReceiveAd;
import com.WooJoo09.entity.Member;
import com.WooJoo09.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@ToString
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public List<Member> findMember() {
        return memberRepository.findAll();
    }
    public Member saveMember(Member member) {
        return memberRepository.save(member);
    }
    //회원가입
    public boolean regMember(String id, String pwd, String nickname,
                             String realName, String email, String phone) {
        Member member = new Member();
        member.setId(id);
        member.setPwd(pwd);
        member.setNickname(nickname);
        member.setRealName(realName);
        member.setEmail(email);
        Date now = new Date();
        member.setBirthDate(now);
        member.setPhone(phone);
        member.setReceiveAd(ReceiveAd.POSITIVE);
        Member rst = memberRepository.save(member);
        log.warn(rst.toString());
        return true;
    }

}