<script>
    import logo from '$lib/assets/logo-tea.jpg';
    import { onMount } from 'svelte';

    onMount(() => {
        // Your script loading logic goes here
        const script = document.createElement('script');
        script.src = './js/navbar-animation.js';
        document.body.appendChild(script);
    });
</script>

<header>
    <!-- Navigation -->
    <nav class = "navbar">
        <div class = "navbar-container">
            <div class = "navbar-container-logo">
                <a href = "/"><img src = {logo} alt = "Website logo"></a>
            </div>
            <div class="navbar-container-items">
                <ul class = "navbar-items">
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/about">SOBRE NÓS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/products">PRODUTOS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" href = "/events">EVENTOS</a>
                    </li>
                    <li class = "navbar-item">
                        <a class = "navbar-link" id = "highlight" href = "https://forms.gle/ACZUpTC84fZFgQ3x8" target = "_blank"><span>QUERO TORNAR-ME SÓCIO</span></a>
                    </li>
                </ul>
            </div>
            <div class = "navbar-burguer">
                <div class = "burguer-r1"></div>
                <div class = "burguer-r2"></div>
                <div class = "burguer-r3"></div>
            </div>
        </div>
    </nav>
</header>