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
	
//    @Query(
//            value = "select  m.nickname, c.partner_num, max(c.chat_time) as chat_time, c.chat_content, c.is_read\n" +
//                    "from(\n" +
//                    "select *\n" +
//                    "from chat\n" +
//                    "where(partner_num, chat_time) in (select partner_num, max(chat_time) as chat_time\n" +
//                    "from chat group by partner_num) \n" +
//                    "order by chat_time desc) c, member m\n" +
//                    "where m.member_num =c.sender and c.partner_num = :memberNum" +
//                    "group by c.partner_num, chat_content;",
//            nativeQuery = true
//    )
//    Map chatList(@Param("memberNum") int memberNum);
//
//    @Query(
//            value =
//            "select m.nickname , p.part_mem_num, pi2.img_url"+
//            "from partner p, chat c, product_img pi2, member m"+
//            "where p.partner_num = c.partner_num and p.trade_num = pi2.trade_num and p.part_mem_num = m.member_num and p.partner_num = :memberNum"+
//            "group by p.partner_num;",
//            nativeQuery = true
//    )
//    Map chatListnickname(@Param("memberNum") int memberNum);


}
