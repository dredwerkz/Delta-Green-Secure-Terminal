import { useEffect, useState } from "react";
import "./AssetContainer.css";
import PhotographAsset from "../PhotographAsset/PhotographAsset";

import { Photos } from "./InvTypes";

interface AssetContainerProps {
    selectedAssetType: string;
}

function AssetContainer({ selectedAssetType }: AssetContainerProps) {
    const [photoData, setPhotoData] = useState<Photos[]>();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/database/assets.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPhotoData(data[0].photos);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="assetContainer">
                {photoData &&
                    selectedAssetType === "photographs" &&
                    photoData.map((asset: Photos, i: number) => {
                        return (
                            <PhotographAsset
                                key={`photograph_` + i}
                                imagePath={asset.imagePath}
                                altText={asset.altText}
                                descText={asset.descText}
                            />
                        );
                    })}
                <div className="scrollBuffer"></div>
            </div>
        </>
    );
}

export default AssetContainer;
