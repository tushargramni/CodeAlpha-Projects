const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    //Iterate over each filterable cards
    filterableCards.forEach(card => {
        card.classList.add("hide");
        //check if the card matches the selected filter or 'all' selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })

    // console.log(e.target);
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));