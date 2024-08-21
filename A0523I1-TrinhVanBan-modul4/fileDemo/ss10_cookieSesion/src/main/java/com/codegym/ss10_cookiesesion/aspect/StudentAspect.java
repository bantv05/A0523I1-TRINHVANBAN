package com.codegym.ss10_cookiesesion.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class StudentAspect {

    @After("execution(* com.codegym.ss10_cookiesesion.controllers.StudentController.*(..))")
    public void logAfterMethodCall(JoinPoint joinPoint) {
//        Đọc ghi file
        System.out.println(joinPoint.getSignature().getName());
    }
}
