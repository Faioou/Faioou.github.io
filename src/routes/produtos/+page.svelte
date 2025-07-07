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

<div class = "products">
    <div class="products-content">
        <div class="products-content-section">
            <h1>Produtos</h1>
            <div class="select-box-container">
                <select name="test" id="test" on:change={updateProductsShowcase}>
                    <option value = "Todos">Todos</option>
                    {#each data.categoriesList as block}
                        <option value = {block.title}>{block.title}</option>
                    {/each}
                </select>
            </div>
            <div class = "showcase-container" id = "showcase">
                {#each data.productsList as block}
                    <div class = "showcase-card" id = {block.category}>
                        <img src="{block.image}" alt="{block.description}">
                        <p><b>{block.title}</b></p>
                        <p><b>{block.price} €</b></p>
                        <span class = "category">{block.category}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .products {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .products-content { width: 60%; }

    .products-content-section {
        padding: 3rem 0 3rem 0;
    }

    .select-box-container { margin-bottom: 1rem; }

    .select-box-container select {
        height: 36px;
        padding: 0 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        background: #fff;
        color: #333;
        font-size: 1rem;
        outline: none;
        transition: border 0.2s;
        cursor: pointer;
    }

    .select-box-container select:focus {
        border: 1.5px solid var(--pink-dark);
        box-shadow: 0 0 0 2px rgba(255, 0, 128, 0.1);
    }

    .showcase-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        width: 100%;
        box-sizing: border-box;
    }

    .showcase-card p {
        line-height: 1;
    }

    .showcase-card img {
        max-width: 220px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    span {
        padding: 0.3rem;
        font-size: 0.7rem;
        color: white;
        background-color: var(--pink-dark);
        border-radius: 10px;
    }

</style>

