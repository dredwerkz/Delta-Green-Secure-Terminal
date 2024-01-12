import "./PhotosContainer.css";
import PhotographAsset from "../PhotographAsset/PhotographAsset";

function PhotosContainer() {
    return (
        <>
            <div className="photos_container">
                <PhotographAsset />
                <PhotographAsset />
                <div className="scrollBuffer"></div>
            </div>
        </>
    );
}

export default PhotosContainer;
