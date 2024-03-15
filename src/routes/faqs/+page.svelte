<script>
    import Header from '$lib/components/Header.svelte';
    import PortableText from '$lib/components/PortableText.svelte'
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        // Your script loading logic goes here
        const script = document.createElement('script');
        script.src = './js/arrow-toggle.js';
        document.body.appendChild(script);
    });

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
                    {#each data.faqsList as block}
                        <div class = "showcase-faqs-item">

                            <div class="expansion-menu">
                                <div class="menu-header">
                                    <h3>{block.question}</h3>
                                    <button class="toggle-btn">&#x25BC;</button>
                                </div>
                                <div class="menu-content">
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