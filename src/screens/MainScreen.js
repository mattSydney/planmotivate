import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Spinner } from '../components/common/Spinner';
import { connect } from 'react-redux';
import { Colors } from '../constants/Constants';
import { ButtonImage } from '../components/buttons/ButtonImage';
import ListView from '../components/ListView';

import { setAllGoals, increaseCompletionValue, deleteGoal } from '../store/actions/GoalActions'
var data = [
  {
    id: 1,
    goalDescription: "Walk 10 miles",
    goalReason: "exploit proactive functionalities",
    goalProgress: 9,
    goalCompletionValue: 10,
  },
  {
    id: 2,
    goalDescription: "Walk 10 miles",
    goalReason: "exploit proactive functionalities",
    goalProgress: 8,
    goalCompletionValue: 10,
  }
]

class MainScreen extends Component {

  
  state = {}

  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    // this.onAuthComplete(this.props);
    

  }


  componentDidMount() {
    
  }

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

  getGoals = () => {
    return 
  }

  handleGoalIncrease = (index) => {
    //let goals = [...this.props.goals]
    let goals = JSON.parse(JSON.stringify( this.props.goals ));
    goals[index].goalProgress =goals[index].goalProgress+1;
    this.props.increaseCompletionValue(goals);
  }

  handleDeleteGoal = (indexToDelete) => {
    console.log("delete goal")
      let newGoals = this.props.goals.filter((goal, index) => {
        if(index != indexToDelete) {
          return goal;
        }
      })
    this.props.deleteGoal(newGoals);
    }


  renderData() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    if (this.errorMessage != null) {
      return (<Error errorMessage={this.props.error} />)
    }
    return (<Error errorMessage={this.props.error} />)
  }

  render() {

    return (
      <ListView
        //data={this.props.goals}
        //extraData={this.props.goals}
        data={this.props.goals}
        onGoalIncreaseHandler={this.handleGoalIncrease}
        onGoalDeleteHandler = {this.handleDeleteGoal}
      />
    )
  };
}





const mapStateToProps = state => {
  console.log(state);
  // isLoggedIn: state.auth.isLoggedIn,
  return {
    goals: state.goal.goals
  }
};

const mapDispatchToProps = dispatch => {
  // method in this page => method in action
  // /console.log(bandId)
  return {
    onGetSongsForEvent: (bandId) => { dispatch(getSongsForEvent(bandId)) }
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  listView: {
    width: '100%'
  },
  searchBar: {
    marginTop: 50,
    backgroundColor: '#fff'
  }
});

//export default MainScreen;
export default connect(mapStateToProps, {setAllGoals, increaseCompletionValue, deleteGoal})(MainScreen);