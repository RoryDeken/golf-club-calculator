package com.dekedesign.clubcalculator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ClubCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubCalculatorApplication.class, args);
	}
	@GetMapping("/")
	public String index() {
		return String.format("Welcome to the club calculator. Visit /bag to see the clubs in your bag.");
	}
	@GetMapping("/bag")
	public String getBag() {
		return String.format("Here is your bag of clubs");
	}
}
