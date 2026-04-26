export const backEnd = {
    id: 'back-end',
    name: 'Développement web back-end',
    type: 'technique',
    mastery: 4,
    description: "Je conçois et développe la logique serveur d'une application : gestion des routes, traitement des données et exposition d'APIs.",
    article: {
        definition: (
            <>
                <p>
                Le <strong>développement back-end</strong> regroupe l’ensemble des mécanismes exécutés côté serveur, permettant de gérer la <strong>logique métier</strong>, le traitement des données, la sécurité et la communication avec les systèmes externes. Il constitue la base fonctionnelle d’une application : c’est lui qui assure la cohérence des données, la validité des traitements et la robustesse du système dans son ensemble.
                </p>

                <p>
                Dans les architectures modernes, le back-end s’appuie principalement sur des <strong>APIs (REST ou GraphQL)</strong>, permettant de découpler la logique serveur du front-end. Il est également fortement lié aux problématiques de <strong>persistance des données</strong>, via des bases relationnelles ou non relationnelles, ainsi qu’aux enjeux de <strong>sécurité, d’authentification et de gestion des droits</strong>.
                </p>

                <p>
                Maîtriser le back-end, c’est comprendre comment structurer une application pour qu’elle soit <strong>maintenable, évolutive et fiable</strong>. Cela implique de savoir modéliser des données, concevoir des routes cohérentes, gérer les flux d’information et anticiper les cas d’erreur. Dans un contexte professionnel, cette compétence est essentielle pour construire des <strong>applications robustes</strong>, capables de supporter des usages réels.
                </p>
            </>
        ),
        preuves: [
            {
                titre: "Train Lock Pass — back-end en Java/Quarkus en Vertical Slice Architecture",
                contenu: "Sur le projet Train Lock Pass, j’ai contribué au développement du back-end en Java avec Quarkus, dans une architecture en Vertical Slice. J’ai participé à l’implémentation de certaines routes, à la gestion des échanges entre le front-end et le serveur, ainsi qu’aux tests unitaires et d’intégration back-end. Cette expérience m’a permis de découvrir un nouvel écosystème et de renforcer ma capacité à travailler sur des architectures back-end modernes, dans un contexte professionnel exigeant.",
                projetId: '1',
            },
            {
                titre: "Fisherman's Instruments — back-office Symfony sur mesure",
                contenu: "Le projet Fisherman’s Instruments constitue un exemple concret de développement back-end complet. J’ai conçu et développé un back-office sur mesure avec Symfony, permettant au client de gérer de manière autonome son catalogue d’instruments, ses articles et ses contenus. J’ai modélisé la base de données relationnelle en identifiant les entités principales (instruments, sections, prestations, images, utilisateurs, etc...), puis implémenté ces modèles avec Doctrine ORM. J’ai également développé les contrôleurs permettant de gérer les différentes routes de l’application, ainsi que les formulaires d’administration avec le composant Form de Symfony. J’ai mis en place un système de gestion des rôles et des permissions, afin de différencier les accès entre les administrateurs et les utilisateurs ayant des droits restreints. Ce projet m’a permis de comprendre concrètement la structuration d’une application back-end avec un framework MVC, en séparant clairement les responsabilités entre les contrôleurs, les entités et les services.",
                projetId: '3',
            },
        ],
        autocritique: (
            <>
                <p>
                Je dispose aujourd’hui d’un niveau solide en développement back-end sur <strong>Java/Quarkus</strong>, avec une bonne maîtrise des concepts fondamentaux tels que la <strong>modélisation de données</strong>, la structuration en contrôleurs et services, et la gestion des routes. Je suis également à l’aise avec la conception d’<strong>APIs REST</strong> et l’intégration avec un front-end.
                </p>

                <p>
                Mon expérience en Java/Quarkus est plus récente, ayant commencé initialement par apprendre <strong>PHP/Symfony</strong>, mais elle progresse rapidement grâce à mon environnement professionnel. Elle me permet d’élargir ma vision du back-end et de mieux comprendre les architectures utilisées en entreprise.
                </p>

                <p>
                Mon principal axe d’amélioration concerne la <strong>sécurité</strong>. Bien que j’en comprenne les bases, je souhaite approfondir des aspects plus avancés tels que la gestion des tokens (<strong>JWT</strong>), les flux d’authentification <strong>OIDC</strong> et la protection contre les failles courantes (<strong>XSS, CSRF, injections</strong>). La sécurité étant un enjeu majeur du back-end, il s’agit pour moi d’un axe de progression prioritaire. J’aimerais également approfondir les bonnes pratiques de développement back-end, notamment les différents patterns d’architecture. Enfin, ayant principalement travaillé avec le framework Quarkus, je souhaite renforcer mes compétences en <strong>Spring Boot</strong>.
                </p>

                <p>
                Le back-end constitue pour moi un <strong>complément essentiel au front-end</strong>. C’est la combinaison des deux qui me permet d’avoir une vision globale d’une application et d’être capable de travailler de manière autonome sur des projets complets.
                </p>
            </>
        ),
        evolution: (
            <>
                <p>
                À moyen terme, je souhaite approfondir mes compétences en <strong>Java</strong>, notamment avec <strong>Spring</strong> que j’ai délaissé pour <strong>Quarkus</strong>. De plus, je souhaite me former sur les <strong>patterns back-end</strong> utilisées en entreprise, notamment les principes <strong>SOLID</strong> ou le <strong>Factory Pattern</strong> que je connais mais oublie trop souvent.
                </p>

                <p>
                Je m’intéresse également aux architectures <strong>cloud-native</strong> et <strong>serverless</strong>, que j’ai commencé à explorer dans certains projets. Comprendre comment concevoir des <strong>back-ends distribués</strong>, capables de s’adapter à la charge et de fonctionner dans des <strong>environnements scalables</strong>, constitue un objectif important dans mon évolution.
                </p>

                <p>
                Enfin, je souhaite continuer à développer des projets personnels intégrant une dimension back-end, afin de consolider mes acquis et d’expérimenter de nouvelles approches, notamment autour des <strong>APIs</strong> et de l’<strong>intégration de services externes</strong>.
                </p>
            </>
        ),
    },
    projets: ['1', '3', '4'],
};
