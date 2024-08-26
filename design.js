document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".banner-image");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const carSections = {
        City: document.getElementById("City"),
        Brv: document.getElementById("Brv"),
        Civic: document.getElementById("Civic"),
        Hrv: document.getElementById("Hrv"),
        Crv: document.getElementById("Crv"),
        Accord: document.getElementById("Accord"),
    };
    const carButtons = document.querySelectorAll("#drop li a");

    // Function to show the specific slide
    function showSlide(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
            dots[i].classList.toggle("active", i === index);
        });
    }

    // Event listeners for the dots
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.getAttribute("data-index"));
            showSlide(currentIndex);
        });
    });

    // Automatic slideshow (optional)
    function autoSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Optional: Set the slideshow to change images automatically every 5 seconds
    setInterval(autoSlide, 5000);

    carButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = button.getAttribute("data-section");

                        // Remove the 'nav-selected' class from all buttons
                        carButtons.forEach(btn => btn.classList.remove("nav-selected"));

                        // Add the 'nav-selected' class to the clicked button
                        button.classList.add("nav-selected");

                        
            for (let section in carSections) {
                if (section === sectionId) {
                    carSections[section].style.display = "block";
                } else {
                    carSections[section].style.display = "none";
                }
            }
        });
    });

    // Initially show the Biryani section and hide the others
    carSections.City.style.display = "block";
    carSections.Brv.style.display = "none";
    carSections.Civic.style.display = "none";
    carSections.Hrv.style.display = "none";
    carSections.Crv.style.display = "none";
    carSections.Accord.style.display = "none";
});
