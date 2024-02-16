<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import PortableText from '$lib/components/PortableText.svelte';

    export let data;
</script>

<div class = "wrapper">
    <Header />

    <!-- Products -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>Produtos</h1>
            </div>
            <hr>
            <div class = "content-content">
                <select name="test" id="test">
                    <option value = "Todos">Todos</option>
                    {#each data.productsList as block}
                        <option value = {block.category}>{block.category}</option>
                    {/each}
                </select>
                <div class = "showcase">
                    <div class = "showcase-container">
                        {#each data.productsList as block}
                            <div class = "showcase-card">
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

    <Footer />
</div>

