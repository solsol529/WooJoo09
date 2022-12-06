package com.WooJoo09.dto;

import com.WooJoo09.constant.DoneTrade;
import com.WooJoo09.constant.TradeMethod;
import com.WooJoo09.entity.Category;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class TradeDTO {
    private Long tradeNum;
    private String category;
    private int limitPartner; // 공구 참여자수
    private String product;
    private int price;
    private String city;
    private String town;
    private LocalDateTime writeDate;
    private Date dueDate;
    private String tradeMethod;
    private String productDetail;
    private String tradePlace;
    private String doneTrade;

    private String isStar;

    private String nickname;
    private String grade;
    private String pfImg;
    private String introduce;
    private String isActive;
    private int countHost; // 거래 주최 수
    private int countPartner; // 거래 참여 수

    private String representImg; // 대표이미지
    private List<String> imgList; // 상품 이미지 리스트

}
