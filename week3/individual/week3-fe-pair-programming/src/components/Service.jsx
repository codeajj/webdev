const Service = ({icon, title, text}) => {
  return (
    <article className="service">
      <span className="service_icon">
        <i className={icon}></i>
      </span>
      <div className="service_icon">
        <h3 className="service_title">{title}</h3>
        <p className="service_text">{text}</p>
      </div>
    </article>
  )
}

export default Service;
 