import React from "react";
import { View, Text } from "react-native";
import Svg, { Path, RNSVGPath } from "react-native-svg";

type ChatBubbleProps = {
    content: string;
    direction: "left" | "right";
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ content, direction }) => {
    const isLeft = direction === "left";
    const bubbleStyle = isLeft
        ? { alignSelf: "flex-start" }
        : { alignSelf: "flex-end" };

    const arrowPoints = isLeft ? "10,0 10,10 0,10" : "0,0 0,10 10,5";

    return (
        <View style={[styles.bubble, bubbleStyle]}>
            <View style={styles.message}>
                <Text>{content}</Text>
            </View>
            <Svg
                height="10"
                width="10"
                style={
                    isLeft
                        ? [styles.arrow, { right: -5 }]
                        : [styles.arrow, { left: -5 }]
                }
            >
                <Path
                    d={`M ${isLeft ? 10 : 0} 0 L ${isLeft ? 0 : 10} 5 L ${
                        isLeft ? 10 : 0
                    } 10 Z`}
                    fill={isLeft ? "white" : "blue"}
                />
            </Svg>
        </View>
    );
};

const styles = {
    bubble: {
        backgroundColor: "lightgrey",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        maxWidth: "80%",
        flexDirection: "row",
        alignItems: "flex-end",
    },

    message: {
        flex: 1,
        paddingRight: 10,
    },

    arrow: {
        position: "absolute",
        bottom: 0,
    },
};

export default ChatBubble;
