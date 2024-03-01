import React, { useState, ReactNode } from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../consts/Colors";

type CollapsibleCardInfo = {
    themeColor: string;
    expandedInitially: boolean;
    titleView: ReactNode;
    contentView: ReactNode;
};

const CollapsibleCard = ({
    themeColor,
    expandedInitially,
    titleView,
    contentView,
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

    return (
        <View style={[styles.container, styles.shadow]}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => toggleExpand()}
                style={styles.header}
            >
                {titleView}

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
            {expanded && <View>{contentView}</View>}
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
