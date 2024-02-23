import React from "react";

import viewModel from "./PracticalOralEnglishViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishViewModel";

const PracticalOralEnglishItemView = ({
    item,
}: {
    item: PracticalOralEnglishItem;
}) => {
    return (
        <CollapsibleCard
            title={item.title}
            content={item.content}
            themeColor={viewModel.themeColor}
        />
    );
};

export default PracticalOralEnglishItemView;
