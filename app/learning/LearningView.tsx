import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LearningViewModel from "./LearningViewModel";
import type { Topic } from "./LearningViewModel";

import Colors from "../consts/Colors";
import ViewName from "../consts/ViewName";

import DesynonymisationView from "./desynonymisation/DesynonymisationView";
import MyNotebookView from "./my_notebook/MyNotebookView";
import OneMinuteGrammarView from "./one_minute_grammar/OneMinuteGrammarView";
import PracticalOralEnglishView from "./practical_oral_english/PracticalOralEnglishView";
import SceneDialoguesView from "./scene_dialogues/SceneDialoguesView";
import SceneDialoguesDetailsView from "./scene_dialogues/SceneDialoguesDetailsView";

const { width } = Dimensions.get("window");
const topicCardSize = (width - 50) / 3.0;
const Stack = createStackNavigator();
const viewModel = new LearningViewModel();

const LearningView = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ViewName.Desynonymisation}
                component={DesynonymisationView}
            />
            <Stack.Screen
                name={ViewName.MyNotebook}
                component={MyNotebookView}
            />
            <Stack.Screen
                name={ViewName.OneMinuteGrammar}
                component={OneMinuteGrammarView}
            />
            <Stack.Screen
                name={ViewName.PracticalOralEnglish}
                component={PracticalOralEnglishView}
            />
            <Stack.Screen
                name={ViewName.SceneDialogues}
                component={SceneDialoguesView}
            />
            <Stack.Screen
                name={ViewName.SceneDialoguesDetails}
                component={SceneDialoguesDetailsView}
            />
        </Stack.Navigator>
    );
};

const HomeView = () => {
    return (
        <SafeAreaView style={styles.parent}>
            <HeaderView />

            <FlatList
                data={viewModel.topics}
                renderItem={({ item }) => <TopicCard item={item} />}
                keyExtractor={(topic) => topic.type}
                numColumns={3}
                contentContainerStyle={styles.gridContainer}
                style={styles.topicsContainer}
            />
        </SafeAreaView>
    );
};

const HeaderView = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require("../../assets/images/logo_small.png")}
                style={styles.headerImage}
                resizeMode="contain"
            />
            <Text style={styles.headerTitle}>英语百宝箱</Text>
        </View>
    );
};

const TopicCard = ({ item }: { item: Topic }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate(item.type)}
        >
            <View
                style={[styles.topicCard, { backgroundColor: item.themeColor }]}
            >
                <Text style={styles.topicText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "white",
    },

    headerContainer: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        alignItems: "center",
    },

    headerImage: {
        height: 28,
        width: 35,
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: "500",
        paddingLeft: 10,
    },

    gridContainer: {
        padding: 10,
    },

    topicsContainer: {
        flex: 1,
        backgroundColor: Colors.viewBackground,
    },

    topicCard: {
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        width: topicCardSize,
        height: topicCardSize - 10,
    },

    topicText: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
    },
});

export default LearningView;
