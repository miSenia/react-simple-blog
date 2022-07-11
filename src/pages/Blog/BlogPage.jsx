import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Main/Header/Header";
import "./blogpage.css";

const BlogPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fetch(`https://api-website.wizart.ai/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => console.error("Could not fetch.", error))

  }, []);

  return (
    <div className="article-wrap">
      <Header />
      {loading &&
        <div className="loader"></div>
      }
      {!loading &&
        <>
          {article && (
            <>
              <div className="blogpage-wrap">
                <h1 className="blogpage-title">{article.title}</h1>
                <img className="blogpage-image" src={article.image.url} alt="image" />
                <div className="blogpage-body" dangerouslySetInnerHTML={{ __html: article.body }}></div>
                <div className="author-information">
                  <h2>Author of the article:</h2>
                  <img src={article.author.photo.url} alt="photo" />
                  <div>
                    <h2>{article.author.name}</h2>
                    <h4>{article.author.position}</h4>
                  </div>
                </div>

              </div>
            </>
          )}
        </>
      }
    </div>
  );
};

export { BlogPage };
