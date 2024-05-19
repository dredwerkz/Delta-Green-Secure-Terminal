import "./PhotographAsset.css";
import PhotographAssetProps from "./PhotographAssetProps.ts";

function PhotographAsset({ imagePath, altText, descText }: PhotographAssetProps) {
    return (
        <>
            <div className="photograph">
                <img src={imagePath} alt={altText} />
                {descText.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </>
    );
}

export default PhotographAsset;
