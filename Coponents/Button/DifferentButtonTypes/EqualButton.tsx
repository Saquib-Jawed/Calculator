import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {evaluate} from 'mathjs';

function EqualsButton({char, action, screenText}): JSX.Element {
  const handlePress = () => {
    let mathematicalExpression = screenText.replaceAll('÷', '/').replace(/×/g, '*');
    try {
      const result = evaluate(mathematicalExpression);
      action(result.toString());
    } catch (error) {
      action('Error');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    marginVertical: 4,
    fontSize: 44,
    fontWeight: 'medium',
    color: 'black',
  },
});

export default EqualsButton;
