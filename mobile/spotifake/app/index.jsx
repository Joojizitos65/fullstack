import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme === 'dark') {
          setIsDarkMode(true);
        }
      } catch (error) {
        console.log('Erro ao carregar o tema:', error);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkMode ? 'dark' : 'light';
      await AsyncStorage.setItem('theme', newTheme);
      setIsDarkMode(!isDarkMode);
    } catch (error) {
      console.log('Erro ao salvar o tema:', error);
    }
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Redirecionar para página de recuperação de senha');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <TouchableOpacity style={styles.themeSwitch} onPress={toggleTheme}>
        <Icon name={isDarkMode ? 'sun' : 'moon'} size={24} color={isDarkMode ? '#FFF' : '#000'} />
      </TouchableOpacity>

      <Text style={[styles.title, isDarkMode && styles.darkText]}>Bem-vindo de volta!</Text>
      <Text style={[styles.subtitle, isDarkMode && styles.darkText]}>Faça login na sua conta</Text>

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={isDarkMode ? '#777' : '#aaa'}
      />

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={isDarkMode ? '#777' : '#aaa'}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={handleForgotPassword}>
        <Text style={[styles.linkText, isDarkMode && styles.darkText]}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Text style={[styles.signUpText, isDarkMode && styles.darkText]}>
        Ainda não tem conta?{' '}
        <Link href="./register" style={[styles.signUpLink, isDarkMode && styles.darkLink]}>
          Cadastrar-se
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  themeSwitch: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1DB954',
    textAlign: 'center',
    marginBottom: 10,
  },
  darkText: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  darkInput: {
    backgroundColor: '#333',
    borderColor: '#555',
    color: '#fff',
  },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#1DB954',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  signUpText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  signUpLink: {
    color: '#1DB954',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
