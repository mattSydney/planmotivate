/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Helper from '../utils/Helper';
import { Icon } from 'react-native-elements'
import ViewOverlay from './views/ViewOverlay';


const goalComplete = (goalProgress, goalCompletionValue) => {
  if (goalProgress == goalCompletionValue) {
    return (
      <ViewOverlay />
    )
  } else {
    return null
  }
};

// View to hold the item details in the FlatList
const ListViewItemVote = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => props.onGoalIncreaseHandler(props.id)}
      >
        <Icon
          name='done' />
      </ TouchableOpacity>
      <View style={styles.itemTextView}>
        <Text style={styles.itemGoalTitle}>{Helper.trim(props.goalDescription)}</Text>
        <Text style={styles.itemGoalReason}>{props.goalReason}</Text>
      </View>
      <View style={styles.itemTextCompletionView}>
        <Text style={styles.itemTextCompletion}>{props.goalProgress}/{props.goalCompletionValue}</Text>
      </View>
      {goalComplete(props.goalProgress, props.goalCompletionValue)}
      <TouchableOpacity onPress={() => props.onGoalDeleteHandler(props.id)}>
        <Icon
          name='delete' />
      </ TouchableOpacity>
    </View>
  )
};

export default ListViewItemVote;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    height: 80,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0
  },
  itemDoneImage: {
    padding: 10,
    width: 28,
    height: 28,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  itemDeleteImage: {
    padding: 10,
    width: 28,
    height: 28,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  itemTextView: {
    borderWidth: 0,
    flex: 4,
    marginLeft: 20,
  },
  itemTextCompletionView: {
    borderWidth: 0,
    flex: 1,
    marginLeft: 16,
  },
  itemTextCompletion: {
    borderWidth: 0,
    fontSize: 16
  },
  itemGoalTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  itemGoalReason: {
    fontSize: 12
  },
});
