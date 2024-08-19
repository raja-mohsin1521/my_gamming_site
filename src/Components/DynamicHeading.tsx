import useGameQueryStore from "../store";

function DynamicHeading() {
  const { gameQuery } = useGameQueryStore();

  return (
    <h1 className="mb-4 text-light">
      {gameQuery.platform ? gameQuery.platform.name : ''} {gameQuery.genre ? gameQuery.genre.name : ''} Games
    </h1>
  );
}

export default DynamicHeading;
