package com.WooJoo09.repository;

import com.WooJoo09.entity.Member;
import com.WooJoo09.entity.Partner;
import com.WooJoo09.entity.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartnerRepository extends JpaRepository<Partner, Long> {
    List<Partner> findByTradeNumAndPartMemNum(Trade tradeNum, Member partMemNum);
    Partner findByPartnerNum(Long partnerNum);

    List<Partner> findByTradeNum(Trade tradeNum);
}
