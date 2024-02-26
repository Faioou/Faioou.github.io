function updateProductsShowcase() {
    var categoriesList = document.getElementById('test')
    var category = categoriesList.options[categoriesList.selectedIndex].value
    var showcaseCards = document.getElementsByClassName("showcase-card");

    // Loop through each element
    for (var i = 0; i < showcaseCards.length; i++) {
        var card = showcaseCards[i];
        var cardId = card.getAttribute("id");

        // If element id equal to category or category is equal to "Todos"
        if (cardId === category || category === "Todos") {
            // Show card
            card.style.display = "block";
        } else {
            // Hide card
            card.style.display = "none";
        }
    }
}