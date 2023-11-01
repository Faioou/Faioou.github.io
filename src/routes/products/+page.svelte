<script>
    import Header from '$lib/components/Header.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
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
                <div class = "showcase">
                    <div class = "showcase-container">
                        {#each data.productsList as block}
                            <div class = "showcase-card">
                                <img src="{block.image}" alt="">
                                <h3>{block.title}</h3>
                                <PortableText content = {block.description} />
                                <p id = "highlight"><span>{block.price} €</span></p>
                            </div>
                        {/each}
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer />
</div>

