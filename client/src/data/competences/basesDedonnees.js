export const basesDeonnees = {
    id: 'bases-de-donnees',
    name: 'Gestion de bases de données',
    type: 'technique',
    mastery: 3,
    description: "Je modélise, interroge et optimise des bases de données relationnelles pour répondre aux besoins applicatifs.",
    article: {
        definition: (
            <>
                <p>La gestion de <strong>bases de données relationnelles</strong> recouvre la <strong>modélisation des données</strong> (entités, relations, cardinalités), leur interrogation via <strong>SQL</strong>, et leur optimisation (indexation, requêtes performantes). Dans un contexte professionnel, une bonne maîtrise des bases de données est fondamentale : la <strong>qualité du modèle de données</strong> conditionne souvent la maintenabilité et les performances de l’application sur le long terme.</p>

                <p>
                Dans un contexte professionnel, la qualité du modèle de données est déterminante. Une <strong>base bien conçue</strong> permet de garantir la <strong>cohérence des informations</strong>, de faciliter l’évolution de l’application et d’assurer de bonnes performances. À l’inverse, une mauvaise modélisation peut entraîner des complexités inutiles, des ralentissements ou des difficultés de maintenance.
                </p>

                <p>
                Aujourd’hui, l’utilisation d’<strong>ORMs</strong> comme <strong>Doctrine (PHP)</strong> ou <strong>Hibernate (Java)</strong> simplifie l’interaction avec la base de données en permettant de manipuler les données sous forme d’objets. Toutefois, une bonne compréhension du <strong>SQL</strong> reste indispensable pour déboguer, optimiser des requêtes ou gérer des cas complexes. La maîtrise des bases de données est donc une <strong>compétence centrale dans le développement back-end</strong>.
                </p>
            </>
        ),
        preuves: [
            {
                titre: "TrainLockPass — participation à la conception d'une base de données relationnelle",
                contenu: "Le projet Train Lock Pass m’a permis de découvrir la gestion des données dans un contexte professionnel exigeant. J’ai travaillé avec une base de données utilisée par un back-end en Java/Quarkus, dans laquelle les données étaient structurées pour répondre à des contraintes métier fortes liées aux habilitations des agents. J’ai été amené à faire évoluer le modèle de données existant (création d'entités, modifications de relations).",
                projetId: '1',
            },
            {
                titre: "Fisherman's Instruments — conception d'une base de données relationnelle en autonomie",
                contenu: "Le projet Fisherman’s Instruments constitue un premier exemple concret de modélisation de base de données. J’ai conçu un schéma relationnel permettant de gérer un catalogue d’instruments ainsi que des contenus éditoriaux. J’ai identifié les entités principales (instruments, sections, prestations, images, utilisateurs, etc...) et défini leurs relations à l’aide de Doctrine ORM. Une attention particulière a été portée à la flexibilité du modèle, afin de permettre l’ajout de nouveaux types d’instruments ou de nouvelles catégories sans nécessiter de refonte de la base. Cette conception a permis au client de faire évoluer son contenu de manière autonome, sans intervention technique.",
                projetId: '3',
            },
        ],
        autocritique: (
            <>
                <p>
                Je dispose aujourd’hui d’une bonne maîtrise des <strong>bases de données relationnelles</strong> sur les aspects fondamentaux. Je suis capable de concevoir un <strong>modèle de données cohérent</strong>, de comprendre et d’utiliser un <strong>ORM</strong>, ainsi que d’écrire des requêtes simples à intermédiaires en <strong>SQL</strong>. Cette compétence me permet de structurer efficacement la couche de données dans mes projets.
                </p>

                <p>
                Cependant, je reste moins expérimenté sur les aspects avancés, notamment l’<strong>optimisation de requêtes complexes</strong>, l’<strong>indexation fine</strong> ou encore l’analyse des performances à travers les <strong>plans d’exécution</strong>. La gestion des <strong>transactions dans des contextes concurrentiels</strong> est également un domaine que je n’ai pas encore eu l’occasion d’explorer en profondeur. Aussi, je manque de connaissances théoriques sur les <strong>jointures complexes</strong>.
                </p>

                <p>
                La gestion des bases de données constitue pour moi un <strong>socle fondamental du développement back-end</strong>. Elle est essentielle pour garantir la qualité, la performance et la maintenabilité d’une application, et représente un <strong>axe de progression important</strong> dans mon parcours.
                </p>
            </>
        ),
        evolution: (
            <>
                <p>
                À moyen terme, je souhaite approfondir mes connaissances en <strong>SQL avancé</strong>, notamment à travers l’utilisation des <strong>fonctions analytiques (window functions)</strong>, des <strong>CTE (Common Table Expressions)</strong>, des jointures complexes et l’analyse des <strong>plans d’exécution</strong>. L’objectif est de mieux comprendre le comportement des requêtes et d’<strong>optimiser les performances</strong> des applications.
                </p>

                <p>
                Je souhaite également explorer les <strong>bases de données non relationnelles</strong>, telles que <strong>MongoDB</strong> ou <strong>Redis</strong>, afin d’élargir ma compréhension des différents <strong>modèles de stockage</strong> et de leur utilisation selon les cas d’usage. Cette ouverture me permettra de mieux appréhender les <strong>architectures modernes</strong>, souvent hybrides.
                </p>

                <p>
                Enfin, je m’intéresse à la <strong>modélisation des données dans des architectures distribuées ou microservices</strong>, où la gestion des données devient plus complexe. Cette compétence s’inscrit dans mon objectif de devenir un développeur capable de concevoir des <strong>systèmes complets, performants et évolutifs</strong>.
                </p>
            </>
        ),
    },
    projets: ['1', '3'],
};
