import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={links} target="_blank" rel="noopener noreferrer" >
        <img src={imgUrl} alt={`${title} project`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="links">
            {links.map((link, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                Link {index + 1}
              </a>
            ))}
          </div>
        </div>
        </a>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
