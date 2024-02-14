import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Observer } from "mobx-react-lite";

type SegmentedControlProps = {
    options: string[];

    optionBgColor: string;
    optiongFgColor: string;

    selectedOptionBgColor: string;
    selectedOptionFgColor: string;

    selectedOption: string;
    setSelectedOption: (option: string) => void;
};

const SegmentedControl = ({
    options,
    optionBgColor,
    selectedOptionBgColor,
    optiongFgColor,
    selectedOptionFgColor,
    selectedOption,
    setSelectedOption,
}: SegmentedControlProps) => {
    return (
        <Observer>
            {() => (
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
                                        : { color: optiongFgColor },
                                ]}
                            >
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </Observer>
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
