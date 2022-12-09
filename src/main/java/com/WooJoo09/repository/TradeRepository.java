package com.WooJoo09.repository;

import com.WooJoo09.entity.Trade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Map;

public interface TradeRepository  extends JpaRepository<Trade, Long> {
    @Query(
             value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                     "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                     "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                     "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                     "(select count(*) from star s where s.trade_num = t.trade_num) countStar " +
                     "from category c, trade t where t.category = c.category_num and product like :target and done_trade != 'DELETE' " +
                     "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                     "order by countstar desc, write_date desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeByProduct(@Param("target") String target, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar," +
                    "(select count(*) from star s where s.trade_num = t.trade_num and s.member_num = :memberNum) as myStar " +
                    "from category c, trade t where t.category = c.category_num and product like :target and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "order by countstar desc, write_date desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeByProductLogin(@Param("target") String target, @Param("memberNum") int memberNum, Pageable pageable);

//    @Query(
//            value = "",
//            countQuery = "select count(*) from trade where host not in " +
//                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
//            nativeQuery = true
//    )
//    Page<Map<?,?>> findTradeRecommend(@Param("target") String target, Pageable pageable);
//
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeRecommendCity(@Param("target") String target);
//
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeRecommendTown(@Param("target") String target);
//
//    @Query(
//            value = "",
//            countQuery = "select count(*) from trade where host not in " +
//                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeDateLimit(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeDateLimitCity(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeDateLimitTown(@Param("target") String target);
//
//    @Query(
//            value = "",
//            countQuery = "select count(*) from trade where host not in " +
//                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeLowPrice(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeLowPriceCity(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeLowPriceTown(@Param("target") String target);
//
//    @Query(
//            value = "",
//            countQuery = "select count(*) from trade where host not in " +
//                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeHighPrice(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeHighPriceCity(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeHighPriceTown(@Param("target") String target);
//
//    @Query(
//            value = "",
//            countQuery = "select count(*) from trade where host not in " +
//                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeRecent(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeRecentCity(@Param("target") String target);
//    @Query(
//            value = "",
//            nativeQuery = true
//    )
//    List<Map<?,?>> findTradeRecentTown(@Param("target") String target);

}
