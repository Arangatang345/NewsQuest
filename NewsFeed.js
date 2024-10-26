// src/components/NewsFeed.js
import React, { useState, useEffect } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h1>News Feed</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
