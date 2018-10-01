import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon} from 'native-base';

class AddMediaTabScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = "ios-add-circle" style = {{color:tintColor}} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AddMediaTabScreen</Text>
      </View>
    );
  }
}

export default AddMediaTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});