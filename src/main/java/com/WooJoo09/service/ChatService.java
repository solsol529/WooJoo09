package com.WooJoo09.service;

import com.WooJoo09.repository.ChatRepository;
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

    public Map<?,?> chatReadCheck(int memberNum) {
        Map<String, String> result = new HashMap<>();
        result.put("countUnreadChat", chatRepository.chatReadCheck(memberNum));
        result.put("state", "login");
        return result;
    }
}
