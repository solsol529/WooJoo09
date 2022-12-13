package com.WooJoo09.webSocket;

import com.WooJoo09.constant.MsgType;
import com.WooJoo09.entity.Chat;
import com.WooJoo09.service.ChatService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Getter
public class ChatRoom {
    private String roomId; // 방번호
    private String name;
    private Set<WebSocketSession> sessions = new HashSet<>(); // 중복 허용을 하지 않는 값을 저장

    @Builder // lombok 에서 제공,
    //빌더 패턴은 생성 패턴 중 하나이다. 또, 생성 패턴은 "인스턴스"를 만드는 절차를 "추상화"하는 패턴
    //생성 패턴을 이용하면, 무엇이 생성되고, 어떻게 결합하는지에 대한 부분을 가려준다
    // 생성자(Constructor)가 많을 경우 또는 오브젝트 생성 후 변경 불가능한 불변 오브젝트가 필요한 경우,
    // 불변 오브젝트를 생성하여 오브젝트의 일관성(Consistency),변경 불가능(immutable)을 실현하여
    // 코드의 가독성과 불변성,일관성을 유지하도록 하는것에 중점


    public ChatRoom(String roomId, String name) {
        this.roomId = roomId;
        this.name = name;
    }
    public void handlerActions(WebSocketSession session, ChatMessage chatMessage, ChatService chatService) {
        if(chatMessage.getType().equals(ChatMessage.MessageType.ENTER)) {
            sessions.add(session); // 최초로 진입했으면 세션을 만들어줘야함
            chatMessage.setMessage(chatMessage.getSender() + "님이 입장했습니다.");
        }
        sendMessage(chatMessage, chatService);
    }
    private <T> void sendMessage(T message, ChatService chatService) {
        // forEach() : 스트림의 요소를 하나씩 참조해서 람다식으로 처리하는 반복자
        sessions.parallelStream()
                .forEach(session -> chatService.sendMessage(session, message));
    }
}