<script>
    import { onMount } from "svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Highlights from "$lib/components/Highlights.svelte";

    // Receive images content
    export let data;
</script>

<Banner content = {data.homepageList}/>

<main class="main">
    <div class="main-content">
        <div class="main-content-section">
            <div class="partners">
                <h2>Parceiros</h2>
                <div class="partners-container">
                    {#each data.partnersList as item}
                        <a href="{item.url}">
                            <img src="{item.image}" alt="{item.description}" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <!-- <Highlights /> -->
    </div>
</main>

<style>
    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .partners {
        padding: 4rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }

    .partners-container {
        margin: 5rem 0 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }

    .partners-container img { max-width: 150px; }

    .partners-container a {
        display: flex;
        align-items: center;
    }
</style>