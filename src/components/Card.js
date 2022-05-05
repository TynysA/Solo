import React from "react";
import "./Card.css";
import { NavLink, Router } from "react-router-dom";

// to = {"/" + props.anime.mal_id}

function Card(props) {
  return (
    <article className={"anime-card" + " " + props.life}>
      <NavLink to={"/" + props.anime.id} rel="noreferrer">
        <figure>
          <img
            src={props.anime.attributes.posterImage.small}
            alt="Anime Image"
          />
        </figure>
        <h3>{props.anime.attributes.canonicalTitle}</h3>
      </NavLink>
    </article>
  );
}

export default Card;
