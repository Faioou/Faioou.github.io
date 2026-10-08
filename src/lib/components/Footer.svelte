<script>

    // =========================================================
    // INÍCIO DOS DADOS DO FOOTER
    // =========================================================

    /*
     * Os parceiros são recebidos do +layout.svelte.
     *
     * Como o Footer pertence ao layout global,
     * esta zona aparece em todas as páginas.
     */
    export let partnersList = [];


    // Ano automático
    const date = new Date();
    const year = date.getFullYear();

    // =========================================================
    // FIM DOS DADOS DO FOOTER
    // =========================================================

</script>



<!-- =========================================================
     INÍCIO DO FOOTER
     ========================================================= -->

<footer class="footer font-eina">


    <!-- =====================================================
         INÍCIO DOS PARCEIROS
         ===================================================== -->

    {#if partnersList.length > 0}

        <section class="footer-partners">

            <div
                class="
                    mx-auto
                    w-full
                    max-w-[1700px]

                    px-6
                    pt-14

                    sm:px-8
                    sm:pt-16

                    lg:px-12
                    lg:pt-20

                    xl:px-16
                "
            >

                <!-- Título -->
                <h2
                    class="
                        footer-partners-title
                        font-cora

                        m-0

                        text-center

                        text-3xl
                        font-medium

                        sm:text-4xl

                        lg:text-5xl
                    "
                >
                    Os nossos parceiros
                </h2>



                <!-- =========================================
                     LOGÓTIPOS
                     ========================================= -->

                <div
                    class="
                        mt-10

                        grid
                        grid-cols-2

                        items-center

                        gap-x-8
                        gap-y-10

                        sm:grid-cols-3

                        lg:mt-14
                        lg:grid-cols-6
                        lg:gap-x-12

                        xl:gap-x-16
                    "
                >

                    {#each partnersList as partner}

                        {#if partner.url}

                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="footer-partner"
                                aria-label={partner.title}
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.description}
                                    loading="lazy"
                                />
                            </a>

                        {:else}

                            <div class="footer-partner">

                                <img
                                    src={partner.image}
                                    alt={partner.description}
                                    loading="lazy"
                                />

                            </div>

                        {/if}

                    {/each}

                </div>



                <!-- =========================================
                     LINHA DIVISÓRIA
                     ========================================= -->

                <div
                    class="
                        footer-partners-divider

                        mt-12

                        lg:mt-16
                    "
                ></div>

            </div>

        </section>

    {/if}

    <!-- =====================================================
         FIM DOS PARCEIROS
         ===================================================== -->



    <!-- =====================================================
         INÍCIO DO CONTEÚDO PRINCIPAL DO FOOTER
         ===================================================== -->

    <div
        class="
            footer-content

            mx-auto

            w-full
            max-w-[1400px]

            px-6
            py-10

            sm:px-8

            lg:px-12
            lg:py-12

            xl:px-16
        "
    >


        <!-- ================================================
             CONTACTOS
             ================================================ -->

        <div
            class="
                footer-contacts

                grid
                grid-cols-1

                gap-8

                text-center

                md:grid-cols-3

                md:text-left
            "
        >


            <!-- Contactos -->
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



            <!-- Sede -->
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



            <!-- Casa TEA -->
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



        <!-- ================================================
             LINHA
             ================================================ -->

        <div class="footer-divider"></div>



        <!-- ================================================
             RODAPÉ INFERIOR
             ================================================ -->

        <div
            class="
                flex
                flex-col

                items-center
                justify-between

                gap-5

                text-center

                md:flex-row
                md:text-left
            "
        >

            <!-- Copyright -->
            <p class="footer-copyright">

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
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <g
                            stroke="none"
                            stroke-width="1"
                        >
                            <g
                                transform="translate(-340.000000, -7439.000000)"
                            >
                                <g
                                    transform="translate(56.000000, 160.000000)"
                                >
                                    <path
                                        d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                                    />
                                </g>
                            </g>
                        </g>
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
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
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
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
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
       INÍCIO DO FOOTER
       ========================================================= */

    .footer {
        width: 100%;

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
       INÍCIO DOS PARCEIROS
       ========================================================= */

    .footer-partners {
        width: 100%;

        background-color:
            var(--pink-dark);
    }


    .footer-partners-title {
        color: #FFFFFF;

        font-family:
            "Cora",
            Georgia,
            "Times New Roman",
            serif;

        line-height: 1.05;
    }


    /*
     * Todos os espaços dos logos têm
     * a mesma altura.
     *
     * Assim marcas com proporções diferentes
     * ficam visualmente alinhadas.
     */
    .footer-partner {
        min-height: 90px;

        display: flex;

        align-items: center;
        justify-content: center;

        text-decoration: none;
    }


    .footer-partner img {
        display: block;

        width: auto;
        height: auto;

        max-width: min(
            180px,
            100%
        );

        max-height: 75px;

        object-fit: contain;

        transition:
            transform 250ms ease,
            opacity 250ms ease;
    }


    .footer-partner:hover img {
        transform:
            scale(1.04);

        opacity: 0.82;
    }


    .footer-partners-divider {
        width: 100%;
        height: 1px;

        background-color:
            rgba(
                255,
                255,
                255,
                0.18
            );
    }

    /* =========================================================
       FIM DOS PARCEIROS
       ========================================================= */



    /* =========================================================
       INÍCIO DOS CONTACTOS
       ========================================================= */

    .footer-contacts-item p {
        margin:
            0.45rem
            0;

        line-height: 1.45;
    }


    .footer-contact-title {
        margin-bottom:
            0.85rem !important;

        color: #FFFFFF !important;

        font-weight: 600;
    }


    .footer-divider {
        width: 100%;
        height: 1px;

        margin:
            2.5rem
            0
            1.75rem;

        background-color:
            rgba(
                255,
                255,
                255,
                0.18
            );
    }


    .footer-copyright {
        margin: 0;

        line-height: 1.5;
    }

    /* =========================================================
       FIM DOS CONTACTOS
       ========================================================= */



    /* =========================================================
       INÍCIO DAS REDES SOCIAIS
       ========================================================= */

    .footer-navbar-social {
        display: flex;

        align-items: center;

        gap: 1rem;
    }


    .footer-navbar-social a {
        display: flex;

        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;

        transition:
            transform 200ms ease,
            opacity 200ms ease;
    }


    .footer-navbar-social a:hover {
        transform:
            translateY(-2px);

        opacity: 0.8;
    }


    .footer-navbar-social svg {
        width: 1.25rem;
        height: 1.25rem;

        fill:
            var(--pink-light);
    }

    /* =========================================================
       FIM DAS REDES SOCIAIS
       ========================================================= */



    /* =========================================================
       ACESSIBILIDADE
       ========================================================= */

    @media (
        prefers-reduced-motion:
        reduce
    ) {

        .footer-partner img,
        .footer-navbar-social a {
            transition: none;
        }

    }

    /* =========================================================
       FIM DO FOOTER
       ========================================================= */

</style>