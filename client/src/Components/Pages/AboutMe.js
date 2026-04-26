import coffeeGIF from '../../Images/coffee-88.gif';
import {Helmet} from 'react-helmet';
import Game from '../game/Game';

const AboutMe =()=>{

    return(
        <>
            <Helmet>
                <title>Accueil</title>
            </Helmet>

            <section className='heroBanner'>
                <div>
                    <p>
                        Développeur <span className='importantText'>full-stack</span>, je construis des applications de bout en bout : <span className='importantText'>interface, logique métier et infrastructure</span>.  
                        Curieux et passionné par les jeux de stratégie, j'ai pris goût à la résolution de problèmes et j’aime aller au fond des sujets et créer des solutions utiles.
                    </p>
                </div>

                <img className='cover' src={coffeeGIF} alt='Coffee GIF'/>
            </section>

            <section className='skillSection'>
                <h1 className={"marginBottom3"}>Mon parcours</h1>
                <div className={"monParcourContainer"}>
                    <div className={"monParcourLeft"}>
                        <div className={"boxLeft period-2 experience-juil2023"}>
                            <div className="parcourHeader">
                                <div className="titre">Développeur Web Full-Stack</div>
                                <div className="parcourBadge badge-experience">Expérience</div>
                            </div>
                            <p className='date'>Depuis Juillet 2023</p>
                            <p><a href='https://www.sncf-connect-tech.fr/fr/' target='_blank' rel='noreferrer'>SNCF Connect &amp; Tech - Lille</a></p>
                            <ul className="experienceList">
                                <li>Méthode Agile</li>
                                <li>Back-End (Java/Quarkus et Kotlin/SpringBoot)</li>
                                <li>Front-End (TypeScript/React)</li>
                                <li>Infra as Code (Terraform/Kubernetes/AWS)</li>
                            </ul>
                        </div>
                        <div className={"boxLeft period-1 experience-mai2023"}>
                            <div className="parcourHeader">
                                <div className="titre">Consultant Développeur Web</div>
                                <div className="parcourBadge badge-experience">Expérience</div>
                            </div>
                            <p className='date'>Mai 2023</p>
                            <p><a href='https://www.cite-scolairedigoin.com/' target='_blank' rel='noreferrer'>LYCÉE CAMILLE CLAUDEL - Digoin</a></p>
                            <ul className="experienceList">
                                <li>Audit du site internet de l'école</li>
                                <li>Rédaction d'un compte-rendu</li>
                                <li>Réalisation d'un sondage</li>
                            </ul>
                        </div>
                        <div className={"boxLeft period-1 experience-nov2022"}>
                            <div className="parcourHeader">
                                <div className="titre">Développeur Web Full-Stack</div>
                                <div className="parcourBadge badge-experience">Expérience</div>
                            </div>
                            <p className='date'>Novembre 2022 - Janvier 2023</p>
                            <p><a href='https://www.fisherman-instruments.com/' target='_blank' rel='noreferrer'>SAS Guitares Pecheur - Chambéry</a></p>
                            <ul className="experienceList">
                                <li>Design UI/UX</li>
                                <li>Front-end (JS)</li>
                                <li>Back-end (PHP/Symfony)</li>
                                <li>Base de données relationnelle</li>
                                <li>Programmation Orientée Objet</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"monParcourMiddle"}>
                        {Array.from({ length:111 }).map((_, index) => {
                            const r = 110 - index;
                            let periodClass = '';
                            let yearLabel = null;

                            // Inversé : Juil 2026 → Jan 2022
                            // r reprend la logique originale
                            if (r < 24) {
                                periodClass = 'period-1-color';
                                if (r === 0) yearLabel = '2022';
                            } else if (r < 38) {
                                periodClass = 'period-1-color';
                                if (r === 24) yearLabel = '2023';
                            } else {
                                periodClass = 'period-2-color';
                                if (r === 48) yearLabel = '2024';
                                if (r === 72) yearLabel = '2025';
                                if (r === 96) yearLabel = '2026';
                            }

                            return (
                                <div key={index} className="timelineItem">
                                    <div className={`miniBoxLeft ${periodClass}`}></div>
                                    {yearLabel && (
                                        <div className="yearLabel">{yearLabel}</div>
                                    )}
                                    <div className={`miniBoxRight ${periodClass}`}></div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={"monParcourRight"}>
                        <div className={"boxRight diplome-box diplome-juil2026"}>
                            <div className="parcourHeader">
                                <div className="titre">Expert en Ingénierie Logicielle</div>
                                <div className="parcourBadge badge-diplome">Diplôme</div>
                            </div>
                            <p className='date'>Juillet 2026</p>
                            <p>École : <a href='https://www.iscod.fr/' target='_blank' rel='noreferrer'>ISCOD Lille</a></p>
                            <p className="diplome">Diplôme prévu : Juillet 2026</p>
                            <p>Niveau : Bac +5</p>
                        </div>
                        <div className={"boxRight diplome-box diplome-aout2024"}>
                            <div className="parcourHeader">
                                <div className="titre">Concepteur Développeur d'Applications</div>
                                <div className="parcourBadge badge-diplome">Diplôme</div>
                            </div>
                            <p className='date'>Août 2024</p>
                            <p>École : <a href='https://www.iscod.fr/' target='_blank' rel='noreferrer'>ISCOD Lille</a></p>
                            <p className="diplome">Diplôme obtenu : Août 2024</p>
                            <p>Niveau : Bac +3</p>
                        </div>
                        <div className={"boxRight diplome-box diplome-jan2023"}>
                            <div className="parcourHeader">
                                <div className="titre">Développeur Web et Web Mobile</div>
                                <div className="parcourBadge badge-diplome">Diplôme</div>
                            </div>
                            <p className='date'>Janvier 2023</p>
                            <p>École : <a href='https://www.eni-ecole.fr/' target='_blank' rel='noreferrer'>ENI Nantes</a></p>
                            <p className="diplome">Diplôme obtenu : Janvier 2023</p>
                            <p>Niveau : Bac +2</p>
                        </div>
                    </div>
                </div>
             </section>

            <section className='techStack'>

                <h1 className='myToolBox'>Ma boîte à outils : </h1>
                <Game/>
            </section>
        </>
    )
}

export default AboutMe;