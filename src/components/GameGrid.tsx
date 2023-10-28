
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";




const GameGrid = () => {

    const { games, error } = useGames(); // Going to return an object

    return (
        <>
            {error && <Text>{error}</Text>}

            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>


        </>
    );

};

export default GameGrid;
