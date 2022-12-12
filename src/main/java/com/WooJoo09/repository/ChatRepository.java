package com.WooJoo09.repository;

import com.WooJoo09.entity.Chat;
import com.WooJoo09.entity.Partner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface ChatRepository extends JpaRepository<Chat, Long> {
    @Query(
            value = "select count(*) countUnreadChat from chat " +
                    "where (partner_num in (select partner_num from partner p, trade t " +
                    "where (p.trade_num = t.trade_num and host = :memberNum) or part_mem_num = :memberNum)) " +
                    "and sender != :memberNum and is_read = 'UNREAD'",
            nativeQuery = true
    )
    String chatReadCheck(@Param("memberNum") int memberNum);

    List<Chat> findByPartnerNum(Partner partnerNum);

}
