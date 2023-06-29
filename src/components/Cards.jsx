import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 540px);
  justify-content: space-evenly;
  gap: 36px 28px;
  width: 85vw;
  height: 100%;
  margin: auto;
  margin-bottom: 32px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(auto-fill, 470px);
    margin-bottom: 92px;
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, 85vw);
  }
`;

export default function Cards({ characters, removeCharacter }) {
  return (
    <CardsContainer>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            location={character.location.name}
            removeCharacter={removeCharacter}
          />
        );
      })}
    </CardsContainer>
  );
}
