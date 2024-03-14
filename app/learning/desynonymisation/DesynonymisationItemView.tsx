import React from "react";
import { Text, View, StyleSheet, TextStyle } from "react-native";
import viewModel from "./DesynonymisationViewModel";
import type { DesynonymisationItem } from "./DesynonymisationViewModel";
import CollapsibleCard from "../../shared_views/CollapsibleCard";
import Colors from "../../consts/Colors";
import HighlightableText from "../../shared_views/HighlightableText";

const DesynonymisationItemView = ({
    item,
    expandedInitially,
    highlightedText,
}: {
    item: DesynonymisationItem;
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

    const SynonymsView = (): React.ReactNode => {
        return typeof highlightedText === "undefined" ? (
            <View style={styles.synonyms}>
                {item.synonyms.map((synonym, index) => {
                    const s = synonym + ": ";
                    return (
                        <View key={index} style={styles.synonymEntry}>
                            <Text style={styles.synonymText}>
                                {s}
                                <Text style={styles.synonymDescription}>
                                    {item.meanings[index]}
                                </Text>
                            </Text>
                        </View>
                    );
                })}
            </View>
        ) : (
            <View style={styles.synonyms}>
                {item.synonyms.map((synonym, index) => {
                    const s = synonym + ": ";
                    return (
                        <View key={index} style={styles.synonymEntry}>
                            <Text>
                                <HighlightableText
                                    text={s}
                                    textStyles={styles.synonymText}
                                    highlightedText={highlightedText}
                                    highlightedTextStyles={[
                                        styles.synonymText,
                                        styles.highlightableText,
                                    ]}
                                />
                                <HighlightableText
                                    text={item.meanings[index]}
                                    textStyles={styles.synonymDescription}
                                    highlightedText={highlightedText}
                                    highlightedTextStyles={[
                                        styles.synonymDescription,
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
                <SynonymsView />
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

    synonyms: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingHorizontal: 15,
    },

    synonymEntry: {
        paddingVertical: 5,
    },

    synonymText: {
        fontWeight: "500",
        fontSize: 15,
        color: Colors.DesynonymisationViewThemeColor,
    } as TextStyle,

    synonymDescription: {
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

export default DesynonymisationItemView;
