package com.codegym.ss10_cookiesesion.controllers;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String loginPage(@CookieValue(value = "username", defaultValue = "")String username, Model model) {
        model.addAttribute("username", username);
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password,
                        @RequestParam(value = "remember", defaultValue = "false") Boolean remember,
                        HttpServletResponse response) {
//        Call DB so sánh username và password
        if (remember) {
            Cookie cookie = new Cookie("username", username);
            Cookie cookie1 = new Cookie("password", password);
            cookie.setMaxAge(5 * 24 * 60 * 60);
            response.addCookie(cookie);
        }
        return "redirect:/students";
    }
}
