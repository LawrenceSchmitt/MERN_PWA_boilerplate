import * as React from "react";

//logic
import chess from "chess";

export const GameContext = React.createContext({
  state: {},
  onCheck: () => {},
  move: () => {}
});

export interface GameStateProviderProps {}

const GameStateProvider: React.SFC<GameStateProviderProps> = ({ children }) => {
  const [GameClient, setGameClient] = React.useState(chess.create());
  const onCheck = () => {
    GameClient.on("check", attack => {
      console.log(attack);
    });
  };
  // context

  return (
    <GameContext.Provider
      value={{
        state: GameClient.getStatus(),
        onCheck: onCheck,
        move: GameClient.move
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameStateProvider;
