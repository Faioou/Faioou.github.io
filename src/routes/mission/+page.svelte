<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "wrapper">
    <div class = "text-container">
        <h1>Missão e Propósito</h1>
        {#each data.missionData as block}
            <div class = "text-block">
                <h2>{block.title}</h2>
                <PortableText content = {block.body} />
            </div>
        {/each}
    </div>
</div>