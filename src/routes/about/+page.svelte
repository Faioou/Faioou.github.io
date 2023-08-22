<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import {onMount} from 'svelte'

    export let data;

    // onMount(() => {
    //     document.getElementById('about-content-body').innerHTML = data.body
    // });


    import PortableText from '$lib/components/PortableText.svelte';


    // console.log(data.body)
</script>

<div class = "wrapper">
    <Header />

    <!-- About Us-->
    <div class = "about">
        <div class = "about-container">
            <div class = "about-title">
                <h1>{data.title}</h1>
            </div>
            <hr>
            <div class = "about-content" id = "about-content-body">

                <PortableText content={data.body} />

            </div>
        </div>
    </div>

    <Footer />
</div>