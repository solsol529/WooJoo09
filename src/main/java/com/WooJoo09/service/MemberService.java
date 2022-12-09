package com.WooJoo09.service;

import com.WooJoo09.entity.Member;
import com.WooJoo09.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
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

}