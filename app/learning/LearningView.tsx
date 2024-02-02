import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native';
import LearningViewModel, { Topic } from './LearningViewModel';

const { width } = Dimensions.get('window');
const topicCardSize = (width - 50) / 3.0; 

const LearningView = () => {
    const viewModel = new LearningViewModel();
    
    return (    
        <SafeAreaView style={styles.parent}>
            <HeaderView/>

            <FlatList
                data={viewModel.topics}
                renderItem={TopicView}
                keyExtractor={topic => topic.id}
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

const TopicView = ({item}: {item: Topic}) => {
    return (
        <View style={[styles.topicCard, {backgroundColor: item.color}]}>
            <Text style={styles.topicText}>{item.title}</Text>
        </View>
    );
};

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
})

export default LearningView;
