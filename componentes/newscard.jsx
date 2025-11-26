import React from 'react';

function NewsCard({ imageSrc, imageAlt, title, date, excerpt, link }) {
  return (
    <article className="news-card"> 
      <img src={imageSrc} alt={imageAlt} />
      
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{excerpt}</p>

      <a href={link} className="read-more" target="_blank" rel="noopener noreferrer">
        Leia Mais &rarr;
      </a>
    </article>
  );
}


export default NewsCard;
