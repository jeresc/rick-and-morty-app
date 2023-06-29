import { styled } from "styled-components";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const FavoritesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 540px);
  justify-content: space-evenly;
  gap: 40px;
  width: 85%;
  margin: auto;
  margin-bottom: 32px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(auto-fill, 460px);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, 85vw);
  }
`;

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <FavoritesContainer>
      {myFavorites.map((favorite) => {
        return (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            origin={favorite.origin}
            image={favorite.image}
          />
        );
      })}
    </FavoritesContainer>
  );
}
