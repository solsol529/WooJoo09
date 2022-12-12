package com.WooJoo09.service;

import com.WooJoo09.constant.IsRead;
import com.WooJoo09.constant.MsgType;
import com.WooJoo09.entity.Chat;
import com.WooJoo09.entity.Member;
import com.WooJoo09.entity.Partner;
import com.WooJoo09.entity.Trade;
import com.WooJoo09.repository.ChatRepository;
import com.WooJoo09.repository.MemberRepository;
import com.WooJoo09.repository.PartnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@ToString
@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;
    private final PartnerRepository partnerRepository;
    private final MemberRepository memberRepository;

    public Map<?,?> chatReadCheck(int memberNum) {
        Map<String, String> result = new HashMap<>();
        result.put("countUnreadChat", chatRepository.chatReadCheck(memberNum));
        result.put("state", "login");
        return result;
    }
// ㅠㅠ 삽질...
//    public Map<String,String> chatInsert(Long partnerNum, Long memberNum){
//        Map<String, String> map = new HashMap<>();
//        Partner partner = partnerRepository.findByPartnerNum(partnerNum);
//        if(partner == null) {
//            map.put("completePartner", "notPartnerData");
//            return map;
//        }
//        Member member = memberRepository.findByMemberNum(memberNum);
//        if(member == null) {
//            map.put("completePartner", "notMemberData");
//            return map;
//        }
//        if(chatRepository.findByPartnerNum(partner).isEmpty()){
//            Chat chat = new Chat();
//            chat.setSender(member);
//            chat.setPartnerNum(partner);
//            chat.setChatContent("채팅방이 개설되었습니다");
//            chat.setMsgType(MsgType.ENTER);
//            chat.setIsRead(IsRead.UNREAD);
//            Chat savedChat = chatRepository.save(chat);
//            log.info(savedChat.toString());
//            map.put("completePartner", "OK");
//        } else map.put("completePartner", "duplicate");
//        return map;
//    }
}
