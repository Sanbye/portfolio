import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, subtitle, image, paragraphs, size, slug }) => {
    const navigate = useNavigate();

    return (
        <div className={`projectCard ${size}`} onClick={() => navigate(`/Projets/${slug}`)}>
            <div className='imgContainer'>
                <div className='cardTitleContainer'>
                    <h1 className='cardTitle'>{title}</h1>
                    <div className='cardText'>{subtitle}</div>
                </div>
                <img src={image} className='cardCover' alt='aperçu du projet' />
                <div className='cardOverlay'>
                    {paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
