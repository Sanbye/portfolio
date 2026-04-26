import goKifuImg from '../../Images/projects/goKifu.png';
import TypeScriptLogo from '../../Images/logos/TypeScript.svg';
import reactLogo from '../../Images/logos/react.svg';
import pythonLogo from '../../Images/logos/Python.svg';
import dockerLogo from '../../Images/logos/Docker.svg';

export const goKifu = {
    id: '6',
    slug: 'gokifu',
    category: 'personnel',
    size: 'bigger',
    title: 'GoKifu (en developpement)',
    subtitle: "Application de gestion et d'analyse IA de parties de Go",
    image: goKifuImg,
    paragraphs: [
        "Application mobile pour enregistrer et analyser des parties de Go à l'aide du moteur IA KataGo.",
        "Projet long terme explorant l'intégration d'IA, l'architecture serverless et l'expérience utilisateur.",
        "En développement depuis plus de deux ans.",
    ],
    stack: [
        { src: TypeScriptLogo, alt: 'TypeScript' },
        { src: reactLogo, alt: 'React' },
        { src: pythonLogo, alt: 'Python' },
        { src: dockerLogo, alt: 'Docker' },
    ],
    article: {
        presentation: (
            <>
                <p>
                GoKifu est une <strong>application mobile native</strong> dédiée à l’<strong>analyse et à la visualisation de parties du jeu de Go</strong>, développée dans une démarche personnelle sur une durée d’<strong>environ deux ans</strong>. Ce projet s’inscrit à la fois dans ma passion pour les jeux de stratégie et dans ma volonté de concevoir un produit complet, mêlant interface utilisateur, logique métier complexe et <strong>intégration d’intelligence artificielle</strong>.
                </p>

                <p>
                L’objectif de GoKifu est de permettre à un utilisateur de rejouer des parties de Go, de naviguer dans les coups, modifier les positions, mais également d’obtenir une <strong>analyse avancée</strong> grâce à l’intégration du moteur IA <strong>KataGo</strong>. L’application ne se limite pas à une simple visualisation : elle propose une compréhension approfondie des positions, en mettant en évidence les <strong>meilleures variantes</strong> et les évaluations associées.
                </p>

                <p>
                Ce projet s’inscrit dans une logique de création d’un <strong>produit abouti</strong>, avec une attention particulière portée à l’<strong>expérience utilisateur</strong>. Il vise à offrir une interface fluide et intuitive, capable de rendre accessibles des concepts complexes liés à l’analyse de parties, tout en restant agréable à utiliser pour des joueurs de différents niveaux.
                </p>
            </>
        ),
        objectifs: (
            <>
                <h3>Contexte</h3>

                <p>
                En tant que joueur de Go impliqué dans la <strong>pratique compétitive</strong>, j’ai progressivement développé une bonne compréhension de l’environnement technologique qui entoure ce jeu. Ma participation à de nombreux <strong>tournois</strong>, ainsi que ma présence active au sein de la communauté, m’ont permis d’échanger régulièrement avec d’autres joueurs et d’observer concrètement leurs usages et leurs attentes vis-à-vis des outils numériques.
                </p>

                <p>
                Cette immersion m’a conduit à identifier à la fois les <strong>besoins récurrents des joueurs</strong>, notamment en matière d’analyse, de visualisation des parties et de progression, mais également les <strong>limites des solutions existantes</strong>. Beaucoup d’outils sont soit trop complexes pour être utilisés facilement, soit insuffisamment adaptés à une utilisation moderne, en particulier sur <strong>mobile</strong>. Cette expérience utilisateur souvent perfectible constitue un frein à leur adoption, notamment pour les joueurs en phase d’apprentissage.
                </p>

                <p>
                Cette double approche, à la fois en tant qu’<strong>utilisateur et développeur</strong>, m’a permis de porter un regard critique sur les outils disponibles et d’orienter mes choix de conception dans le projet GoKifu. Mon objectif était ainsi de proposer une solution <strong>mieux adaptée aux usages réels</strong>.
                </p>

                <h3>Objectifs</h3>
                <p>
                L’objectif principal du projet était de concevoir une application capable de gérer l’ensemble du <strong>cycle de vie d’une partie de Go</strong>, depuis sa création jusqu’à son analyse avancée. Cela impliquait la gestion des règles du jeu, la navigation dans les coups, ainsi que la possibilité de rejouer et d’explorer différentes variantes.
                </p>

                <p>
                Un second objectif consistait à intégrer un <strong>moteur d’analyse externe</strong>, en l’occurrence <strong>KataGo</strong>, afin de fournir des suggestions de coups et des évaluations de position. L’enjeu était de transformer ces données techniques en informations compréhensibles pour l’utilisateur.
                </p>

                <p>
                Enfin, le projet visait à proposer une <strong>expérience utilisateur fluide sur mobile</strong>, avec une interface intuitive permettant de naviguer facilement dans des structures de données complexes comme les fichiers <strong>SGF</strong>.
                </p>

                <h3>Enjeux</h3>
                <p>
                L’un des principaux enjeux du projet résidait dans la <strong>gestion de la complexité du jeu de Go</strong>. Il était nécessaire d’implémenter correctement les règles, notamment la <strong>capture des pierres</strong>, la <strong>gestion des groupes</strong> et les règles de légalité des coups. Ces éléments nécessitent une modélisation précise et rigoureuse.
                </p>

                <p>
                Un autre enjeu concernait la <strong>gestion des données d’analyse</strong>. L’intégration de KataGo implique de manipuler des structures complexes, notamment des <strong>arbres de variantes</strong>. Il était essentiel de structurer ces données de manière cohérente afin de les intégrer correctement dans le format SGF et de les afficher de manière claire.
                </p>

                <p>
                L’intégration du moteur d’analyse <strong>KataGo</strong> au sein de mon application mobile native a constitué un <strong>enjeu technique majeur</strong>. Très rapidement, j’ai constaté que ce type de moteur, particulièrement exigeant en <strong>ressources de calcul</strong>, ne pouvait pas être exécuté directement dans l’environnement mobile. Cela m’a amené à penser l’architecture globale du projet afin de <strong>déporter l’exécution de l’IA</strong> vers une infrastructure adaptée.
                </p>

                <p>
                Cette contrainte a révélé la nécessité de mettre en place une architecture capable d’isoler le moteur d’analyse dans un environnement dédié. J’ai ainsi exploré des solutions orientées <strong>serverless</strong>, permettant de déclencher dynamiquement des analyses sans maintenir en permanence une infrastructure coûteuse.
                </p>

                <p>
                Ce travail m’a permis de mieux comprendre les enjeux liés à l’intégration de modèles d’<strong>intelligence artificielle</strong> dans une application réelle, notamment en termes de <strong>performance, de latence et de gestion des ressources</strong>. Il a également renforcé ma capacité à concevoir des <strong>architectures distribuées</strong>.
                </p>

                <p>
                Enfin, le projet impliquait un enjeu fort en termes d’<strong>expérience utilisateur</strong>, notamment dans la navigation entre les coups, la reconstruction de l’état du plateau et l’affichage des résultats des analyses IA. Contrairement aux autres outils disponibles, je souhaitais proposer une <strong>interface fluide et intuitive</strong>, ce qui ajouterait une valeur significative par rapport aux solutions existantes.
                </p>

                <h3>Risques</h3>
                <p>
                D’abord, des risques techniques liés à la <strong>performance et à la gestion des états</strong> dans l’application ont été identifiés, notamment en lien avec le rendu du plateau et les interactions utilisateur.
                </p>

                <p>Les <strong>coûts liés à l’infrastructure</strong> et à la maintenance du projet ont également été identifiés, en particulier dans le cadre d’une évolution continue des fonctionnalités et de l’augmentation du volume de données à traiter.</p>

                <p>Enfin, bien que j’ai pu identifier un besoin chez les joueurs de Go en terme d’outils de gestion de parties et d’analyses IA, il existe un risque de <strong>non-adoption</strong> par les utilisateurs finaux.</p>
            </>
        ),
        etapes: (
            <>
                <p>
                Le projet GoKifu s’est construit progressivement sur une longue période, avec une <strong>approche itérative</strong> centrée sur l’amélioration continue. Dans un premier temps, j’ai construit la base de l’application en développant une interface utilisateur simple, une <strong>barre de navigation au niveau du pouce</strong>, le squelette de chaque page, ainsi que le design global de l’application.
                </p>

                <p>
                    J’ai mis en place un <strong>Jira personnel</strong> pour suivre l’avancement du projet, organiser les tâches et prioriser les fonctionnalités à développer. Cette démarche m’a permis de structurer mon travail, de garder une vision claire des objectifs à court et moyen terme, et de m’assurer que chaque étape contribuait à l’évolution globale de l’application.
                </p>

                <p>
                J’ai ensuite mis en place la <strong>logique fondamentale du jeu de Go</strong>, en développant une structure de données permettant de représenter le plateau sous forme de grille, ainsi qu’un système de gestion des coups. Puis j’ai implémenté les règles du jeu, notamment la <strong>détection des captures</strong> et la gestion des groupes de pierres. Cette étape a nécessité une réflexion approfondie sur les algorithmes utilisés, afin de garantir la cohérence des états du plateau à chaque coup.
                </p>

                <p>
                Une fois cette base en place, j’ai développé un <strong>système de navigation dans les coups</strong>, permettant à l’utilisateur de revenir en arrière ou d’avancer dans la partie. Cela impliquait de reconstruire dynamiquement l’état du plateau en fonction d’un index de coup.
                </p>

                <p>
                J’ai également intégré la <strong>gestion du format SGF</strong>, permettant de sauvegarder et de charger des parties, ainsi que d’y intégrer des analyses. Cette partie a été particulièrement complexe, notamment pour gérer correctement les variations et leur positionnement dans l’<strong>arbre de jeu</strong>.
                </p>

                <p>
                    Très rapidement, j’ai mis en place une <strong>bêta test</strong>, en partageant l’application avec les membres de mon club de Go. Leurs retours ont été précieux pour identifier les bugs et les points d’amélioration, notamment en termes d’ergonomie et de fonctionnalités. Cette phase de test est essentielle pour orienter le développement et s’assurer que l’application répondait aux besoins réels des utilisateurs.
                </p>

                <p>
                Dans un second temps, j’ai travaillé sur l’intégration de <strong>KataGo</strong> en mettant en place une <strong>architecture intermédiaire</strong> entre l’application mobile et le moteur d’analyse. L’application ne communique pas directement avec KataGo : elle passe par un <strong>serveur proxy Python</strong> que j’ai déployé sur <strong>Render</strong>. Ce serveur joue un rôle central, car il reçoit les demandes d’analyse envoyées par l’application, les valide, les formate correctement, puis les transmet à l’infrastructure chargée d’exécuter le moteur KataGo.
                </p>

                <p>
                Ce proxy m’a permis de <strong>séparer clairement les responsabilités</strong>. L’application mobile reste concentrée sur l’expérience utilisateur, l’affichage du goban, la navigation dans les coups et la restitution des analyses. Le serveur Render, lui, prend en charge la logique de communication avec le service d’analyse, la préparation des requêtes, le traitement des réponses et leur transformation en données exploitables par le front-end.
                </p>

                <p>
                Pour l’exécution de KataGo, j’ai choisi d’utiliser <strong>RunPod Serverless</strong>. Ce choix s’explique par la nature même du moteur d’analyse, qui nécessite des ressources importantes, notamment <strong>GPU</strong>, mais qui n’a pas besoin de fonctionner en continu. L’approche <strong>serverless</strong> permet de lancer un environnement d’analyse uniquement lorsqu’une demande est effectuée, ce qui <strong>limite les coûts</strong> tout en offrant la puissance nécessaire.
                </p>

                <p>
                Le fonctionnement général repose donc sur une <strong>chaîne distribuée</strong> : l’application mobile envoie une position à analyser au proxy Render, celui-ci transmet la requête à un endpoint <strong>RunPod Serverless</strong>, puis RunPod exécute KataGo dans un <strong>conteneur dédié</strong>. Une fois l’analyse terminée, les résultats sont renvoyés au serveur proxy, qui les nettoie, les structure et les renvoie à l’application mobile.
                </p>

                <p>
                Cette architecture m’a permis de mieux maîtriser les contraintes liées à l’intégration d’un moteur d’<strong>intelligence artificielle</strong> dans une application mobile. Elle m’a notamment confronté à des problématiques de <strong>latence, de formatage des données, de gestion des erreurs</strong> et de temps de démarrage des workers serverless. Ce travail a été déterminant pour rendre l’analyse KataGo exploitable dans une application destinée à des utilisateurs réels.
                </p>

                <p>Enfin, l’application est encore en cours de développement, je travaille actuellement sur une <strong>base de données de parties professionnelles</strong> afin de permettre aux utilisateurs de suivre les dernières parties des tournois prestigieux contemporains.</p>
            </>
        ),
        acteurs: (
            <>
                <p>
                Le projet GoKifu a été réalisé de manière <strong>entièrement autonome</strong> sur le plan du développement, mais il s’est construit en interaction constante avec un groupe de <strong>bêta-testeurs issus de mon club de Go</strong>. Cette collaboration a joué un rôle essentiel dans l’évolution de l’application, en apportant un retour utilisateur concret et régulier.
                </p>

                <p>
                En tant que joueurs actifs, ces bêta-testeurs m’ont permis de confronter mes choix de conception à des usages réels. Leurs retours portaient aussi bien sur l’<strong>ergonomie de l’interface</strong> que sur la pertinence des fonctionnalités proposées, notamment en ce qui concerne la navigation dans les parties, la lisibilité des analyses ou encore la compréhension des variantes issues de <strong>KataGo</strong>.
                </p>

                <p>
                Ces échanges m’ont amené à ajuster plusieurs aspects du projet, en adoptant une <strong>démarche itérative basée sur le feedback utilisateur</strong>. Ils ont également permis de valider certaines décisions techniques en les confrontant directement aux attentes du terrain. Cette interaction régulière avec des utilisateurs finaux a été déterminante pour orienter le projet vers une solution réellement adaptée aux besoins des joueurs de Go.
                </p>
            </>
        ),
        resultats: (
            <>
                <p>
                GoKifu constitue aujourd’hui un <strong>MVP fonctionnel</strong> permettant de rejouer et d’analyser des parties de Go. L’application intègre déjà les principales fonctionnalités attendues, notamment la navigation dans les coups, la gestion du format <strong>SGF</strong> et l’exploitation des analyses fournies par le moteur <strong>KataGo</strong>. Elle offre une expérience utilisateur cohérente et permet de manipuler des concepts complexes de manière relativement fluide.
                </p>

                <p>
                Le projet est actuellement en phase de <strong>bêta fermée</strong>, avec un groupe restreint de testeurs issus de mon club de Go. Cette phase me permet de confronter l’application à des usages réels, d’identifier les points de friction et d’améliorer progressivement l’ergonomie ainsi que la stabilité de l’ensemble. Les <strong>retours utilisateurs</strong> jouent un rôle central dans l’évolution du produit, en orientant les priorités de développement.
                </p>

                <p>
                D’un point de vue personnel, ce projet m’a permis de développer des compétences techniques solides, notamment en <strong>gestion d’état complexe</strong>, en <strong>intégration d’API d’intelligence artificielle</strong> et en conception d’<strong>architecture distribuée</strong>. Il représente également une expérience significative de gestion d’un projet sur le long terme, avec une approche itérative et centrée sur l’utilisateur.
                </p>

                <p>
                Bien que l’application ne soit pas encore finalisée, elle constitue une base solide et exploitable, avec une <strong>mise à disposition publique envisagée via le Play Store</strong>. Ce projet reste en cours de développement et continue d’évoluer au fil des retours et des améliorations apportées.
                </p>
            </>
        ),
        lendemains: (
            <>
                <p>
                Le projet GoKifu est actuellement en <strong>phase de développement active</strong>, avec un MVP fonctionnel en bêta fermée. Les prochaines étapes consistent à consolider les fonctionnalités existantes, améliorer la stabilité de l’application et affiner l’expérience utilisateur à partir des retours des bêta-testeurs.
                </p>

                <p>
                À court terme, plusieurs évolutions sont en cours, notamment l’intégration d’une <strong>base de données de parties professionnelles</strong>. Cette fonctionnalité vise à enrichir l’application en proposant un accès à un large corpus de parties, permettant aux utilisateurs de s’entraîner, d’analyser des situations réelles et d’approfondir leur compréhension du jeu.
                </p>

                <p>
                À l’issue de ma formation, je prévois de me consacrer pleinement au projet afin de finaliser l’ensemble des fonctionnalités et de préparer le déploiement d’une <strong>bêta ouverte sur le Play Store</strong>. Cette version aura pour objectif de proposer une application plus complète, stable et accessible à un public plus large.
                </p>

                <p>
                À plus long terme, le projet pourra évoluer vers des fonctionnalités plus avancées, notamment autour de l’<strong>intelligence artificielle</strong> et d’éventuels <strong>aspects communautaires</strong>. GoKifu s’inscrit ainsi dans une démarche progressive, avec une volonté de construire un <strong>produit abouti</strong>, capable de répondre aux besoins réels des joueurs de Go.
                </p>
            </>
        ),
        regardCritique: (
            <>
                <p>
                GoKifu est sans doute le <strong>projet le plus passionnant de mon parcours</strong>. Il m’a permis de travailler sur une problématique complexe sur une longue durée, en me confrontant à des enjeux à la fois techniques et fonctionnels.
                </p>

                <p>
                Avec le recul, certains aspects pourraient être améliorés, notamment en termes d’optimisation et de structuration du code. La <strong>gestion des états</strong> et la <strong>reconstruction du plateau</strong> ont nécessité plusieurs itérations avant d’atteindre un niveau satisfaisant.
                </p>

                <p>
                Ce projet m’a surtout appris à <strong>persévérer face à des problèmes complexes</strong>, et à construire une solution de manière progressive. Il reflète ma capacité à <strong>mener un projet de bout en bout</strong>, en combinant passion, rigueur et volonté d’apprentissage.
                </p>
            </>
        ),
    },
    competences: [
        { id: 'front-end',    nom: 'Développement web front-end', type: 'technique' },
        { id: 'conception-interfaces', nom: "Conception d'interfaces", type: 'technique' },
        { id: 'architecture', nom: 'Architecture et infrastructure applicative',    type: 'technique' },
        { id: 'perseverance', nom: 'Persévérance',                type: 'humaine' },
        { id: 'autonomie',    nom: 'Autonomie',                   type: 'humaine' },
        { id: 'curiosite',    nom: 'Curiosité',                   type: 'humaine' }
    ],
};
