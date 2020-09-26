let btnEl = document.querySelector(".button");
let containerEl = document.querySelector(".container")
let closeEl = document.querySelector(".close")
console.log(closeEl)

function formAnimation() {
    btnEl.addEventListener("click", function() {

        containerEl.classList.add("open");
    })
    closeEl.addEventListener("click", function() {
        containerEl.classList.remove("open");
    })
    containerEl.addEventListener("click", function() {
        if (event.target === containerEl)
            containerEl.classList.remove("open");
    })

}
formAnimation()