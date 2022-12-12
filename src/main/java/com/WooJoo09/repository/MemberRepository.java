package com.WooJoo09.repository;

import com.WooJoo09.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberNum(Long MemberNum);
    Optional<Member> findById(String id);
    Optional<Member> findByIdAndPwd(String id, String pwd);
}
