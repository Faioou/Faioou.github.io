function updateProductsShowcase() {
    var categoriesList = document.getElementById('test')
    var category = categoriesList.options[categoriesList.selectedIndex].value
    var showcaseCards = document.getElementsByClassName("showcase-card");

    // Loop through each element
    for (var i = 0; i < showcaseCards.length; i++) {
        var card = showcaseCards[i];
        var cardId = card.getAttribute("id");

        // Check if the element id matches the category
        if (cardId === category || category === "Todos") {
            // Show the card by setting its display style to "block"
            card.style.display = "block";
        } else {
            // Hide the card by setting its display style to "none"
            card.style.display = "none";
        }
    }
}