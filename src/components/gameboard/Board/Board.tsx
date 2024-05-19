import "./Board.css";
import TerminalTitle from "../TerminalTitle/TerminalTitle";

function Board() {
    const title: string = "Login Success: Welcome, Agent."

    return (
        <>
            <div className="terminal_body">
                <div className="title">
                    <TerminalTitle title={title}/>
                </div>
            </div>
            <div id="terminal">
                <div id="scanline" />
            </div>
        </>
    );
}

export default Board;
