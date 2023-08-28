<script>
    export let content;

    console.log(content)

    //https://cdn.sanity.io/images/94cqfhj8/production/867274900aeff964cfa958bcf00c590de74ae466-542x325.png?rect=27,0,488,325&w=600&h=400&fit=fillmax

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
        <img src="" alt="">
    {/if}
{/each}