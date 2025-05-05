document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ welcome.js loaded successfully!");
});

		// Tab switching functionality
		document.addEventListener('DOMContentLoaded', function() {
		    const tabs = document.querySelectorAll('.search-tab');
		    
		    tabs.forEach(tab => {
		        tab.addEventListener('click', function() {
		            // Remove active class from all tabs
		            tabs.forEach(t => t.classList.remove('active'));
		            
		            // Add active class to clicked tab
		            this.classList.add('active');
		            
		            // You can add logic here to show different search forms based on tab
		            const tabType = this.dataset.tab;
					console.log(`Switched to ${tabType} tab`);

		            
		            // For example, change placeholder text based on tab
		            const searchInput = document.querySelector('.search-input');
		            if (tabType === 'buy') {
		                searchInput.placeholder = 'City, Address, ZIP, or Neighborhood';
		            } else if (tabType === 'rent') {
		                searchInput.placeholder = 'Search for rental properties';
		            } else if (tabType === 'sale') {
		                searchInput.placeholder = 'Enter your property address';
		            }
		        });
		    });
		    
		    // Mobile menu toggle functionality
		    const menuButton = document.querySelector('.mobile-menu-btn');
		    const nav = document.querySelector('nav');
		    const authButtons = document.querySelector('.auth-buttons');
		    
		    menuButton.addEventListener('click', function() {
		        // This is a simplified toggle - in a real application, you'd want to create a proper mobile menu
		        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
		        authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
		    });
		    
		    // Property card hover effects
		    const propertyCards = document.querySelectorAll('.property-card');
		    
		    propertyCards.forEach(card => {
		        card.addEventListener('mouseenter', function() {
		            this.style.transform = 'translateY(-5px) scale(1.02)';
		            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
		        });
		        
		        card.addEventListener('mouseleave', function() {
		            this.style.transform = '';
		            this.style.boxShadow = '';
		        });
		    });
		});

		// Search functionality
		document.addEventListener('DOMContentLoaded', function() {
		  // Get search elements
		  const searchInput = document.querySelector('.search-input');
		  const searchBtn = document.querySelector('.search-btn');
		  
		  // Sample property data - in a real application, you would fetch this from a database
		  const properties = [
		      {
		          id: 1,
		          title: "Luxury Beach Condo",
		          location: "789 Shore Dr, Beachside",
		          price: 1200000,
		          beds: 3,
		          baths: 3.5,
		          sqft: 2100,
		          type: "condo",
		          status: "for-sale",
		          image: "https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=",
		          keywords: ["beach", "luxury", "condo", "shore", "beachside", "ocean", ]
		      },
		      {
		          id: 2,
		          title: "Modern Apartment in Downtown",
		          location: "123 Main St, Downtown",
		          price: 450000,
		          beds: 2,
		          baths: 2,
		          sqft: 1200,
		          type: "apartment",
		          status: "for-sale",
		          image: "./images/image1.jpg",
		          keywords: ["downtown", "modern", "apartment", "urban", "city"]
		      },
		      {
		          id: 3,
		          title: "Suburban Family Home",
		          location: "456 Oak Ave, Meadowville",
		          price: 750000,
		          beds: 4,
		          baths: 3,
		          sqft: 2400,
		          type: "house",
		          status: "for-sale",
		          image: "https://thumbs.dreamstime.com/b/beautiful-suburban-home-lush-landscaping-manicured-lawn-sunny-day-large-grey-two-story-single-family-house-three-car-352051046.jpg",
		          keywords: ["suburban", "family", "meadowville", "oak"]
		      },
		      {
		        id: 4,
		        title: "Luxury Family Villa",
		        location: "123 Maple Avenue, Downtown",
		        price: 750000,
		        beds: 4,
		        baths: 3,
		        sqft: 2400,
		        type: "house",
		        status: "for-sale",
		        image: "./images/buy1.jpg",
		        keywords: ["luxuray", "family","Beach", "meadowville","modern", "single","oak"]
		    },
		    {
		      id: 5,
		      title: "Modern Downtown Condo",
		      location: "456 Oak Street, Downtown",
		      price: 4550000,
		      beds: 2,
		      baths: 2,
		      sqft: 1200,
		      type: "house",
		      status: "for-sale",
		      image: "./images/buy2.jpg",
		      keywords: ["luxuray", "family","Downtown", "meadowville","modern", "single","oak","city"]
		  },
		  {
		    id: 6,
		    title: "Beachfront Luxury House",
		    location: "789 Beach Road, Seaside",
		    price: 1250000,
		    beds: 5,
		    baths: 4,
		    sqft: 3500,
		    type: "house",
		    status: "for-sale",
		    image: "./images/buy3.jpg",
		    keywords: ["luxuary","Beach", "family", "meadowville","modern", "single","oak"]
		},
		{
		  id: 7,
		  title: "Cozy Suburban Home",
		  location: "101 Pine Lane, Suburbs",
		  price: 5750000,
		  beds: 3,
		  baths: 2,
		  sqft: 2400,
		  type: "house",
		  status: "for-sale",
		  image: "./images/buy4.jpg",
		  keywords: ["luxuary", "family","Cozy", "meadowville","modern", "single","oak"]
		},
		{
		  id: 8,
		  title: "Mountain Retreat Home",
		  location: "202 Mountain View, Highlands",
		  price: 9250000,
		  beds: 4,
		  baths: 3,
		  sqft: 2400,
		  type: "house",
		  status: "for-sale",
		  image: "./images/buy5.jpg",
		  keywords: ["luxuary", "family", "meadowville","modern", "single","oak"]
		},
		{
		  id: 9,
		  title: "Stylish City Apartment",
		  location: "303 Urban Street, Downtown",
		  price: 320000,
		  beds: 1,
		  baths: 2,
		  sqft: 2400,
		  type: "house",
		  status: "for-sale",
		  image: "./images/buy6.jpg",
		  keywords: ["luxuary", "family", "meadowville","Stylish","modern", "single","oak"]
		},
		{
		  id: 1,
		  title: "Luxury Beach Condo",
		  location: "789 Shore Dr, Beachside",
		  price: 1200000,
		  beds: 3,
		  baths: 3.5,
		  sqft: 2100,
		  type: "condo",
		  status: "for-rent",
		  image: "https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=",
		  keywords: ["beach", "luxury", "condo", "shore", "beachside", "ocean", ]
		},
		{
		  id: 2,
		  title: "Modern Apartment in Downtown",
		  location: "123 Main St, Downtown",
		  price: 450000,
		  beds: 2,
		  baths: 2,
		  sqft: 1200,
		  type: "apartment",
		  status: "for-rent",
		  image: "./images/image1.jpg",
		  keywords: ["downtown", "modern", "apartment", "urban", "city"]
		},
		{
		  id: 3,
		  title: "Suburban Family Home",
		  location: "456 Oak Ave, Meadowville",
		  price: 750000,
		  beds: 4,
		  baths: 3,
		  sqft: 2400,
		  type: "house",
		  status: "for-rent",
		  image: "https://thumbs.dreamstime.com/b/beautiful-suburban-home-lush-landscaping-manicured-lawn-sunny-day-large-grey-two-story-single-family-house-three-car-352051046.jpg",
		  keywords: ["suburban", "family", "meadowville", "oak"]
		},
		{
		id: 4,
		title: "Luxury Family Villa",
		location: "123 Maple Avenue, Downtown",
		price: 750000,
		beds: 4,
		baths: 3,
		sqft: 2400,
		type: "house",
		status: "for-rent",
		image: "./images/buy1.jpg",
		keywords: ["luxuray", "family","Beach", "meadowville","modern", "single","oak"]
		},
		{
		id: 5,
		title: "Modern Downtown Condo",
		location: "456 Oak Street, Downtown",
		price: 4550000,
		beds: 2,
		baths: 2,
		sqft: 1200,
		type: "house",
		status: "for-rent",
		image: "./images/buy2.jpg",
		keywords: ["luxuray", "family","Downtown", "meadowville","modern", "single","oak","city"]
		},
		{
		id: 6,
		title: "Beachfront Luxury House",
		location: "789 Beach Road, Seaside",
		price: 1250000,
		beds: 5,
		baths: 4,
		sqft: 3500,
		type: "house",
		status: "for-rent",
		image: "./images/buy3.jpg",
		keywords: ["luxuary","Beach", "family", "meadowville","modern", "single","oak"]
		},
		{
		id: 7,
		title: "Cozy Suburban Home",
		location: "101 Pine Lane, Suburbs",
		price: 5750000,
		beds: 3,
		baths: 2,
		sqft: 2400,
		type: "house",
		status: "for-rent",
		image: "./images/buy4.jpg",
		keywords: ["luxuary", "family","Cozy", "meadowville","modern", "single","oak"]
		},
		{
		id: 8,
		title: "Mountain Retreat Home",
		location: "202 Mountain View, Highlands",
		price: 9250000,
		beds: 4,
		baths: 3,
		sqft: 2400,
		type: "house",
		status: "for-rent",
		image: "./images/buy5.jpg",
		keywords: ["luxuary", "family", "meadowville","modern", "single","oak"]
		},
		{
		id: 9,
		title: "Stylish City Apartment",
		location: "303 Urban Street, Downtown",
		price: 320000,
		beds: 1,
		baths: 2,
		sqft: 2400,
		type: "house",
		status: "for-rent",
		image: "./images/buy6.jpg",
		keywords: ["luxuary", "family", "meadowville","Stylish","modern", "single","oak"]
		}
		  ];
		  
		  // Function to handle search
		  function handleSearch() {
		      const searchTerm = searchInput.value.trim().toLowerCase();
		      
		      if (searchTerm === '') {
		          alert('Please enter a search term');
		          return;
		      }
		      
		      // Get active tab to determine search context
		      const activeTab = document.querySelector('.search-tab.active').dataset.tab;
		      
		      // Filter properties based on search term and active tab
		      const results = properties.filter(property => {
		          // Match by title, location, or keywords
		          const matchesSearch = 
		              property.title.toLowerCase().includes(searchTerm) ||
		              property.location.toLowerCase().includes(searchTerm) ||
		              property.keywords.some(keyword => keyword.includes(searchTerm));
		          
		          // Filter by tab type (buy, rent, sell)
		          if (activeTab === 'buy') {
		              return matchesSearch && property.status === 'for-sale';
		          } else if (activeTab === 'rent') {
		              return matchesSearch && property.status === 'for-rent';
		          } else if (activeTab === 'sell') {
		              // For sell tab, we might want different behavior
		              // In this example, we'll just use the same search
		              return matchesSearch;
		          }
		          
		          return matchesSearch;
		      });
		      
		      // Handle the search results
		      if (results.length > 0) {
		          // Store results in sessionStorage so they can be accessed on the search results page
		          sessionStorage.setItem('searchResults', JSON.stringify(results));
		          sessionStorage.setItem('searchTerm', searchTerm);
		          
		          // Redirect to search results page
		          window.location.href = '/search-results';
		      } else {
		          alert('No properties found matching your search criteria');
		      }
		  }
		  
		  // Add event listeners for search button click and Enter key
		  searchBtn.addEventListener('click', handleSearch);
		  
		  searchInput.addEventListener('keypress', function(e) {
		      if (e.key === 'Enter') {
		          handleSearch();
		      }
		  });
		  
		  // Optional: Add autocomplete suggestions for the search input
		  const locations = ["Beachside", "Downtown", "Meadowville", "Shore Dr", "Main St", "Oak Ave"];
		  
		  searchInput.addEventListener('input', function() {
		      const value = this.value.toLowerCase();
		      
		      if (value.length < 2) return; // Only provide suggestions after 2 characters
		      
		      const matchingLocations = locations.filter(loc => 
		          loc.toLowerCase().includes(value)
		      );
		      
		      // You could display matching locations in a dropdown
		      // For a basic implementation, we'll just log them
		      console.log("Suggestions:", matchingLocations);
		      
		      // For a full implementation, you would create and populate a suggestions dropdown here
		  });
		});

		document.addEventListener('DOMContentLoaded', function() {
		    const carousel = document.querySelector('.agents-carousel');
		    const cards = document.querySelectorAll('.carousel-agent-card');
		    const prevBtn = document.querySelector('.carousel-prev');
		    const nextBtn = document.querySelector('.carousel-next');
		    const indicatorsContainer = document.querySelector('.carousel-indicators');
		    
		    // Variables for auto scrolling
		    let currentIndex = 0;
		    let autoScrollInterval;
		    let cardWidth;
		    let cardsPerView;
		    
		    // Create indicators
		    function createIndicators() {
		      // Clear existing indicators
		      indicatorsContainer.innerHTML = '';
		      
		      // Calculate how many indicators we need based on visible cards
		      const totalIndicators = Math.ceil(cards.length / cardsPerView);
		      
		      for (let i = 0; i < totalIndicators; i++) {
		        const indicator = document.createElement('div');
		        indicator.classList.add('carousel-indicator');
		        if (i === 0) indicator.classList.add('active');
		        
		        indicator.addEventListener('click', () => {
		          goToSlide(i);
		          resetAutoScroll();
		        });
		        
		        indicatorsContainer.appendChild(indicator);
		      }
		    }
		    
		    // Calculate card width and cards per view
		    function calculateDimensions() {
		      const containerWidth = carousel.clientWidth;
		      
		      // Get the first card's computed style
		      const computedStyle = window.getComputedStyle(cards[0]);
		      const marginLeft = parseFloat(computedStyle.marginLeft);
		      const marginRight = parseFloat(computedStyle.marginRight);
		      
		      // Calculate card width including margins
		      cardWidth = cards[0].offsetWidth + marginLeft + marginRight;
		      
		      // Calculate how many cards can be shown at once
		      cardsPerView = Math.floor(containerWidth / cardWidth);
		      
		      // Create the indicators based on new dimensions
		      createIndicators();
		    }
		    
		    // Initialize dimensions on load
		    calculateDimensions();
		    
		    // Update on window resize
		    window.addEventListener('resize', () => {
		      calculateDimensions();
		      goToSlide(currentIndex);
		    });
		    
		    // Function to go to a specific slide
		    function goToSlide(index) {
		      // Ensure index is within bounds
		      if (index < 0) index = 0;
		      const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
		      if (index > maxIndex) index = maxIndex;
		      
		      currentIndex = index;
		      
		      // Calculate scroll position
		      const scrollPosition = index * cardsPerView * cardWidth;
		      carousel.scrollTo({
		        left: scrollPosition,
		        behavior: 'smooth'
		      });
		      
		      // Update active indicator
		      document.querySelectorAll('.carousel-indicator').forEach((indicator, i) => {
		        indicator.classList.toggle('active', i === index);
		      });
		    }
		    
		    // Previous button
		    prevBtn.addEventListener('click', () => {
		      goToSlide(currentIndex - 1);
		      resetAutoScroll();
		    });
		    
		    // Next button
		    nextBtn.addEventListener('click', () => {
		      goToSlide(currentIndex + 1);
		      resetAutoScroll();
		    });
		    
		    // Auto scroll function
		    function startAutoScroll() {
		      autoScrollInterval = setInterval(() => {
		        const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
		        if (currentIndex >= maxIndex) {
		          goToSlide(0); // Loop back to the first slide
		        } else {
		          goToSlide(currentIndex + 1);
		        }
		      }, 5000); // Change slide every 5 seconds
		    }
		    
		    // Reset auto scroll
		    function resetAutoScroll() {
		      clearInterval(autoScrollInterval);
		      startAutoScroll();
		    }
		    
		    // Start auto scrolling
		    startAutoScroll();
		    
		    // Pause auto scroll when hovering over carousel
		    carousel.addEventListener('mouseenter', () => {
		      clearInterval(autoScrollInterval);
		    });
		    
		    // Resume auto scroll when mouse leaves carousel
		    carousel.addEventListener('mouseleave', () => {
		      startAutoScroll();
		    });
		  });
		  
		  //popup loginform

		
		 
		  document.addEventListener("DOMContentLoaded", function() {
		      const loginModal = document.getElementById("loginModal");
		      const loginForm = document.getElementById("loginForm");
		      
		      // ✅ Function to check if the user is logged in
		      function checkLoginStatus() {
		          fetch('/check-login')
		              .then(response => response.json())
		              .then(data => {
		                  if (data.loggedIn) {
		                      loginModal.style.display = "none"; // ✅ Hide popup if logged in
		                      document.body.classList.remove("disable-background");
		                  } else {
		                      loginModal.style.display = "block"; // ✅ Show popup if not logged in
		                      document.body.classList.add("disable-background");
		                  }
		              });
		      }

		      // ✅ Check login status on page load
		      checkLoginStatus();

		      // ✅ Handle login form submission
		      loginForm.addEventListener("submit", function(e) {
		          e.preventDefault();
		          
		          const formData = new FormData(loginForm);

		          fetch("/login", {
		              method: "POST",
		              body: new URLSearchParams(formData)
		          })
		          .then(response => response.json())
		          .then(data => {
		              if (data.success) {
		                  alert("Login Successful!");
		                  loginModal.style.display = "none";
		                  document.body.classList.remove("disable-background");
		              } else {
		                  alert("Login Failed: " + data.message);
		              }
		          })
		          .catch(error => console.error("Error:", error));
		      });

		      // ✅ Handle Logout Button Click
		      const logoutButton = document.getElementById("logoutButton"); // Make sure the button has this ID
		      if (logoutButton) {
		          logoutButton.addEventListener("click", function(e) {
		              e.preventDefault();
		              
		              fetch("/logout")
		                  .then(() => {
		                      loginModal.style.display = "block"; // ✅ Show login popup after logout
		                      document.body.classList.add("disable-background");
		                  });
		          });
		      }
		  });
		 
