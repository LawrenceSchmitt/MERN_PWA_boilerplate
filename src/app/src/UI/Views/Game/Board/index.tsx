import * as React from "react";

import { GameContext } from "../../../../contexts/GameContext";

export interface BoardProps {}

const Board: React.SFC<BoardProps> = props => {
  const Game = React.useContext(GameContext);
  const style = {
    width: "500px",
    height: "500px",
    display: "grid",
    gridTemplateRows: `repeat(10, 1fr)`,
    gridTemplateColumns: `repeat(10, 1fr)`
  };

  return (
    <div style={style}>
      {Object.keys(Game.state).map(row => {
        console.log(Game.state[row]);
        return Object.keys(Game.state[row]).map((field, i) => {
          return (
            <div
              key={i}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: Game.state[row][field]
                  ? Game.state[row][field].fieldColor === 0
                    ? "black"
                    : "white"
                  : "brown"
              }}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
