<script>
    import Header from '$lib/components/Header.svelte';
    import PortableText from '$lib/components/PortableText.svelte'
    import Footer from '$lib/components/Footer.svelte';

    let isActive = [];

    // Update the value of 'isActive' from True to False at button click
    function toggleBtn(index) {
        isActive[index] = !isActive[index];
    }

    export let data;
</script>

<div class = "wrapper">
    <Header />

    <!-- FAQs -->
    <div class = "content">
        <div class = "content-container">
            <div class = "content-title">
                <h1>FAQs</h1>
            </div>
            <hr>
            <div class = "content-content">
                <div class="showcase-faqs">
                    {#each data.faqsList as block, i}
                        <div class = "showcase-faqs-item">
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

    <!-- <Footer /> -->
</div>