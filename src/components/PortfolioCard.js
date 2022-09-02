import React from "react";

function PortfolioCard(props) {
  return (
    <article className="portfolio-card">
      <div className="card-image">
        <img src={props.imgUrl} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className="portfolio-card-cta">
      <a href={props.gitHubLink} className="btn" target="_blank">
        GitHub
      </a>
      <a href="#" className="btn btn-primary">
        Live Demo
      </a>
      </div>
     
    </article>
  );
}

export default PortfolioCard;
