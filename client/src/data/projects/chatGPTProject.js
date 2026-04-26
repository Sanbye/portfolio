import chatGPTproject from '../../Images/projects/image.png';
import jsLogo from '../../Images/logos/js.svg';
import reactLogo from '../../Images/logos/react.svg';
import nodeLogo from '../../Images/logos/node.svg';
import githubLogo from '../../Images/logos/github.svg';

export const chatGPTProject = {
    id: '4',
    slug: 'chatgpt-project',
    category: 'personnel',
    size: 'smaller',
    title: 'ChatGPT Project',
    subtitle: "Un projet personnel utilisant l'API OpenAI",
    image: chatGPTproject,
    paragraphs: [
        "Interface interactive exploitant l'API OpenAI pour générer des réponses personnalisables via ChatGPT.",
        "Projet de curiosité pour comprendre le fonctionnement interne des LLMs et de l'API OpenAI.",
        "Stack JavaScript, React, Node.js.",
    ],
    stack: [
        { src: jsLogo, alt: 'JavaScript' },
        { src: reactLogo, alt: 'React' },
        { src: nodeLogo, alt: 'Node.js' },
    ],
    links: [
        { href: 'https://github.com/Sanbye/chatGPT-project', logo: githubLogo, alt: 'GitHub' },
    ],
    article: {
        presentation: (
           <>
                <p>
                Ce projet personnel est né d’une <strong>curiosité initiale pour les modèles de langage</strong> et l’<strong>API OpenAI</strong>, au moment de l’<strong>émergence de ChatGPT</strong>. À cette période, j’ai commencé à expérimenter ces technologies avec un ami développeur, dans une démarche exploratoire visant à mieux comprendre le fonctionnement de ces nouveaux outils et leur potentiel.
                </p>

                <p>
                L’idée de départ était simple : interagir directement avec l’API afin de reproduire le comportement de ChatGPT et observer l’impact des différents paramètres, tels que la <strong>température</strong>, le <strong>prompt système</strong> ou encore la structuration des requêtes. Cette première approche m’a permis de découvrir les <strong>mécanismes fondamentaux des modèles de langage</strong> et la manière dont ils peuvent être pilotés.
                </p>

                <p>
                Quelques années plus tard, j’ai repris ce projet de manière plus approfondie, en intégrant des fonctionnalités liées au <strong>traitement de la voix</strong>. L’objectif était de créer une interface permettant de <strong>dialoguer à l’oral avec un modèle de langage</strong>, tout en exploitant ses capacités pour corriger les erreurs à l’écrit.
                </p>

                <p>
                Ce projet s’inscrit également dans une démarche personnelle d’<strong>apprentissage des langues</strong>. Face à la difficulté de trouver un correspondant régulier, j’ai imaginé une solution permettant de <strong>simuler une conversation</strong>, dans laquelle l’utilisateur peut parler librement, recevoir une réponse orale, tout en bénéficiant d’une <strong>correction écrite de ses erreurs</strong>. Cette approche permet de dissocier l’aisance à l’oral de la correction grammaticale, en offrant un retour immédiat et structuré.
                </p>
           </>
        ),
        objectifs: (
            <>
                <h3>Contexte</h3>
                <p>
                Le projet s’inscrit dans un contexte d’<strong>émergence rapide des technologies d’intelligence artificielle générative</strong> (début 2023), en particulier des <strong>modèles de langage accessibles via API</strong>. Cette période a marqué un tournant dans les usages du développement, avec l’apparition de nouveaux outils capables de générer du texte, d’interagir en langage naturel et de s’intégrer facilement dans des applications.
                </p>

                <p>
                Dans ce contexte, il était important pour moi de comprendre concrètement le fonctionnement de ces technologies, au-delà de leur simple utilisation. Le projet constitue ainsi une <strong>démarche d’auto-formation</strong>, visant à expérimenter directement avec ces outils afin d’en maîtriser les principes fondamentaux.
                </p>

                <h3>Objectifs</h3>
                <p>
                L’objectif principal du projet n’était pas de créer un produit finalisé, mais de développer une <strong>compréhension approfondie des modèles de langage</strong> et de leur intégration dans une application. Il s’agissait notamment d’apprendre à structurer les échanges avec le modèle, à manipuler les <strong>paramètres influençant les réponses</strong>, et à gérer les contraintes techniques liées à l’utilisation d’une API.
                </p>

                <p>
                Un second objectif est apparu lors de la reprise du projet : concevoir une interface permettant d’<strong>interagir à l’oral avec le modèle</strong>, en combinant <strong>reconnaissance vocale</strong> et <strong>synthèse vocale</strong>. Cette évolution répondait à une volonté personnelle d’explorer des cas d’usage concrets, en particulier dans le domaine de l’<strong>apprentissage des langues</strong>.
                </p>

                <h3>Enjeux</h3>
                <p>
                L’enjeu du projet résidait dans la <strong>gestion des échanges avec le modèle</strong>. Après avoir pris connaissance de la documentation de l’API OpenAI, il était nécessaire de structurer correctement les requêtes afin d’obtenir des réponses pertinentes, tout en expérimentant différentes approches de <strong>prompt engineering</strong>. Cela impliquait une compréhension fine du rôle du <strong>prompt système</strong> et de son influence sur le comportement du modèle.
                </p>

                <p>
                Par la suite, un nouvel enjeu concernait l’<strong>intégration des technologies vocales</strong>. Il s’agissait de coordonner plusieurs composants — <strong>reconnaissance vocale, génération de texte, synthèse vocale</strong> — afin de créer une expérience fluide et cohérente. Cette interaction en temps réel introduisait également des contraintes liées à la <strong>latence</strong> et à la gestion des erreurs.
                </p>

                <p>
                Enfin, le projet impliquait une réflexion sur l’<strong>expérience utilisateur</strong>, notamment dans le cadre de l’apprentissage des langues. Il était important de proposer un fonctionnement permettant à l’utilisateur de s’exprimer librement à l’oral, tout en recevant un <strong>retour utile sur ses erreurs</strong> sans interrompre le flux de la conversation.
                </p>

                <h3>Risques</h3>
                <p>
                Plusieurs risques ont été identifiés au cours du projet. Le premier concernait la <strong>gestion des appels API</strong>, notamment en termes de <strong>latence, de coût et de consommation de tokens</strong>. Une mauvaise gestion de l’API pouvait rapidement rendre l’application onéreuse à l’utilisation.
                </p>

                <p>
                Un autre risque portait sur la <strong>synchronisation entre la reconnaissance vocale, la génération de réponse et la restitution audio</strong>. Une mauvaise coordination de ces éléments pouvait nuire à l’expérience utilisateur.
                </p>

                <p>
                Enfin, un risque lié à la <strong>qualité des interactions</strong> existait. Sans un travail suffisant sur les <strong>prompts</strong>, les réponses du modèle pouvaient être incohérentes ou peu pertinentes, limitant l’intérêt de l’application.
                </p>

            </>
        ),
        etapes: (
            <>
                <p>
                Le projet s’est déroulé en plusieurs phases distinctes. Dans un premier temps, j’ai exploré l’<strong>API OpenAI</strong> de manière directe, en envoyant des requêtes simples afin de comprendre son fonctionnement. Cette phase expérimentale m’a permis de me familiariser avec la structure des échanges, la gestion des paramètres et les contraintes liées à l’utilisation du modèle.
                </p>

                <p>
                J’ai ensuite mis en place un <strong>serveur Node.js</strong> chargé de jouer le rôle d’intermédiaire entre le front-end et l’API OpenAI. Cette architecture permettait de <strong>sécuriser la clé API</strong> en évitant de l’exposer côté client, tout en centralisant la logique de traitement des requêtes.
                </p>

                <p>
                Une interface <strong>React</strong> a ensuite été développée afin de permettre à l’utilisateur d’interagir avec le modèle. Cette interface offrait la possibilité de configurer les paramètres des requêtes, d’envoyer des messages, d’afficher les réponses et de conserver un <strong>historique des échanges</strong>.
                </p>

                <p>
                Lors de la reprise du projet, j’ai enrichi l’application en intégrant des <strong>fonctionnalités vocales</strong>. J’ai utilisé des outils de <strong>reconnaissance vocale</strong> pour transformer la parole en texte, ainsi que des solutions de <strong>synthèse vocale</strong> pour restituer les réponses du modèle à l’oral. Cette évolution a nécessité un travail de synchronisation entre les différents composants afin de garantir une interaction fluide.
                </p>

                <p>
                Enfin, j’ai expérimenté différentes approches de <strong>prompt engineering</strong> afin d’adapter le comportement du modèle au cas d’usage souhaité. J’ai notamment mis en place un système permettant de <strong>corriger les erreurs à l’écrit</strong> tout en conservant une réponse naturelle à l’oral, afin de répondre à l’objectif d’<strong>apprentissage des langues</strong>.
                </p>

            </>
        ),
        acteurs: (
            <>
                <p>
                Le projet a débuté dans une <strong>démarche collaborative</strong> avec un ami également développeur, dans une logique d’expérimentation et de découverte des technologies. Cette première phase a permis de partager des idées et de confronter différentes approches.
                </p>

                <p>
                Par la suite, le projet a été poursuivi en <strong>autonomie</strong>, ce qui m’a permis d’approfondir certains aspects techniques et de développer une vision plus personnelle du produit.
                </p>
            </>
        ),
        resultats: (
            <>
                <p>
                Ce projet m’a permis d’acquérir une <strong>compréhension approfondie des modèles de langage</strong> et de leur intégration dans une application. J’ai notamment pu expérimenter la <strong>gestion des tokens, des erreurs et des temps de réponse</strong>, ainsi que les bonnes pratiques liées à l’utilisation d’une <strong>API d’intelligence artificielle</strong>.
                </p>

                <p>
                Il m’a également permis d’explorer des <strong>cas d’usage concrets</strong>, en combinant plusieurs technologies pour créer une expérience interactive. Cette approche m’a donné envie d’intégrer davantage d’<strong>intelligence artificielle</strong> dans mes projets futurs.
                </p>
            </>
        ),
        lendemains: (
            <>
                <p>
                Le projet reste aujourd’hui un <strong>prototype</strong>, conçu avant tout comme un <strong>outil d’exploration et d’apprentissage</strong>. La nouvelle version avec les <strong>fonctionnalités vocales</strong> est encore en développement, et n’est pas encore prête à être partagée publiquement. Cependant, elle peut être personnellement utilisée pour échanger et expérimenter dans une <strong>langue étrangère</strong>.
                </p>

                <p>
                Il constitue néanmoins une base solide pour de futurs projets intégrant de l’<strong>intelligence artificielle</strong>, et a joué un rôle important dans le développement de ma <strong>curiosité pour ces technologies</strong>.
                </p>
            </>
        ),
        regardCritique: (
            <>
                <p>
                Ce projet était avant tout <strong>exploratoire</strong>, et c’est précisément ce qui en fait la valeur. L’objectif n’était pas de produire une application parfaite, mais d’<strong>apprendre rapidement</strong> et de comprendre en profondeur le fonctionnement de ces nouvelles technologies.
                </p>

                <p>
                Avec le recul, certains aspects auraient pu être améliorés, notamment en matière de <strong>structuration du code</strong> et de mise en place de tests. Cependant, ces limites sont directement liées au <strong>caractère expérimental du projet</strong>, qui privilégiait la rapidité d’apprentissage à la qualité logicielle.
                </p>

                <p>
                Ce projet m’a surtout permis de développer une <strong>démarche de veille technologique active</strong> et de m’adapter à des technologies en constante évolution. Il a marqué une étape importante dans ma manière d’aborder le développement, en intégrant une dimension <strong>exploratoire et orientée vers l’innovation</strong>.
                </p>
            </>
        ),
    },
    competences: [
        { id: 'front-end', nom: 'Développement web front-end', type: 'technique' },
        { id: 'back-end',  nom: 'Développement web back-end',  type: 'technique' },
        { id: 'conception-interfaces', nom: 'Conception d\'interfaces', type: 'technique' },
        { id: 'curiosite', nom: 'Curiosité',                   type: 'humaine' },
    ],
};
