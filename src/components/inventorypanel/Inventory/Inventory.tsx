import { useState } from "react";
import rightArrow from "./right-arrow.svg";
import "./Inventory.css";
import AssetContainer from "../AssetContainer/AssetContainer";
import AssetSelector from "../AssetSelector/AssetSelector";
import AssetTypes from "../../../interfaces/AssetTypes";

function Inventory() {
    const [invOpen, setInvOpen] = useState(false);
    const [selectedAssetType, setSelectedAssetType] =
        useState<AssetTypes>("photographs");

    function handleOpen() {
        setInvOpen((bool) => !bool);
    }

    return (
        <>
            <AssetSelector
                selectedAssetType={selectedAssetType}
                setSelectedAssetType={setSelectedAssetType}
                invOpen={invOpen}
            />
            <div id="invContainer">
                <div id="inventory" style={{ left: invOpen ? "0" : "-23vw" }}>
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
                    <AssetContainer selectedAssetType={selectedAssetType} />
                </div>
            </div>
        </>
    );
}

export default Inventory;
