import { useState } from "react";
import rightArrow from "./right-arrow.svg";
import "./Inventory.css";
import AssetContainer from "../AssetContainer/AssetContainer";

function Inventory() {
    const [invOpen, setInvOpen] = useState(false);

    function handleOpen() {
        setInvOpen((bool) => !bool);
    }

    return (
        <>
            <div id="invContainer">
                <div id="inventory" style={{ left: invOpen ? "0" : "-20vw" }}>
                    <div id="toggle" onClick={handleOpen}>
                        <img
                            src={rightArrow}
                            style={{
                                transform: invOpen ? "scaleX(-1)" : "scaleX(1)",
                            }}
                            alt="Extend inventory button"
                        />
                    </div>
                    <div id="invHeader">
                        <img src="./images/inventory_label.jpg" />
                    </div>
                    <AssetContainer />
                </div>
            </div>
        </>
    );
}

export default Inventory;
