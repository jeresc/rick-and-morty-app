import axios from "axios";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://rickandmortyapi.com/api";

const DetailContainer = styled.article`
  width: -moz-fit-content;
  width: fit-content;
  height: fit-content;
  margin: auto;
  color: #fff;
  position: relative;
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.9),
    -5px -5px 30px rgba(60, 60, 60, 0.9);
  background: #212121;
  border-radius: 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  padding: 40px;
  gap: 40px;
  margin-bottom: 32px;

  @media (max-width: 1180px) {
    width: 440px;
    height: fit-content;
  }

  @media (max-width: 680px) {
    justify-content: center;
    width: 90vw;
    box-shadow: none;
    padding: 12px;
    gap: 22px;
  }
`;

const DetailImage = styled.div`
  width: 440px;
  background-size: cover;

  img {
    border-radius: 50px;
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.3),
      -5px -5px 30px rgba(60, 60, 60, 0.3);
  }

  @media (max-width: 1486px) {
    width: 360px;
  }
`;

const DetailInfo = styled.div`
  width: 420px;
  color: #fff;
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;

  p {
    font-size: 2.2rem;
  }
  div p:first-child {
    font-size: 2rem;
    color: #888;
    margin-bottom: 4px;
  }

  .circle-svg {
    margin-right: 8px;
    ${({ status }) => (status === "Alive" ? `fill: #55cc44` : null)}
    ${({ status }) => (status === "Dead" ? `fill: #d63d2e` : null)}
    ${({ status }) => (status === "unknown" ? `fill: #ffbf59` : null)}
  }

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 680px) {
    width: 340px;
    p {
      font-size: 2.1rem;
    }
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  ${({ name }) =>
    name
      ? name.length > 21
        ? `font-size: 3.6rem;`
        : `font-size: 4rem;`
      : null}
  ${({ name }) =>
    name
      ? name.length > 21
        ? `line-height: 4.5rem;`
        : `line-height: 4.8rem;`
      : null}
  font-weight: bold;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
  padding-bottom: 6px;
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;

  @media (max-width: 680px) {
    ${({ name }) =>
      name
        ? name.length > 21
          ? `font-size: 3rem;`
          : `font-size: 3.4rem;`
        : null}
    ${({ name }) =>
      name
        ? name.length > 21
          ? `line-height: 4rem;`
          : `line-height: 4.4rem;`
        : null}
  }
`;

export default function Detail() {
  const [character, setCharacter] = useState({});
  const [firstEpisode, setFirstEpisode] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL}/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);

          axios(`${data.episode[0]}`).then(({ data }) => {
            setFirstEpisode(data.name);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return setCharacter({}) && firstEpisode("");
  }, [id]);

  return (
    <section>
      <DetailContainer>
        <DetailImage>
          <img src={character.image} alt="" />
        </DetailImage>
        <DetailInfo status={character.status}>
          <div>
            <Title name={character.name}>{character.name}</Title>
            <p>
              <svg height="26" width="26" className="circle-svg">
                <circle cx="18" cy="18" r="8" />
              </svg>
              {character.status} - {character.species}
            </p>
          </div>
          <div>
            <p>Gender:</p>
            <p>{character.gender}</p>
          </div>
          <div>
            <p>Origin Location:</p>
            <p>{character?.origin?.name}</p>
          </div>
          <div>
            <p>Last Known Location:</p>
            <p>{character?.location?.name}</p>
          </div>
          <div>
            <p>First Seen In:</p>
            <p>{firstEpisode}</p>
          </div>
        </DetailInfo>
      </DetailContainer>
    </section>
  );
}
