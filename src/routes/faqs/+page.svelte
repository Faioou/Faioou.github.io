<script>
    import Header from '$lib/components/Header.svelte';
    import PortableText from '$lib/components/PortableText.svelte'
    import Footer from '$lib/components/Footer.svelte';

    let isActive = false;

    function toggleBtn() {
        isActive = !isActive;
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

                            <div class="expansion-menu">
                                <div class="menu-header">
                                    <h3>{block.question}</h3>
                                    <button class="toggle-btn" on:click={toggleBtn}>&#x25BC;</button>
                                </div>
                                <div class={isActive ? 'menu-content expanded' : 'menu-content'}>
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