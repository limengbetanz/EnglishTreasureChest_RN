import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    TextInput,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";

import viewModel from "./DesynonymisationViewModel";
import DesynonymisationItemView from "./DesynonymisationItemView";
import Colors from "../../consts/Colors";

const DesynonymisationSearchView = () => {
    const HeaderView = () => {
        const [input, onChangeInput] = useState("");

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        viewModel.showSearchView(false);
                        viewModel.restSearchedItems();
                        onChangeInput("");
                    }}
                >
                    <SimpleLineIcons
                        name="arrow-left"
                        size={20}
                        color={viewModel.themeColor}
                    />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeInput}
                    value={input}
                    placeholder="请输入关键字"
                    returnKeyType="search"
                    onSubmitEditing={() => viewModel.searchItems(input)}
                />

                <TouchableOpacity
                    style={styles.searchButtonContainer}
                    onPress={() => {
                        viewModel.searchItems(input);
                    }}
                >
                    <Text style={styles.searchButton}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const ItemList = observer(() => {
        const _ItemList = observer(() => {
            return (
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={viewModel.searchedItems}
                        renderItem={({ item }) => (
                            <DesynonymisationItemView
                                item={item}
                                expandedInitially={true}
                                highlightedText={viewModel.searchKeyword}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.flatListItem}
                        style={styles.flatList}
                    />
                </View>
            );
        });

        return (
            <View>{viewModel.searchedItems.length > 0 && <_ItemList />}</View>
        );
    });

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.contentContainer}>
                <HeaderView />
                <ItemList />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 15,
    },

    headerContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 5,
    },

    backButton: {
        marginRight: 10,
    },

    input: {
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: "65%",
    },

    searchButtonContainer: {
        marginLeft: 10,
    },

    searchButton: {
        fontSize: 16,
        color: viewModel.themeColor,
    },

    contentContainer: {
        flex: 1,
        backgroundColor: Colors.viewBackground,
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

export default DesynonymisationSearchView;
