<script>
    import PortableText from '$lib/components/PortableText.svelte'

    let isActive = [];

    // Update the value of 'isActive' from True to False at button click
    function toggleBtn(index) {
        isActive[index] = !isActive[index];
    }

    export let data;
</script>

<div class="wrapper">
    <div class = "faqs">
        <h1>FAQs</h1>
        <hr>
        <div class = "faqs-content">
            <div class="faqs-list">
                {#each data.faqsList as block, i}
                    <div class = "faqs-list-item">
                        <div class="expansion-item">
                            <div class="item-header">
                                <h3>{block.question}</h3>
                                <!--
                                    on:click={() => toggleBtn(i)}: This syntax uses an arrow function as the event handler.
                                    The arrow function is executed only when the element is clicked, and it then calls the toggleBtn function with the argument i.
                                -->
                                <button class={isActive[i] ? 'toggle-btn active' : 'toggle-btn'} on:click={() => toggleBtn(i)}>&#x25BA;</button>
                            </div>
                            <div class={isActive[i] ? 'item-content expanded' : 'item-content'}>
                                <PortableText content = {block.answer} />
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .faqs {
        padding: 2rem;
        height: auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .faqs-content {
        width: 100%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .expansion-item {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    }

    .item-header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .toggle-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        transition: transform 0.3s ease; /* Add transition for smooth rotation */
    }

    .active {
        transform: rotate(90deg);/* Rotate the button 90 degrees when clicked */
    }

    .item-content {
        display: none;
        padding: 10px;
    }

    .expanded {
        display: block;
    }

    .faqs-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .faqs-list-item {
        padding: 1rem 2rem;
        margin-bottom: 2rem;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 1280px) {
        .faqs-list-item {
            padding: 0 2rem;
            width: 100%;
        }
    }
</style>