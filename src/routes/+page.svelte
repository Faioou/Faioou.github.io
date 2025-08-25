<script>
    import { onMount } from "svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Highlights from "$lib/components/Highlights.svelte";

    // List to receive images content
    export let data;

    // let currentIndex = 0;
    // let autoSwipeInterval;

    // // Function to move to the next slide
    // function nextSlide() {
    //     const totalSlides = data.partnersList.length;
    //     currentIndex = (currentIndex + 1) % totalSlides;
    //     updatepartners();
    // }

    // // Function to update the partners's position
    // function updatepartners() {
    //     const partners = document.querySelector(".partners-track");
    //     const slideWidth = document.querySelector(".partners-slide").offsetWidth;
    //     partners.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    // }

    // // Start auto-swiping when the component is mounted
    // onMount(() => {
    //     autoSwipeInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    //     return () => clearInterval(autoSwipeInterval); // Cleanup on component unmount
    // });
</script>

<Banner />

<main class="main">
    <div class="main-content">
        <div class="main-content-section">
            <div class="partners">
                <h2>Parceiros</h2>
                <div class="partners-container">
                    {#each data.partnersList as item}
                        <a href="{item.url}">
                            <img src="{item.image}" alt="{item.description}" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>

        <Highlights />
    </div>
</main>

<style>
    .main {
        width: 100%;
        /* padding: 2rem; */
        display: flex;
        flex-direction: column;
    }

    .partners {
        padding: 4rem 0;
        width: 100%;
        text-align: center;
    }

    .partners-container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .partners-container img {
        max-width: 150px;
        filter: grayscale(1);
    }

    .partners-container a {
        display: flex;
        align-items: center;
    }
</style>