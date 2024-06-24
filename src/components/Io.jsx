import React, { useState } from 'react';
import axios from 'axios';
import "./io.css";
const Io = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSearch = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get('http://127.0.0.1:5003/search', {
          params: { query }
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
  
    return (
      <div className="app">
        <h1>YouTube Video Search</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for videos"
          />
          <button type="submit">Search</button>
        </form>
        <div className="results">
          {results.map((video) => (
            <div key={video.videoId} className="video">
              <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} />
                <h3>{video.title}</h3>
              </a>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default Io;