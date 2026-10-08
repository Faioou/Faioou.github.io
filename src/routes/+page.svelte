<script>
    import HomeSlide from '$lib/components/HomeSlider.svelte';

    export let data;
</script>


<!-- =========================================================
     INÍCIO DO SLIDER DA PÁGINA PRINCIPAL
     ========================================================= -->

<HomeSlide />

<!-- =========================================================
     FIM DO SLIDER DA PÁGINA PRINCIPAL
     ========================================================= -->



<!-- =========================================================
     INÍCIO DOS PARCEIROS
     ========================================================= -->

<main class="w-full">
    <section class="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <div class="mx-auto w-full max-w-7xl">

            <h2
                class="
                    text-center
                    text-2xl
                    font-semibold
                    text-[#4B4548]

                    sm:text-3xl
                "
            >
                Parceiros
            </h2>


            <div
                class="
                    mt-8
                    grid
                    grid-cols-2
                    place-items-center

                    gap-x-6
                    gap-y-8

                    sm:grid-cols-3

                    lg:mt-12
                    lg:gap-10
                "
            >
                {#each data.partnersList as item}

                    <a
                        href={item.url}
                        class="
                            flex
                            w-full
                            items-center
                            justify-center
                        "
                    >
                        <img
                            src={item.image}
                            alt={item.description}
                            loading="lazy"

                            class="
                                h-16
                                w-full
                                max-w-[150px]
                                object-contain

                                sm:h-20
                            "
                        />
                    </a>

                {/each}
            </div>

        </div>
    </section>
</main>

<!-- =========================================================
     FIM DOS PARCEIROS
     ========================================================= -->