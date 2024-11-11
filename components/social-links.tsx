'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/Kekubhai" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a href="https://www.instagram.com/onirbannn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
            <a href="https://www.linkedin.com/in/anirban-ghosh010/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;