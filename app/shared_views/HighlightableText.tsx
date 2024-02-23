import React from "react";
import { Text, View, StyleProp, ViewStyle } from "react-native";

type HighlightableTextInfo = {
    text: string;
    textStyles: StyleProp<ViewStyle>;
    highlightedText: string;
    highlightedTextStyles: StyleProp<ViewStyle>;
};

const HighlightableText = ({
    text,
    textStyles,
    highlightedText,
    highlightedTextStyles,
}: HighlightableTextInfo) => {
    const regex = new RegExp(`(${highlightedText})`, "gi");
    const parts = text.split(regex);

    return (
        <Text>
            {parts.map((part, index) => (
                <Text
                    key={index}
                    style={
                        part?.toLowerCase() === highlightedText?.toLowerCase()
                            ? highlightedTextStyles
                            : textStyles
                    }
                >
                    {part}
                </Text>
            ))}
        </Text>
    );
};

export type { HighlightableTextInfo };
export default HighlightableText;
