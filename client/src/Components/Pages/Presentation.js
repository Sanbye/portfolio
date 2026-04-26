import { Helmet } from 'react-helmet';

const Presentation = () => {
    return (
        <>
            <Helmet>
                <title>Présentation</title>
            </Helmet>

            <section className="presentationSection">

                <h1>Présentation générale</h1>
                <p>
                    De nature <strong>curieuse et persévérante</strong>, j'apprécie particulièrement travailler sur des
                    problématiques techniques qui demandent réflexion et méthode. Ce qui me motive en informatique, c'est
                    la capacité à analyser une situation, comprendre son origine et construire une solution adaptée.
                </p>
                <p>
                    J'aime être confronté à des problèmes complexes, qu'il s'agisse de corriger un comportement
                    inattendu, de concevoir une nouvelle fonctionnalité ou d'améliorer un système existant.
                </p>
                <p>
                    Cette manière de raisonner se retrouve également dans ma pratique du <strong>jeu de Go</strong>, qui
                    occupe une place importante dans mes centres d'intérêt. Ce jeu de stratégie demande d'anticiper,
                    d'analyser des situations parfois très complexes et de prendre des décisions en fonction d'un
                    objectif global. J'y retrouve des similitudes fortes avec le développement informatique, notamment
                    dans la capacité à décomposer un problème, à envisager plusieurs solutions et à choisir la plus
                    pertinente.
                </p>

                <hr className="presentationDivider" />

                <h2>Mes principaux centres d'intérêt</h2>
                <p>
                    Le <strong>développement informatique</strong> occupe une place centrale dans mon quotidien, aussi
                    bien dans le cadre professionnel que personnel. Je consacre une partie importante de mon temps libre
                    à la réalisation de projets, qui me permettent d'approfondir mes compétences, d'explorer de
                    nouvelles technologies et de concrétiser des idées qui me tiennent à cœur.
                </p>
                <p>
                    Le projet <strong>GoKifu</strong> illustre particulièrement cet engagement, avec plus de deux années
                    de développement autour du jeu de Go. Ce projet me permet de combiner ma passion pour le
                    développement et mon intérêt pour les jeux de stratégie, tout en travaillant sur des problématiques
                    concrètes comme l'analyse de données, l'intégration d'IA ou encore l'expérience utilisateur.
                </p>
                <p>
                    Les <strong>jeux de stratégie</strong>, et en particulier le jeu de Go, occupent une place
                    importante dans mes centres d'intérêt. Ce jeu développe des compétences telles que l'anticipation,
                    la prise de décision et la capacité à analyser des situations complexes. J'y retrouve des parallèles
                    directs avec le développement informatique, notamment dans la manière de structurer un raisonnement
                    et d'aborder un problème dans sa globalité.
                </p>
                <p>
                    Le <strong>webdesign</strong> fait également partie de mes centres d'intérêt, notamment dans la
                    conception d'interfaces claires, intuitives et agréables à utiliser. J'accorde une importance
                    particulière à l'expérience utilisateur, en cherchant à rendre les applications que je développe à
                    la fois efficaces et accessibles.
                </p>
                <p>
                    Enfin, je porte un intérêt marqué pour les <strong>nouvelles technologies</strong>, en particulier
                    dans le domaine de l'intelligence artificielle. Je m'intéresse à leur évolution et à leurs usages
                    concrets, notamment à travers des expérimentations personnelles qui me permettent de mieux comprendre
                    leur fonctionnement et leur potentiel.
                </p>
                <p>
                    Ces centres d'intérêt s'inscrivent dans une continuité avec mon activité de développeur et
                    participent activement à mon évolution technique.
                </p>

                <hr className="presentationDivider" />

                <h2>Mon projet professionnel et personnel</h2>
                <p>
                    Mon projet professionnel s'inscrit dans une volonté de <strong>progression continue</strong>, guidée
                    par la curiosité et le souhait de devenir un développeur accompli, capable d'intervenir sur
                    différents aspects d'un système informatique. Cette démarche repose sur l'acquisition de compétences
                    variées, aussi bien en développement front-end et back-end qu'en infrastructure, afin de construire
                    une vision globale des applications.
                </p>
                <p>
                    À terme, mon objectif est d'évoluer en tant que <strong>développeur full-stack au sein de SNCF
                    Connect &amp; Tech</strong>, en étant capable de concevoir, développer et faire évoluer des solutions
                    complètes, tout en comprenant les enjeux techniques à chaque niveau.
                </p>
                <p>
                    Mes projets personnels s'inscrivent directement dans cette logique d'apprentissage et d'exploration.
                </p>
                <p>
                    Le projet <strong>GoKifu</strong> illustre particulièrement cette démarche. À travers ce projet, je
                    cherche à aller au-delà du simple développement d'une application, en comprenant en profondeur le
                    fonctionnement du moteur d'analyse KataGo. Cette volonté de compréhension m'amène à m'intéresser à
                    son intégration, à son comportement et à la manière dont il peut être exploité efficacement.
                </p>
                <p>
                    Ce projet est également l'occasion d'explorer des problématiques d'architecture, avec l'idée de
                    concevoir une <strong>infrastructure serverless</strong> capable de traiter les analyses de manière
                    scalable. En parallèle, je cherche à proposer une expérience utilisateur la plus fluide possible, en
                    travaillant sur l'interface et la restitution des analyses, afin de rendre ces données complexes
                    accessibles et exploitables.
                </p>
                <p>
                    Un second projet, portant sur un <strong>agent IA speech-to-speech</strong>, traduit également cette
                    curiosité pour les nouvelles technologies. Dès l'émergence des outils d'intelligence artificielle
                    générative, j'ai souhaité en explorer le potentiel en développant un système basé sur les API OpenAI
                    et ElevenLabs. Ce projet m'a permis d'expérimenter concrètement ces technologies, de comprendre
                    leurs limites et d'envisager des cas d'usage concrets.
                </p>
                <p>
                    Ces projets personnels constituent un prolongement direct de mon projet professionnel : ils me
                    permettent d'apprendre en continu, de tester de nouvelles technologies et de développer une approche
                    plus complète et autonome du métier de développeur.
                </p>

                <hr className="presentationDivider" />

                <h2>Mes valeurs</h2>
                <p>
                    Les valeurs qui guident ma manière de travailler sont la <strong>curiosité</strong>, le{' '}
                    <strong>respect</strong>, la <strong>bienveillance</strong> et l'<strong>esprit d'équipe</strong>.
                </p>
                <ul className="presentationList">
                    <li>
                        <strong>La curiosité</strong> occupe une place centrale dans mon approche. Elle me pousse à
                        comprendre en profondeur les technologies que j'utilise, à chercher le « pourquoi » derrière les
                        comportements d'un système et à explorer différentes solutions avant d'en choisir une. Elle
                        s'accompagne également d'une volonté d'apprentissage continu, en me tenant informé des nouvelles
                        technologies et en prenant régulièrement en main de nouveaux outils.
                    </li>
                    <li>
                        <strong>Le respect</strong> est essentiel dans un environnement de travail, notamment dans les
                        échanges avec les autres. Il se traduit par une écoute attentive, une prise en compte des
                        contraintes et une volonté de proposer des solutions adaptées au contexte. Cela implique
                        également de savoir adapter son discours selon son interlocuteur.
                    </li>
                    <li>
                        <strong>La bienveillance</strong> complète cette approche, en favorisant des interactions
                        positives au sein d'une équipe. Elle permet de créer un cadre de travail où chacun peut
                        s'exprimer, poser des questions et progresser. Dans un domaine technique, où certaines
                        problématiques peuvent être complexes, cette valeur contribue à rendre la collaboration plus
                        efficace.
                    </li>
                    <li>
                        <strong>L'esprit d'équipe</strong> est indispensable dans la réalisation de projets. Le
                        développement informatique ne se fait pas seul : il nécessite de partager des idées, de
                        confronter des points de vue et de construire des solutions collectivement. Cette dynamique
                        permet d'améliorer la qualité du travail produit et d'aboutir à des résultats plus pertinents.
                    </li>
                </ul>

                <hr className="presentationDivider" />

                <h2>Mes principales qualités humaines</h2>
                <p>
                    L'<strong>autonomie</strong>, la <strong>persévérance</strong>, la{' '}
                    <strong>communication</strong>, la <strong>capacité d'adaptation</strong>, la{' '}
                    <strong>polyvalence</strong> et la <strong>curiosité</strong> sont des qualités que j'ai développées et que je mobilise au quotidien.
                </p>
                <ul className="presentationList">
                    <li>
                        <strong>L'autonomie</strong> est essentielle dans le développement : elle se traduit par la
                        capacité à comprendre un besoin, rechercher des solutions et les mettre en œuvre de manière
                        concrète. Elle s'accompagne d'une autonomie technique qui me permet d'intervenir sur différents
                        aspects d'un projet, aussi bien en front-end qu'en back-end, tout en ayant des bases en
                        infrastructure.
                    </li>
                    <li>
                        <strong>La persévérance</strong> est une qualité que je développe particulièrement à travers mes
                        projets personnels et ma pratique du jeu de Go. Le développement du projet GoKifu, sur lequel je
                        travaille depuis plus de deux ans et dont une version sera prochainement disponible sur le Play
                        Store, en est un exemple concret.
                    </li>
                    <li>
                        <strong>La communication</strong> est utilisée dans le cadre du travail en équipe, notamment
                        pour expliquer des choix techniques, participer aux échanges en méthode Agile et collaborer
                        efficacement avec les autres développeurs.
                    </li>
                    <li>
                        <strong>La capacité d'adaptation</strong>, associée à ma <strong>polyvalence</strong>, me permet
                        de m'intégrer rapidement à de nouveaux projets ou environnements techniques et d'intervenir sur
                        des sujets variés selon les besoins spécifiques de chaque projet.
                    </li>
                    <li>
                        <strong>La curiosité</strong> est un moteur essentiel dans mon apprentissage continu : elle me
                        pousse à explorer de nouvelles technologies, à comprendre le fonctionnement des outils que
                        j'utilise en profondeur et à rester à l'affût des évolutions du domaine.
                    </li>
                </ul>

            </section>
        </>
    );
};

export default Presentation;
