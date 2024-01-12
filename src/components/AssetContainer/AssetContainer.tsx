import "./AssetContainer.css";
import PhotographAsset from "../PhotographAsset/PhotographAsset";

function AssetContainer() {
    return (
        <>
            <div className="assetContainer">
                <PhotographAsset />
                <PhotographAsset />
                <div className="scrollBuffer"></div>
            </div>
        </>
    );
}

export default AssetContainer;
