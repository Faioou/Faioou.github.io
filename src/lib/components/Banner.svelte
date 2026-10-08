<script>
    import PortableText from "$lib/components/PortableText.svelte";

    export let content;
</script>

<section class="bg-[#FCDFE4] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
    <div class="mx-auto w-full max-w-7xl">
        {#each content as item}
            <article
                class="
                    grid w-full min-w-0 items-center gap-8
                    lg:grid-cols-2 lg:gap-12
                "
            >
                <div class="min-w-0">
                    <img
                        src={item.image}
                        alt={item.title ?? ''}
                        class="
                            block h-auto w-full
                            rounded-xl
                            object-contain
                            shadow-md
                        "
                    />
                </div>

                <div class="min-w-0">
                    <h1
                        class="
                            text-2xl font-semibold leading-tight
                            text-[#4B4548]
                            sm:text-3xl
                            lg:text-4xl
                        "
                    >
                        {item.title}
                    </h1>

                    <div
                        class="
                            mt-4
                            text-base leading-7
                            text-[#4B4548]
                            sm:text-lg
                        "
                    >
                        <PortableText content={item.body} />
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>