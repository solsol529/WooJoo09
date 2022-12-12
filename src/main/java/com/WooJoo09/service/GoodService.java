package com.WooJoo09.service;

import com.WooJoo09.repository.GoodRepository;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@ToString
@Service
@RequiredArgsConstructor
public class GoodService {
    private final GoodRepository goodRepository;
}
