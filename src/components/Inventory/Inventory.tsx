import { useState } from "react";
import rightArrow from "./right-arrow.svg"
import "./Inventory.css";

function Inventory() {
    const [invOpen, setInvOpen] = useState(false);

    function handleOpen() {
        setInvOpen((bool) => !bool);
    }

    return (
        <>
            <div id="invContainer">
                <div id="inventory" style={{ left: invOpen ? "0" : "-18vw" }}>
                    Dossier
                </div>
                <div
                    id="toggle"
                    style={{ left: invOpen ? "20vw" : "2vw" }}
                    onClick={handleOpen}
                >
                    <img src={rightArrow} style={{transform: invOpen ? "scaleX(-1)" : "scaleX(1)"}} />
                </div>
            </div>
        </>
    );
}

export default Inventory;
