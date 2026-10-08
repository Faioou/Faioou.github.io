<script>
    import logo from '$lib/assets/TEA_web.svg';

    let menuOpen = false;


    // =========================================================
    // INÍCIO DAS FUNÇÕES DO MENU
    // =========================================================

    // Abre ou fecha o menu fullscreen.
    function toggleMenu() {
        // Ao abrir, garante que o menu começa no topo da página.
        if (!menuOpen) {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
        }

        menuOpen = !menuOpen;
    }


    // Fecha o menu depois de escolher uma opção.
    function closeMenu() {
        menuOpen = false;
    }

    // =========================================================
    // FIM DAS FUNÇÕES DO MENU
    // =========================================================
</script>



<!-- =========================================================
     INÍCIO DO CABEÇALHO (NÃO ALTERAR OS VALORES DA CLASS="")
     ========================================================= -->

<header class="site-header">

    <div
        class="
            grid
            min-h-20
            w-full
            grid-cols-[minmax(0,1fr)_auto]
            items-center
            px-4

            sm:px-6

            lg:min-h-[100px]
            lg:grid-cols-[max-content_minmax(1.5rem,1fr)_max-content_minmax(1.5rem,1fr)_max-content_minmax(1.5rem,1fr)_max-content]
            lg:px-8

            xl:px-10

            2xl:px-12
        "
    >

        <!-- =====================================================
             LOGÓTIPO
             ===================================================== -->

        <a
            href="/"
            class="
                site-logo
                lg:col-start-1
            "
            aria-label="Página inicial"
        >
            <img
                src={logo}
                alt="Testemunhar é Ajudar"
                class="
                    block
                    h-auto
                    w-[190px]

                    lg:w-[230px]

                    xl:w-[280px]
                "
            />
        </a>

        <!-- =====================================================
             FIM DO LOGÓTIPO
             ===================================================== -->



        <!-- =====================================================
             GRUPO DE HIPERLINKS
             ===================================================== -->

        <nav
            class:header-nav-hidden={menuOpen}
            class="
                header-nav
                font-eina

                hidden
                items-center
                justify-center

                lg:col-start-3
                lg:flex
                lg:gap-x-[70px] 

                xl:gap-x-[90px]

                2xl:gap-x-[110px]
            "
            aria-label="Navegação principal"
        >
            <a
                href="/"
                class="header-nav-link"
            >
                Sobre nós
            </a>

            <a
                href="/atividades"
                class="header-nav-link"
            >
                Atividades
            </a>

            <a
                href="/atividades"
                class="header-nav-link"
            >
                Testemunhos
            </a>
        </nav>

        <!-- =====================================================
             FIM DO GRUPO DE HIPERLINKS
             ===================================================== -->



        <!-- =====================================================
             BOTÃO APOIAR
             ===================================================== -->

        <a
            href="/doar"
            class:header-action-hidden={menuOpen}
            class="
                donate-button
                font-eina
                hidden

                lg:col-start-5
                lg:inline-flex
            "
        >
            <span class="donate-content">

                <!-- Centro da animação -->
                <span class="donate-heart-origin">

                    <!-- Onda nasce exatamente no centro do coração -->
                    <span class="donate-wave"></span>

                    <!-- Coração -->
                    <svg
                        class="donate-heart"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M12 21s-7.2-4.35-9.6-8.4C.4 9.2 2.2 5 6.1 5c2.2 0 3.7 1.3 4.6 2.5C11.6 6.3 13.1 5 15.3 5c3.9 0 5.7 4.2 3.7 7.6C16.6 16.65 12 21 12 21z"
                        />
                    </svg>

                </span>

                <span class="donate-label">
                    Apoiar
                </span>

            </span>
        </a>

        <!-- =====================================================
             FIM DO BOTÃO APOIAR
             ===================================================== -->



        <!-- =====================================================
            HAMBURGER / CRUZ
            ===================================================== -->

        <button
            type="button"
            class="
                menu-button
                group

                relative
                flex
                h-12
                w-12

                cursor-pointer
                appearance-none
                items-center
                justify-center
                justify-self-end

                border-0
                bg-transparent
                p-0
                shadow-none

                lg:col-start-7
            "
            onclick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
            <span class="sr-only">
                {menuOpen ? 'Fechar menu' : 'Abrir menu'}
            </span>


            <!-- Linha superior -->
            <span
                class={`
                    absolute
                    h-[4px]
                    w-[34px]
                    rounded-full
                    transition-all
                    duration-300

                    ${
                        menuOpen
                            ? 'translate-y-0 rotate-45 bg-[#C92F63] lg:bg-white'
                            : '-translate-y-[9px] bg-[#EB92A8] group-hover:-translate-y-[11px]'
                    }
                `}
            ></span>


            <!-- Linha central -->
            <span
                class={`
                    absolute
                    h-[4px]
                    w-[34px]
                    rounded-full
                    transition-all
                    duration-200

                    ${
                        menuOpen
                            ? 'opacity-0'
                            : 'opacity-100 bg-[#EB92A8]'
                    }
                `}
            ></span>


            <!-- Linha inferior -->
            <span
                class={`
                    absolute
                    h-[4px]
                    w-[34px]
                    rounded-full
                    transition-all
                    duration-300

                    ${
                        menuOpen
                            ? 'translate-y-0 -rotate-45 bg-[#C92F63] lg:bg-white'
                            : 'translate-y-[9px] bg-[#EB92A8] group-hover:translate-y-[11px]'
                    }
                `}
            ></span>


        </button>

        <!-- =====================================================
            FIM DO HAMBURGER / CRUZ
            ===================================================== -->

    </div>
</header>

<!-- =========================================================
     FIM DO CABEÇALHO
     ========================================================= -->





<!-- =========================================================
     INÍCIO DO MENU FULLSCREEN
     ========================================================= -->

<div
    class:open={menuOpen}
    class="
        fullscreen-menu

        [--menu-origin-x:38px]
        [--menu-origin-y:40px]

        lg:[--menu-origin-x:62px]
        lg:[--menu-origin-y:50px]
    "
    aria-hidden={!menuOpen}
>
    <div
        class="
            grid
            min-h-dvh
            w-full
            grid-rows-[auto_auto]

            lg:h-dvh
            lg:grid-cols-[60%_40%]
            lg:grid-rows-1
        "
    >

        <!-- =====================================================
             LADO ESQUERDO — NAVEGAÇÃO
             ===================================================== -->

        <section
            class="
                flex
                items-center
                justify-center

                bg-[#FFF7FA]

                px-6
                py-20

                lg:px-12
            "
        >
            <nav
                class="
                    flex
                    flex-col
                    items-center
                    gap-3
                    text-center

                    lg:items-start
                    lg:text-left
                "
                aria-label="Menu principal"
            >
                <a
                    href="/missao"
                    onclick={closeMenu}
                    class="fullscreen-nav-link text-3xl sm:text-4xl lg:text-5xl"
                >
                    Sobre nós
                </a>

                <a
                    href="/atividades"
                    onclick={closeMenu}
                    class="fullscreen-nav-link text-3xl sm:text-4xl lg:text-5xl"
                >
                    Atividades
                </a>

                <a
                    href="/testemunhos"
                    onclick={closeMenu}
                    class="fullscreen-nav-link text-3xl sm:text-4xl lg:text-5xl"
                >
                    Testemunhos
                </a>

                <a
                    href="/blog"
                    onclick={closeMenu}
                    class="fullscreen-nav-link text-3xl sm:text-4xl lg:text-5xl"
                >
                    Blog
                </a>

                <a
                    href="/info"
                    onclick={closeMenu}
                    class="fullscreen-nav-link text-3xl sm:text-4xl lg:text-5xl"
                >
                    Informações
                </a>
            </nav>
        </section>

        <!-- =====================================================
             FIM DO LADO ESQUERDO
             ===================================================== -->



        <!-- =====================================================
             LADO DIREITO — ÁREA DE APOIO
             ===================================================== -->

        <aside
            class="
                flex
                items-center
                justify-center

                bg-[#EB92A8]

                px-6
                py-8
                text-center

                lg:px-12
            "
        >
            <div class="donation-panel max-w-sm">

                <h2 class="text-2xl font-semibold lg:text-3xl">
                    Apoie a Testemunhar é Ajudar
                </h2>

                <p class="mt-4 leading-relaxed">
                    Juntos, podemos apoiar doentes, famílias e amigos.
                </p>

                <a
                    href="/doar"
                    onclick={closeMenu}
                    class="
                        donation-button
                        mt-6
                        inline-flex
                        px-6
                        py-3
                        font-semibold
                        no-underline
                    "
                >
                    Quero ajudar
                </a>

            </div>
        </aside>

        <!-- =====================================================
             FIM DO LADO DIREITO
             ===================================================== -->

    </div>
</div>

<!-- =========================================================
     FIM DO MENU FULLSCREEN
     ========================================================= -->





<style>

    /* =========================================================
       INÍCIO DO CABEÇALHO
       ========================================================= */

    .site-header {
        width: 100%;
        background-color: #fff;
    }



    /* ---------------------------------------------------------
       Logótipo
       --------------------------------------------------------- */

    .site-logo {
        display: block;
        line-height: 0;
    }



    /* ---------------------------------------------------------
       Grupo principal de hiperlinks
       --------------------------------------------------------- */

    .header-nav {
        transition:
            transform 300ms ease,
            opacity 250ms ease;
    }


    .header-nav-link {
        flex-shrink: 0;

        padding: 0.5rem 0;

        color: #354A54;

        font-size: 1rem;
        font-weight: 600;
        line-height: 1.35;

        text-decoration: none;
        white-space: nowrap;

        transition: color 200ms ease;
    }


    .header-nav-link:hover {
        color: #C92F63;
    }


    /*
     * Ao abrir o fullscreen,
     * o grupo de links sobe e desaparece.
     */
    .header-nav-hidden {
        transform: translateY(-2rem);
        opacity: 0;
        pointer-events: none;
    }



    /* ---------------------------------------------------------
       Botão Apoiar
       --------------------------------------------------------- */

    .donate-button {
        position: relative;
        overflow: hidden;

        align-items: center;
        justify-content: center;

        min-width: 138px;

        padding:
            0.85rem
            1.75rem;

        border-radius: 17px;

        background-color: #C92F63;
        color: #FFFFFF;

        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;

        text-decoration: none;
        white-space: nowrap;

        transition:
            background-color 200ms ease,
            transform 300ms ease,
            opacity 250ms ease;
    }


    .donate-button:hover {
        background-color: #B52756;
        color: #FFFFFF;
    }


    /*
     * O botão sobe e desaparece
     * quando o fullscreen é aberto.
     */
    .header-action-hidden {
        transform: translateY(-2rem);
        opacity: 0;
        pointer-events: none;
    }


    /* Conteúdo do botão */
    .donate-content {
        position: relative;
        z-index: 2;

        display: flex;
        align-items: center;

        gap: 0.6rem;

        color: #FFFFFF;
    }

    /*
    * Ponto de origem da animação.
    *
    * A onda está dentro deste elemento,
    * portanto o centro da onda coincide sempre
    * exatamente com o centro do coração.
    */
    .donate-heart-origin {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-shrink: 0;
    }


    /* ---------------------------------------------------------
       Animação do botão Apoiar
       --------------------------------------------------------- */

    .donate-heart {
        position: relative;
        z-index: 2;

        flex-shrink: 0;

        color: #FFFFFF;

        transform-origin: center;

        animation:
            heart-beat
            2.8s
            ease-in-out
            infinite;
    }


    /*
    * Onda escura.
    *
    * IMPORTANTE:
    * left: 50% e top: 50% fazem a onda nascer
    * exatamente do centro do coração.
    */
    .donate-wave {
        position: absolute;
        z-index: 1;

        left: 50%;
        top: 50%;

        width: 20px;
        height: 20px;

        border-radius: 50%;

        background-color:
            rgba(75, 69, 72, 0.27);

        opacity: 0;

        transform:
            translate(-50%, -50%)
            scale(0);

        pointer-events: none;

        animation:
            donate-wave
            2.8s
            ease-in-out
            infinite;
    }

    /*
    * Mantém o texto acima da onda.
    */
    .donate-label {
        position: relative;
        z-index: 2;
    }


    @keyframes heart-beat {
        0%,
        22%,
        100% {
            transform: scale(1);
        }

        30% {
            transform: scale(1.18);
        }

        38% {
            transform: scale(1);
        }
    }


    @keyframes donate-wave {
        0%,
        27% {
            opacity: 0;

            transform:
                translate(-50%, -50%)
                scale(0);
        }

        31% {
            opacity: 0.7;

            transform:
                translate(-50%, -50%)
                scale(0.8);
        }

        48% {
            opacity: 0.25;

            transform:
                translate(-50%, -50%)
                scale(8);
        }

        60%,
        100% {
            opacity: 0;

            transform:
                translate(-50%, -50%)
                scale(10);
        }
    }



    /* ---------------------------------------------------------
       Hamburger / cruz
       --------------------------------------------------------- */

    .menu-button {
        /*
        * O botão fica SEMPRE acima do fullscreen.
        *
        * fullscreen = 50
        * hamburger = 60
        *
        * Assim continua visível durante
        * a abertura e o fecho do menu.
        */
        z-index: 60;
    }



    /* =========================================================
       FIM DO CABEÇALHO
       ========================================================= */





    /* =========================================================
       INÍCIO DO MENU FULLSCREEN
       ========================================================= */

    .fullscreen-menu {
        position: fixed;
        inset: 0;

        z-index: 50;

        overflow-y: auto;
        overscroll-behavior: contain;

        pointer-events: none;

        clip-path:
            circle(
                0 at
                calc(100% - var(--menu-origin-x))
                var(--menu-origin-y)
            );

        transition:
            clip-path
            650ms
            cubic-bezier(0.77, 0, 0.18, 1);
    }


    .fullscreen-menu.open {
        pointer-events: auto;

        clip-path:
            circle(
                150vmax at
                calc(100% - var(--menu-origin-x))
                var(--menu-origin-y)
            );
    }


    .fullscreen-nav-link {
        color: #4B4548;

        font-weight: 700;
        line-height: 1.15;

        text-decoration: none;

        transition: color 200ms ease;
    }


    .fullscreen-nav-link:hover {
        color: #C92F63;
    }


    /* =========================================================
       FIM DO MENU FULLSCREEN
       ========================================================= */





    /* =========================================================
       INÍCIO DA ÁREA DE APOIO
       ========================================================= */

    .donation-panel h2,
    .donation-panel p {
        color: #FFFFFF;
    }


    .donation-button {
        border-radius: 18px;

        background-color: #C92F63;
        color: #FFFFFF;

        transition: background-color 200ms ease;
    }


    .donation-button:hover {
        background-color: #B52756;
        color: #FFFFFF;
    }


    /* =========================================================
       FIM DA ÁREA DE APOIO
       ========================================================= */





    /* =========================================================
       INÍCIO DO CONTROLO DO SCROLL
       ========================================================= */

    /*
     * Reserva permanentemente o espaço da scrollbar
     * para evitar deslocações horizontais.
     */
    :global(html) {
        scrollbar-gutter: stable;

        background-color: #fff;

        transition:
            background-color
            650ms
            cubic-bezier(0.77, 0, 0.18, 1);
    }


    /*
    * Menu aberto em telemóvel/tablet:
    * a scrollbar acompanha a zona superior clara.
    */
    :global(html:has(.fullscreen-menu.open)) {
        background-color: #FFF7FA;
    }


    /*
    * Em computador a scrollbar encontra-se
    * junto ao painel direito rosa.
    */
    @media (min-width: 1024px) {
        :global(html:has(.fullscreen-menu.open)) {
            background-color: #EB92A8;
        }
    }


    /*
     * Bloqueia o scroll da página por trás.
     */
    :global(body:has(.fullscreen-menu.open)) {
        overflow: hidden;
    }


    /* =========================================================
       FIM DO CONTROLO DO SCROLL
       ========================================================= */





    /* =========================================================
       INÍCIO DA ACESSIBILIDADE
       ========================================================= */

    /*
     * Não é um breakpoint de layout.
     * Apenas respeita a preferência do utilizador
     * por menos movimento.
     */
    @media (prefers-reduced-motion: reduce) {
        .fullscreen-menu,
        .header-nav,
        .donate-button,
        .donate-heart,
        .donate-wave {
            animation: none;
            transition: none;
        }
    }


    /* =========================================================
       FIM DA ACESSIBILIDADE
       ========================================================= */

</style>
