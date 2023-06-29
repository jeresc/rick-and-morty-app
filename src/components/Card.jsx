import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  height: 210px;
  width: 540px;
  font-family: "Rubik";
  position: relative;
  border-radius: 30px;
  background-color: #212121;
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.8),
    -5px -5px 30px rgba(60, 60, 60, 0.8);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1240px) {
    width: 470px;
    height: 200px;
  }
  @media (max-width: 540px) {
    height: 540px;
    width: 100%;
  }
`;

const CardImage = styled.img`
  /* width: 37%; */
  width: 200px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px 0 0 30px;
  cursor: pointer;

  @media (max-width: 1104px) {
    width: 190px;
  }

  @media (max-width: 540px) {
    width: 100%;
    height: 260px;
    object-position: center center;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
  }
`;

const CardInfo = styled.div`
  /* width: 59% */
  width: calc(100% - 220px);
  height: 86%;
  color: #fff;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1.6rem;
  }
  div p:first-child {
    font-size: 1.5rem;
    color: #888;
    margin-bottom: 4px;
  }

  .pStatusSpecies {
    margin-right: 40px;
  }

  .circle-svg {
    margin-right: 6px;
    ${({ status }) => (status === "Alive" ? `fill: #55cc44` : null)}
    ${({ status }) => (status === "Dead" ? `fill: #d63d2e` : null)}
    ${({ status }) => (status === "unknown" ? `fill: #ffbf59` : null)}
  }

  .onlyMobileInfo {
    display: none;
  }

  @media (max-width: 1240px) {
    width: calc(100% - 210px);

    p {
      font-size: 1.5rem;
    }
    div p:first-child {
      font-size: 1.4rem;
      color: #888;
      margin-bottom: 4px;
    }
  }
  @media (max-width: 540px) {
    width: 100%;
    height: 260px;
    padding: 20px;

    p {
      font-size: 1.6rem;
    }
    div p:first-child {
      font-size: 1.5rem;
      color: #888;
      margin-bottom: 4px;
    }
    .onlyMobileInfo {
      display: block;
    }
  }
`;

const Title = styled.h2`
  ${({ name }) =>
    name.length > 21 ? `font-size: 2.2rem;` : `font-size: 2.5rem;`}
  line-height: 3rem;
  font-weight: 700;
  margin-bottom: 4px;
  margin-right: 40px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }

  @media (max-width: 1240px) {
    ${({ name }) =>
      name.length > 21 ? `font-size: 2rem;` : `font-size: 2.3rem;`}
    line-height: 2.8rem;
  }
  @media (max-width: 540px) {
    ${({ name }) =>
      name.length > 21 ? `font-size: 2.2rem;` : `font-size: 2.5rem;`}
    line-height: 3rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  border: none;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  .closeIcon {
    background-size: cover;
    width: 24px;
    height: 24px;
    fill: #aaa;

    &:hover {
      filter: drop-shadow(0 0px 3px rgba(168, 209, 2, 0.6));
    }
  }

  @media (max-width: 540px) {
    .closeIcon {
      width: 36px;
      height: 36px;
    }
  }
`;

const HeartContainer = styled.button`
  position: absolute;
  right: 16px;
  ${({ location }) => (location === "/favorites" ? `top: 22px;` : `top: 46px;`)}
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  .heartIcon {
    background-size: cover;
    width: 22px;
    height: 22px;
    border: none;
    cursor: pointer;
    filter: drop-shadow(0 0px 3px rgba(168, 209, 2, 0.6));
  }

  .emptyHeartIcon {
    background-size: cover;
    width: 22px;
    height: 22px;
    border: none;
    fill: #aaa;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0px 3px rgba(168, 209, 2, 0.6));
    }
  }

  @media (max-width: 540px) {
    ${({ location }) =>
      location === "/favorites" ? `top: 22px;` : `top: 62px;`}

    .heartIcon {
      background-size: cover;
      width: 32px;
      height: 32px;
    }

    .emptyHeartIcon {
      width: 32px;
      height: 32px;
    }
  }
`;

export default function Card(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((favorite) => {
      if (favorite.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <CardDiv>
      <CardImage
        src={props.image}
        alt=""
        onClick={() => navigate(`/detail/${props.id}`, {})}
      />
      <CardInfo status={props.status}>
        <div>
          <Title
            name={props.name}
            onClick={() => navigate(`/detail/${props.id}`, {})}
          >
            {props.name}
          </Title>
          <p className="pStatusSpecies">
            <svg height="16" width="16" className="circle-svg">
              <circle cx="10" cy="10" r="5" />
            </svg>
            {props.status} - {props.species}
          </p>
        </div>
        <div>
          <p>Gender:</p>
          <p>{props.gender}</p>
        </div>
        <div>
          <p>Origin Location:</p>
          <p>{props.origin}</p>
        </div>
        <div className="onlyMobileInfo">
          <p>Last Known Location:</p>
          <p>{props.location}</p>
        </div>
      </CardInfo>
      {location.pathname == "/home" && (
        <CloseButton
          onClick={() => {
            props.removeCharacter(props.id);
            dispatch(removeFav(props.id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="closeIcon"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </CloseButton>
      )}
      <HeartContainer onClick={handleFavorite} location={location.pathname}>
        {isFav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="heartIcon"
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stop-color="#f3f520" />
                <stop offset="50%" stop-color="#a8d102" />
                <stop offset="100%" stop-color="#00ddeb" />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="emptyHeartIcon"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>
        )}
      </HeartContainer>
    </CardDiv>
  );
}
