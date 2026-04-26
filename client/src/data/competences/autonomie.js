export const autonomie = {
    id: 'autonomie',
    name: 'Autonomie',
    type: 'humaine',
    mastery: 5,
    description: "Capable de progresser seul efficacement, de prendre des décisions et de livrer sans aides extérieures.",
    article: {
        definition: (
            <>
                <p>
                L’<strong>autonomie professionnelle</strong> désigne la capacité à prendre en charge une mission dans son ensemble, à la structurer, à prendre des décisions et à la mener à bien <strong>sans supervision constante</strong>. Dans le domaine du développement logiciel, cette compétence est particulièrement valorisée, car elle permet de travailler efficacement sur des sujets complexes, de réduire la dépendance aux profils seniors et d’avancer de manière proactive.
                </p>

                <p>
                Être autonome ne signifie pas travailler isolément, mais savoir trouver le bon <strong>équilibre entre initiative personnelle et collaboration</strong>. Cela implique de savoir rechercher de l’information, analyser une problématique, prendre des <strong>décisions argumentées</strong> et identifier les moments où il est pertinent de solliciter un avis extérieur.
                </p>

                <p>
                Dans un contexte professionnel, l’autonomie permet de gagner en efficacité, de s’adapter rapidement à des situations nouvelles et de contribuer activement à l’avancement d’un projet. Elle est aujourd’hui essentielle pour évoluer dans des <strong>environnements techniques complexes</strong> et en constante évolution.
                </p>
            </>
        ),
        preuves: [
            {
                titre: "PCA-ADC — projet mené en grande partie en solitaire",
                contenu: "PCA-ADC est un des projets qui illustre le mieux mon autonomie. J'ai pris en charge la totalité du projet — analyse des besoins, conception, développement et déploiement — avec un minimum d'aide. Confronté à des questions techniques sans réponse, j'ai cherché des solutions, consulté la documentation et pris des décisions justifiées, comme la fois où j'ai choisi d'abandonner l'approche serverless pour le pipeline de traitement des PDF après avoir identifié ses limites et proposé une alternative plus robuste (CronJobs Kubernetes).",
                projetId: '2',
            },
             {
                titre: "Fisherman’s Instrument — prise en charge d’un projet de A à Z",
                contenu: "Le projet Fisherman’s Instruments constitue un autre exemple significatif d’autonomie, dans un contexte différent. J’ai pris en charge l’intégralité du projet en relation directe avec le client, sans intermédiaire technique. Cela impliquait de comprendre les besoins, de proposer des solutions, de concevoir l’interface, de développer l’application et de gérer les retours. J’ai dû traduire des attentes non techniques en décisions concrètes, tout en prenant en compte les contraintes du développement. Le site a été mis en ligne avec succès, et le fait que le client m’ait recontacté plusieurs années plus tard pour faire évoluer le projet témoigne de la qualité du travail réalisé et de la confiance établie.",
                projetId: '3',
            },
            {
                titre: "GoKifu — projet personnel sur deux ans",
                contenu: "GoKifu est la preuve de mon autonomie sur le long terme. Sans deadline, sans équipe, sans commanditaire, je maintiens un projet complexe en progression constante depuis plus de deux ans. Cela demande une discipline particulière : se fixer ses propres objectifs, gérer sa propre motivation et savoir quand pivoter sur une approche qui ne fonctionne pas.",
                projetId: '6',
            }
        ],
        autocritique: (
            <>
                <p>
                L’autonomie est l’une de mes <strong>compétences humaines les plus solides et les plus reconnues</strong>. Je suis capable de prendre en charge un projet ou une mission de manière complète, de structurer mon travail et de progresser efficacement sans supervision constante. Cette capacité m’a permis de travailler sur des projets avec des équipes restreintes, voire même seul, en développant rapidement mes compétences.
                </p>

                <p>
                Cependant, cette autonomie peut parfois devenir un point de vigilance. Il m’arrive de travailler longtemps sur un problème avant de solliciter un avis extérieur, alors qu’un échange plus précoce aurait pu permettre de gagner du temps ou d’explorer d’autres solutions. Avec l’expérience, j’apprends à mieux identifier ces situations et à <strong>intégrer davantage la collaboration</strong> dans ma manière de travailler.
                </p>

                <p>
                Cette compétence occupe une place centrale dans mon profil, car elle me permet d’être efficace dans des contextes variés et de contribuer activement à l’avancement des projets, même en l’<strong>absence d’encadrement direct</strong>.
                </p>
            </>
           
        ),
        evolution: (
            <>
                <p>
                À moyen terme, je souhaite développer une <strong>autonomie plus stratégique</strong>. Il ne s’agit plus seulement de réaliser des tâches de manière indépendante, mais d’être capable de proposer des orientations, d’anticiper les problématiques et de prendre des <strong>décisions structurantes</strong> sur un projet.
                </p>

                <p>
                Dans mon projet professionnel, cette compétence est essentielle, car elle me permettra d’évoluer vers des <strong>rôles à plus forte responsabilité</strong>, notamment en tant que <strong>développeur full-stack</strong> capable d’intervenir sur l’ensemble d’un système. Je souhaite être en mesure de porter des sujets techniques de bout en bout, tout en conservant une vision globale des enjeux, avec pour objectif final de devenir un <strong>référent technique (tech lead)</strong> au sein d’une équipe.
                </p>

                <p>
                Enfin, je continue de renforcer cette compétence à travers mes projets personnels et professionnels, en cherchant à <strong>équilibrer autonomie et collaboration</strong>, afin de gagner en efficacité tout en bénéficiant de l’intelligence collective.
                </p>
            </>
        ),
    },
    projets: ['2', '3', '6'],
};
