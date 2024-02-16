import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type SegmentedControlProps = {
    options: string[];

    optionBgColor: string;
    optionFgColor: string;

    selectedOptionBgColor: string;
    selectedOptionFgColor: string;

    selectedOption: string;
    setSelectedOption: (option: string) => void;
};

const SegmentedControl = ({
    options,
    optionBgColor,
    selectedOptionBgColor,
    optionFgColor,
    selectedOptionFgColor,
    selectedOption,
    setSelectedOption,
}: SegmentedControlProps) => {
    return (
        <View style={styles.container}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => setSelectedOption(option)}
                    style={[
                        styles.option,
                        selectedOption === option
                            ? { backgroundColor: selectedOptionBgColor }
                            : { backgroundColor: optionBgColor },
                    ]}
                >
                    <Text
                        style={[
                            styles.label,
                            selectedOption === option
                                ? { color: selectedOptionFgColor }
                                : { color: optionFgColor },
                        ]}
                    >
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 8,
    },

    option: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },

    label: {
        fontSize: 16,
        fontWeight: "400",
    },
});

export type { SegmentedControlProps };
export default SegmentedControl;
