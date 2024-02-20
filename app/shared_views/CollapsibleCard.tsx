import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Animated,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../consts/Colors";

type CollapsibleCardInfo = {
    title: string;
    content: string;
    themeColor: string;
};

const CollapsibleCard = ({
    title,
    content,
    themeColor,
}: CollapsibleCardInfo) => {
    const [expanded, setExpanded] = useState(false);

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
        return <Text style={styles.content}>{content}</Text>;
    };

    return (
        <View style={[styles.container, styles.shadow]}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => toggleExpand()}
                style={styles.header}
            >
                <Text style={styles.title}>{title}</Text>
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
});

export default CollapsibleCard;
