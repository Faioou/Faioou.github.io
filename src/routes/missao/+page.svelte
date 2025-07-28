<script>
    import PortableText from "$lib/components/PortableText.svelte"
    export let data
</script>

<div class = "events">
    <div class="events-content">
        <div class="events-content-section">
            <div class = "text-block">
                <h1>Iniciativas e Eventos</h1>
                <h2>Missão – missão1.jpg</h2>
                <p>A Testemunhar é Ajudar é o Núcleo de Apoio ao Centro de Mama do São João. Somos uma associação sem fins lucrativos, que tem como missão apoiar o doente oncológico, assim como os seus familiares e amigos.
O nosso objetivo é acompanhar de forma próxima e pessoal a luta contra o cancro, logo desde o momento em que é conhecido o diagnóstico.
A nossa atuação não se limita ao doente, abrangendo igualmente todo o seu círculo social, que é tão importante no processo de tratamento. Nem sempre há amigos e familiares por perto e por vezes são até eles que precisam de apoio para lidar com a doença e todos os obstáculos que ela acarreta.
Seja através da partilha de experiências ou da disponibilização de recursos como perucas, mangas de compressão, soutiens e materiais para recuperação pós cirurgia mamária, a Testemunhar é Ajudar pretende simplificar os desafios diários nas diversas etapas da doença, de todos os que a enfrentam, direta ou indiretamente.</p>

                <h2>Propósito - propósito1.JPG</h2>
                <p>Somos uma associação fundada por doentes oncológicos. Viver o cancro da mama na primeira pessoa mostrou-nos que há muitos desafios desconhecidos ou desvalorizados pela maioria das pessoas e instituições.
As emoções e sentimentos resultantes do diagnóstico de cancro têm um forte impacto quer nos doentes como nos seus familiares e amigos e representam a primeira grande dificuldade no tratamento. Por isso, acreditamos que o apoio emocional é fulcral ao longo de todo o processo e que o testemunho é realmente uma preciosa ajuda.
A maioria dos nossos voluntários são doentes oncológicos, o que facilita o contacto, apoio e compreensão. Conversas que se tornam mais fáceis, dicas pessoais e infalíveis, sentimentos comuns, medos partilhados… O poder do testemunho de pessoas e experiências!
O sucesso da Testemunhar é Ajudar resulta diretamente na melhoria de condições do Centro de Mama do São João, mas também no melhor apoio e acompanhamento a todos os doentes oncológicos que nos procuram. Conscientes de que a luta contra o cancro pressupõe desafios diversos e constantes, comprometemo-nos a trabalhar diariamente com foco na nossa missão e em todas as pessoas que queremos ajudar.</p>
                
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

</style>