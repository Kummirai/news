import "./newsCard.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        "https://api.currentsapi.services/v1/latest-news?apiKey=FBhmqcpHOrsJH--pc5aGRAMRgC4iAozFAXVeTRyNzZPS-ubI"
      );
      const data = await response.json();
      setNews(data.news);
      console.log(data.news);
    }
    fetchNews();
  }, [setNews]);

  return (
    <div className="news-card">
      {news.map((news) => (
        <div className="inner" key={news.id}>
          <img
            src={
              news.image === "None"
                ? "https://images.pexels.com/photos/3866816/pexels-photo-3866816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                : news.image
            }
            alt={news.title}
          />
          <p>{news.title}</p>
          <p>{news.descriptipon}</p>
          <a href={news.url} target="_blank" rel="noreferrer">
            <button>Read More</button>
          </a>
          <h5>Author: {news.author}</h5>
        </div>
      ))}
    </div>
  );
};

NewsCard.propTypes = {
  setNewsData: PropTypes.func.isRequired,
};

export default NewsCard;
