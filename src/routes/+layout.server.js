import client from '$lib/sanityClient';


// =========================================================
// INÍCIO DOS DADOS GLOBAIS
// =========================================================

export async function load() {

    try {

        // -----------------------------------------------------
        // PARCEIROS
        // -----------------------------------------------------

        const partners = await client.fetch(`
            *[_type == "partners"] {
                title,
                url,
                "imageUrl": image.asset->url,
                description
            }
        `);


        const partnersList = (partners ?? [])
            .filter((partner) => partner.imageUrl)
            .map((partner) => ({
                title:
                    partner.title ??
                    'Parceiro',

                image:
                    partner.imageUrl,

                url:
                    partner.url ?? '',

                description:
                    partner.description ??
                    partner.title ??
                    'Parceiro da Testemunhar é Ajudar'
            }));


        return {
            partnersList
        };

    } catch (error) {

        /*
         * Se houver momentaneamente um problema
         * com o Sanity, o site continua a funcionar.
         * Apenas não apresenta os parceiros.
         */
        console.error(
            'Erro ao carregar os parceiros:',
            error
        );

        return {
            partnersList: []
        };
    }

}

// =========================================================
// FIM DOS DADOS GLOBAIS
// =========================================================