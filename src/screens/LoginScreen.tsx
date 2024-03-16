import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleLogin = () => {
        if (email && password) {
            navigation.navigate('HomeScreen' as never);
        } else {
            Alert.alert('Error ⚠️','Enter Email & Password');
        }
    }

  return (
    <>
        <StatusBar  barStyle="dark-content" />
        <View style={styles.container}>
            <Text style={styles.title}>Visitor Management System</Text>
            <View>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter Email or User ID"
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
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
    label: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgba(69,73,82,255)',
    },
    inputField: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'rgba(163,160,241,255)',
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        height: 50,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "500",
        color: '#fff',
    }
});

export default LoginScreen;
