import "./App.css";
import Board from "../Board/Board";
import Inventory from "../Inventory/Inventory";

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
