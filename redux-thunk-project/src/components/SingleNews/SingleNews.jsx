import React from 'react'
import './SingleNews.css'

function SingleNews({singleNews}) {
  const {title,description,url,publishedAt,author,urlToImage}=singleNews
  const defaultFallbackImg='https://i.insider.com/6669b825764df1611258f121?width=1200&format=jpeg';

  return (
    <div className='news-card'>
      <img src={urlToImage || defaultFallbackImg} alt='img-url' className='news-image'/>
      <p className='news-title'>{title}</p>
      <p className='news-description'>{description}</p>
      <p>Reported By: {author} | Date: {publishedAt}</p>
      <a href={url} target='_blank'>Read more</a>
    </div>
  )
}

export default SingleNews
