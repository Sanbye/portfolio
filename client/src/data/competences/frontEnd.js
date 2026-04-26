export const frontEnd = {
    id: 'front-end',
    name: 'Développement web front-end',
    type: 'technique',
    mastery: 5,
    description: 'Je développe des interfaces web dynamiques et réactives, en maîtrisant les frameworks modernes et les bonnes pratiques du développement front-end.',
    article: {
        definition: (
            <>
                <p>
                Le <strong>développement front-end</strong> désigne l’ensemble des technologies, des outils et des pratiques permettant de concevoir l’<strong>interface utilisateur</strong> d’une application web ou mobile. Il constitue la couche d’interaction directe entre l’utilisateur et le système, et joue un rôle central dans la perception de qualité d’un produit. Au-delà de l’aspect visuel, il implique la <strong>gestion des états, la communication avec des APIs, la performance du rendu</strong> et l’accessibilité.
                </p>

                <p>
                Dans un contexte professionnel moderne, le front-end s’appuie majoritairement sur des frameworks JavaScript tels que <strong>React</strong>, qui permettent de structurer les applications sous forme de composants réutilisables et maintenables. Le développeur front-end doit aujourd’hui maîtriser des notions avancées telles que le <strong>state management</strong>, la gestion des effets de bord (side effects), l’optimisation du rendu (<strong>memoization, lazy loading</strong>), ainsi que l’intégration avec des architectures back-end distribuées.
                </p>

                <p>
                Les enjeux actuels du front-end ne se limitent plus à afficher des données : ils incluent la <strong>performance, l’accessibilité et l’expérience utilisateur</strong>, la résilience face aux erreurs réseau et la capacité à faire évoluer l’application dans le temps. Cette discipline nécessite donc à la fois une <strong>rigueur technique et une sensibilité produit</strong>.
                </p>
            </>
        ),
        preuves: [
            {
                titre: "Train Lock Pass — React/TypeScript en environnement professionnel",
                contenu: "Sur le projet Train Lock Pass, j'ai développé l'ensemble des écrans en React/TypeScript. J'ai conçu des formulaires et des composants de validation d'habilitations, géré des états complexes avec des hooks personnalisés et intégré des appels API sécurisés. Le résultat : des fonctionnalités livrées en sprint, validées par le product owner et mises en production sur les premières rames TGV-M.",
                projetId: '1',
            },
            {
                titre: "Fisherman's Instruments — liberté créative et livraison client",
                contenu: "Pour le site du luthier Pascal Pecheur, j'ai eu carte blanche sur le front-end. J'ai conçu et développé l'ensemble de l'interface à partir de deux contraintes de couleurs, en visant une esthétique qui sublime les instruments. Le site est aujourd'hui en ligne et régulièrement mis à jour par le client.",
                projetId: '3',
            },
            {
                titre: "GoKifu — exploration de React Native et des interfaces complexes",
                contenu: "GoKifu m'a amené à travailler sur des interfaces de saisie de parties de Go, un domaine métier complexe avec ses propres conventions visuelles. J'ai dû concevoir une représentation du goban (plateau de jeu) en React Native, gérer des états de partie et afficher des données d'analyse fournies par KataGo. Ce projet m'a poussé à explorer des patterns d'UI que je n'aurais pas rencontrés autrement.",
                projetId: '6',
            },
        ],
        autocritique: (
           <>
                <p>
                Je me situe aujourd’hui à un <strong>niveau intermédiaire avancé</strong> en développement front-end. Je suis à l’aise avec <strong>React</strong> et son écosystème, notamment l’utilisation des <strong>hooks</strong>, la structuration en composants et la gestion des états. J’ai également une bonne capacité à intégrer un front-end avec un back-end, en respectant les contraintes d’API et en gérant les différents états applicatifs.
                </p>

                <p>
                Cependant, certains axes de progression restent importants. Je souhaite approfondir ma maîtrise des aspects avancés de React, notamment en matière de <strong>performance (memoization, gestion fine des rerenders)</strong>. L’<strong>accessibilité web</strong> est également un domaine que je n’ai pas encore suffisamment exploré et que je considère comme essentiel dans la conception d’interfaces de qualité. Enfin, je n’ai jamais mis en place de <strong>tests unitaires ou d’intégration</strong> côté front-end, et je souhaite développer cette compétence pour renforcer la robustesse de mes applications.
                </p>

                <p>
                Le front-end occupe une place centrale dans mon profil, car il constitue le <strong>point de contact direct avec l’utilisateur</strong>. Je considère que la qualité d’une application se mesure en grande partie à travers son interface, sa réactivité et sa facilité d’utilisation.
                </p>
           </>
        ),
        evolution: (
            <>
                <p>
                À moyen terme, je souhaite atteindre une maîtrise avancée de <strong>React</strong>, notamment sur des problématiques de <strong>performance, de scalabilité et d’architecture front-end</strong>. Je souhaite également approfondir mes connaissances sur les bonnes pratiques de développement, telles que le découpage en composants, la gestion des dépendances et la mise en place de <strong>tests unitaires et d’intégration</strong>. Je souhaite étudier des patterns d’architecture front-end, afin d’apporter une meilleure clarté et une plus grande maintenabilité à ma code base.
                </p>

                <p>
                Je prévois de me former davantage sur les outils de test front-end, notamment <strong>Jest et React Testing Library</strong>, afin de garantir la fiabilité des interfaces que je développe. Je souhaite également me former sur les bonnes pratiques d’<strong>accessibilité web</strong>, pour rendre mes applications utilisables par le plus grand nombre, y compris les personnes en situation de handicap.
                </p>

                <p>
                Enfin, je souhaite continuer à développer des projets personnels, comme <strong>GoKifu</strong>, qui me permettent d’expérimenter des cas d’usages mobiles complexes et de progresser sur des problématiques que je ne rencontre pas nécessairement en contexte professionnel.
                </p>
            </>
        ),
    },
    projets: ['1', '2', '3', '4', '6'],
};
