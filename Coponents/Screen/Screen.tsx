import {StyleSheet, Text, View} from 'react-native';

function Screen({screenText}): JSX.Element {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{screenText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFDDD6',
    flex: 2,
    textAlign: 'justify',
  },
  text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Screen;
