<script>
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;

    // Product category filter
    const updateProductsShowcase = () => {
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

</script>

<div class = "wrapper">

    <!-- Products -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>Produtos</h1>
            </div>
            <hr>
            <div class = "content-content">
                <select name="test" id="test" on:change={updateProductsShowcase}>
                    <option value = "Todos">Todos</option>
                    {#each data.categoriesList as block}
                        <option value = {block.title}>{block.title}</option>
                    {/each}
                </select>
                <div class = "showcase-container" id = "showcase">
                    {#each data.productsList as block}
                        <div class = "showcase-card" id = {block.category}>
                            <img src="{block.image}" alt="">
                            <h3>{block.title}</h3>
                            <PortableText content = {block.description} />
                            <p><b>{block.price} €</b></p>
                            <p class = "category">{block.category}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

</div>

