import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Ionicons, FontAwesome6, MaterialCommunityIcons} from '@expo/vector-icons';

import LearningViewModel, { TopicType } from './LearningViewModel';
import type { Topic } from "./LearningViewModel";

import DesynonymisationView from './desynonymisation/DesynonymisationView';
import MyNotebookView from './my_notebook/MyNotebookView';
import OneMinuteGrammarView from './one_minute_grammar/OneMinuteGrammarView';
import PracticalOralEnglishView from './practical_oral_english/PracticalOralEnglishView';
import SceneDialoguesView from './scene_dialogues/SceneDialoguesView';

const { width } = Dimensions.get('window');
const topicCardSize = (width - 50) / 3.0; 
const Stack = createStackNavigator();
const viewModel = new LearningViewModel();

const LearningView = () => {
    const desynonymisationTopic: Topic = viewModel.getTopicFromType(TopicType.Desynonymisation);
    const myNotebookTopic: Topic = viewModel.getTopicFromType(TopicType.MyNotebook);
    const oneMinuteGrammarTopic: Topic = viewModel.getTopicFromType(TopicType.OneMinuteGrammar);
    const practicalOralEnglishTopic: Topic = viewModel.getTopicFromType(TopicType.PracticalOralEnglish);
    const sceneDialoguesTopic: Topic = viewModel.getTopicFromType(TopicType.SceneDialogues);

    return (
        <Stack.Navigator>
            <Stack.Screen name="TopicContainer" component={TopicContainer} options={{headerShown: false}}/>
            <Stack.Screen name={TopicType.Desynonymisation} component={DesynonymisationView} />
            <Stack.Screen name={TopicType.MyNotebook} component={MyNotebookView} />
            <Stack.Screen name={TopicType.OneMinuteGrammar} component={OneMinuteGrammarView} />
            <Stack.Screen name={TopicType.PracticalOralEnglish}
                          component={PracticalOralEnglishView}
                          options={{
                            headerStyle: {
                              backgroundColor: 'white',
                            },
                            headerTintColor: 'red',
                            headerTitleStyle: {
                              fontWeight: 'normal',
                            },
                            headerTitle: () => <NavMiddelItemView topic={practicalOralEnglishTopic} />,
                            headerLeft: () => <NavLeadingItemView topic={practicalOralEnglishTopic} />,
                            headerRight: () => <NavLeadingItemView topic={practicalOralEnglishTopic} />,
                          }} />
            <Stack.Screen name={TopicType.SceneDialogues} component={SceneDialoguesView} />
        </Stack.Navigator>
    );
}

const TopicContainer = () => {
    return (    
        <SafeAreaView style={styles.parent}>
            <HeaderView/>

            <FlatList
                data={viewModel.topics}
                renderItem={({item}) => <TopicCard item={item}/>}
                keyExtractor={topic => topic.type}
                numColumns={3}
                contentContainerStyle={styles.gridContainer}
                style={styles.topicsContainer}
            />

        </SafeAreaView>
      );
}

const HeaderView = () => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../../assets/images/logo_small.png')} style={styles.headerImage} resizeMode="contain" />
            <Text style={ styles.headerTitle }>英语百宝箱</Text>
        </View>
    );
};

const TopicCard = ({item}: {item: Topic}) => {
    const navigation = useNavigation();
    console.log(`${item.type}`);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(item.type)}>
            <View style={[styles.topicCard, {backgroundColor: item.themeColor}]}>
                <Text style={styles.topicText}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    );
};

const NavLeadingItemView = ({topic}: {topic: Topic}) => {
    const onBackButtonTapped = () => {};

    return (
        <TouchableOpacity onPress={onBackButtonTapped} style={styles.navLeadingButton}>
            <Ionicons name="chevron-back" size={24} color={topic.themeColor} />
        </TouchableOpacity>
    )
}

const NavMiddelItemView = ({topic}: {topic: Topic}) => {
    return (
        <View style={styles.navTitleContainer}>
            <View style={styles.navTitle}>
                <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color={topic.themeColor} />
                <Text>{topic.name}</Text>
            </View>
            <Text>{topic.description}</Text>
        </View>
    )
}

const NavTrailingItemView = ({topic}: {topic: Topic}) => {
    const onBackButtonTapped = () => {};

    return (
        <TouchableOpacity onPress={onBackButtonTapped} style={styles.navTrailingButton}>
            <Entypo name="magnifying-glass" size={24} color={topic.themeColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'white',
    },

    headerContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    headerImage: {
        height: 28,
        width: 35,
    },

    headerTitle: {
        fontSize: 16, 
        fontWeight: '500',
        paddingLeft: 10,
    },

    gridContainer: {
        padding: 10,
    },
    
    topicsContainer: {
        flex: 1,
        backgroundColor: 'ghostwhite',
    },

    topicCard: {
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: topicCardSize,
        height: topicCardSize - 10,
    },

    topicText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },

    navTitleContainer: {
        flexDirection: 'column',
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navTitle: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navLeadingButton: {
        paddingLeft: 10,
    },

    navTrailingButton: {
        paddingRight: 10,
    }
})

export default LearningView;
