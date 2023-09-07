package com.dekedesign.clubcalculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@SpringBootApplication
@RestController
public class ClubCalculatorApplication {
    ArrayList<String> bag = new ArrayList<String>();
    ArrayList<String> clubTypes = new ArrayList<String>();

    public static void main(String[] args) {
        SpringApplication.run(ClubCalculatorApplication.class, args);
    }

    @GetMapping("/")
    public String index() {
        return String.format("Welcome to the club calculator. Visit /bag to see the clubs in your bag.");
    }

    @GetMapping("/bag")
    public String getBag() {
        return String.format("Clubs in bag here");
    }

    @PostMapping("/club")
    public void setClub(String name, Integer dist) {
        // set club here and add to bag
    }

    @GetMapping("/recommend")
    public String recommend(Integer dist, boolean teebox) {
        // pass in dist and then use their club to divide the remaining dist, offer longest club first, only recommend driver if teebox is true
        return String.format("I would hit a 9 iron then this since there is " +  dist.toString() + " to hole");
    }


}
