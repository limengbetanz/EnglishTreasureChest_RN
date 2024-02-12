import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

import PracticalOralEnglishViewModel from './PracticalOralEnglishViewModel';
import Colors from '../../consts/Colors';
import SegmentedControl from '../../shared_views/SegmentedControl';
import type { SegmentedControlProps } from '../../shared_views/SegmentedControl';

const viewModel = new PracticalOralEnglishViewModel();

const PracticalOralEnglishView = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: viewModel.themeColor,
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerTitle: () => <NavMiddleItemView/>,
            headerLeft: () => <NavLeadingItemView navigation={navigation}/>,
            headerRight: () => <NavTrailingItemView/>,
    });
  }, []);

    const [selectedOption, setSelectedOption] = useState('食物');

    return (
        <View>
            <SegmentedControl
                options={['食物', '生活', '其他']}
                optionBgColor='white' 
                selectedOptionBgColor={viewModel.themeColor}
                optiongFgColor={Colors.primaryText}
                selectedOptionFgColor='white'
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
        </View>
  )
};

const NavLeadingItemView = ({navigation}) => {
    const handlePop = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={handlePop} style={styles.navLeadingButton}>
            <SimpleLineIcons name="arrow-left" size={20} color={viewModel.themeColor} />
        </TouchableOpacity>
    )
}

const NavMiddleItemView = () => {
  return (
        <View style={styles.navMiddleItemContainer}>
            <View style={styles.navTitleContainer}>
                <SimpleLineIcons name="speech" size={20} color={viewModel.themeColor} />
                <Text style={styles.navTitleText}>{viewModel.navTitle}</Text>
            </View>
            <Text style={styles.navTitleDescription}>{viewModel.navDescription}</Text>
        </View>
  )
}

const NavTrailingItemView = () => {
  const onBackButtonTapped = () => {};

  return (
        <TouchableOpacity onPress={onBackButtonTapped} style={styles.navTrailingButton}>
            <SimpleLineIcons name="magnifier" size={20} color={viewModel.themeColor} />
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    navMiddleItemContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navTitleContainer: {
        flexDirection: 'row',
        paddingBottom: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navTitleText: {
        color: viewModel.themeColor,
        paddingHorizontal: 5,
        fontSize: 15, 
        fontWeight: '500',
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
    }
})

export default PracticalOralEnglishView;