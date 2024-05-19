import AssetTypes from "../../../interfaces/AssetTypes";

interface AssetSelectorProps {
    selectedAssetType: AssetTypes;
    setSelectedAssetType: (type: AssetTypes) => void;
    invOpen: boolean;
}

export default AssetSelectorProps;
