import React from 'react'
import { useState, useEffect } from 'react'
import './News.css'
import SingleNews from '../SingleNews/SingleNews'
import axios from 'axios'



function News() {
  const [news,setNews]=useState([])


useEffect(()=>{
  fetchNews()
},[])

const fetchNews= async ()=>{
  try{
    const res=await axios.get('https://newsapi.org/v2/everything?q=india&apiKey=daa379cf8e3b46e6a5d516707eea316f ');

    const filteredNews=res.data.articles.filter(article => article.title !== '[Removed]' && article.author !== null)

    setNews(filteredNews);
    
    /* console.log(res.data)
    console.log(res.data.articles) */
  }
  catch(error){
    console.log('error');
  }
}


  return (
    <div className='News'>
      <h1 className='page-heading'>BREAKING NEWS</h1>

      <div className='news-container'>
      {news.length>0 ? news.map((singleNews,index)=>(
        <SingleNews key={index} singleNews={singleNews}/>
      )) : <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9wNTdvdGk0enE2Y3N5b3hubW5qNzg4NjlzeGdkNG1ob2Eyemx3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.webp' alt='loading'/>}
      </div>
    </div>
  )
}

export default News


/* 
Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
  
  */