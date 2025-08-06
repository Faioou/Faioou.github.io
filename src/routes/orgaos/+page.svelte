<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "events">
    <div class="events-content">
        <div class="events-content-section">
            <div class = "text-block">
                <h1>Orgãos Sociais</h1>
                <h3><i>Quadriénio 2024/2027</i></h3>
                
                <div class="list">
                    <p><b>Assembleia Geral</b></p>
                    <div class="members-list">
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>José Luís Rosas Fougo</p>
                            <p><b>Presidente</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Joana Peixoto Fernandes</p>
                            <p><b>1ª Secretária</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Inês Rocha de Castro</p>
                            <p><b>2ª Secretária</b></p>
                        </div>
                    </div>
                </div>

                <div class="list">
                    <p><b>Direção</b></p>
                    <div class="members-list">
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Mª Helena de Sousa T.</p>
                            <p><b>Presidente</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Mª Helena P. Rodrigues</p>
                            <p><b>Vice-Presidente</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Anabela S. Sousa Oliveira</p>
                            <p><b>Tesoureiro</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Benvinda C. L. M. Gomes</p>
                            <p><b>Secretária</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Ana Maria Pereira Guedes</p>
                            <p><b>Vogal</b></p>
                        </div>
                    </div>
                </div>

                <div class="list">
                    <p><b>Conselho Fiscal</b></p>
                    <div class="members-list">
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Carla S. M. Castro Martins</p>
                            <p><b>Presidente</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Ana Cristina Marinho</p>
                            <p><b>1ª Secretária</b></p>
                        </div>
                        <div class="member">
                            <div class="member-photo">
                                <img src="/avatar.png" alt="">
                            </div>
                            <p>Dalila F. Moreira Gomes</p>
                            <p><b>2ª Secretária</b></p>
                        </div>
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

    .list {
        margin: 2rem 0 2rem 0;
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

    .member-photo {
        display: flex;
        justify-content: center;
    }

    .member-photo img {
        width: 100px;
    }

</style>