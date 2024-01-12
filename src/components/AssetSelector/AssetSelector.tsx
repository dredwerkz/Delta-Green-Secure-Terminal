import { AssetTypes } from "../Inventory/Inventory";
import "./AssetSelector.css";

interface AssetSelectorProps {
    selectedAssetType: AssetTypes;
    setSelectedAssetType: (type: AssetTypes) => void;
}

function AssetSelector({
    setSelectedAssetType,
    selectedAssetType,
}: AssetSelectorProps) {
    function handleTabClick(e: React.MouseEvent<HTMLElement>) {
        switch ((e.target as Element).id) {
            case "deltaAssets": {
                setSelectedAssetType("delta");
                break;
            }
            case "photographsAssets": {
                setSelectedAssetType("photographs");
                break;
            }
            case "VHSAssets": {
                setSelectedAssetType("VHS");
                break;
            }
            case "tapeAssets": {
                setSelectedAssetType("tape");
                break;
            }
            default: {
                setSelectedAssetType("delta");
                break;
            }
        }
    }

    return (
        <>
            <div id="assetTabs">
                <span
                    id="deltaAssets"
                    className={
                        selectedAssetType === "delta" ? "selected" : "tabs"
                    }
                    onClick={handleTabClick}
                >
                    Δ
                </span>
                <span
                    id="photographsAssets"
                    className={
                        selectedAssetType === "photographs"
                            ? "selected"
                            : "tabs"
                    }
                    onClick={handleTabClick}
                >
                    PHOTOS
                </span>
                <span
                    id="VHSAssets"
                    className={
                        selectedAssetType === "VHS" ? "selected" : "tabs"
                    }
                    onClick={handleTabClick}
                >
                    VHS TAPES
                </span>
                <span
                    id="tapeAssets"
                    className={
                        selectedAssetType === "tape" ? "selected" : "tabs"
                    }
                    onClick={handleTabClick}
                >
                    AUD. TAPES
                </span>
            </div>
        </>
    );
}

export default AssetSelector;
