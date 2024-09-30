package com.example.AddToCart.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

public class JwtFilter  extends GenericFilterBean {

//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException, IOException {
//        HttpServletRequest request = (HttpServletRequest) servletRequest;
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//        //expects the token to come from the header
//        final String authHeader = request.getHeader("Authorization");
//        if(request.getMethod().equals("OPTIONS")){
//            //if the method is options the request can pass through not validation of token is required
//            response.setStatus(HttpServletResponse.SC_OK);
//            filterChain.doFilter(request,response);
//        }
//        else if(authHeader == null || !authHeader.startsWith("Bearer "))
//        {
//            throw new ServletException("Missing or Invalid Token");
//        }
//        //extract token from the header
//        String token = authHeader.substring(7);//Bearer => 6+1 = 7, since token begins with Bearer
//        //extract the claims
//        Claims claims = Jwts.parser().setSigningKey("mySecret").parseClaimsJws(token).getBody();
//        // set the claims in the request attribute and pass it to the next handler
//        request.setAttribute("claims",claims);
//        //pass the claims in the request, anyone wanting to use it
//        filterChain.doFilter(request,response);
//    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            // If the Authorization header is missing or does not start with "Bearer ",
            // return a 401 Unauthorized response or handle the error appropriately.
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Missing or Invalid Token");
            return;
        }

        String token = authHeader.substring(7);
        // Proceed with token validation and processing...
        // Make sure to handle exceptions that might occur during token parsing and verification.
        try {
            Claims claims = Jwts.parser().setSigningKey("mySecret").parseClaimsJws(token).getBody();
            System.out.println(claims);

            request.setAttribute("claims", claims);

            filterChain.doFilter(request, response);
        } catch (Exception e) {
            // If an exception occurs during token parsing or verification, return a 401 Unauthorized response.
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid Token");
        }
    }

}




