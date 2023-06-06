import PropTypes from 'prop-types';

export default function Feature(props) {
  const { imageSrc, imageAlt, title, description } = props;

  return (
    <div className="feature-item">
      <img src={imageSrc} alt={imageAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}

Feature.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};