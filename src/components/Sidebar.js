import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ topAnime }) {
  return (
    <aside className="aside">
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <NavLink to={"/" + anime.id} key={anime.id} target="_blank" rel="noreferrer">
            {anime.attributes.canonicalTitle}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
