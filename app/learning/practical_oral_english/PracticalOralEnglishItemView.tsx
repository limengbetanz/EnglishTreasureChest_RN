import React from "react";

import viewModel from "./PracticalOralEnglishViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishViewModel";

const PracticalOralEnglishItemView = ({
    item,
    expandedInitially,
    highlightedText,
}: {
    item: PracticalOralEnglishItem;
    expandedInitially: boolean;
    highlightedText?: string;
}) => {
    return (
        <CollapsibleCard
            title={item.title}
            content={item.content}
            themeColor={viewModel.themeColor}
            expandedInitially={expandedInitially}
            highlightedText={highlightedText}
        />
    );
};

export default PracticalOralEnglishItemView;
