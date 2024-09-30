package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v2")

public class democontroller {
    private static final String UPLOAD_DIR = "D:\\CapStone\\Final Project\\Food-App (2)\\Food-App\\src\\assets\\Restaurantimg";

    @PostMapping(path = "/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR + "/" + file.getOriginalFilename());
            Files.write(path, bytes);
            return "File uploaded successfully!";
        } catch (IOException e) {
            return "File upload failed: " + e.getMessage();
        }
    }
    private static final String UPLOAD_DIR1 = "D:\\CapStone\\Final Project\\Food-App (2)\\Food-App\\src\\assets\\Dish";
    @PostMapping(path = "/upload1")
    public String uploadFile1(@RequestParam("file") MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR1 + "/" + file.getOriginalFilename());
            Files.write(path, bytes);
            return "File uploaded successfully!";
        } catch (IOException e) {
            return "File upload failed: " + e.getMessage();
        }
    }
}
