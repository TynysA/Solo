import "./App.css";
import Intro from "./components/Intro";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import AnimeBlock from "./components/AnimeBlock";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App(props) {
  let isLoggedIn = props.isLoggedIn;
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://kitsu.io/api/edge/anime?sort=popularityRank`
    ).then((res) => res.json());
    SetTopAnime(temp.data.slice(0, 5));
  };
  useEffect(() => {
    GetTopAnime();
  }, []);

  const HandleSearch = (e) => {
    e.preventDefault();

    // console.log(search);
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${query}`
    ).then((res) => res.json());
    // console.log(temp.data);
    SetAnimeList(temp.data);
  };

  const SignInClick = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      isLoggedIn = false;
    } else {
      isLoggedIn = true;
    }
    console.log(isLoggedIn);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Intro SignInClick={SignInClick}></Intro>
        <main className="main ">
          <div className="container">
            <Sidebar topAnime={topAnime} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    HandleSearch={HandleSearch}
                    search={search}
                    SetSearch={SetSearch}
                    animeList={animeList}
                  />
                }
              ></Route>
              <Route
                path="/:id"
                element={<AnimeBlock isLoggedIn={true}/>}
              ></Route>
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
