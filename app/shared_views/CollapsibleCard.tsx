import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../consts/Colors";
import HighlightableText from "./HighlightableText";

type CollapsibleCardInfo = {
    title: string;
    content: string;
    themeColor: string;
    expandedInitially: boolean;
    highlightedText?: string;
};

const CollapsibleCard = ({
    title,
    content,
    themeColor,
    expandedInitially,
    highlightedText,
}: CollapsibleCardInfo) => {
    const [expanded, setExpanded] = useState(expandedInitially);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const Divider = () => {
        return (
            <View style={{ paddingHorizontal: 15 }}>
                <View style={styles.divider}></View>
            </View>
        );
    };

    const ContentText = ({ content }) => {
        return highlightedText === "undefined" ? (
            <Text style={styles.content}>{content}</Text>
        ) : (
            <View style={styles.content}>
                <HighlightableText
                    text={content}
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
        <View style={[styles.container, styles.shadow]}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => toggleExpand()}
                style={styles.header}
            >
                {highlightedText === "undefined" ? (
                    <Text style={styles.title}>{title}</Text>
                ) : (
                    <HighlightableText
                        text={title}
                        textStyles={styles.title}
                        highlightedText={highlightedText}
                        highlightedTextStyles={[
                            styles.title,
                            styles.highlightableText,
                        ]}
                    />
                )}

                {expanded ? (
                    <SimpleLineIcons
                        name="arrow-up"
                        size={12}
                        color={themeColor}
                    />
                ) : (
                    <SimpleLineIcons
                        name="arrow-down"
                        size={12}
                        color={themeColor}
                    />
                )}
            </TouchableOpacity>
            {expanded && <Divider />}
            {expanded && <ContentText content={content} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        backgroundColor: "white",
        borderRadius: 5,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: "grey",
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        backgroundColor: "white",
        marginVertical: 15,
    },
    title: {
        fontWeight: "normal",
        fontSize: 16,
        color: Colors.primaryText,
    },
    divider: {
        backgroundColor: Colors.divider,
        height: 1,
    },
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

export default CollapsibleCard;
