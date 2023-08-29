<script>
    import SanityImage from "$lib/components/SanityImage.svelte";
    export let content;
</script>

{#each content as block}
    {#if block._type === 'block'}
        {#if block.children[0].marks.includes('strong')}
            <strong>{block.children[0].text}</strong>
        {/if}
        {#if block.children[0].marks.includes('em')}
            <i>{block.children[0].text}</i>
        {:else}
            <p>{block.children[0].text}</p>
        {/if}
    {/if}
    {#if block._type === 'image'}
        <SanityImage image_ref = {block.asset._ref} />
    {/if}
{/each}