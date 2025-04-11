<script>
    import { onMount } from "svelte";
    import Banner from "$lib/components/Banner.svelte";

    // List to receive images content
    export let data;

    let currentIndex = 0;
    let autoSwipeInterval;

    // Function to move to the next slide
    function nextSlide() {
        const totalSlides = data.partnersList.length;
        currentIndex = (currentIndex + 1) % totalSlides;
        updatepartners();
    }

    // Function to update the partners's position
    function updatepartners() {
        const partners = document.querySelector(".partners-track");
        const slideWidth = document.querySelector(".partners-slide").offsetWidth;
        partners.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Start auto-swiping when the component is mounted
    onMount(() => {
        autoSwipeInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
        return () => clearInterval(autoSwipeInterval); // Cleanup on component unmount
    });
</script>

<Banner />

<main class="main">
    <div class="main-content">
        <div class="main-content-section">
            <div class="text-block">
                <h1>Testemunhar É Ajudar</h1>
                <p>A TESTEMUNHAR É AJUDAR (TEA), tem como fim apoiar o doente oncológico, familiares e amigos, desde o momento em que é diagnosticado o cancro. Este apoio baseia-se no contacto pessoal entre o doente e o voluntário (que vivenciou uma situação semelhante), inclusive com fornecimento de bens materiais ao doente. A doação de bens e apoio à investigação clínica do Centro de Mama – CHUSJ, são também objetivos principais da associação. A associação tem ainda como intuito a organização e desenvolvimento de eventos, workshops, ações de formação e educação médica, bem como atividades culturais e recreativas, sendo para isso possível o intercâmbio com outras associações nacionais e internacionais, com o propósito de representar, perante a administração pública, os interesses dos seus associados.</p>
            </div>
            <div class="options">
                <button>Quero Ajudar</button>
                <button>Tornar-me Sócio</button>
            </div>
        </div>

        <div class="main-content-section">
            <h2>Parceiros</h2>
            <div class="partners">
                <div class="partners-container">
                    <div class="partners-track">
                        {#each data.partnersList as item}
                            <div class="partners-slide">
                                <a href="{item.url}">
                                    <img src="{item.image}" alt="{item.description}" />
                                </a>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .main {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-content {
        width: 60%;
    }

    .main-content-section {
        padding: 3rem 0 3rem 0;
    }

    .options {
        padding: 2rem;
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 1rem;
    }

    .partners {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .partners-container {
        width: 100%;
        overflow: hidden;
    }

    .partners-track {
        display: flex;
        transition: transform 0.3s ease-in-out;
    }

    .partners-slide {
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .partners-slide img {
        max-width: 150px;
        filter: grayscale(1);
    }
</style>