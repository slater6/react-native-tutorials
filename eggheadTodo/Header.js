import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

export default class Header extends Component {
  render(){
    return (
      <View style={styles.header}>
        <TextInput 
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          style={styles.input}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
        />

       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal:16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center"
  },
  input: {
    flex:1
  }
})