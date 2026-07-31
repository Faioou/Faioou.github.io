<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "events">
    <div class="events-content">
        <div class="events-content-section">
            <div class = "text-block">
                <h1>Iniciativas e Eventos</h1>
                <p>A Testemunhar é Ajudar organiza frequentemente diversas ações e workshops de
                formação e sensibilização, orientadas por profissionais de diversas áreas de interesse
                para os doentes oncológicos, desde cuidados de enfermagem, divulgação de apoios e
                direitos dos doentes, prevenção do cancro da mama, workshops de maquilhagem e
                turbantes, entre outros.</p>
                <p>Estas ações decorrem na Casa TEA - espaço físico de trabalho da associação, localizado
                em Crestins, na Maia, assim como em diversos locais que permitam a proximidade
                com a comunidade local, como juntas de freguesia, empresas, escolas, farmácias e
                eventos sociais.</p>
                <p>A Testemunhar é Ajudar já organizou e participou em diversas caminhadas solidárias
                com vista à sensibilização do cancro da mama e recolha de fundos para a causa que
                defende e, em cooperação com outras associações e entidades, participamos em
                diversos fóruns e workshops presenciais e online, com foco no doente oncológico.
                Em 2022, celebramos o Outubro Rosa em parceria com a Câmara Municipal da Maia,
                ao promover oito ações relacionadas com o cancro da mama em diferentes juntas de
                freguesia do concelho.</p>
                <p>Em 2023, novamente com o apoio da Câmara Municipal da Maia e em cooperação com
                o Núcleo Rotary de Desenvolvimento Comunitário da Maia, Club Rotary da Maia e Club
                Rotary de Águas Santas/ Pedrouços, promovemos um Concerto Solidário no Fórum da
                Maia. O evento contou com cerca de seiscentos participantes e os bilhetes e demais
                donativos reverteram para a Testemunhar é Ajudar.</p>
                <p>Além destes exemplos, participamos em diversos momentos relacionados com
                oncologia, inclusive em instituições privadas, com o intuito de informar, ajudar e
                instruir o maior número de pessoas possível.</p>
            </div>
        </div>

        {#each data.eventsList as block}
            <div class="events-content-section">
                <div class = "text-block">
                    <h2 class="h2-header">{block.title}</h2>
                    <img src="{block.cover}" alt="{block.description}" />
                    <p>{block.date}</p>
                    <a href="{block.link}">Fotografias</a>
                    <PortableText content = {block.body} />
                </div>
            </div>
        {/each}

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

</style>