import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bloglist.css";

const BlogItem = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fetch("https://api-website.wizart.ai/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => console.error("Could not fetch.", error))
  }, []);

  return (
    <div className="blog-wrap">
      {loading &&
        <div className="loader"></div>
      }
      {!loading &&
        <>
          {articles.map((article) => (
            <Link to={`/article/${article.id}`}>
              <div className="blog-items" key={article.id}>
                <h2 className="article-title">{article.title}</h2>
                <img
                  className="article-image"
                  src={article.image.url}
                  alt="photo"
                />
                <p className="article-desc">{article.description}</p>
              </div></Link>
          ))}
        </>
      }
    </div>
  );
};

export { BlogItem };