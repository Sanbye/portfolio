import { Helmet } from 'react-helmet';
import '../../css/projects.css';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projects';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projets</title>
            </Helmet>

            <section className='projectsContainer'>
                {(() => {
                    const pro = projectsData.filter((p) => p.category === 'professionnel');
                    const perso = projectsData.filter((p) => p.category === 'personnel');
                    const persoChunks = [];
                    for (let i = 0; i < perso.length; i += 2) persoChunks.push(perso.slice(i, i + 2));

                    const rowClasses = ['row1', 'rowFull'];

                    return (
                        <>
                            {pro.length > 0 && (
                                <div className='projectsCategory'>
                                    <h2 className='projectsCategoryTitle'>Projets professionnels</h2>
                                    <div className='row row2'>
                                        {pro.map((project) => (
                                            <ProjectCard key={project.id} {...project} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {perso.length > 0 && (
                                <div className='projectsCategory'>
                                    <h2 className='projectsCategoryTitle'>Projets personnels</h2>
                                    {persoChunks.map((chunk, i) => (
                                        <div key={i} className={`row ${rowClasses[i] ?? 'row1'}`}>
                                            {chunk.map((project) => (
                                                <ProjectCard key={project.id} {...project} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    );
                })()}
            </section>
        </>
    );
};

export default Projects;
