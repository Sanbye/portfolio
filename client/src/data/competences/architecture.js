export const architecture = {
    id: 'architecture',
    name: 'Architecture et infrastructure applicative',
    type: 'technique',
    mastery: 4,
    description: "Je structure mes projets autour de patterns éprouvés (MVC, composants, API REST) pour produire un code maintenable et évolutif. Et je met en place une infrastructure adaptée aux besoins de l'application (hébergement, CI/CD, monitoring).",
    article: {
        definition: (
            <>
                <p>
                L’<strong>architecture applicative</strong> désigne l’ensemble des choix structurants qui organisent une application, tant au niveau du code que de ses interactions internes. Elle concerne le découpage en modules, la séparation des responsabilités, le choix des patterns (<strong>MVC, architecture hexagonale, Vertical Slice</strong>) ainsi que la manière dont les différentes parties du système communiquent entre elles. Une architecture bien pensée permet de produire un code <strong>lisible, maintenable et évolutif</strong> dans le temps.
                </p>

                <p>
                Dans un contexte professionnel, ces décisions sont déterminantes. Une mauvaise architecture entraîne rapidement une <strong>dette technique</strong> importante, rendant les évolutions complexes et risquées. À l’inverse, une architecture adaptée permet d’intégrer de nouvelles fonctionnalités sans dégrader l’existant, et de faciliter la collaboration entre développeurs.
                </p>

                <p>
                L’<strong>infrastructure applicative</strong>, quant à elle, regroupe l’ensemble des éléments nécessaires à l’exécution de l’application en production : hébergement, déploiement, orchestration, gestion des ressources et distribution du contenu. Avec l’essor du <strong>cloud</strong> et des <strong>architectures distribuées</strong>, elle est devenue une composante essentielle du développement moderne. Elle implique de savoir choisir les bons outils en fonction des contraintes de <strong>performance, de coût et de scalabilité</strong>.
                </p>
            </>
        ),
        preuves: [
            {
                titre: "Train Lock Pass — Vertical Slice Architecture en production",
                contenu: "Le projet Train Lock Pass m’a permis de découvrir une architecture en Vertical Slice dans un contexte professionnel. Contrairement à une architecture MVC classique, le code était organisé par fonctionnalités complètes, chaque “slice” regroupant les éléments front-end et back-end associés à un même besoin métier. J’ai dû m’approprier rapidement cette organisation pour pouvoir intervenir efficacement sur le projet, sans perturber l’existant. Cette expérience m’a permis de comprendre les avantages de cette approche en termes de lisibilité, de modularité et de maintenabilité, notamment dans des applications de taille importante.",
                projetId: '1',
            },
            {
                titre: "PCA-ADC — architecture serverless et gestion d'une chaîne de traitement complexe",
                contenu: "Le projet PCA-ADC constitue l’exemple le plus complet de mise en place d’une infrastructure applicative. J’ai conçu une chaîne de traitement distribuée permettant de gérer des volumes importants de fichiers. L’architecture repose sur plusieurs composants interconnectés : un stockage partagé (EFS) recevant des fichiers, des traitements automatisés exécutés via des CronJobs Kubernetes, et un stockage final dans un bucket S3 exposé via CloudFront. L’ensemble de l’infrastructure a été défini en Infrastructure as Code avec Terraform, ce qui permettait de garantir des déploiements reproductibles et cohérents.",
                projetId: '2',
            },
            {
                titre: "GoKifu — réflexions sur une architecture serverless",
                contenu: "GoKifu m’a amené à réfléchir à l’architecture d’une application intégrant un moteur d’intelligence artificielle coûteux en ressources. J’ai conçu une architecture distribuée dans laquelle l’application mobile communique avec un serveur proxy (déployé sur Render), lui-même chargé de déclencher des analyses sur une infrastructure serverless via RunPod. Cette approche permet de découpler complètement l’interface utilisateur du moteur d’analyse, tout en optimisant les coûts et les ressources. Ce projet m’a permis de mieux comprendre les problématiques liées aux architectures asynchrones, à la gestion de la latence et à l’intégration de services externes.",
                projetId: '6',
            },
        ],
        autocritique: (
           <>
                <p>
                L’architecture est une compétence que j’ai développée progressivement, principalement à travers la pratique sur des projets concrets. Je suis aujourd’hui à l’aise avec les architectures classiques telles que <strong>MVC</strong> et j’ai commencé à appréhender des modèles plus avancés comme la <strong>Vertical Slice</strong>. Cependant, je reconnais que je n’ai pas encore une maîtrise complète de tous les patterns d’architecture modernes, notamment ceux liés aux <strong>microservices, à l’event-driven architecture</strong> ou encore à l’<strong>architecture hexagonale</strong>.
                </p>

                <p>
                Je suis également capable de mettre en place une <strong>infrastructure complète</strong> pour une application, notamment dans un contexte cloud, en utilisant des outils comme <strong>Docker, AWS, Kubernetes</strong> ou <strong>Terraform</strong>. Bien que je sois à l’aise avec les concepts d’<strong>infrastructure as code</strong> et de <strong>CI/CD</strong>, je reconnais qu’il faut que j’approfondisse mes connaissances théoriques notamment sur Kubernetes et AWS.
                </p>

                <p>
                Cette compétence constitue un axe fort de mon profil, car elle me permet de prendre du recul sur un projet et de ne pas me limiter à l’implémentation. Elle représente également un levier important pour évoluer vers des <strong>rôles à responsabilité technique</strong>.
                </p>
           </>
        ),
        evolution: (
            <>
                <p>
                À moyen terme, je souhaite approfondir mes connaissances sur les architectures modernes, notamment les <strong>microservices, l’event-driven architecture</strong> et l’<strong>architecture hexagonale</strong>. L’objectif est de mieux structurer mes projets et de prendre des <strong>décisions architecturales</strong> plus rigoureuses et argumentées.
                </p>

                <p>
                Je souhaite également renforcer mes compétences sur l’<strong>infrastructure cloud</strong>, en approfondissant des outils comme <strong>Kubernetes et AWS</strong>, ainsi que les principes de conception d’<strong>architectures distribuées</strong>. Comprendre les enjeux de <strong>scalabilité, de résilience et de coût</strong> est essentiel pour concevoir des applications modernes.
                </p>

                <p>
                Dans mon projet professionnel, cette compétence est une opportunité d’évolution, car elle me permet de dépasser le simple rôle de développeur pour aller vers un rôle de <strong>référent technique (lead tech)</strong>. Je souhaite être capable, à terme, de proposer des architectures adaptées à des projets complexes, de défendre mes choix techniques et de contribuer à la <strong>conception globale d’un système</strong>, au-delà du simple développement.
                </p>
            </>
        ),
    },
    projets: ['1', '2', '6'],
};
