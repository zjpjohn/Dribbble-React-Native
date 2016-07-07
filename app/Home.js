import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to HOME   HOME  HOME!
            </Text>
            <Text style={styles.instructions}>
              To get HOME   HOME  HOME
            </Text>
            <Text style={styles.instructions}>
              HOME   HOME  HOME
            </Text>
          </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});