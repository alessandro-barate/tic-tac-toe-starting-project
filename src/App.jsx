import Player from "./components/Player.jsx";

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Player 1 */}
          <Player name="Player 1" symbol="X" />
          {/* END player 1 */}
          
          {/* Player 2 */}
          <Player name="Player 2" symbol="O" />
          {/* END player 2 */}
        </ol>

        GAME BOARD
      </div>
    </main>
  )
}

export default App
