import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";

import MyNotebookViewModel from "./MyNotebookViewModel";
import Colors from "../../consts/Colors";

const viewModel = new MyNotebookViewModel();

const MyNotebookView = ({ navigation }) => {
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
            headerLeft: () => <NavLeadingItemView navigation={navigation} />,
            headerRight: () => <NavTrailingItemView />,
        });
    }, []);

    return (
        <View>
            <Text>MyNotebookView</Text>
        </View>
    );
};

const NavLeadingItemView = ({ navigation }) => {
    const handlePop = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={handlePop} style={styles.navLeadingButton}>
            <SimpleLineIcons
                name="arrow-left"
                size={20}
                color={viewModel.themeColor}
            />
        </TouchableOpacity>
    );
};

const NavMiddleItemView = () => {
    return (
        <View style={styles.navMiddleItemContainer}>
            <View style={styles.navTitleContainer}>
                <SimpleLineIcons
                    name="notebook"
                    size={20}
                    color={viewModel.themeColor}
                />
                <Text style={styles.navTitleText}>{viewModel.navTitle}</Text>
            </View>
            <Text style={styles.navTitleDescription}>
                {viewModel.navDescription}
            </Text>
        </View>
    );
};

const NavTrailingItemView = () => {
    const onBackButtonTapped = () => {};

    return (
        <View style={styles.navTrailingContainer}>
            <TouchableOpacity
                onPress={onBackButtonTapped}
                style={styles.navTrailingButton}
            >
                <SimpleLineIcons
                    name="magnifier"
                    size={20}
                    color={viewModel.themeColor}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onBackButtonTapped}
                style={styles.navTrailingButton}
            >
                <AntDesign name="plus" size={20} color={viewModel.themeColor} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onBackButtonTapped}
                style={styles.navTrailingButton}
            >
                <SimpleLineIcons
                    name="menu"
                    size={20}
                    color={viewModel.themeColor}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navMiddleItemContainer: {
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    navTitleContainer: {
        flexDirection: "row",
        paddingBottom: 3,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    navTitleText: {
        color: viewModel.themeColor,
        paddingHorizontal: 5,
        fontSize: 15,
        fontWeight: "500",
    },

    navTitleDescription: {
        color: Colors.primaryText,
        fontSize: 11,
    },

    navLeadingButton: {
        paddingLeft: 15,
    },

    navTrailingContainer: {
        flexDirection: "row",
        paddingRight: 15,
        justifyContent: "space-between",
    },

    navTrailingButton: {
        paddingLeft: 20,
    },
});

export default MyNotebookView;
