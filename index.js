const stars = document.getElementsByClassName("star");
let currentRating = 0;

Array.from(stars).forEach((star, index) => {
    star.addEventListener("mouseover", () => {
        if (currentRating < index + 1) {
            // Add "active" class to stars up to the current index
            star.classList.add("active");
            currentRating = index + 1;
            console.log(currentRating);
        }
        else if(currentRating >= 5) {
            currentRating -= 1;
            star.classList.remove("active");
            console.log(currentRating);
        }
    });
});
