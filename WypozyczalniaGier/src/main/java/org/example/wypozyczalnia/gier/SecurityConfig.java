package org.example.wypozyczalnia.gier;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/**","/api/games","api/games/**","/api/users/register", "/api/users/login", "/api/checkout/registered","/api/checkout/guest", "/index.html","/checkout.html", "/login.html", "/register.html", "/checkout.html","/css/**", "/js/**", "/images/**").permitAll() // Дозволити доступ до всіх статичних файлів
                        .anyRequest().authenticated() // Захищені інші ендпоінти
                );
        return http.build();
    }

}
