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
                     "order by countStar desc, writeDate desc",
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
                    "order by countStar desc, writeDate desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeByProductLogin(@Param("target") String target, @Param("memberNum") int memberNum, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOption(@Param("option") String option, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num and s.member_num = :memberNum) as myStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOptionLogin(@Param("option") String option, @Param("memberNum") int memberNum, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "and city = :city " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOptionCity(@Param("option") String option, @Param("city") String city, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num and s.member_num = :memberNum) as myStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "and city = :city " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOptionCityLogin(@Param("option") String option, @Param("city") String city, @Param("memberNum") int memberNum, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "and town = :town " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOptionTown(@Param("option") String option, @Param("town") String town, Pageable pageable);

    @Query(
            value = "select trade_num tradeNum, category_name categoryName, product, price, city, town, due_date dueDate, " +
                    "trade_method tradeMethod, write_date writeDate, limit_partner limitPartner, done_trade doneTrade, " +
                    "(select count(*) from partner p where p.trade_num = t.trade_num and accept_trade = 'ACCEPT') acceptPartner, " +
                    "(select img_url from product_img pi where pi.trade_num = t.trade_num and is_represent = 'REPRESENT') representImg, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num) countStar, " +
                    "(select count(*) from star s where s.trade_num = t.trade_num and s.member_num = :memberNum) as myStar " +
                    "from category c, trade t where t.category = c.category_num and done_trade != 'DELETE' " +
                    "and host not in (select member_num from member where is_active = 'INACTIVE') " +
                    "and town = :town " +
                    "order by case when :option = 'recommend' then countStar end desc, " +
                    "case when :option = 'recent' then writeDate end desc, " +
                    "case when :option = 'dateLimit' then dueDate end asc, " +
                    "case when :option = 'lowPrice' then price end asc, " +
                    "case when :option = 'highPrice' then price end desc",
            countQuery = "select count(*) from trade where host not in " +
                    "(select member_num from member where is_active = 'INACTIVE') and done_trade != 'DELETE'",
            nativeQuery = true
    )
    Page<Map<?,?>> findTradeOptionTownLogin(@Param("option") String option, @Param("town") String town, @Param("memberNum") int memberNum, Pageable pageable);


}
