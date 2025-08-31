package com.example.demoEventManagement.Components;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil
{
    private final String SECRET="mysupersecretkeymysupersecretkey";
    private final long EXPIRATION =1000*60*60; // 1 hour auto Expiry

    private Key getSigningKey()
    {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    public String generateToken(String email,String role)
    {
        return Jwts.builder()
                .setSubject(email)
                .claim("role",role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractEmail(String token)
    {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build()
                .parseClaimsJwt(token).getBody().getSubject();
    }

    public boolean validateToken(String token)
    {
        try
        {
            Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJwt(token);
            return true;
        }
        catch(JwtException e)
        {
            return false;
        }
    }
}
