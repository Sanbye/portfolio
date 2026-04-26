import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { competencesData } from '../../data/competences/index';
import '../../css/competences.css';

function StarRating({ mastery }) {
    return (
        <div className="starRating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= mastery ? 'star star--filled' : 'star star--empty'}>★</span>
            ))}
        </div>
    );
}

function CompetenceCard({ skill }) {
    const navigate = useNavigate();
    return (
        <div className="competenceCard" onClick={() => navigate(`/Competences/${skill.id}`)} style={{ cursor: 'pointer' }}>
            <StarRating mastery={skill.mastery ?? 0} />
            <h3>{skill.name}</h3>
            <p className="competenceDescription">{skill.description}</p>
        </div>
    );
}

function TechniquesSection() {
    const skills = competencesData.filter(c => c.type === 'technique');

    return (
        <section className="competencesSection">
            <h2>Compétences techniques</h2>
            <div className="competencesGrid">
                {skills.map((skill) => (
                    <CompetenceCard key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
}

function HumainesSection() {
    const skills = competencesData.filter(c => c.type === 'humaine');

    return (
        <section className="competencesSection">
            <h2>Compétences humaines</h2>
            <div className="competencesGrid">
                {skills.map((skill) => (
                    <CompetenceCard key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
}

const Competences = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    return (
        <>
            <Helmet>
                <title>Compétences</title>
            </Helmet>
            <main className="competencesPage">
                {(type === 'techniques' || !type) && <TechniquesSection />}
                {(type === 'humaines' || !type) && <HumainesSection />}
            </main>
        </>
    );
};

export default Competences;
