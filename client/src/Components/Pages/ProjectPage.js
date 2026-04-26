import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { projectsData } from '../../data/projects';
import '../../css/projectPage.css';

const SECTIONS = [
    { key: 'presentation',   label: 'Présentation du projet' },
    { key: 'objectifs',      label: 'Objectifs, contexte, enjeux et risques' },
    { key: 'etapes',         label: 'Les étapes — ce que j\'ai fait' },
    { key: 'acteurs',        label: 'Les acteurs — les interactions' },
    { key: 'resultats',      label: 'Les résultats' },
    { key: 'lendemains',     label: 'Les lendemains du projet' },
    { key: 'regardCritique', label: 'Mon regard critique' },
];

const ProjectPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.slug === slug);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    if (!project) {
        return (
            <main className='projectPageNotFound'>
                <p>Projet introuvable.</p>
                <button className='backButton' onClick={() => navigate(-1)}>← Retour aux projets</button>
            </main>
        );
    }

    return (
        <>
            <Helmet>
                <title>{project.title}</title>
            </Helmet>

            <main className='projectPage'>
                <button className='backButton' onClick={() => navigate(-1)}>← Retour</button>

                <div className='projectPageHero'>
                    <img
                        src={project.image}
                        alt={project.title}
                        className='projectPageHeroImg'
                        onClick={() => setLightboxOpen(true)}
                    />
                    <div className='projectPageHeroOverlay'>
                        <h1>{project.title}</h1>
                        <p className='projectPageSubtitle'>{project.subtitle}</p>
                    </div>
                </div>

                {lightboxOpen && (
                    <div className='lightboxOverlay' onClick={() => setLightboxOpen(false)}>
                        <button className='lightboxClose' onClick={() => setLightboxOpen(false)}>✕</button>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='lightboxImg'
                            onClick={e => e.stopPropagation()}
                        />
                    </div>
                )}

                <div className='projectPageContent'>
                    <article className='projectPageArticle'>
                        {SECTIONS.map(({ key, label }) =>
                            project.article?.[key] ? (
                                <section key={key} className='articleSection'>
                                    <h2 className='articleSectionTitle'>{label}</h2>
                                    {project.article[key]}
                                </section>
                            ) : null
                        )}

                        {project.competences?.length > 0 && (
                            <section className='articleSection articleCompetences'>
                                <h2 className='articleSectionTitle'>Compétences rattachées</h2>
                                <div className='competencesTags'>
                                    {project.competences.map(({ id, nom, type }) => (
                                        <Link
                                            key={id}
                                            to={`/Competences/${id}`}
                                            className={`competenceTag competenceTag--${type}`}
                                        >
                                            {nom}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    <aside className='projectPageMeta'>
                        <div className='projectPageStack'>
                            <h3>Ma stack sur ce projet</h3>
                            <div className='projectPageStackLogos'>
                                {project.stack.map(item => (
                                    <div key={item.alt} className='logoContainer'>
                                        <img src={item.src} alt={item.alt} className='logo' />
                                        <p>{item.alt}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.links ? (
                            <div className='projectPageLinks'>
                                <h3>Voir le projet</h3>
                                <div className='projectPageLinksButtons'>
                                    {project.links.map(link => (
                                        <a key={link.href} href={link.href} target='_blank' rel='noreferrer'>
                                            <button className='cardButton'>
                                                <img src={link.logo} alt={link.alt} className='cardLogo' />
                                            </button>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className='projectPageConfidential'>Pour des raisons de confidentialité, les détails du projet ne sont pas disponibles.</p>
                        )}
                    </aside>
                </div>
            </main>
        </>
    );
};

export default ProjectPage;
