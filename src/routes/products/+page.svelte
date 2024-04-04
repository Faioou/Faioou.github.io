<script>
    import PortableText from '$lib/components/PortableText.svelte';
    import { onMount } from 'svelte';

    export let data;

    onMount(() => {
        // Your script loading logic goes here
        const script = document.createElement('script');
        script.src = './js/products-category-filter.js';
        document.body.appendChild(script);
    });
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
                <select name="test" id="test" onchange="updateProductsShowcase()">
                    <option value = "Todos">Todos</option>
                    {#each data.productsList as block}
                        <option value = {block.category}>{block.category}</option>
                    {/each}
                </select>
                <div class = "showcase">
                    <div class = "showcase-container" id = "showcase">
                        {#each data.productsList as block}
                            <div class = "showcase-card" id = {block.category}>
                                <img src="{block.image}" alt="">
                                <h3>{block.title}</h3>
                                <PortableText content = {block.description} />
                                <p id = "highlight"><span>{block.price} €</span></p>
                                <p class = "category">{block.category}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

