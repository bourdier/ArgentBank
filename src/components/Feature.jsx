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
