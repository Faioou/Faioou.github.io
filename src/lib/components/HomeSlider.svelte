<script>
    import { onMount } from 'svelte';

    import mulheresUnidas from '$lib/assets/home/mulheres-unidas.webp';
    import mulheresUnidasMobile from '$lib/assets/home/mulheres-unidas_mobile.webp';



    // =========================================================
    // INÍCIO DOS SLIDES
    // =========================================================

    /*
     * Cada slide concentra:
     *
     * - imagens desktop e mobile;
     * - conteúdo textual;
     * - página de destino do botão;
     * - enquadramento da imagem;
     * - cores próprias do slide.
     *
     * Assim, para criar um novo slide, basta duplicar
     * um objeto e alterar os seus valores.
     */

    const slides = [
        {
            // -------------------------------------------------
            // IMAGENS
            // -------------------------------------------------

            image:
                mulheresUnidas,

            mobileImage:
                mulheresUnidasMobile,

            alt:
                'Grupo de mulheres unido no apoio a quem enfrenta o cancro da mama',


            // -------------------------------------------------
            // CONTEÚDO
            // -------------------------------------------------

            title:
                'Estamos consigo,',

            highlight:
                'em cada etapa.',

            subtitle:
                'Na Testemunhar é Ajudar, acreditamos que ninguém deve enfrentar o cancro da mama sozinho. Criamos uma rede de proximidade, apoio e esperança para doentes, familiares e amigos.',

            button:
                'Veja como ajudamos',

            href:
                '/atividades',


            // -------------------------------------------------
            // ENQUADRAMENTO DA IMAGEM
            // -------------------------------------------------

            /*
             * Valor positivo em TranslateX:
             * desloca a fotografia para a direita.
             *
             * Scale permite um pequeno zoom para evitar
             * margens vazias quando a imagem é deslocada.
             */

            mobileTranslateX:
                '4%',

            mobileScale:
                '1.28',

            desktopTranslateX:
                '13%',

            desktopScale:
                '1',


            // -------------------------------------------------
            // CORES DO SLIDE
            // -------------------------------------------------

            /*
             * Cada slide pode ter a sua própria combinação
             * de cores sem alterar o CSS do componente.
             *
             * Neste slide:
             * título, highlight e subtítulo usam o cinzento
             * principal da paleta (#4B4548).
             */

            titleColor:
                '#354A54',

            highlightColor:
                '#354A54',

            subtitleColor:
                '#354A54',

            buttonBackgroundColor:
                '#354A54',

            buttonTextColor:
                '#FFFFFF',

            buttonHoverBackgroundColor:
                '#F1B9C9',

            buttonHoverTextColor:
                '#354A54'
        }
    ];

    // =========================================================
    // FIM DOS SLIDES
    // =========================================================





    // =========================================================
    // INÍCIO DO CONTROLO DO SLIDER
    // =========================================================

    let activeIndex = 0;



    // Avança para o slide seguinte.
    function nextSlide() {
        activeIndex =
            (activeIndex + 1) % slides.length;
    }



    // Volta ao slide anterior.
    function previousSlide() {
        activeIndex =
            (activeIndex - 1 + slides.length) % slides.length;
    }



    // Permite selecionar diretamente um slide.
    function goToSlide(index) {
        activeIndex = index;
    }



    /*
     * Mudança automática a cada 5 segundos.
     *
     * Com apenas um slide não é criado temporizador.
     */
    onMount(() => {
        if (slides.length <= 1) {
            return;
        }

        const interval = setInterval(
            nextSlide,
            5000
        );

        return () => {
            clearInterval(interval);
        };
    });

    // =========================================================
    // FIM DO CONTROLO DO SLIDER
    // =========================================================
</script>





<!-- =========================================================
     INÍCIO DO SLIDER DA PÁGINA PRINCIPAL
     ========================================================= -->

<section
    class="
        home-slider

        relative

        min-h-[calc(100svh-80px)]

        w-full

        overflow-hidden

        bg-[#FCDFE4]

        lg:min-h-[calc(100svh-100px)]
    "

    aria-label="Destaques"

    style={`
        --title-color:
            ${slides[activeIndex].titleColor};

        --highlight-color:
            ${slides[activeIndex].highlightColor};

        --subtitle-color:
            ${slides[activeIndex].subtitleColor};

        --button-background-color:
            ${slides[activeIndex].buttonBackgroundColor};

        --button-text-color:
            ${slides[activeIndex].buttonTextColor};

        --button-hover-background-color:
            ${slides[activeIndex].buttonHoverBackgroundColor};

        --button-hover-text-color:
            ${slides[activeIndex].buttonHoverTextColor};
    `}
>

    {#key activeIndex}


        <!-- =====================================================
             INÍCIO DA IMAGEM
             ===================================================== -->

        <div
            class="
                home-slider-image-enter

                absolute
                inset-0

                overflow-hidden

                [--image-x:var(--mobile-image-x)]
                [--image-scale:var(--mobile-image-scale)]

                lg:[--image-x:var(--desktop-image-x)]
                lg:[--image-scale:var(--desktop-image-scale)]
            "

            style={`
                --mobile-image-x:
                    ${slides[activeIndex].mobileTranslateX};

                --mobile-image-scale:
                    ${slides[activeIndex].mobileScale};

                --desktop-image-x:
                    ${slides[activeIndex].desktopTranslateX};

                --desktop-image-scale:
                    ${slides[activeIndex].desktopScale};
            `}
        >

            <picture class="block h-full w-full">

                <!-- Imagem vertical usada até 1023 px -->
                <source
                    media="(max-width: 1023px)"
                    srcset={slides[activeIndex].mobileImage}
                />


                <!-- Imagem horizontal usada em desktop -->
                <img
                    src={slides[activeIndex].image}

                    alt={slides[activeIndex].alt}

                    loading="eager"
                    decoding="async"
                    fetchpriority="high"

                    class="
                        home-slider-image

                        block

                        h-full
                        w-full

                        object-cover
                        object-center
                    "
                />

            </picture>



            <!-- =================================================
                 DEGRADÉ DE DESKTOP
                 ================================================= -->

            <!--
                A imagem mobile já foi preparada com espaço
                suficiente para receber o texto.

                O degradé só é necessário em desktop.
            -->

            <div
                class="
                    absolute
                    inset-0

                    hidden

                    lg:block

                    lg:bg-gradient-to-r

                    lg:from-[#FCDFE4]
                    lg:via-[#FCDFE4]/65
                    lg:to-transparent
                "
            ></div>

            <!-- =================================================
                 FIM DO DEGRADÉ DE DESKTOP
                 ================================================= -->

        </div>

        <!-- =====================================================
             FIM DA IMAGEM
             ===================================================== -->





        <!-- =====================================================
             INÍCIO DO CONTEÚDO
             ===================================================== -->

        <div
            class="
                relative
                z-10

                mx-auto

                flex

                min-h-[calc(100svh-80px)]

                w-full
                max-w-[1600px]

                items-start
                justify-center

                px-6
                pt-7
                pb-6

                sm:px-8
                sm:pt-9

                lg:min-h-[calc(100svh-100px)]

                lg:items-center
                lg:justify-start

                lg:px-12
                lg:py-16

                xl:px-16
            "
        >

            <div
                class="
                    home-slider-copy-enter

                    flex

                    w-full
                    max-w-[26rem]

                    flex-col

                    items-center

                    text-center

                    lg:max-w-[38rem]

                    lg:items-start
                    lg:text-left
                "
            >


                <!-- =================================================
                     TÍTULO + HIGHLIGHT
                     Fonte: CORA
                     ================================================= -->

                <h1 class="home-slider-title">

                    {slides[activeIndex].title}


                    {#if slides[activeIndex].highlight}

                        <span class="home-slider-highlight">
                            {slides[activeIndex].highlight}
                        </span>

                    {/if}

                </h1>

                <!-- =================================================
                     FIM DO TÍTULO
                     ================================================= -->





                <!-- =================================================
                     SUBTÍTULO
                     Fonte: EINA
                     ================================================= -->

                <p class="home-slider-subtitle">
                    {slides[activeIndex].subtitle}
                </p>

                <!-- =================================================
                     FIM DO SUBTÍTULO
                     ================================================= -->





                <!-- =================================================
                     BOTÃO
                     Fonte: EINA
                     ================================================= -->

                <a
                    href={slides[activeIndex].href}

                    class="
                        home-slider-button

                        mt-5

                        inline-flex

                        items-center
                        justify-center

                        gap-3

                        px-6
                        py-3

                        sm:mt-6

                        lg:mt-8
                        lg:px-7
                        lg:py-4
                    "
                >

                    <span>
                        {slides[activeIndex].button}
                    </span>

                </a>

                <!-- =================================================
                     FIM DO BOTÃO
                     ================================================= -->


            </div>

        </div>

        <!-- =====================================================
             FIM DO CONTEÚDO
             ===================================================== -->


    {/key}





    <!-- =========================================================
         INÍCIO DA NAVEGAÇÃO DO SLIDER
         ========================================================= -->

    <!--
        Setas e indicadores só aparecem
        quando existem dois ou mais slides.
    -->

    {#if slides.length > 1}


        <!-- Slide anterior -->
        <button
            type="button"

            onclick={previousSlide}

            aria-label="Slide anterior"

            class="
                absolute

                left-4
                top-1/2
                z-20

                hidden

                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full
                border-0

                bg-white/90

                text-xl
                text-[#4B4548]

                shadow-sm

                transition

                hover:bg-white

                lg:flex
            "
        >
            ‹
        </button>



        <!-- Slide seguinte -->
        <button
            type="button"

            onclick={nextSlide}

            aria-label="Slide seguinte"

            class="
                absolute

                right-4
                top-1/2
                z-20

                hidden

                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full
                border-0

                bg-white/90

                text-xl
                text-[#4B4548]

                shadow-sm

                transition

                hover:bg-white

                lg:flex
            "
        >
            ›
        </button>



        <!-- Indicadores -->
        <div
            class="
                absolute

                bottom-5
                left-1/2
                z-20

                flex

                -translate-x-1/2

                gap-2

                lg:bottom-6
            "
        >

            {#each slides as _, index}

                <button
                    type="button"

                    onclick={() => goToSlide(index)}

                    aria-label={`Ir para slide ${index + 1}`}

                    class={`
                        h-2.5

                        rounded-full
                        border-0

                        transition-all
                        duration-300

                        ${
                            index === activeIndex
                                ? 'w-8 bg-[#C92F63]'
                                : 'w-2.5 bg-[#EB92A8]/70'
                        }
                    `}
                ></button>

            {/each}

        </div>


    {/if}

    <!-- =========================================================
         FIM DA NAVEGAÇÃO DO SLIDER
         ========================================================= -->


</section>

<!-- =========================================================
     FIM DO SLIDER DA PÁGINA PRINCIPAL
     ========================================================= -->





<style>

    /* =========================================================
       INÍCIO DA IMAGEM
       ========================================================= */

    /*
     * O enquadramento é definido individualmente
     * no objeto de cada slide.
     */
    .home-slider-image {
        transform:
            translateX(var(--image-x))
            scale(var(--image-scale));

        transform-origin: center;
    }

    /* =========================================================
       FIM DA IMAGEM
       ========================================================= */





    /* =========================================================
       INÍCIO DA TIPOGRAFIA
       ========================================================= */

    /*
     * TÍTULO
     *
     * Fonte:
     * CORA MEDIUM
     */
    .home-slider-title {
        margin: 0;

        max-width: 38rem;

        font-family:
            "Cora",
            Georgia,
            "Times New Roman",
            serif;

        font-size:
            clamp(
                1.75rem,
                5vw,
                4.5rem
            );

        font-weight: 500;

        line-height: 1.02;

        letter-spacing: -0.025em;

        color:
            var(
                --title-color,
                #4B4548
            );
    }



    /*
     * HIGHLIGHT
     *
     * Herda a fonte Cora do título,
     * mas pode ter uma cor diferente em cada slide.
     */
    .home-slider-highlight {
        display: block;

        margin-top: 0.12em;

        color:
            var(
                --highlight-color,
                #4B4548
            );
    }



    /*
     * SUBTÍTULO
     *
     * Fonte:
     * EINA 02 REGULAR
     */
    .home-slider-subtitle {
        max-width: 34rem;

        margin:
            1.1rem
            0
            0;

        font-family:
            "Eina 02",
            system-ui,
            sans-serif;

        font-size:
            clamp(
                0.9rem,
                2vw,
                1.125rem
            );

        font-weight: 400;

        line-height: 1.55;

        color:
            var(
                --subtitle-color,
                #4B4548
            );
    }



    /*
     * BOTÃO
     *
     * Fonte:
     * EINA 02 SEMIBOLD
     *
     * No hover só muda de cor.
     * O botão NÃO se desloca.
     */
    .home-slider-button {
        border-radius: 18px;

        background-color:
            var(
                --button-background-color,
                #C92F63
            );

        color:
            var(
                --button-text-color,
                #FFFFFF
            );

        font-family:
            "Eina 02",
            system-ui,
            sans-serif;

        font-size: 0.95rem;

        font-weight: 600;

        line-height: 1;

        text-decoration: none;

        white-space: nowrap;

        transition:
            background-color 250ms ease,
            color 250ms ease;
    }


    .home-slider-button:hover {
        background-color:
            var(
                --button-hover-background-color,
                #B52756
            );

        color:
            var(
                --button-hover-text-color,
                #FFFFFF
            );
    }

    /* =========================================================
       FIM DA TIPOGRAFIA
       ========================================================= */





    /* =========================================================
       INÍCIO DAS ANIMAÇÕES
       ========================================================= */

    /*
     * A nova imagem entra pela direita.
     */
    .home-slider-image-enter {
        animation:
            home-slider-image-in
            900ms
            cubic-bezier(
                0.22,
                1,
                0.36,
                1
            )
            both;
    }


    @keyframes home-slider-image-in {

        from {
            opacity: 0;

            transform:
                translateX(8%);
        }


        to {
            opacity: 1;

            transform:
                translateX(0);
        }

    }



    /*
     * O conteúdo aparece ligeiramente
     * depois da imagem e sobe suavemente.
     */
    .home-slider-copy-enter {
        animation:
            home-slider-copy-in
            750ms
            cubic-bezier(
                0.22,
                1,
                0.36,
                1
            )
            280ms
            both;
    }


    @keyframes home-slider-copy-in {

        from {
            opacity: 0;

            transform:
                translateY(28px);
        }


        to {
            opacity: 1;

            transform:
                translateY(0);
        }

    }

    /* =========================================================
       FIM DAS ANIMAÇÕES
       ========================================================= */





    /* =========================================================
       INÍCIO DA ACESSIBILIDADE
       ========================================================= */

    /*
     * Esta media query não controla o layout.
     * Apenas respeita a preferência do utilizador
     * por menos movimento.
     */
    @media (prefers-reduced-motion: reduce) {

        .home-slider-image-enter,
        .home-slider-copy-enter {
            animation: none;
        }

    }

    /* =========================================================
       FIM DA ACESSIBILIDADE
       ========================================================= */

</style>
