import React from 'react'
import portfolio1 from '../assets/portfolio-1.webp';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio-4.webp';
import portfolio5 from '../assets/portfolio-5.jpg';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
  const data = [
    {
      imgUrl: portfolio1,
      title: 'E-Commerce Website',
      gitHubLink: 'https://github.com',
    },
    {
      imgUrl: portfolio2,
      title: 'E-Commerce Website',
      gitHubLink: 'https://github.com',
    },
    {
      imgUrl: portfolio3,
      title: 'E-Commerce Website',
      gitHubLink: 'https://github.com',
    },
    {
      imgUrl: portfolio4,
      title: 'E-Commerce Website',
      gitHubLink: 'https://github.com',
    },
    {
      imgUrl: portfolio5,
      title: 'E-Commerce Website',
      gitHubLink: 'https://github.com',
    },
  ];
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map((data, index)=>{
            return <PortfolioCard imgUrl={data.imgUrl} title={data.title} gitHubLink={data.gitHubLink} />
          })
        }
      </div>
    </section>
  )
}

export default Portfolio