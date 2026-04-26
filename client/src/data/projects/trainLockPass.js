import placHolderImg from '../../Images/projects/placeHolder.jpg';
import reactLogo from '../../Images/logos/react.svg';
import TypeScriptLogo from '../../Images/logos/TypeScript.svg';
import javaLogo from '../../Images/logos/Java.svg';
import quarkusLogo from '../../Images/logos/Quarkus.svg';

export const trainLockPass = {
    id: '1',
    slug: 'train-lock-pass',
    category: 'professionnel',
    size: 'smaller',
    title: 'Train Lock Pass',
    subtitle: "Application web de gestion des habilitations des agents à bord des trains (Aucune image disponible pour ce projet)",
    image: placHolderImg,
    paragraphs: [
        "Application web mobile sécurisée développée pour les agents SNCF à bord des trains TGV-M et Oxygen, permettant d'assurer la gestion des habilitations en situation opérationnelle.",
        "Implémentation de fonctionnalités critiques : ouverture de portes, démarrage du panneau de contrôle et bypass de systèmes de sécurité via des validations par code.",
        "Développement full-stack avec React/TypeScript côté front et Java Quarkus côté back, déployé avec Kubernetes sur AWS.",
    ],
    stack: [
        { src: reactLogo, alt: 'React' },
        { src: TypeScriptLogo, alt: 'TypeScript' },
        { src: javaLogo, alt: 'Java' },
        { src: quarkusLogo, alt: 'Quarkus' }
    ],
    article: {
        presentation: (
            <>
                <p>Train Lock Pass est une <strong>application web mobile</strong> développée dans le cadre de la <strong>modernisation des systèmes embarqués du parc ferroviaire SNCF</strong>. Elle s’inscrit dans une démarche globale de transformation numérique visant à remplacer progressivement certains dispositifs physiques par des solutions informatiques plus flexibles, maintenables et sécurisées. Cette application est destinée aux agents évoluant à bord des nouvelles rames <strong>TGV-M et Oxygen</strong>, et répond à des besoins opérationnels concrets directement liés à l’exploitation du train.</p>

                <p>L’un des aspects centraux de Train Lock Pass réside dans sa capacité à s’intégrer dans un écosystème technique complexe. Elle est responsable de la <strong>gestion des habilitations</strong> dans le logiciel embarqué. Pour ce faire, l’application communique avec plusieurs systèmes internes et partenaires via des APIs. Elle doit donc garantir une <strong>cohérence parfaite</strong> entre les données manipulées côté application et les systèmes réels qu’elle pilote indirectement. Cette interconnexion impose des contraintes fortes en termes de <strong>fiabilité, de gestion des erreurs et de synchronisation des données</strong>.</p>

                <p>Au-delà de son rôle fonctionnel principal (la gestion des habilitations entre les différents systèmes), Train Lock Pass constitue également une <strong>solution de secours essentielle</strong>. En effet, dans des situations où les dispositifs classiques ne sont plus disponibles — comme la perte d’un <strong>badge magnétique</strong> ou la défaillance d’un système embarqué — l’application permet de maintenir un niveau minimal de fonctionnement. Elle garantit alors l’<strong>authentification</strong> des différents agents présents à bord (conducteurs, contrôleurs, agents d’entretien, etc.) et leur permet de continuer à effectuer les actions nécessaires à l’exploitation du train.</p>

                <p>En effet, en cas de perte de badge, elle permet aux agents d’accéder à un ensemble de <strong>fonctionnalités critiques</strong> indispensables au bon déroulement des opérations à bord. Parmi celles-ci, on retrouve notamment l’<strong>ouverture de certaines zones sécurisées</strong> du train, le <strong>démarrage du panneau de contrôle</strong> ou encore la possibilité d’effectuer un <strong>bypass de systèmes de sécurité</strong> dans des cas bien précis de défaillance matérielle. Ces actions, par nature sensibles, nécessitent un contrôle strict des habilitations des utilisateurs. L’application repose donc sur un <strong>système d’authentification et de validation robuste</strong>, intégrant notamment des mécanismes de vérification par code ainsi que la gestion dynamique des habilitations des agents en fonction de leur rôle et de leur contexte d’intervention.</p>
            </>
        ),
        objectifs: (
            <>
                <h3>Contexte</h3>
                <p>Le projet s’inscrivait dans un <strong>contexte de modernisation du parc ferroviaire</strong>, avec l’arrivée des nouvelles rames TGV-M et Oxygen. Cette transformation implique une évolution des outils utilisés par les agents, avec un passage de solutions physiques (clés carrées pour ouvrir les portes) vers des solutions numériques: <strong>badges magnétiques habilités et application web mobile </strong>. Ainsi, la SNCF avait besoin d'une solution qui permettrait de gérer efficacement les habilitations des agents dans les logiciels embarqués de ces nouvelles rames affin de permettre l'authentification des badges.</p>

                <p>A cela s’ajoutait la nécessité de garantir le bon fonctionnement des opérations à bord du train quel que soit le contexte. C’est pour cela que l’application mobile permet aux agents de continuer à opérer même en cas de <strong>perte de badge</strong> ou de <strong>défaillance d’un système embarqué</strong>. De plus l’utilisation d’application web a bord d’un train nécessitait une solution fiable même en l’absence de résaux.</p>

                <p>Il est important de noter que l’application est responsable de l’<strong>algorithme de génération des codes d’accès</strong> pour certaines fonctionnalités. En conséquence, le code source de l’application fait objet d’un <strong>NDA (Non-Disclosure Agreement)</strong>. Enfin, de part le niveau de criticité de l’application, aucun visuel ne peut être divulgué.</p>

                <h3>Objectifs</h3>
                <p>L’objectif principal du projet Train Lock Pass était de garantir la <strong>cohérence des habilitations</strong> entre le logiciel embarqué, l’application web mobile et les divers partenaires SNCF; de sorte a ce que seuls les agents dûment habilités puissent effectuer des actions sensibles à bord du train (via leur badge magnétique ou l’application web mobile le cas échéant).</p>

                <p>Le second ojectif était de garentir la possibilité d’effectuer un ensemble d’actions importantes en cas de perte de leur badge magnetique. Ces actions incluent notamment l’<strong>ouverture de portes sécurisées</strong>, le <strong>démarrage du panneau de contrôle</strong> ou encore le <strong>bypass de certains systèmes de sécurité</strong> en cas de défaillance matérielle.</p>

                <h3>Enjeux</h3>
                <p>L’enjeu principal du projet concernait la <strong>continuité de service</strong>. Il doit être un <strong>outil de secours essentiel</strong>, capable de fonctionner de manière fiable dans des conditions réelles d’exploitation, avec des utilisateurs en mobilité, dans des environnements parfois contraints et avec des conditions réseau variables, voire dégradées. De par ce fait, l’application doit être conçue pour fonctionner en <strong>mode hors ligne</strong>, afin de garantir une disponibilité maximale dans les situations où le réseau est instable.  Cette capacité à assurer un fonctionnement minimal en toutes circonstances constitue un élément central du projet.</p>
                <p>
                    De plus, ce projet s’inscrit dans une logique de <strong>déploiement à grande échelle</strong> de la solution. L’application a vocation à être utilisée par un nombre important d’agents, issus de différentes nationalités, sur un parc de trains en constante expansion. Cela implique des exigences élevées en matière de <strong>performance, de scalabilité et de maintenabilité</strong>. Par ailleurs, la diversité des utilisateurs nécessite la mise en place d’une <strong>interface multilingue</strong>, afin de garantir une utilisation optimale de l’application quel que soit le contexte linguistique.
                </p>


                <h3>Risques</h3>
                <p>Plusieurs risques ont été identifiés tout au long du développement. Le principal risque concernait la <strong>gestion des droits d’accès</strong> : une erreur de configuration ou une faille dans le système pouvait permettre à un agent non habilité d’exécuter une action critique. D’autres risques étaient liés à l’intégration avec les <strong>systèmes externes</strong>, notamment les APIs partenaires, qui pouvaient introduire des points de défaillance ou des incohérences dans les données.</p>

                <p>Des risques techniques existaient également, en lien avec les contraintes de performance, la gestion des états asynchrones ou encore la complexité de l’architecture. Enfin, des risques liés à l’expérience utilisateur devaient être pris en compte : une interface mal conçue ou peu intuitive pouvait ralentir les agents ou entraîner des erreurs d’utilisation dans des situations déjà sensibles.</p>

                <p>L’ensemble de ces éléments a nécessité une approche rigoureuse, tant sur le plan technique que fonctionnel, afin de proposer une solution fiable, sécurisée et adaptée aux contraintes du terrain.</p>
            </>
        ),
        etapes: (
            <>
                <p>J’ai été présent dès la mise en place du projet Train Lock Pass, ce qui m’a permis de suivre sa construction depuis ses premières phases de développement. Cette position a été particulièrement formatrice, car elle m’a donné l’occasion de comprendre progressivement les choix techniques, les besoins métier et l’organisation du projet au fur et à mesure de leur définition.</p>

                <p>Au début du projet, j’ai dû m’approprier le contexte fonctionnel lié au domaine ferroviaire, notamment la gestion des habilitations des agents, les contraintes liées aux systèmes embarqués et les enjeux de sécurité associés aux actions critiques à bord des trains.</p>

                <p>Ce projet a également été ma première expérience concrète en <strong>méthodologie Agile</strong>. J’ai appris à travailler avec des <strong>User Stories</strong>, à suivre l’avancement des tâches dans <strong>Jira</strong>, à participer aux daily meetings et à comprendre le fonctionnement des <strong>revues de code</strong> et des Merge Requests. Cette organisation m’a permis de mieux structurer mon travail, de communiquer plus régulièrement avec l’équipe et de m’adapter à un rythme de développement collaboratif.</p>

                <p>Sur le plan technique, j’ai pris en charge l’ensemble des fonctionnalités front-end en <strong>React et TypeScript</strong>. J’ai notamment travaillé sur des formulaires, la gestion des états applicatifs (y comppris hors ligne), les appels API sécurisés et l’affichage de données métier. Une attention particulière a été portée à la robustesse des interactions, notamment dans la gestion des erreurs, des chargements, des réponses asynchrones et du <strong>mode hors ligne</strong>.</p>

                <p>J’ai également contribué au back-end en <strong>Java avec Quarkus</strong>, dans une architecture de type <strong>Vertical Slice</strong>. Cette approche m’a permis de comprendre comment une fonctionnalité pouvait être développée de bout en bout, depuis l’exposition d’une API jusqu’à son utilisation côté interface. J’ai ainsi participé à la cohérence entre le front-end et le back-end, notamment à travers l’alignement des <strong>contrats d’API</strong>.</p>

                <p>Enfin, j’ai contribué aux <strong>tests unitaires back-end</strong>, aux revues de code et à l’amélioration progressive de la qualité du projet. Cette expérience m’a permis de monter en compétence à la fois techniquement et méthodologiquement, en participant à un projet construit dès le départ avec des exigences fortes de <strong>sécurité, de fiabilité et de maintenabilité</strong>.</p>
            </>
        ),
        acteurs: (
            <>
                <p>Le projet Train Lock Pass reposait sur une collaboration étroite entre plusieurs types d’acteurs, chacun intervenant à différents niveaux du développement et de la validation de l’application.</p>

                <p>L’équipe de développement était composée de plusieurs développeurs back-end, un <strong>tech-lead</strong> et moi même. En tant que <strong>développeur full-stack</strong>, j’étais amené à développer l’entièreté des fonctionnalités front-end et une partie du back-end, ce qui impliquait une compréhension globale du fonctionnement de l’application et une capacité à faire le lien entre les différentes couches techniques.</p>

                <p>Le <strong>tech-lead</strong> jouait un rôle de coordination et de supervision technique. Il était responsable de l’architecture globale de l’application, de la définition des bonnes pratiques de développement et de la revue du code. Son expertise était précieuse pour garantir la qualité du code et la cohérence des solutions mises en œuvre. Il était également responsable du deploiement de l’application sur les environnements de test et de production, utilisant <strong>Kubernetes</strong> en tant qu’orchestrateur, <strong>Terraform</strong> en "Infra-As-Code" et <strong>AWS</strong> comme solution cloud.</p>

                <p>Le <strong>Product Owner</strong> jouait un rôle central dans la définition des besoins fonctionnels. Il était en charge de la rédaction des <strong>User Stories</strong>, de la priorisation des fonctionnalités et de la validation des développements réalisés. Les échanges réguliers avec lui étaient essentiels pour affiner la compréhension des besoins et s’assurer que les solutions mises en œuvre correspondaient aux attentes métier.</p>

                <p>Des <strong>experts métier SNCF</strong> étaient également impliqués dans le projet, notamment pour valider la pertinence des fonctionnalités dans des conditions d’utilisation réelles. Les agents de conduite et les contrôleurs constituaient les <strong>utilisateurs finaux</strong> de l’application. Leur retour d’expérience était pris en compte lors de phases de validation, afin d’adapter l’interface et les comportements de l’application aux contraintes du terrain.</p>

                <p>Dans ce contexte, j’ai été amené à collaborer étroitement avec les développeurs back-end afin d’aligner les contrats d’API et de garantir la cohérence des échanges de données. J’ai également travaillé en lien direct avec le Product Owner pour clarifier certains besoins fonctionnels et ajuster les implémentations en conséquence.</p>
            </>
        ),
        resultats: (
            <>
                <p>Le projet Train Lock Pass a abouti à la <strong>mise en production</strong> d’une application fonctionnelle, déployée sur les premières rames de test. Cette phase de déploiement a permis de valider le bon fonctionnement de l’application dans un environnement proche des conditions réelles d’exploitation, en prenant en compte les contraintes liées à la mobilité, à l’environnement embarqué et aux interactions avec les systèmes existants. Aujourd’hui le projet doit attendre qu’Alstom et la SNCF mettent les nouvelles rames en circulation.</p>

                <p>Pour l’entreprise, cette application représente une avancée significative dans la <strong>numérisation des outils</strong> utilisés à bord des trains. Elle permet de remplacer des processus auparavant manuels, tout en améliorant la <strong>traçabilité des actions</strong> réalisées et en renforçant la <strong>sécurité des opérations</strong>. La gestion des habilitations est ainsi centralisée et contrôlée.</p>

                <p>D’un point de vue personnel, ce projet a constitué une expérience particulièrement enrichissante. Il m’a permis de monter en compétences sur des technologies modernes telles que <strong>React, TypeScript, Java et Quarkus</strong>, mais aussi de découvrir des problématiques concrètes liées au développement d’<strong>applications critiques</strong>. J’ai également pu développer une meilleure compréhension des <strong>méthodologies agiles</strong> de développement et du travail en équipe.</p>
            </>
        ),
        lendemains: (
            <>
                <p>
                    Le projet Train Lock Pass est aujourd’hui finalisé sur le plan fonctionnel et technique et se trouve en <strong>phase de « run »</strong>. L’application est maintenue par l’équipe, avec un suivi régulier et d’éventuelles corrections ou ajustements, mais sa mise en production est actuellement limitée par un facteur externe : la mise en circulation des nouvelles rames <strong>TGV-M et Oxygen</strong>.
                </p>

                <p>
                    En effet, le déploiement à grande échelle de la solution dépend directement de la livraison et de la mise en service opérationnelle de ces rames par <strong>Alstom et la SNCF</strong>. Tant que celles-ci ne sont pas en circulation sur le réseau ferroviaire public, l’application ne peut pas être exploitée dans son contexte réel d’utilisation.
                </p>

                <p>
                    À moyen terme, lorsque les rames seront progressivement mises en service, l’application sera déployée en conditions réelles. Cette phase impliquera une <strong>montée en charge progressive</strong>, avec l’intégration d’un nombre croissant d’agents utilisateurs et la prise en compte de contraintes supplémentaires liées à l’exploitation à grande échelle. Une attention particulière devra alors être portée aux <strong>performances, à la stabilité et à la maintenabilité</strong> de la solution.
                </p>

                <p>
                    À plus long terme, le projet pourra évoluer en fonction des retours des utilisateurs terrain et des nouveaux besoins métier. Des améliorations fonctionnelles et techniques pourront être apportées afin d’adapter l’application aux usages réels et d’enrichir progressivement ses capacités.
                </p>
            </>
        ),
        regardCritique: (
            <>
                <p>
                    Ce projet a représenté une étape majeure dans ma progression en tant que développeur. J’ai eu l’opportunité de participer au projet dès sa mise en place, ce qui m’a permis de suivre sa construction dans sa globalité et de mieux comprendre les différentes étapes de conception et de développement d’une application professionnelle.
                </p>

                <p>
                    Il s’agissait également de ma première expérience en <strong>méthodologie Agile</strong>, ce qui a nécessité une phase d’adaptation. J’ai appris à travailler avec des <strong>User Stories</strong>, à m’intégrer dans un cycle de développement itératif, à participer aux daily meetings et à collaborer via des outils comme <strong>Jira et GitLab</strong>. Cette expérience m’a permis de mieux structurer mon travail et de comprendre l’importance de la communication au sein d’une équipe.
                </p>

                <p>
                    Sur le plan technique, ce projet m’a permis de monter en compétences sur des technologies que je ne maîtrisais pas initialement, notamment <strong>Java et Quarkus</strong>. J’ai également renforcé mes compétences en <strong>React et TypeScript</strong>, en travaillant sur des problématiques concrètes liées à la gestion d’état, aux appels API et à la robustesse des interfaces dans un contexte critique.
                </p>

                <p>
                    Ce projet m’a surtout sensibilisé à l’importance de la <strong>rigueur dans le développement d’applications à fort enjeu</strong>. La <strong>gestion des habilitations</strong>, la <strong>sécurité des accès</strong> et la fiabilité des fonctionnalités imposent un niveau d’exigence élevé. J’ai compris que chaque choix technique pouvait avoir des conséquences concrètes sur l’exploitation réelle du système.
                </p>

                <p>
                    Avec du recul, j’identifie plusieurs axes d’amélioration. J’aurais pu approfondir davantage certains aspects techniques, notamment en matière d’optimisation et de structuration du code, ainsi que l’utilisation de <strong>design patterns</strong>. J’aurais également pu être plus force de proposition sur certains sujets, notamment en lien avec l’architecture ou l’expérience utilisateur.
                </p>

                <p>
                    Enfin, le fait que le projet soit aujourd’hui en attente de la mise en circulation des nouvelles rames et les divers retards de certains partenaires SNCF m’ont permis de prendre conscience d’une réalité importante : le cycle de vie d’un projet ne dépend pas uniquement du développement technique, mais également de <strong>contraintes industrielles et organisationnelles externes</strong>. Cette expérience m’a apporté une vision plus globale du fonctionnement d’un projet informatique en contexte réel.
                </p>
            </>
        )
    },
    competences: [
        { id: 'front-end',     nom: 'Développement web front-end',        type: 'technique' },
        { id: 'back-end',      nom: 'Développement web back-end',          type: 'technique' },
        { id: 'architecture',  nom: 'Architecture et infrastructure applicative',             type: 'technique' },
        { id: 'bases-de-donnees',   nom: 'Gestion de bases de données', type: 'technique' },
        { id: 'communication', nom: 'Communication',                       type: 'humaine' },
        { id: 'adaptabilite',  nom: 'Adaptabilité', type: 'humaine' }
    ],
};
