import React from "react";
import { Text, View, StyleSheet } from "react-native";

import viewModel from "./SceneDialoguesViewModel";
import type { SceneDialoguesItem } from "./SceneDialoguesViewModel";
import Colors from "../../consts/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";

const SceneDialoguesItemView = ({ item }: { item: SceneDialoguesItem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>

            <SimpleLineIcons
                name="arrow-right"
                size={12}
                color={viewModel.themeColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    title: {
        fontWeight: "normal",
        fontSize: 16,
        color: Colors.primaryText,
    },

    arrowContainer: {
        paddingLeft: 15,
    },
});

export default SceneDialoguesItemView;
