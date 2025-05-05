<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let content
</script>

<div class="events-content">
    <h2>Últimos Eventos</h2>
    <div class="events-container">
        {#each content as block}
            <div class="event">
                <div class = "text-block">
                    <div class="text-block-segment">
                        <h3>{block.title}</h3>
                    </div>
                    <div class="text-block-segment">
                        <p>{block.description}</p>
                    </div>
                    <div class="text-block-segment">
                        <p>{block.date}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>


<style>
    .events-content {
        background-color: var(--pink-light);
    }

    .events-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .event {
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