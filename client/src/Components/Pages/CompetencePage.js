import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { competencesData } from '../../data/competences/index';
import { projectsData } from '../../data/projects';
import '../../css/competencePage.css';

const CompetencePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const competence = competencesData.find(c => c.id === id);

    if (!competence) {
        return (
            <main className='competencePageNotFound'>
                <p>Compétence introuvable.</p>
                <button className='backButton' onClick={() => navigate(-1)}>← Retour aux compétences</button>
            </main>
        );
    }

    const linkedProjects = projectsData.filter(p => competence.projets?.includes(p.id));

    return (
        <>
            <Helmet>
                <title>{competence.name}</title>
            </Helmet>

            <main className='competencePage-detail'>
                <button className='backButton' onClick={() => navigate(-1)}>← Retour</button>

                <header className='competencePageHeader'>
                    <span className={`competenceTypeBadge competenceTypeBadge--${competence.type}`}>
                        {competence.type === 'technique' ? 'Compétence technique' : 'Compétence humaine'}
                    </span>
                    <h1>{competence.name}</h1>
                    <p className='competencePageLead'>{competence.description}</p>
                </header>

                <div className='competencePageContent'>
                    <article className='competenceArticle'>

                        {competence.article?.definition && (
                            <section className='articleSection'>
                                <h2 className='articleSectionTitle'>Ma définition</h2>
                                {competence.article.definition}
                            </section>
                        )}

                        {competence.article?.preuves?.length > 0 && (
                            <section className='articleSection'>
                                <h2 className='articleSectionTitle'>Mes éléments de preuve</h2>
                                <div className='preuvesList'>
                                    {competence.article.preuves.map((preuve, i) => (
                                        <div key={i} className='preuveItem'>
                                            <h3 className='preuveTitle'>{preuve.titre}</h3>
                                            <p>{preuve.contenu}</p>
                                            {preuve.projetId && (() => {
                                                const p = projectsData.find(p => p.id === preuve.projetId);
                                                return p ? (
                                                    <Link to={`/Projets/${p.slug}`} className='preuveLink'>
                                                        Voir la réalisation →
                                                    </Link>
                                                ) : null;
                                            })()}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {competence.article?.autocritique && (
                            <section className='articleSection'>
                                <h2 className='articleSectionTitle'>Mon autocritique</h2>
                                {competence.article.autocritique}
                            </section>
                        )}

                        {competence.article?.evolution && (
                            <section className='articleSection'>
                                <h2 className='articleSectionTitle'>Mon évolution dans cette compétence</h2>
                                {competence.article.evolution}
                            </section>
                        )}

                        {linkedProjects.length > 0 && (
                            <section className='articleSection competenceLinkedProjects'>
                                <h2 className='articleSectionTitle'>Réalisations rattachées</h2>
                                <div className='linkedProjectsList'>
                                    {linkedProjects.map(project => (
                                        <Link key={project.id} to={`/Projets/${project.slug}`} className='linkedProjectCard'>
                                            <img src={project.image} alt={project.title} className='linkedProjectImg' />
                                            <div className='linkedProjectInfo'>
                                                <strong>{project.title}</strong>
                                                <span>{project.subtitle}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                </div>
            </main>
        </>
    );
};

export default CompetencePage;
