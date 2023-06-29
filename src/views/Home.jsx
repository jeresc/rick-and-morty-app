import Cards from "../components/Cards.jsx";

export default function Home(props) {
  return (
    <>
      <Cards
        characters={props.characters}
        removeCharacter={props.removeCharacter}
      />
    </>
  );
}
