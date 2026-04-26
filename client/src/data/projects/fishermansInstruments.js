import fisherManInstrumentIMG from '../../Images/projects/FisherManSite.png';
import phpLogo from '../../Images/logos/php.svg';
import symfonyLogo from '../../Images/logos/symfony.svg';
import jsLogo from '../../Images/logos/js.svg';
import wwwLogo from '../../Images/logos/www.svg';
import githubLogo from '../../Images/logos/github.svg';

export const fishermansInstruments = {
    id: '3',
    slug: 'fishermans-instruments',
    category: 'personnel',
    size: 'bigger',
    title: "FISHERMAN'S INSTRUMENTS",
    subtitle: 'Développement du site web du luthier français Pascal Pecheur',
    image: fisherManInstrumentIMG,
    paragraphs: [
        "Site web complet pour un luthier français : front-office vitrine et back-office de gestion de contenu.",
        "Liberté créative totale sur le design UI/UX autour de deux couleurs imposées.",
        "Stack PHP/Symfony côté back, JavaScript côté front.",
    ],
    stack: [
        { src: phpLogo, alt: 'PHP' },
        { src: symfonyLogo, alt: 'Symfony' },
        { src: jsLogo, alt: 'JavaScript' },
    ],
    links: [
        { href: 'https://www.fisherman-instruments.com', logo: wwwLogo, alt: 'website' },
        { href: 'https://github.com/Sanbye/Fisherman-Instruments-Web-Site', logo: githubLogo, alt: 'GitHub' },
    ],
    article: {
        presentation: (
            <>
                <p>Fisherman Instruments est un projet de création de <strong>site web vitrine</strong> destiné à une entreprise artisanale spécialisée dans la <strong>lutherie</strong>, plus précisément la conception et la fabrication d’instruments de musique sur mesure. Ce projet s’inscrit dans une volonté forte de l’entreprise de développer sa <strong>visibilité en ligne</strong> et de mieux valoriser son savoir-faire, en mettant en avant ses produits, son expertise et son identité.</p>

                <p>L’entreprise avait déjà tenté à plusieurs reprises de mettre en place une présence web, notamment via un <strong>CMS</strong> puis via une <strong>agence spécialisée</strong>, sans obtenir un résultat satisfaisant. Les principales problématiques identifiées concernaient un manque de qualité dans le design, une absence de cohérence visuelle avec l’identité de la marque, ainsi qu’un manque de réactivité dans la gestion des modifications du site (<strong>plusieurs mois d’attente pour changer un mot</strong>).</p>

                <p>Dans ce contexte, l’entreprise Fisherman Instruments m’avait embauché avec comme ambition de <strong>repartir de zéro</strong> afin de proposer une solution entièrement maîtrisée, à la fois sur le plan technique et sur le plan fonctionnel. L’objectif était de concevoir un site sobre, élégant et cohérent avec l’univers de la lutherie, tout en offrant à l’entreprise une <strong>autonomie maximale dans la gestion de son contenu</strong>.</p>

                <p>Le site devait ainsi répondre à une <strong>double problématique</strong> : d’une part, proposer une <strong>vitrine professionnelle</strong> capable de mettre en valeur des instruments uniques et haut de gamme, et d’autre part, permettre aux membres de l’entreprise — non techniques — de modifier facilement les contenus du site <strong>sans dépendre d’un prestataire externe</strong>.</p>
            </>
        ),
        objectifs: (
            <>
                <h3>Contexte</h3>
                <p>
                Le projet Fisherman Instruments s’inscrit dans un contexte de <strong>transformation numérique</strong> d’une entreprise artisanale spécialisée dans la <strong>lutherie</strong>. L’entreprise souhaitait renforcer sa <strong>présence en ligne</strong> afin de valoriser son savoir-faire, améliorer sa visibilité et accompagner son développement, notamment à une échelle nationale. Cette volonté s’appuyait sur la nécessité de proposer une vitrine numérique cohérente avec l’<strong>image de marque</strong> de l’entreprise, reposant sur la qualité, l’innovation et l’authenticité de ses instruments.
                </p>

                <p>
                Avant ce projet, plusieurs tentatives de création de site web avaient été réalisées, notamment à l’aide d’un <strong>CMS</strong> puis via une <strong>agence spécialisée</strong>. Cependant, ces solutions n’ont pas répondu aux attentes de l’entreprise, tant sur le plan esthétique que fonctionnel. Les interfaces proposées étaient jugées peu attractives, parfois incohérentes visuellement, et surtout difficiles à faire évoluer. Les délais de modification étaient longs et les coûts associés jugés disproportionnés par rapport au service rendu. Cette situation a conduit l’entreprise à rechercher une solution plus adaptée, lui permettant de <strong>reprendre le contrôle sur son outil de communication numérique</strong>.
                </p>


                <h3>Objectifs</h3>
                <p>
                L’objectif principal du projet était de concevoir un <strong>site web vitrine</strong> capable de représenter fidèlement l’identité de l’entreprise. Il devait s’agir d’un site sobre, structuré et visuellement cohérent avec l’univers de la lutherie, mettant en valeur les instruments proposés ainsi que le <strong>savoir-faire artisanal</strong> de l’entreprise. Au-delà de l’aspect visuel, le site devait également permettre une présentation dynamique des contenus, notamment à travers la gestion des instruments et des prestations.
                </p>

                <p>
                Un second objectif majeur résidait dans la volonté de rendre l’entreprise <strong>autonome dans la gestion de son site</strong>. Contrairement aux expériences précédentes, il était essentiel que les membres de l’entreprise puissent modifier eux-mêmes les contenus, qu’il s’agisse d’ajouter de nouveaux instruments, de modifier des descriptions ou de mettre à jour des visuels. Cette autonomie devait être accessible à des utilisateurs ne disposant pas de compétences techniques, ce qui impliquait de concevoir une <strong>interface d’administration simple, intuitive et sécurisée</strong>.
                </p>

                <h3>Enjeux</h3>
                <p>
                L’un des principaux enjeux du projet résidait dans la capacité à <strong>concilier complexité technique et simplicité d’usage</strong> pour des utilisateurs non techniques. En effet, le site devait reposer sur une architecture suffisamment robuste pour permettre la gestion dynamique des données, tout en restant accessible à des utilisateurs peu familiers avec les outils informatiques. Il était donc nécessaire de concevoir une <strong>expérience utilisateur</strong> claire, fluide et rassurante, intégrant notamment des mécanismes de feedback visuel afin d’accompagner les actions de modification. Le site devait ainsi devenir un <strong>outil évolutif et facilement maintenable</strong> dans le temps par les membres de l’entreprise, sans nécessiter l’intervention d’un prestataire externe pour chaque modification.
                </p>

                <p>
                Un autre enjeu important concernait la dimension esthétique du site. Celui-ci devait refléter le <strong>positionnement haut de gamme</strong> de l’entreprise, tout en conservant une certaine sobriété. Le design ne devait pas être surchargé ou artificiel, mais au contraire mettre en valeur les instruments et leur qualité de fabrication. Il s’agissait donc de trouver un équilibre entre <strong>minimalisme visuel</strong> et mise en avant des éléments clés du site.
                </p>

                <h3>Risques</h3>
                <p>
                Plusieurs risques ont été identifiés au cours du projet. Le premier concernait l’<strong>expérience utilisateur</strong>. Une interface trop complexe ou mal pensée aurait pu empêcher les membres de l’entreprise d’utiliser efficacement le site, compromettant ainsi l’objectif d’autonomie. En effet, le luthier lui même (monsieur <strong>Pascal Pecheur</strong>) était connu pour sa difficulté à utiliser les outils informatiques. Il était donc essentiel de proposer une interface claire, accompagnée de <strong>mécanismes de validation et de confirmation</strong> afin de limiter les erreurs de manipulation.
                </p>

                <p>
                Un second risque portait sur la <strong>gestion des données</strong>, en particulier les contenus dynamiques tels que les images ou les informations relatives aux instruments. Une mauvaise structuration ou une gestion inadaptée de ces données aurait pu entraîner des problèmes de performance, de cohérence ou de maintenance à long terme.
                </p>

                <p>
                La <strong>sécurité</strong> constituait également un enjeu important. Le site comportant des zones d’administration accessibles uniquement à certains utilisateurs, il était nécessaire de mettre en place des <strong>mécanismes de contrôle d’accès</strong> rigoureux afin d’éviter toute tentative d’accès non autorisé.
                </p>

                <p>
                Enfin, un risque de <strong>non-adoption</strong> existait. Si le site ne répondait pas pleinement aux attentes de l’entreprise, il aurait pu être abandonné, comme ce fut le cas pour les solutions précédentes.
                </p>
            </>
        ),
        etapes: (
            <>  
                <h3>Analyse du besoin</h3>
                <p>
                Le projet a été réalisé en <strong>autonomie complète</strong>, dans une logique proche d’une <strong>mission freelance</strong>, avec pour responsabilité la conception et le développement du site dans son intégralité, depuis la phase de cadrage jusqu’à la mise en œuvre technique.
                </p>

                <p>
                Dans un premier temps, j’ai consacré plusieurs semaines à l’<strong>analyse des besoins</strong> et à la compréhension du contexte métier. Cette phase a consisté à m’approprier l’identité de l’entreprise, à comprendre ses attentes et à identifier les fonctionnalités essentielles du site. Contrairement à un projet classique, <strong>aucun cahier des charges formel</strong> n’était disponible. Les besoins ont donc été construits progressivement à travers des échanges réguliers avec la responsable du projet (la femme du luthier), ce qui m’a amené à affiner les spécifications au fur et à mesure de l’avancement.
                </p>

                <p>
                Une fois ces éléments clarifiés, j’ai réalisé un <strong>Proof of Concept (POC)</strong> afin de valider les choix en matière d’interface utilisateur et de design. Ce prototype m’a permis de proposer une première version concrète du site, incluant une page d’accueil, une page de présentation des instruments et une structure de navigation. Cette étape a été essentielle pour aligner les attentes visuelles avec les besoins de l’entreprise avant de lancer le développement.
                </p>

                <p>
                J’ai ensuite défini l’architecture technique du projet en m’appuyant sur le framework <strong>Symfony</strong> pour le back-end, associé à <strong>Doctrine</strong> pour la gestion des données et <strong>Twig</strong> pour le rendu des vues. Le front-end a été réalisé en <strong>JavaScript</strong>, avec l’utilisation de <strong>jQuery</strong> pour certaines interactions dynamiques. Ce choix technique m’a permis de structurer le projet de manière rigoureuse tout en consolidant mes compétences sur des technologies fondamentales du développement web.
                </p>

                <h3>Development back-end</h3>
                <p>
                Le développement back-end a constitué une étape importante du projet. J’ai mis en place une <strong>base de données relationnelle (MySQL)</strong> permettant de gérer les instruments, les prestations et les utilisateurs. J’ai également structuré l’application à travers plusieurs contrôleurs distincts, séparant les responsabilités entre les différentes parties du site, notamment l’interface publique, l’administration et les fonctionnalités spécifiques aux vendeurs. Un <strong>système de rôles et de permissions</strong> a été implémenté afin de sécuriser l’accès aux différentes fonctionnalités, avec une gestion des routes protégées configurée dans le fichier de sécurité du framework.
                </p>

                <p>
                En parallèle, j’ai développé des services spécifiques afin de répondre à des besoins fonctionnels précis. Un <strong>service de gestion des fichiers</strong> m’a permis de traiter les images des instruments, en assurant leur renommage sécurisé, leur stockage sur le serveur et leur association avec les données en base. J’ai fait le choix de ne pas stocker les images directement en base de données, mais uniquement leurs chemins, afin d’optimiser les performances et la maintenabilité. Un second service a été mis en place pour la <strong>gestion des emails</strong>, permettant d’envoyer des messages depuis le formulaire de contact en utilisant un serveur <strong>SMTP</strong>, tout en structurant correctement les données transmises par les utilisateurs.
                </p>

                <h3>Development front-end</h3>
                <p>
                Le développement du front-end a été réalisé sans l’utilisation de framework, en <strong>HTML et CSS</strong> pour la structure et le style, et en <strong>JavaScript</strong> pour les interactions. J’ai notamment implémenté des comportements dynamiques afin d’améliorer l’expérience utilisateur. Un élément technique notable de ce projet a été la mise en place d’un <strong>système de défilement horizontal personnalisé</strong>, obtenu à travers une manipulation du layout en CSS, permettant de contourner les limitations du scroll natif et d’obtenir un rendu plus fluide et original.
                </p>

                <h3>Tests et validation</h3>
                <p>
                Enfin, une phase de <strong>tests et de validation</strong> a été menée afin de garantir la fiabilité du site. J’ai vérifié le bon fonctionnement des formulaires, la gestion des erreurs et la cohérence des données manipulées. Une attention particulière a été portée à la <strong>gestion des positions dynamiques</strong> des éléments en base de données, avec la mise en place de mécanismes permettant de recalculer automatiquement les positions après une modification ou une suppression, afin de maintenir une structure cohérente.
                </p>
            </>
        ),
        acteurs: (
           <>
                <p>
                Le projet Fisherman Instruments s’est déroulé avec un nombre restreint d’acteurs, ce qui a renforcé mon niveau d’implication et de responsabilité dans sa réalisation. J’ai principalement travaillé en collaboration avec la responsable de l’entreprise (<strong>madame Sophie Pecheur</strong>, femme de monsieur Pecheur), qui jouait un rôle proche de celui d’un <strong>Product Owner</strong>, en définissant les besoins fonctionnels et en validant les orientations du projet. J’ai aussi eu quelques échanges ponctuels avec <strong>monsieur Pascal Pecheur</strong> lui même, notamment pour recueillir ses retours sur l’ergonomie et la facilité d’utilisation du site, mais c’est principalement avec madame Pecheur que j’ai collaboré de manière régulière tout au long du projet.
                </p>

                <p>
                Les échanges ont été organisés de manière régulière, généralement <strong>toutes les deux semaines</strong>, afin de suivre l’avancement du projet et d’ajuster les développements en fonction des retours. Ces points de contact permettaient de valider les fonctionnalités mises en place, de faire évoluer les besoins lorsque cela était nécessaire et d’affiner progressivement les choix en matière de design et d’ergonomie.
                </p>

                <p>
                Ce mode de collaboration m’a amené à adopter une <strong>démarche itérative</strong>, en proposant des solutions concrètes, puis en les ajustant en fonction des retours exprimés. Il m’a également permis de développer ma capacité à <strong>traduire des besoins métier en solutions techniques</strong>, tout en maintenant un dialogue constant avec un interlocuteur non technique.
                </p>
            </>
        ),
        resultats: (
            <>
                <p>
                Le projet Fisherman Instruments a permis de répondre aux attentes initiales de l’entreprise en proposant un <strong>site web vitrine</strong> cohérent avec son identité et ses besoins. Le rendu final offre une interface sobre et structurée, mettant en valeur les instruments tout en facilitant la navigation pour les utilisateurs. Par rapport aux solutions précédemment mises en place, une <strong>nette amélioration</strong> a été constatée, tant sur le plan visuel que sur l’ergonomie globale du site.
                </p>

                <p>
                L’un des apports majeurs du projet réside dans l’<strong>autonomie</strong> désormais offerte à l’entreprise. Grâce à l’<strong>interface d’administration</strong> développée, les membres de l’entreprise peuvent gérer eux-mêmes les contenus du site, qu’il s’agisse d’ajouter de nouveaux instruments, de modifier des informations existantes ou de mettre à jour des visuels. Cette <strong>indépendance vis-à-vis de prestataires externes</strong> constitue un gain significatif en termes de réactivité et de maîtrise de l’outil.
                </p>

                <p>
                D’un point de vue personnel, ce projet a représenté une étape déterminante dans mon parcours. Il s’agissait de ma <strong>première expérience complète de développement web</strong>, réalisée de manière autonome, ce qui m’a permis de comprendre l’ensemble du cycle de vie d’un projet, depuis l’expression du besoin jusqu’à la mise en œuvre technique. J’ai ainsi pu consolider mes compétences sur des technologies telles que <strong>Symfony et JavaScript</strong>, tout en développant une vision plus globale du développement applicatif.
                </p>
            </>
        ),
        lendemains: (
           <>
                <p>
                Le site Fisherman Instruments a été <strong>mis en ligne</strong> à l’issue du projet et est utilisé par l’entreprise comme <strong>vitrine officielle</strong> de son activité. Il constitue aujourd’hui un support de communication durable, permettant de présenter les instruments et le savoir-faire de l’entreprise auprès de ses clients.
                </p>

                <p>
                Avec le temps, le site a démontré sa pertinence en répondant aux besoins initiaux définis lors du projet. Il a notamment permis à l’entreprise de gagner en <strong>autonomie dans la gestion de ses contenus</strong>, tout en disposant d’un outil cohérent avec son image de marque.
                </p>

                <p>
                <strong>Trois ans après la mise en ligne</strong>, l’entreprise m’a recontacté afin de faire évoluer le site en y ajoutant une nouvelle page spécifique. Cette demande illustre à la fois la satisfaction vis-à-vis du travail réalisé et la capacité du site à évoluer dans le temps sans intervention de ma part, car en effet, l’entreprise a pu gérer les évolutions elle-même jusqu’à présent.
                </p>

                <p>
                Ce projet s’inscrit ainsi dans une logique de continuité, où le site n’est pas seulement un livrable ponctuel, mais un <strong>outil évolutif</strong>, capable de s’adapter aux besoins futurs de l’entreprise.
                </p>
            </>
        ),
        regardCritique: (
            <>
                <p>
                Ce projet a constitué une <strong>première expérience particulièrement formatrice</strong> dans mon parcours de développeur. Il m’a permis de découvrir concrètement l’ensemble du <strong>cycle de vie d’un projet web</strong>, depuis l’expression du besoin jusqu’à la mise en production. Le fait d’avoir travaillé en autonomie m’a amené à développer rapidement ma capacité à structurer un projet, à prendre des décisions techniques et à gérer les différentes étapes de développement.
                </p>

                <p>
                Avec le recul, je mesure les progrès réalisés depuis ce projet, notamment sur des aspects techniques que je ne maîtrisais pas encore pleinement à l’époque. Bien que le client a été satisfait du résultat, je suis conscient que l’esthétique du site et certaines de ses fonctionnalités pourraient être améliorées. Par exemple, la sur-utilisation de <strong>design neumorphique</strong>, qui était à la mode à l’époque, peut aujourd’hui sembler un peu datée ou étrange et ne correspond pas forcément à une approche de design plus moderne et épurée. De même, certaines fonctionnalités pourraient être optimisées pour offrir une <strong>expérience utilisateur</strong> plus fluide et intuitive.
                </p>

                <p>
                Ce projet m’a néanmoins permis de poser des <strong>bases solides</strong> en matière d’architecture et de compréhension du développement web. Il a joué un rôle structurant dans ma progression, en me confrontant à des problématiques concrètes et en m’obligeant à trouver des solutions de manière autonome.
                </p>

                <p>
                Aujourd’hui, avec l’expérience acquise, j’aborderais ce projet différemment. Je m’orienterais vers une architecture plus moderne, avec une séparation plus marquée entre le front-end et le back-end, en utilisant par exemple un framework comme <strong>React</strong> pour la partie interface. Je choisirais aussi <strong>Java avec Spring Boot</strong> pour le back-end, afin de bénéficier d’une meilleure structuration et d’une plus grande robustesse. Enfin, je mettrais en place des <strong>tests automatisés</strong> pour garantir la qualité du code et faciliter la maintenance à long terme.
                </p>

                <p>
                Enfin, le fait que l’entreprise m’ait recontacté <strong>plusieurs années après la mise en ligne</strong> du site constitue un indicateur positif de la qualité du travail réalisé. Cela montre que, malgré les limites liées à mon niveau de l’époque, le projet repose sur des bases suffisamment solides pour être maintenu et faire l’objet d’évolutions dans le temps.
                </p>
            </>
        ),
    },
    competences: [
        { id: 'front-end',             nom: 'Développement web front-end', type: 'technique' },
        { id: 'back-end',              nom: 'Développement web back-end',   type: 'technique' },
        { id: 'conception-interfaces', nom: 'Conception d\'interfaces', type: 'technique' },
        { id: 'bases-de-donnees',       nom: 'Gestion de bases de données', type: 'technique' },
        { id: 'autonomie',             nom: 'Autonomie',                    type: 'humaine' },
        { id: 'communication',         nom: 'Communication',                type: 'humaine' },
    ],
};
