import "./Main.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";

function Main(props) {
  const [topAnime, SetTopAnime] = useState([]);
  const GetTopAnime = async () => {
    const temp = await fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=12&page[offset]=5`).then((res) =>
      res.json()
    );

    SetTopAnime(temp.data.slice(0, 14));
    document.querySelector("#submit").onsubmit = function () {
      // SetTopAnime(temp.data.slice(0, 0));
      let life = document.querySelectorAll(".life");
      console.log(life);
      for (let i = 0; i < life.length; i++) {
        life[i].classList.add("none");
      }
    };
  };
  useEffect(() => {
    GetTopAnime();
  }, []);
  return (
    <div className="main_wrap">
      <div className="main-head">
        <form id="submit" className="search-box" onSubmit={props.HandleSearch}>
          <input
            className="search-box-input"
            type="search"
            placeholder="Search for an anime..."
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="anime-list">
        {topAnime.map((anime) => (
          <Card life="life" anime={anime} key={anime.mal_id} />
        ))}
        {props.animeList.map((anime) => (
          <Card anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default Main;
