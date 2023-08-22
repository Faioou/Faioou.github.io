<script>
    export let content;

    console.log("CONTENT: ", content)
    console.log("CONTENT: ", content[0].children[0])
    console.log("CONTENT: ", content[1].children[0])
    console.log("CONTENT: ", content[2].children[0])
    console.log("CONTENT: ", content[2].children[0].marks)

</script>

{#each content as block}
    {block._type}
    {#if block._type === 'block'}
        {#if block.children[0].marks[0] === 'strong'}
            <strong>{block.children[0].text}</strong>
        {:else}
            {block.children[0].text}
        {/if}
    {/if}
{/each}