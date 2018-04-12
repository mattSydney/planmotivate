import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, SectionList, Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

// redux
import { connect } from 'react-redux';

import { Colors } from '../constants/Constants';
import { ButtonImage } from '../components/buttons/ButtonImage';

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { addGoal, goalFormUpdate } from '../store/actions/GoalActions'

class GoalScreen extends Component {

  state = {
    goalDescriptionError: null,
    goalReasonError: null,
    goalCompletionValueError: null
  }

  submitForm = () => {

    let hasValidationError = false;
    // temp object to loop through form elements 
    // validation error state is held locally not in redux
    // Any other errors such as disk write errors are in redux
    const formElementsToCheck = [
      {
        input: this.props.goalDescription,
        errorState: 'goalDescriptionError'
      },
      {
        input: this.props.goalReason,
        errorState: 'goalReasonError'
      },
      {
        input: this.props.goalCompletionValue,
        errorState: 'goalCompletionValueError'
      },
    ]

    // check each form element for data and then populate the required
    // error field in local state from the errorState key
    formElementsToCheck.forEach((formElement) => {
      if (formElement.input === '') {
        hasValidationError = true;
        this.setState(prevState => {
          return {
            ...prevState,
            [formElement.errorState]: 'This field cannot be blank'
          }
        })
      } else {
        this.setState(prevState => {
          return {
            ...prevState,
            [formElement.errorState]: null
          }
        })

      }
    })
    if (hasValidationError) {
      return;
    }

    // add new goal
    const goal =  {
      id: this.props.goalDescription,
      goalDescription: this.props.goalDescription,
      goalReason: this.props.goalReason,
      goalProgress: 0,
      goalCompletionValue: this.props.goalCompletionValue,
    }
    this.props.addGoal(goal);    
    //this.saveKey(this.props.goals)
  }

  // async saveKey(value) {
  //   try {
  //     console.log("saving data");
  //     console.log(this.props.goals)
  //     await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(value));
  //     console.log("saving data done.");
  //   } catch (error) {
  //     console.log("Error saving data" + error);
  //   }
  // }


  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    // this.onAuthComplete(this.props);

  }

  static navigationOptions = {
    title: 'Plan/Motivate',
    headerStyle: {
      backgroundColor: Colors.PRIMARY_COLOR,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    }, headerRight: (
      <ButtonImage onPress={() => {
        this.props.navigation.dispatch({ type: 'Login' })
      }} />
    ),

  };



  render() {
    let renderButton = (
      <Button
        containerViewStyle={styles.button}
        title="SUBMIT"
        onPress={this.submitForm}
      />
    )
    return (
      <View>
        <FormLabel>Plan</FormLabel>
        <FormInput
          containerStyle={this.state.error && styles.error}
          value={this.props.goalDescription}
          onChangeText={(val) => this.props.goalFormUpdate('goalDescription', val)}
          placeholder='e.g. Smile at 10 people'
        />
        {this.state.goalDescriptionError && <FormValidationMessage>{this.state.goalDescriptionError}</FormValidationMessage>}

        <FormLabel>Motivate</FormLabel>
        <FormInput
          containerStyle={this.stateError && stylesError}
          value={this.props.goalReason}
          onChangeText={(val) => this.props.goalFormUpdate('goalReason', val)}
          placeholder='e.g. Make someone happy'
        />
        {this.state.goalReasonError && <FormValidationMessage>{this.state.goalReasonError}</FormValidationMessage>}
        <FormLabel>Steps to complete goal</FormLabel>
        <FormInput
          keyboardType='numeric'
          containerStyle={this.stateError && stylesError}
          value={this.props.goalCompletionValue}
          onChangeText={(val) => this.props.goalFormUpdate('goalCompletionValue', val)}
          placeholder='e.g. 10'
        />
        {this.state.goalCompletionValueError && <FormValidationMessage>{this.state.goalCompletionValueError}</FormValidationMessage>}
        {renderButton}
      </View>
    )
  };
}


const mapStateToProps = state => {
  // console.log(state.goal.goalDescription);
  // isLoggedIn: state.auth.isLoggedIn,
  // state.goal.
  return {
    goals: state.goal.goals,
    goalDescription: state.goal.goalDescription,
    goalReason: state.goal.goalReason,
    goalCompletionValue: state.goal.goalCompletionValue,
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  button: {
    marginTop:30
  }
});

export default connect(mapStateToProps, {goalFormUpdate,addGoal })(GoalScreen);