/* @flow */

import React, { Component } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import ListViewItemVote from "./ListViewItemVote";

const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
	}

const ListView = (props) => {
	//console.log(props)
		return (
			<View style={styles.container}>
				<FlatList
					ItemSeparatorComponent={ FlatListItemSeparator }
					data={props.data}
					renderItem={({ item, index }) => (
						<ListViewItemVote 
							id={index}
							goalDescription={item.goalDescription} 
							goalReason={item.goalReason}
							goalProgress={item.goalProgress}
							goalCompletionValue={item.goalCompletionValue}
							onGoalIncreaseHandler={props.onGoalIncreaseHandler} 
							onGoalDeleteHandler = {props.onGoalDeleteHandler}
						/>
					)}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
  }


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%"
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: "bold",
		backgroundColor: "rgba(247,247,247,1.0)"
	}
});

export default ListView;
