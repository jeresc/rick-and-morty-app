import { styled } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

import navImage from "../assets/img/rickandmorty.png";

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  padding: 20px;
  margin-bottom: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 30px rgba(4, 4, 4, 0.4);
  background-color: #212121;
`;

const NavTitle = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
  filter: drop-shadow(0 5px 30px rgba(255, 255, 255, 0.4));
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;

  img {
    width: 80px;
    height: 80px;
    margin-right: 6px;
    filter: drop-shadow(0 0px 30px rgba(168, 209, 2, 0.3));
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    display: none;

    @media (min-width: 1360px) {
      display: block;
    }
  }
`;

const NavButton = styled.button`
  border: none;
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.6),
    -5px -5px 30px rgba(60, 60, 60, 0.6);
  border-radius: 17px;
  outline: none;
  width: 50px;
  height: 100%;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);

  span {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #212121;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover span {
    background: none;
  }

  &:hover {
    box-shadow: 5px 5px 30px rgba(0, 221, 235, 0.4),
      -5px -5px 30px rgba(243, 245, 32, 0.3);
  }

  &:hover {
    svg {
      path {
        fill: #fff;
      }
    }
  }

  &:active {
    transform: translateY(3px) scale(0.95);
  }
`;

const FavoritesButton = styled.button`
  border: none;
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.3),
    -5px -5px 30px rgba(60, 60, 60, 0.3);
  border-radius: 17px;
  outline: none;
  width: 50px;
  height: 100%;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);

  span {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #212121;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover span {
    background: none;
  }

  &:hover {
    box-shadow: 5px 5px 30px rgba(0, 221, 235, 0.4),
      -5px -5px 30px rgba(243, 245, 32, 0.3);
  }

  &:hover {
    svg {
      path {
        fill: #fff;
      }
    }
  }

  &:active {
    transform: translateY(3px) scale(0.95);
  }
`;

const LogOutButton = styled.button`
  width: 32px;
  height: 52px;
  outline: none;
  border: none;
  color: #fff;
  background: #212121;
  cursor: pointer;

  .logOutIcon {
    width: 26px;
    height: 26px;
    fill: #fff;
  }
`;

const NavRight = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  gap: 26px;
`;

export default function Nav({ onSearch, logOut }) {
  const location = useLocation();

  return (
    <StyledNav>
      <NavTitle>
        <img src={navImage} alt="" />
        <h1>Rick & Morty API</h1>
      </NavTitle>
      <NavRight>
        {location.pathname == "/home" && <SearchBar onSearch={onSearch} />}
        <NavLink to="/home">
          <NavButton>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                alt="home"
              >
                <defs>
                  <linearGradient id="gradient">
                    <stop offset="5%" stopColor="#f3f520" />
                    <stop offset="70%" stopColor="#a8d102" />
                    <stop offset="110%" stopColor="#00ddeb" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient)"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </span>
          </NavButton>
        </NavLink>
        <NavLink to="/favorites">
          <FavoritesButton>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="heartIcon"
              >
                <path
                  fill="url(#gradient)"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
            </span>
          </FavoritesButton>
        </NavLink>
        <NavLink to="/about">
          <NavButton>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="url(#gradient)"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </span>
          </NavButton>
        </NavLink>
        <LogOutButton onClick={logOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="logOutIcon"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
        </LogOutButton>
      </NavRight>
    </StyledNav>
  );
}
