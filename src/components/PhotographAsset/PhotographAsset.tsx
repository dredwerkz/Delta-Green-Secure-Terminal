import "./PhotographAsset.css";

interface photoProps {
    imagePath: string;
    altText: string;
    descText: string;
}

function PhotographAsset({ imagePath, altText, descText }: photoProps) {
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
