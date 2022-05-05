import { render } from "@testing-library/react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Intro.css";


function Intro(props) {

  return (
    <div className="Intro">
      <Header></Header>
      {/* {isLoggedIn ? <User /> : <Guest />} */}
      <button onClick={props.SignInClick} className="login"></button>
    </div>
  );
}
// function Guest() {
//   return <div className="none"></div>;
// }
// function User() {
//   return (
//     <div className="user">
//       <div className="user__ava"></div>
//       <div className="user__nick"></div>
//     </div>
//   );
// }

function Header() {
  return (
    <header className="header">
      <NavLink to={"/"} className="header__title">
        Yes <span>flix</span>
      </NavLink>
    </header>
  );
}
export default Intro;
