import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../constants/Constants';
import { ButtonImage } from '../components/buttons/ButtonImage';
import ListView from '../components/ListView';
import { setAllGoals, increaseCompletionValue, deleteGoal } from '../store/actions/GoalActions'

class MainScreen extends Component {

  // settings for react-navigation
  static navigationOptions = ({ navigation }) => ({
    title: 'Plan/Motivate',
    headerStyle: {
      backgroundColor: Colors.PRIMARY_COLOR,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    }, headerRight: (
      <ButtonImage onPress={() => {
        navigation.dispatch({ type: 'Goal' })
      }} />
    ),
    headerLeft: null
  });


  // User presses button to increase the goal has been complete
  handleGoalIncrease = (index) => {
    let goals = JSON.parse(JSON.stringify(this.props.goals));
    goals[index].goalProgress = goals[index].goalProgress + 1;
    this.props.increaseCompletionValue(goals);
  }

  handleDeleteGoal = (indexToDelete) => {
    Alert.alert(
      'Are You Sure?',
      'Delete Goal',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.doDeleteGoal(indexToDelete) },
      ],
      { cancelable: false }
    )

  }

  doDeleteGoal(indexToDelete) {
    let newGoals = this.props.goals.filter((goal, index) => {
      if (index != indexToDelete) {
        return goal;
      }
    })
    this.props.deleteGoal(newGoals);
  }



  render() {
    // if no plans then show welcome view
    if (this.props.goals.length > 0) {
      return (
        <ListView
          data={this.props.goals}
          onGoalIncreaseHandler={this.handleGoalIncrease}
          onGoalDeleteHandler={this.handleDeleteGoal}
        />
      )
    } else {
      return (
        <View style={styles.helpView}>
          <Text>Create beautiful plans...</Text>
        </View>
      )
    }
  };
}

const mapStateToProps = state => {
  return {
    goals: state.goal.goals
  }
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 25,
    borderWidth: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  listView: {
    width: '100%'
  },
  searchBar: {
    marginTop: 50,
    backgroundColor: '#fff'
  },
  helpView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(mapStateToProps, { setAllGoals, increaseCompletionValue, deleteGoal })(MainScreen);