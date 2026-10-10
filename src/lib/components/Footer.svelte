<script>
    import { onMount } from 'svelte';

    export let partnersList = [];

    const year = new Date().getFullYear();


    // =========================================================
    // INÍCIO DO CARROSSEL DE PARCEIROS
    // =========================================================

    let currentPartnerIndex = 0;
    let visiblePartners = 6;


    function getMaximumIndex() {
        return Math.max(
            0,
            partnersList.length - visiblePartners
        );
    }


    /*
     * Define quantos logótipos aparecem
     * completamente consoante a largura
     * disponível no ecrã.
     */
    function updateVisiblePartners() {

        if (window.innerWidth < 560) {
            visiblePartners = 2;
        }

        else if (window.innerWidth < 800) {
            visiblePartners = 3;
        }

        else if (window.innerWidth < 1100) {
            visiblePartners = 4;
        }

        else if (window.innerWidth < 1400) {
            visiblePartners = 5;
        }

        else {
            visiblePartners = 6;
        }


        /*
         * Se redimensionarmos o browser enquanto
         * estamos no fim do carrossel, garante que
         * o índice continua válido.
         */
        if (currentPartnerIndex > getMaximumIndex()) {
            currentPartnerIndex = getMaximumIndex();
        }
    }


    function previousPartners() {

        if (currentPartnerIndex > 0) {
            currentPartnerIndex -= 1;
        }

    }


    function nextPartners() {

        if (currentPartnerIndex < getMaximumIndex()) {
            currentPartnerIndex += 1;
        }

    }


    onMount(() => {

        updateVisiblePartners();

        window.addEventListener(
            'resize',
            updateVisiblePartners
        );


        return () => {

            window.removeEventListener(
                'resize',
                updateVisiblePartners
            );

        };

    });

    // =========================================================
    // FIM DO CARROSSEL DE PARCEIROS
    // =========================================================
</script>



<!-- =========================================================
     INÍCIO DO FOOTER
     ========================================================= -->

<footer class="footer">


    <!-- =====================================================
         INÍCIO DOS PARCEIROS
         ===================================================== -->

    {#if partnersList.length > 0}

        <section class="footer-partners">

            <!-- Título -->
            <h2 class="footer-partners-title">
                Os nossos parceiros
            </h2>


            <!-- =================================================
                 CARROSSEL
                 ================================================= -->

            <div class="partners-carousel">


                <!-- =============================================
                     JANELA VISÍVEL
                     ============================================= -->

                <div class="partners-viewport">

                    <div
                        class="partners-track"
                        style="
                            transform:
                                translateX(
                                    {-(currentPartnerIndex * 100) / visiblePartners}%
                                );
                        "
                    >

                        {#each partnersList as item}

                            <div
                                class="partner-slide"
                                style="
                                    flex-basis:
                                        {100 / visiblePartners}%;
                                "
                            >

                                {#if item.url}

                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="partner-link"
                                        aria-label={
                                            item.title ||
                                            item.description ||
                                            'Parceiro da Testemunhar é Ajudar'
                                        }
                                    >

                                        <img
                                            src={item.image}
                                            alt={
                                                item.description ||
                                                item.title ||
                                                'Parceiro da Testemunhar é Ajudar'
                                            }
                                            loading="lazy"
                                        />

                                    </a>

                                {:else}

                                    <div class="partner-link">

                                        <img
                                            src={item.image}
                                            alt={
                                                item.description ||
                                                item.title ||
                                                'Parceiro da Testemunhar é Ajudar'
                                            }
                                            loading="lazy"
                                        />

                                    </div>

                                {/if}

                            </div>

                        {/each}

                    </div>

                </div>


                <!-- =============================================
                     SETA ESQUERDA
                     ============================================= -->

                <button
                    type="button"
                    class="partners-arrow partners-arrow-left"
                    class:partners-arrow-disabled={
                        currentPartnerIndex === 0
                    }
                    disabled={
                        currentPartnerIndex === 0
                    }
                    aria-label="Ver parceiros anteriores"
                    onclick={previousPartners}
                >

                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M15 18l-6-6 6-6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                </button>


                <!-- =============================================
                     SETA DIREITA
                     ============================================= -->

                <button
                    type="button"
                    class="partners-arrow partners-arrow-right"
                    class:partners-arrow-disabled={
                        currentPartnerIndex >=
                        getMaximumIndex()
                    }
                    disabled={
                        currentPartnerIndex >=
                        getMaximumIndex()
                    }
                    aria-label="Ver mais parceiros"
                    onclick={nextPartners}
                >

                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M9 6l6 6-6 6"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                </button>

            </div>

        </section>

    {/if}

    <!-- =====================================================
         FIM DOS PARCEIROS
         ===================================================== -->



    <!-- =====================================================
         INÍCIO DO CONTEÚDO PRINCIPAL DO FOOTER
         ===================================================== -->

    <div class="footer-content">


        <!-- ================================================
             CONTACTOS
             ================================================ -->

        <div class="footer-contacts">


            <div class="footer-contacts-item">

                <p class="footer-contact-title">
                    Contactos
                </p>

                <p>
                    geral@testemunhareajudar.pt
                </p>

                <p>
                    +3510000000
                </p>

            </div>



            <div class="footer-contacts-item">

                <p class="footer-contact-title">
                    Sede
                </p>

                <p>
                    Alameda Professor Hernâni Monteiro
                </p>

                <p>
                    4200-319 Porto
                </p>

            </div>



            <div class="footer-contacts-item">

                <p class="footer-contact-title">
                    Casa TEA
                </p>

                <p>
                    Rua de Crestins 18
                </p>

                <p>
                    4470 Moreira da Maia
                </p>

            </div>

        </div>


        <!-- Linha -->
        <div class="footer-divider"></div>


        <!-- ================================================
             ÁREA INFERIOR
             ================================================ -->

        <div class="footer-bottom">

            <p class="footer-copy">

                Copyright © Testemunhar é Ajudar -
                {year}
                | Todos os direitos reservados.

            </p>


            <!-- ============================================
                 REDES SOCIAIS
                 ============================================ -->

            <div class="footer-navbar-social">


                <!-- Instagram -->
                <a
                    href="https://www.instagram.com/testemunhareajudar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Testemunhar é Ajudar"
                >

                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="5"
                            ry="5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        />

                        <circle
                            cx="12"
                            cy="12"
                            r="4"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        />

                        <circle
                            cx="17.5"
                            cy="6.5"
                            r="1"
                            fill="currentColor"
                        />
                    </svg>

                </a>


                <!-- Facebook -->
                <a
                    href="https://www.facebook.com/testemunhareajudar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook da Testemunhar é Ajudar"
                >

                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="
                                M14 8.5
                                V7
                                C14 6.2 14.5 6 15.1 6
                                H17
                                V3.1
                                C16.4 3 15.2 3 14.3 3
                                C11.6 3 10 4.6 10 7.2
                                V8.5
                                H7.5
                                V12
                                H10
                                V21
                                H14
                                V12
                                H16.7
                                L17.2 8.5
                                H14
                                Z
                            "
                        />
                    </svg>

                </a>


                <!-- YouTube -->
                <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube da Testemunhar é Ajudar"
                >

                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="
                                M23 12
                                C23 9.8 22.8 7.9 22.5 6.8
                                C22.2 5.7 21.4 4.9 20.3 4.6
                                C18.8 4.2 15.6 4 12 4
                                C8.4 4 5.2 4.2 3.7 4.6
                                C2.6 4.9 1.8 5.7 1.5 6.8
                                C1.2 7.9 1 9.8 1 12
                                C1 14.2 1.2 16.1 1.5 17.2
                                C1.8 18.3 2.6 19.1 3.7 19.4
                                C5.2 19.8 8.4 20 12 20
                                C15.6 20 18.8 19.8 20.3 19.4
                                C21.4 19.1 22.2 18.3 22.5 17.2
                                C22.8 16.1 23 14.2 23 12
                                Z
                                M10 15.5
                                V8.5
                                L16 12
                                L10 15.5
                                Z
                            "
                        />
                    </svg>

                </a>

            </div>

        </div>

    </div>

    <!-- =====================================================
         FIM DO CONTEÚDO PRINCIPAL DO FOOTER
         ===================================================== -->


</footer>

<!-- =========================================================
     FIM DO FOOTER
     ========================================================= -->



<style>

    /* =========================================================
       FOOTER
       ========================================================= */

    .footer {
        width: 100%;

        display: flex;
        flex-direction: column;

        background-color:
            var(--pink-dark);

        color:
            var(--pink-light);
    }


    .footer p,
    .footer a {
        color:
            var(--pink-light);
    }



    /* =========================================================
       PARCEIROS
       ========================================================= */

    .footer-partners {
        width: 100%;

        padding:
            3rem
            0
            3rem;

        overflow: hidden;

        background-color:
            var(--pink-dark);
    }


    .footer-partners-title {
        margin:
            0
            0
            2.5rem;

        padding:
            0
            1rem;

        color: #ffffff;

        font-family:
            "Cora",
            Georgia,
            "Times New Roman",
            serif;

        font-size:
            clamp(
                2rem,
                3vw,
                3.2rem
            );

        font-weight: 500;
        line-height: 1.05;

        text-align: center;
    }



    /* =========================================================
       CARROSSEL
       ========================================================= */

    .partners-carousel {
        position: relative;

        width: 100%;
    }


    /*
     * A janela ocupa toda a largura.
     *
     * Não há caixas laterais reservadas
     * às setas, por isso os logótipos podem
     * utilizar toda a largura do ecrã.
     */
    .partners-viewport {
        width: 100%;

        overflow: hidden;
    }


    /*
     * Todos os parceiros ficam numa única linha.
     */
    .partners-track {
        width: 100%;

        display: flex;
        flex-direction: row;

        align-items: center;

        transition:
            transform
            500ms
            cubic-bezier(
                0.22,
                1,
                0.36,
                1
            );

        will-change:
            transform;
    }



    /* =========================================================
       CADA PARCEIRO
       ========================================================= */

    /*
     * O flex-basis é calculado diretamente
     * no HTML.
     *
     * Em desktop com 6 parceiros:
     * cada posição ocupa exatamente 1/6.
     *
     * Assim nunca aparece metade
     * de um logótipo.
     */
    .partner-slide {
        flex-grow: 0;
        flex-shrink: 0;

        min-width: 0;

        box-sizing:
            border-box;

        height: 125px;

        padding:
            0
            clamp(
                1rem,
                1.8vw,
                2.4rem
            );

        display: flex;

        align-items: center;
        justify-content: center;
    }


    .partner-link {
        width: 100%;
        height: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        text-decoration: none;
    }


    .partner-link img {
        display: block;

        width: auto;
        height: auto;

        max-width: min(
            220px,
            90%
        );

        max-height: 90px;

        object-fit:
            contain;

        transition:
            transform
            250ms
            ease,
            opacity
            250ms
            ease;
    }


    .partner-link:hover img {
        transform:
            scale(1.04);

        opacity:
            0.88;
    }



    /* =========================================================
       SETAS DO CARROSSEL
       ========================================================= */

    .partners-arrow {
        position: absolute;

        top: 50%;

        z-index: 10;

        width: 48px;
        height: 48px;

        padding: 0;

        transform:
            translateY(-50%);

        border:
            1.5px
            solid
            rgba(
                255,
                255,
                255,
                0.95
            );

        border-radius:
            50%;

        background-color:
            rgba(
                201,
                47,
                99,
                0.15
            );

        color:
            #ffffff;

        cursor:
            pointer;

        display:
            flex;

        align-items:
            center;

        justify-content:
            center;

        backdrop-filter:
            blur(3px);

        transition:
            background-color
            200ms
            ease,
            opacity
            200ms
            ease,
            transform
            200ms
            ease;
    }


    /*
     * As setas ficam praticamente
     * encostadas às extremidades do site.
     */
    .partners-arrow-left {
        left: 16px;
    }


    .partners-arrow-right {
        right: 16px;
    }


    .partners-arrow svg {
        display: block;

        width: 24px;
        height: 24px;
    }


    .partners-arrow:not(:disabled):hover {
        transform:
            translateY(-50%)
            scale(1.07);

        background-color:
            rgba(
                255,
                255,
                255,
                0.18
            );
    }


    .partners-arrow-disabled,
    .partners-arrow:disabled {
        opacity:
            0.28;

        cursor:
            default;
    }



    /* =========================================================
       CONTEÚDO PRINCIPAL DO FOOTER
       ========================================================= */

    .footer-content {
        width: min(
            1400px,
            90%
        );

        margin:
            0
            auto;

        padding:
            1rem
            1rem
            1.75rem;

        box-sizing:
            border-box;

        font-size:
            0.9rem;
    }



    /* =========================================================
       CONTACTOS
       ========================================================= */

    .footer-contacts {
        width: 100%;

        display: grid;

        grid-template-columns:
            repeat(
                3,
                minmax(
                    0,
                    1fr
                )
            );

        gap:
            2rem;
    }


    .footer-contacts-item {
        text-align:
            center;
    }


    .footer-contacts-item p {
        margin:
            0.4rem
            0;

        line-height:
            1.4;
    }


    .footer-contact-title {
        margin-bottom:
            0.85rem !important;

        color:
            #ffffff !important;

        font-weight:
            600;
    }



    /* =========================================================
       DIVISOR
       ========================================================= */

    .footer-divider {
        width: 100%;
        height: 1px;

        margin:
            2rem
            0
            1.5rem;

        background-color:
            rgba(
                255,
                255,
                255,
                0.18
            );
    }



    /* =========================================================
       FOOTER INFERIOR
       ========================================================= */

    .footer-bottom {
        width: 100%;

        display: flex;

        align-items: center;
        justify-content: space-between;

        gap:
            2rem;
    }


    .footer-copy {
        margin: 0;

        line-height:
            1.5;
    }



    /* =========================================================
       REDES SOCIAIS
       ========================================================= */

    .footer-navbar-social {
        display: flex;

        align-items: center;

        gap:
            0.9rem;
    }


    .footer-navbar-social a {
        width: 32px;
        height: 32px;

        display: flex;

        align-items: center;
        justify-content: center;

        text-decoration:
            none;

        transition:
            transform
            200ms
            ease,
            opacity
            200ms
            ease;
    }


    .footer-navbar-social a:hover {
        transform:
            translateY(-2px);

        opacity:
            0.8;
    }


    .footer-navbar-social svg {
        width: 21px;
        height: 21px;

        color:
            var(--pink-light);
    }



    /* =========================================================
       TABLET
       ========================================================= */

    @media screen and (max-width: 900px) {

        .footer-content {
            width:
                94%;
        }


        .footer-contacts {
            grid-template-columns:
                1fr;
        }


        .footer-bottom {
            flex-direction:
                column;

            text-align:
                center;
        }

    }



    /* =========================================================
       TELEMÓVEL
       ========================================================= */

    @media screen and (max-width: 560px) {

        .footer-partners {
            padding:
                2.5rem
                0
                2.25rem;
        }


        .footer-partners-title {
            margin-bottom:
                1.75rem;

            font-size:
                2rem;
        }


        .partner-slide {
            height:
                100px;

            padding:
                0
                1rem;
        }


        .partner-link img {
            max-width:
                85%;

            max-height:
                70px;
        }


        .partners-arrow {
            width:
                38px;

            height:
                38px;
        }


        .partners-arrow-left {
            left:
                8px;
        }


        .partners-arrow-right {
            right:
                8px;
        }


        .partners-arrow svg {
            width:
                19px;

            height:
                19px;
        }


        .footer-content {
            width:
                100%;

            padding:
                1rem
                1.5rem
                1.75rem;
        }

    }



    /* =========================================================
       ACESSIBILIDADE
       ========================================================= */

    @media (
        prefers-reduced-motion:
        reduce
    ) {

        .partners-track,
        .partner-link img,
        .partners-arrow,
        .footer-navbar-social a {
            transition:
                none;
        }

    }

</style>