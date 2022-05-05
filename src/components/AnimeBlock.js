import "./AnimeBlock.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AnimeBlock(props) {
  const params = useParams();
  const prodId = params.id;
  const [Anime, SetAnime] = useState([]);
  let isLoggedIn = props.isLoggedIn;
  const GetAnime = async () => {
    const temp = await fetch(`https://kitsu.io/api/edge/anime/${prodId}`).then(
      (res) => res.json()
    );
    const newTemp = Object.values(temp);
    SetAnime(newTemp);
  };
  useEffect(() => {
    GetAnime();
  }, []);

  return (
    <div className="animeblock">
      {/* <button onClick={} className="login"></button> */}
      {Anime.map((anime) => (
        <div className="anime" key={anime.id}>
          <h3 className="anime__title">{anime.attributes.canonicalTitle}</h3>

          <div className="anime__content">
            <div className="anime__img">
              <img src={anime.attributes.posterImage.original} alt="" />
            </div>
            <div className="text__content">
              <div className="anime__name">
                {anime.attributes.canonicalTitle}
              </div>
              <div className="anime__info">
                <p></p>
                <p></p>
                <p></p>
                <p className="descripton">
                  <span>Synopsys:</span> {anime.attributes.description}
                </p>
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="anime__watch">Yes, yuuuuup</div>
          ) : (
            <div className="sorry">You must sign up</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AnimeBlock;
