import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";

import viewModel from "./SceneDialoguesViewModel";
import type { SceneDialoguesItem } from "./SceneDialoguesViewModel";
import Colors from "../../consts/Colors";

const SceneDialoguesDetailsView = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "white",
            },
            headerShadowVisible: false,
            headerTintColor: viewModel.themeColor,
            headerTitleStyle: {
                fontWeight: "normal",
            },
            headerTitle: () => <NavMiddleItemView />,
            headerLeft: () => <NavLeadingItemView />,
        });
    }, []);

    const NavLeadingItemView = () => {
        const navigation = useNavigation();

        const handlePop = () => {
            navigation.goBack();
        };

        return (
            <TouchableOpacity
                onPress={handlePop}
                style={styles.navLeadingButton}
            >
                <SimpleLineIcons
                    name="arrow-left"
                    size={20}
                    color={viewModel.themeColor}
                />
            </TouchableOpacity>
        );
    };

    const NavMiddleItemView = () => {
        const route = useRoute();
        const data = route.params?.data;
        let title = "";
        if (typeof data !== "undefined") {
            const item = JSON.parse(data) as SceneDialoguesItem;
            title = item.title;
        }

        return <Text style={styles.navTitle}>{title}</Text>;
    };

    return (
        <View>
            <Text>dddddd</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: Colors.viewBackground,
    },

    navLeadingButton: {
        paddingLeft: 15,
    },

    navTitle: {
        color: viewModel.themeColor,
        paddingHorizontal: 5,
        fontSize: 15,
        fontWeight: "500",
    },

    flatListContainer: {
        paddingBottom: 40,
    },

    flatList: {
        backgroundColor: Colors.viewBackground,
    },

    flatListItem: {
        padding: 10,
    },
});

export default SceneDialoguesDetailsView;
