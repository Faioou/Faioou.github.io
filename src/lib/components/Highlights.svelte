<script>
    import PortableText from "$lib/components/PortableText.svelte"
</script>

<div class="highlights-content">
    <h2>Destaques</h2>
    <div class="highlights-container">
        <!-- {#each content as block} -->
            <div class="highlight">
                <div class = "text-block">
                    <div class="text-block-segment">
                        <h3>Jantar</h3>
                    </div>
                    <div class="text-block-segment">
                        <p>Jantar TEA</p>
                    </div>
                    <div class="text-block-segment">
                        <p>Outubro, 2025</p>
                    </div>
                </div>
            </div>
        <!-- {/each} -->
    </div>
</div>


<style>
    .highlights-content {
        padding: 2rem 0;
        min-height: 50vh;
        text-align: center;
        background-color: var(--pink-light);
    }

    .highlights-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .highlight {
        max-width: 300px;
        min-height: 360px;
        padding: .5rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        border: solid 1px var(--pink-regular);
        border-radius: 10px;
    }

    .text-block {
        display: flex;
        flex-direction: column;
    }

    .text-block-segment {
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>