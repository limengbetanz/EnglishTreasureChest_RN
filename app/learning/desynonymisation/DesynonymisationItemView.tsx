import React from "react";
import { Text } from "react-native";
import viewModel from "./DesynonymisationViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import type { DesynonymisationItem } from "./DesynonymisationViewModel";

const DesynonymisationItemView = ({
    item,
    expandedInitially,
    highlightedText,
}: {
    item: DesynonymisationItem;
    expandedInitially: boolean;
    highlightedText: boolean;
}) => {
    return <Text> DDDDDD </Text>;
};

export default DesynonymisationItemView;
