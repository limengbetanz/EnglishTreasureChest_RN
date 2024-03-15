import React from "react";
import { Text, View, StyleSheet, TextStyle } from "react-native";
import viewModel from "./OneMinuteGrammarViewModel";
import type { OneMinuteGrammarItem } from "./OneMinuteGrammarViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import Colors from "../../consts/Colors";
import HighlightableText from "../../shared_views/HighlightableText";

const OneMinuteGrammarItemView = ({
    item,
    expandedInitially,
    highlightedText,
}: {
    item: OneMinuteGrammarItem;
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

    const KeyworksView = (): React.ReactNode => {
        return typeof highlightedText === "undefined" ? (
            <View style={styles.keywords}>
                {item.keywords.map((keyword, index) => {
                    const s = keyword + ": ";
                    return (
                        <View key={index} style={styles.keywordEntry}>
                            <Text style={styles.keywordText}>
                                {s}
                                <Text style={styles.keywordDescription}>
                                    {item.meanings[index]}
                                </Text>
                            </Text>
                        </View>
                    );
                })}
            </View>
        ) : (
            <View style={styles.keywords}>
                {item.keywords.map((keyword, index) => {
                    const s = keyword + ": ";
                    return (
                        <View key={index} style={styles.keywordEntry}>
                            <Text>
                                <HighlightableText
                                    text={s}
                                    textStyles={styles.keywordText}
                                    highlightedText={highlightedText}
                                    highlightedTextStyles={[
                                        styles.keywordText,
                                        styles.highlightableText,
                                    ]}
                                />
                                <HighlightableText
                                    text={item.meanings[index]}
                                    textStyles={styles.keywordDescription}
                                    highlightedText={highlightedText}
                                    highlightedTextStyles={[
                                        styles.keywordDescription,
                                        styles.highlightableText,
                                    ]}
                                />
                            </Text>
                        </View>
                    );
                })}
            </View>
        );
    };

    const DescriptionView = (): React.ReactNode => {
        return typeof highlightedText === "undefined" ? (
            <Text style={styles.description}>{item.description}</Text>
        ) : (
            <View style={styles.description}>
                <HighlightableText
                    text={item.description}
                    textStyles={styles.description}
                    highlightedText={highlightedText}
                    highlightedTextStyles={[
                        styles.description,
                        styles.highlightableText,
                    ]}
                />
            </View>
        );
    };

    const ContentView = (): React.ReactNode => {
        return (
            <View>
                <KeyworksView />
                <DescriptionView />
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
        fontSize: 15,
        color: Colors.primaryText,
    } as TextStyle,

    keywords: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingHorizontal: 15,
    },

    keywordEntry: {
        paddingVertical: 5,
    },

    keywordText: {
        fontWeight: "500",
        fontSize: 15,
        color: Colors.OneMinuteGrammarViewThemeColor,
    } as TextStyle,

    keywordDescription: {
        fontWeight: "normal",
        fontSize: 15,
        color: Colors.primaryText,
    } as TextStyle,

    description: {
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 12,
        color: Colors.secondoryText,
        fontSize: 15,
    },

    highlightableText: {
        backgroundColor: Colors.highlightedText,
    },
});

export default OneMinuteGrammarItemView;
