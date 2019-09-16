import * as React from "react";

//context
import GameContextProvider from "../../../contexts/GameContext";

//subComponents
import Board from "./Board";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};

export default Game;
