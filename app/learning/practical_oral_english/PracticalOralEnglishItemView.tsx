import React from "react";
import { Text, View, StyleSheet, TextStyle } from "react-native";

import viewModel from "./PracticalOralEnglishViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import type { PracticalOralEnglishItem } from "./PracticalOralEnglishViewModel";
import Colors from "../../consts/Colors";
import HighlightableText from "../../shared_views/HighlightableText";

const PracticalOralEnglishItemView = ({
    item,
    expandedInitially,
    highlightedText,
}: {
    item: PracticalOralEnglishItem;
    expandedInitially: boolean;
    highlightedText?: string;
}) => {
    const TitleView = (): React.ReactNode => {
        return typeof highlightedText === "undefined" ? (
            <Text style={styles.title}>{item.title}</Text>
        ) : (
            <HighlightableText
                text={item.title}
                textStyles={styles.title}
                highlightedText={highlightedText}
                highlightedTextStyles={[styles.title, styles.highlightableText]}
            />
        );
    };

    const ContentView = (): React.ReactNode => {
        return typeof highlightedText === "undefined" ? (
            <Text style={styles.content}>{item.content}</Text>
        ) : (
            <View style={styles.content}>
                <HighlightableText
                    text={item.content}
                    textStyles={styles.content}
                    highlightedText={highlightedText}
                    highlightedTextStyles={[
                        styles.content,
                        styles.highlightableText,
                    ]}
                />
            </View>
        );
    };

    return (
        <CollapsibleCard
            themeColor={viewModel.themeColor}
            expandedInitially={expandedInitially}
            titleView={TitleView()}
            contentView={ContentView()}
        />
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: "normal",
        fontSize: 16,
        color: Colors.primaryText,
    } as TextStyle,

    content: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        color: Colors.secondoryText,
        fontSize: 14,
    },
    highlightableText: {
        backgroundColor: Colors.highlightedText,
    },
});

export default PracticalOralEnglishItemView;
