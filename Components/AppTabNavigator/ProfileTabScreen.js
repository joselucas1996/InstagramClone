import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon} from 'native-base';

class ProfileTabScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name = "person" style = {{color:tintColor}} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileTabScreen</Text>
      </View>
    );
  }
}

export default ProfileTabScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });