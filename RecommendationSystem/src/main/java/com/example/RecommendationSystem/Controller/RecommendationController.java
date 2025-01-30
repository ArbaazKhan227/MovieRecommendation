package com.example.RecommendationSystem.Controller;



import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecommendationController {

    @GetMapping("/recommendations")
    public List<String> getRecommendations(@RequestParam(value = "preference", required = false) String preference) {
        // If no preference is provided, return a default message
        if (preference == null || preference.isEmpty()) {
            List<String> defaultResponse = new ArrayList<>();
            defaultResponse.add("Please provide a valid preference (e.g., 'action', 'comedy').");
            return defaultResponse;
        }
        
        List<String> recommendations = new ArrayList<>();
        
        // Simple genre-based recommendations
        if ("action".equalsIgnoreCase(preference)) {
            recommendations.add("Mad Max: Fury Road");
            recommendations.add("John Wick");
            recommendations.add("Die Hard");
        } else if ("comedy".equalsIgnoreCase(preference)) {
            recommendations.add("The Hangover");
            recommendations.add("Superbad");
            recommendations.add("Step Brothers");
        } else if ("Drama".equalsIgnoreCase(preference)) {
            recommendations.add("The Shawshank Redemption");
            recommendations.add("Forrest Gump");
            recommendations.add("The Godfather");
        } else if ("sci-fi".equalsIgnoreCase(preference)) {
            recommendations.add("Inception");
            recommendations.add("Interstellar");
            recommendations.add("Blade Runner 2049");
        } else {
            recommendations.add("No recommendations found for this genre.");
        }
        
        return recommendations;
    }
}
