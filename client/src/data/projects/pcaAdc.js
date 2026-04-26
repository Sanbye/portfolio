import pcaAdcImg from '../../Images/projects/pcaAdc.png';
import jsLogo from '../../Images/logos/js.svg';
import kubernetesLogo from '../../Images/logos/Kubernetes.svg';
import awsLogo from '../../Images/logos/AWS.svg';
import terraformLogo from '../../Images/logos/Terraform.svg';
import pythonLogo from '../../Images/logos/Python.svg';
import dockerLogo from '../../Images/logos/Docker.svg';

export const pcaAdc = {
    id: '2',
    slug: 'pca-adc',
    category: 'professionnel',
    size: 'bigger',
    title: 'PCA-ADC',
    subtitle: "Application de secours pour l'accès aux documents critiques des conducteurs",
    image: pcaAdcImg,
    paragraphs: [
        "Application web de secours garantissant l'accès aux documents essentiels des agents en cas de crise ou cyberattaque.",
        "Accès aux fiches train secours, fiches de détournement et livrets de lignes sans authentification habituelle.",
        "Développé en autonomie complète, de la conception à la mise en production.",
    ],
    stack: [
        { src: jsLogo, alt: 'JavaScript' },
        { src: pythonLogo, alt: 'Python' },
        { src: kubernetesLogo, alt: 'Kubernetes' },
        { src: awsLogo, alt: 'AWS' },
        { src: terraformLogo, alt: 'Terraform' },
        { src: dockerLogo, alt: 'Docker' },
    ],
    article: {
        presentation: (
            <>
                <p>
                    PCA-ADC est une <strong>application web de secours</strong> développée dans un contexte particulier de renforcement de la <strong>cybersécurité</strong> au sein de la SNCF. Ce projet s’inscrit directement dans les préparatifs liés aux <strong>Jeux Olympiques de Paris 2024</strong>, période durant laquelle les risques de <strong>cyberattaques massives</strong> sur les infrastructures critiques étaient fortement anticipés.
                </p>

                <p>
                    L’objectif était de garantir la <strong>continuité opérationnelle</strong> des agents de conduite, même en cas d’indisponibilité totale des systèmes d’information habituels. L’application permettait aux agents ainsi d’accéder à des documents PDF (<strong>plusieurs millions</strong>) essentiels à la sécurité ferroviaire, tels que les <strong>fiches train secours (FTS)</strong>, les <strong>fiches de détournement (FDD)</strong> ou encore les <strong>livrets de lignes (Lili)</strong>, indépendamment des systèmes d’authentification centralisés.
                </p>

                <p>
                    Contrairement à une application classique, PCA-ADC était conçue pour être utilisée uniquement en <strong>situation de crise extrême</strong>. Elle devait être immédiatement accessible, simple d’utilisation et capable de fonctionner de manière autonome, sans dépendre des services critiques susceptibles d’être indisponibles lors d’un incident majeur.
                </p>

                <p>
                    Ce projet représentait donc un élément stratégique du <strong>plan de continuité d’activité</strong> de la SNCF, avec un niveau d’exigence particulièrement élevé en matière de <strong>disponibilité, de simplicité d’accès et de gestion des risques</strong>.
                </p>
            </>
        ),

        objectifs: (
            <>
                <h3>Contexte</h3>
                <p>
                    Le projet PCA-ADC s’inscrit dans un contexte exceptionnel lié à la préparation des <strong>Jeux Olympiques de Paris 2024</strong>, période durant laquelle la SNCF anticipait un risque accru de <strong>cyberattaques</strong> visant ses infrastructures critiques. Dans ce cadre, il était nécessaire de mettre en place des <strong>solutions de secours</strong> capables de garantir la continuité des opérations, même en cas d’indisponibilité totale des systèmes d’information.
                </p>

                <p>
                    L’un des enjeux majeurs identifiés concernait l’accès au <strong>plusieurs millions de documents</strong> essentiels pour les agents de conduite. Ces <strong>millions de documents</strong>, indispensables à la sécurité ferroviaire (<strong>fiches train secours, fiches de détournement, livrets de lignes</strong>), sont habituellement accessibles via des systèmes centralisés reposant sur des <strong>mécanismes d’authentification</strong>. En cas de panne ou de cyberattaque, ces systèmes pouvaient devenir indisponibles.
                </p>

                <p>
                    Le projet PCA-ADC visait donc à concevoir une <strong>solution alternative, indépendante des systèmes critiques existants</strong>, capable de garantir un accès rapide et fiable à ces documents, même dans des conditions fortement dégradées.
                </p>

                <h3>Objectifs</h3>
                <p>
                    L’objectif principal du projet était d’assurer la <strong>disponibilité des documents critiques en toutes circonstances</strong>, y compris en cas de défaillance complète des systèmes d’authentification ou des services internes. Il s’agissait de garantir que les agents puissent continuer à exercer leurs missions sans interruption, en disposant des informations nécessaires à la conduite en toute sécurité.
                </p>

                <p>
                    Un second objectif consistait à concevoir une solution techniquement robuste, capable de fonctionner de manière autonome. Cela impliquait la mise en place d’un système capable de traiter et de distribuer les <strong>millions de documents PDF</strong> de manière <strong>entièrement automatisée</strong>, reposant sur une <strong>chaîne de traitement fiable et reproductible</strong>.
                </p>

                <p>
                    Enfin, l’application devait être <strong>simple d’utilisation</strong>, avec une interface permettant un accès rapide aux documents, sans complexité inutile, afin de s’adapter à des situations de crise où le temps et la clarté sont des facteurs essentiels.
                </p>

                <h3>Enjeux</h3>
                <p>
                    L’enjeu principal du projet résidait dans la <strong>continuité de service</strong>. L’application devait être capable de fonctionner indépendamment des systèmes principaux, tout en garantissant un accès fiable aux données. Cela impliquait de concevoir une <strong>architecture résiliente</strong>, capable de traiter et de distribuer des volumes importants de documents de manière efficace.
                </p>

                <p>
                    Un autre enjeu important concernait la <strong>gestion et la transformation des données</strong>. Les documents fournis sous forme d’archives devaient être traités, enrichis et structurés afin d’être exploitables par une interface web. Ce processus nécessitait une <strong>chaîne de traitement automatisée</strong>, capable de garantir la cohérence des données tout en assurant leur mise à jour régulière.
                </p>

                <p>
                    Enfin, le projet devait répondre à des contraintes de <strong>performance et de scalabilité</strong>. Le volume de documents à gérer étant particulièrement important, il était nécessaire de concevoir une solution capable de s’adapter à ces volumes sans dégrader l’expérience utilisateur.
                </p>

                <h3>Risques</h3>
                <p>
                    Plusieurs risques ont été identifiés dès le début du projet. Le principal concernait la <strong>sécurité</strong> : en simplifiant les mécanismes d’accès pour garantir la disponibilité en situation de crise, il existait un risque d’<strong>exposition non contrôlée des données</strong>. Il était donc essentiel de trouver un équilibre entre accessibilité et protection des informations.
                </p>

                <p>
                    Des risques techniques étaient également présents, notamment liés à la <strong>gestion des volumes de données</strong>, à la transformation des fichiers et à la génération des structures nécessaires à l’affichage. Une mauvaise conception pouvait entraîner des problèmes de performance ou des erreurs dans les données présentées.
                </p>

                <p>
                    Enfin, un risque important concernait la <strong>fiabilité de la chaîne de traitement</strong>. L’ensemble du processus reposant sur des mécanismes automatisés (traitement de fichiers, génération de données, mise à disposition), toute défaillance dans cette chaîne pouvait compromettre la disponibilité des documents.
                </p>
            </>
        ),

        etapes: (
            <>
                <p>
                    Le projet PCA-ADC a été réalisé dans une démarche fortement orientée <strong>DevOps</strong>, avec pour objectif de construire une <strong>chaîne de traitement automatisée</strong> permettant de transformer des fichiers bruts en données exploitables par une application web. Dès le départ, j’ai travaillé en grande autonomie, en prenant en charge l’ensemble du <strong>pipeline</strong>, depuis la récupération des données jusqu’à leur exposition via une interface utilisateur.
                </p>

                <p>
                    La première étape a consisté à comprendre le flux des données métier. Les documents étaient fournis sous forme d’<strong>archives ZIP</strong>, déposées sur un système de stockage partagé (<strong>EFS – Elastic File System</strong>) via un protocole <strong>CFT</strong>. J’ai donc conçu un système capable de récupérer ces fichiers, de les traiter et de les rendre exploitables.
                </p>

                <p>
                    Pour cela, j’ai mis en place une infrastructure basée sur <strong>Kubernetes</strong>, entièrement définie via <strong>Terraform</strong> dans une logique d’<strong>IAC (Infrastructure as Code)</strong>. J’ai notamment configuré un <strong>Persistent Volume Claim (PVC)</strong> permettant de monter l’EFS dans les pods Kubernetes, afin que les traitements puissent accéder directement aux fichiers déposés par le métier.
                </p>

                <p>
                    Dans un premier temps, j’avais envisagé de mettre en place le pipeline de traitement des fichiers PDF à l’aide de fonctions <strong>AWS Lambda</strong>, afin de bénéficier d’une architecture <strong>serverless</strong> simple à déployer et à maintenir. Cependant, cette approche s’est rapidement révélée inadaptée au volume de données à traiter. En effet, les premières phases du pipeline, impliquant la gestion de <strong>plusieurs millions de fichiers PDF</strong>, nécessitaient des temps de traitement pouvant atteindre plusieurs heures, bien au-delà de la <strong>limite d’exécution de 15 minutes</strong> imposée par les fonctions Lambda.
                </p>

                <p>
                    Face à ces contraintes, j’ai dû repenser l’architecture du système afin de m’orienter vers une solution plus adaptée aux traitements longs et intensifs. Ce choix m’a conduit à utiliser des <strong>CronJobs Kubernetes</strong>, permettant d’exécuter des tâches de manière plus flexible, sans contrainte stricte de durée d’exécution.
                </p>

                <p>
                    J’ai donc développé une série de traitements automatisés sous forme de <strong>CronJobs Kubernetes</strong>, déployés via Terraform. Chaque CronJob correspondait à une étape spécifique du pipeline et était configuré pour s’exécuter à intervalles réguliers. Contrairement à l’approche initiale avec Lambda, cette solution permettait de gérer des traitements longs et volumineux, tout en bénéficiant des mécanismes de <strong>supervision et de redémarrage automatique</strong> de Kubernetes.
                </p>

                <p>
                    Ces CronJobs lançaient des pods basés sur des <strong>images Docker</strong> que j’ai conçues, intégrant les <strong>scripts Python</strong> nécessaires au traitement des données. Cette approche m’a permis de structurer le pipeline de manière <strong>modulaire</strong>, chaque tâche étant isolée dans un conteneur dédié, facilitant ainsi la maintenance, l’évolution et le débogage du système.
                </p>

                <p>
                    Le script principal, <strong>copy_files.py</strong>, constituait le cœur du traitement. Il se chargeait de décompresser les archives ZIP, puis d’analyser les fichiers à l’aide d’un référentiel métier (ExtractionDocADC.csv). Ce script permettait d’identifier les correspondances entre les fichiers et leurs métadonnées, d’enrichir les documents avec ces informations, puis de les transférer vers un bucket S3. J’y ai également intégré un système de reporting permettant de détecter les fichiers inconnus, corrompus ou non conformes, avec envoi automatique de rapports par mail.
                </p>

                <p>
                    Un second script, <strong>delete_files.py</strong>, était chargé de maintenir la cohérence des données en supprimant les fichiers périmés (notamment les FTS avec une durée de validité limitée) ainsi que ceux qui ne correspondaient plus au référentiel métier. Cela permettait de garantir que seules les données valides étaient accessibles à l’application.
                </p>

                <p>
                    Enfin, j’ai mis en place un système de génération de données structurées via <strong>generate_data_json.py</strong>. Ce script parcourait les fichiers présents dans S3 afin de générer des fichiers JSON utilisés par le front-end. Face au volume très important de certains documents (notamment les FDD et LILI), j’ai dû adapter la stratégie en évitant la génération d’un fichier unique trop volumineux. J’ai donc mis en place un découpage en milliers de fichiers JSON, afin d’optimiser les performances et éviter des problèmes de chargement côté navigateur.
                </p>

                <p>
                    Les fichiers traités (PDF et JSON) étaient ensuite stockés dans un <strong>bucket S3</strong>, qui servait de point central de distribution. J’ai configuré <strong>CloudFront</strong> afin de permettre une diffusion sécurisée et performante du contenu. L’accès à l’application était volontairement restreint et activé uniquement en cas de crise, sur action d’un administrateur AWS.
                </p>

                <p>
                    Côté front-end, j’ai développé une interface en <strong>JavaScript</strong> permettant de récupérer dynamiquement les fichiers JSON via CloudFront. L’interface générait les vues permettant de naviguer dans les documents, de rechercher des informations et de télécharger les fichiers PDF correspondants.
                </p>

                <p>
                    Dans un second temps, après une phase de développement en autonomie, j’ai pu bénéficier de l’accompagnement d’un <strong>tech lead</strong> expérimenté. Son intervention m’a permis de valider certains choix d’architecture, d’améliorer la robustesse du pipeline et de finaliser le projet dans de meilleures conditions.
                </p>

                <p>
                    Ce projet m’a ainsi permis de mettre en place une <strong>chaîne complète de traitement de données</strong>, en combinant automatisation, infrastructure cloud et développement applicatif, tout en répondant à des contraintes fortes de <strong>performance, de fiabilité et de sécurité</strong>.
                </p>
            </>
            ),

        acteurs: (
            <>
                <p>
                    Le projet s’est déroulé dans un contexte avec peu d’acteurs impliqués, ce qui a renforcé mon niveau de responsabilité. J’ai principalement travaillé en collaboration avec le <strong>Product Owner</strong>, qui définissait les besoins fonctionnels et validait les orientations du projet.
                </p>

                <p>
                    Dans un premier temps, j’ai mené le projet <strong>seul sur les aspects techniques</strong>, ce qui m’a amené à prendre des décisions structurantes en autonomie, tant sur l’architecture que sur l’implémentation.
                </p>

                <p>
                    Dans un second temps, un <strong>tech lead</strong> expérimenté est intervenu pour m’accompagner sur la finalisation du projet. Son intervention m’a permis de confronter mes choix techniques, d’identifier des axes d’amélioration et de valider certaines décisions prises en amont.
                </p>

                <p>
                    Ce mode de fonctionnement m’a permis de développer une forte autonomie, tout en bénéficiant, en fin de projet, d’un regard plus expérimenté sur le travail réalisé.
                </p>
            </>
        ),

        resultats: (
            <>
                <p>
                    L’application a été développée et finalisée conformément aux objectifs initiaux, et intégrée dans le <strong>dispositif de préparation aux scénarios de crise</strong>. Elle répondait aux exigences définies en termes de disponibilité et d’accès aux documents critiques.
                </p>

                <p>
                    Cependant, dans les faits, l’application <strong>n’a jamais été utilisée en situation réelle</strong>. Les scénarios de crise anticipés, notamment dans le cadre des <strong>Jeux Olympiques</strong>, ne se sont pas matérialisés à un niveau nécessitant son activation.
                </p>

                <p>
                    Le projet a finalement été <strong>décommissionné</strong>, une fois la période à risque passée. Malgré cela, il reste une expérience très significative, car il a permis de couvrir un besoin stratégique temporaire et de renforcer la préparation de l’entreprise face à des menaces potentielles.
                </p>

                <p>
                    Sur le plan personnel, ce projet a été extrêmement formateur. Il m’a permis de développer mon <strong>autonomie</strong>, ma capacité à gérer un projet complexe seul, et à travailler sous pression dans un <strong>contexte à fort enjeu</strong>. J’ai également acquis des compétences techniques précieuses, notamment en matière d’<strong>architecture et d’infrastructure cloud</strong>, grâce à l’accompagnement du tech lead.
                </p>
            </>
        ),

        lendemains: (
            <>
                <p>
                    Le projet PCA-ADC n’a pas connu de phase d’exploitation à long terme. Conçu comme une <strong>solution temporaire</strong> dans un contexte spécifique de risque accru, il a été <strong>décommissionné</strong> une fois la période critique passée.
                </p>

                <p>
                    Néanmoins, les enseignements tirés de ce projet restent pertinents. Il a permis de mettre en évidence l’importance de disposer de <strong>solutions de secours indépendantes</strong>, capables de garantir la <strong>continuité des opérations</strong> en cas de défaillance des systèmes principaux.
                </p>

                <p>
                    Les réflexions menées dans le cadre de ce projet pourront être réutilisées dans de futurs dispositifs de <strong>gestion de crise</strong> ou de <strong>résilience des systèmes d’information</strong>.
                </p>
            </>
        ),

        regardCritique: (
            <>
                <p>
                    Ce projet a été particulièrement marquant, car il s’agissait de ma <strong>première expérience dans l’entreprise</strong>, dans un contexte où j’ai dû travailler en <strong>grande autonomie</strong>. Être seul sur un projet à fort enjeu, en tant qu’<strong>alternant</strong>, a représenté une source de pression importante, notamment face à la nécessité de prendre des <strong>décisions techniques structurantes</strong> sans toujours avoir de validation immédiate.
                </p>

                <p>
                    Cette situation a parfois été stressante, mais elle m’a permis de développer rapidement mon <strong>autonomie, ma capacité d’adaptation et ma prise de décision</strong>. J’ai appris à avancer malgré l’incertitude, à rechercher des solutions par moi-même et à assumer mes choix techniques.
                </p>

                <p>
                    Avec du recul, j’aurais bénéficié d’un <strong>accompagnement technique plus précoce</strong>, notamment sur les aspects d’architecture et d’infrastructure.
                </p>

                <p>
                    Cependant, l’accompagnement du <strong>tech lead</strong> en fin de projet a été très bénéfique, et m’a permis d’acquérir des compétences techniques précieuses, notamment en matière d’architecture, d’<strong>AWS</strong>, de <strong>Kubernetes</strong> et de <strong>Terraform</strong>. Cela a renforcé ma compréhension globale du projet et m’a permis de finaliser l’application dans de bonnes conditions.
                </p>

                <p>
                    Enfin, ce projet m’a fortement sensibilisé aux problématiques de <strong>sécurité et de disponibilité</strong>, ainsi qu’à la réalité des projets informatiques en contexte industriel : certains projets peuvent être critiques sans pour autant être utilisés, en fonction de l’évolution du contexte. Cela m’a permis de prendre du recul sur la <strong>notion de valeur d’un projet</strong>, qui ne se limite pas uniquement à son utilisation finale.
                </p>
            </>
        )

    },
    competences: [
        { id: 'front-end',    nom: 'Développement web front-end',       type: 'technique' },
        { id: 'architecture', nom: 'Architecture et infrastructure applicative',           type: 'technique' },
        { id: 'autonomie',    nom: 'Autonomie',                          type: 'humaine' },
        { id: 'perseverance',  nom: 'Persévérance', type: 'humaine' },
        { id: 'adaptabilite',  nom: 'Adaptabilité', type: 'humaine' },
    ],
};
