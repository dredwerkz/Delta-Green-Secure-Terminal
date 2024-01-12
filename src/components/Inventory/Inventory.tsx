import { useState } from "react";
import rightArrow from "./right-arrow.svg";
import "./Inventory.css";
import PhotosContainer from "../PhotosContainer/PhotosContainer";

function Inventory() {
    const [invOpen, setInvOpen] = useState(false);

    function handleOpen() {
        setInvOpen((bool) => !bool);
    }

    return (
        <>
            <div id="invContainer">
                <div id="inventory" style={{ left: invOpen ? "0" : "-20vw" }}>
                    <div id="invHeader">
                        <img src="./images/inventory_label.jpg" />
                    </div>
                    <PhotosContainer />
                </div>
                <div
                    id="toggle"
                    style={{ left: invOpen ? "25vw" : "5vw" }}
                    onClick={handleOpen}
                >
                    <img
                        src={rightArrow}
                        style={{
                            transform: invOpen ? "scaleX(-1)" : "scaleX(1)",
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Inventory;
