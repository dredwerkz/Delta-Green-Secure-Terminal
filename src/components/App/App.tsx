import "./App.css";
import Board from "../gameboard/Board/Board";
import Inventory from "../inventorypanel/Inventory/Inventory";

function App() {
    document.body.style.overflow = "hidden"

    return (
        <>
            <Inventory />
            <Board />
        </>
    );
}

export default App;
