package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RealEstateController {
	
	@GetMapping("/buy")
	public String showBuyPage() {
		  return "buy";
	}
	
	
	@GetMapping("/search-results")
	public String showSearchResultsPage() {
		  return "search-results";
	}
	
	@GetMapping("/property-detail")
	public String showPropertyDetailPage() {
		 return "property-detail";
	}

    @GetMapping("/rent")
    public String showRentPage() {
        return "rent"; // rent.html in templates/
    }

    @GetMapping("/sale")
    public String showSalePage() {
        return "sale"; // sale.html in templates/
    }

    @GetMapping("/aboutus")
    public String showAboutUsPage() {
        return "aboutus"; // aboutus.html in templates/
    }

    @GetMapping("/contactus")
    public String showContactUsPage() {
        return "contactus"; // contactus.html in templates/
    }
    
    @GetMapping("/viewallproperties")
    public String showViewAllpropertiesPage() {
    	return "viewallproperties";
    }
}
