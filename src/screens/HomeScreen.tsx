import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  const handleEntry = () => {
    navigation.navigate("EntryScreen");
  };

  const handleExit = () => {
    navigation.navigate("ExitScreen");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Visitor Management System</Text>

        <TouchableOpacity style={styles.button} onPress={handleEntry}>
          <Text style={styles.buttonText}>Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleExit}>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(199,219,245,255)',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgba(0,1,4,255)',
    marginTop: 160,
    marginBottom: 80,
  },
  button: {
    backgroundColor: 'rgba(163,160,241,255)',
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: '#fff',
  }
});

export default HomeScreen;
