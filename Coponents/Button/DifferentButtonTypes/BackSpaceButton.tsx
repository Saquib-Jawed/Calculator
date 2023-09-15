import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function Numbers({char, action, screenText}): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          action(screenText.slice(0, -1));
        }}>
        <Text style={styles.text}>{char}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    width: 67,
    height: 67,
    borderRadius: 20,
    backgroundColor: '#FF8266',
    alignSelf: 'flex-start',
    marginHorizontal: 3,
    marginBottom: 6,
  },
  text: {
    textAlign: 'center',
    marginVertical: 2,
    fontSize: 44,
    fontWeight: 'medium',
    color: 'black',
  },
});

export default Numbers;
