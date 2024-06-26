import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";

import viewModel from "./PracticalOralEnglishViewModel";
import SearchView from "./PracticalOralEnglishItemSearchView";
import Colors from "../../consts/Colors";
import SegmentedControl from "../../shared_views/SegmentedControl";
import PracticalOralEnglishItemView from "./PracticalOralEnglishItemView";

const PracticalOralEnglishView = ({ navigation }) => {
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

    useEffect(() => {
        viewModel.getItems();
    }, [viewModel.allItems]);

    const ModalSearchView = observer(() => {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={viewModel.searchViewPresented}
                onRequestClose={() => {
                    viewModel.showSearchView(false);
                }}
            >
                <SearchView />
            </Modal>
        );
    });

    return (
        <View style={styles.parent}>
            <SegmentedControlView />
            <ItemList />
            <ModalSearchView />
        </View>
    );
};

const SegmentedControlView = observer(() => {
    return (
        <View>
            <SegmentedControl
                options={viewModel.options}
                optionBgColor="white"
                selectedOptionBgColor={viewModel.themeColor}
                optionFgColor={Colors.primaryText}
                selectedOptionFgColor="white"
                selectedOption={viewModel.selectedOption}
                setSelectedOption={viewModel.selectOption}
            />
        </View>
    );
});

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
                    name="speech"
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
    const onSearchButtonTapped = () => {
        viewModel.showSearchView(true);
    };

    return (
        <TouchableOpacity
            onPress={onSearchButtonTapped}
            style={styles.navTrailingButton}
        >
            <SimpleLineIcons
                name="magnifier"
                size={20}
                color={viewModel.themeColor}
            />
        </TouchableOpacity>
    );
};

const ItemList = observer(() => {
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={viewModel.displayedItems}
                renderItem={({ item }) => (
                    <PracticalOralEnglishItemView
                        item={item}
                        expandedInitially={false}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListItem}
                style={styles.flatList}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: Colors.viewBackground,
    },

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

    navTrailingButton: {
        paddingRight: 15,
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

export default PracticalOralEnglishView;
