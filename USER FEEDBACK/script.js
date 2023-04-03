const ratingEls = document.querySelectorAll(".rating");
//using els bcz there 3 div with class name rating 


const btnEl = document.getElementById("btn")

const containerEl = document.getElementById("container")


let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        // console.log(event.target.innerText || event.target.parentNode.innerText); 
        // its to check whether its working or not

        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank You :)</strong>
        <br><br>
        <strong>Feedback : ${selectedRating}</strong>
        <br><br>
        <p>We'll use your feedback to improve
        our customer support.</p>
        `
    }
})

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}