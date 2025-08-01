<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "events">
    <div class="events-content">
        <div class="events-content-section">
            <div class = "text-block">
                <h1>Orgãos Sociais</h1>
                <h2>Quadriénio 2024/2027</h2>
                
                <p><b>Assembleia Geral</b></p>
                <div class="members-list">
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>José Luís Rosas Fougo</p>
                        <p>Presidente</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Joana Peixoto Fernandes</p>
                        <p>1ª Secretária</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Inês Rocha de Castro</p>
                        <p>2ª Secretária</p>
                    </div>
                </div>

                <p><b>Direção</b></p>
                <div class="members-list">
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Maria Helena de Sousa Teixeira</p>
                        <p>Presidente</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Maria Helena Pilroto Rodrigues</p>
                        <p>Vice-Presidente</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Anabela Santos Sousa Oliveira</p>
                        <p>Tesoureiro</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Benvinda Conceição Loureiro M. Gomes</p>
                        <p>Secretária</p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Ana Maria Pereira Guedes</p>
                        <p>Vogal</p>
                    </div>
                </div>

                <p><b>Conselho Fiscal</b></p>
                <div class="members-list">
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Carla Susana Moreira Castro Martins</p>
                        <p><b>Presidente</b></p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Ana Cristina Marinho</p>
                        <p><b>1ª Secretária</b></p>
                    </div>
                    <div class="member">
                        <img src="/avatar.png" alt="">
                        <p>Dalila Francisca Moreira Gomes</p>
                        <p><b>2ª Secretária</b></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>

<style>
    .events {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .events-content { width: 60%; }

    .events-content-section {
        padding: 3rem 0 3rem 0;
    }

    .members-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 2rem;
        box-sizing: border-box;
    }

    .member {
        padding: 1rem;
        width: 220px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background-color: var(--pink-dark);
    }

    :global(.member p) {
        color: var(--pink-light);
    }

    .member img {
        width: 100px;
    }

</style>