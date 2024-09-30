import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao meu Portfólio!</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007BFF' }]} // Cor do botão
        onPress={() => navigation.navigate('Contatos')}
      >
        <Text style={styles.buttonText}>Ver Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28A745' }]} // Outra cor para o segundo botão
        onPress={() => navigation.navigate('Habilidades')}
      >
        <Text style={styles.buttonText}>Ver Habilidades</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%', // Largura do botão
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto
  },
});

const ContatosScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meus Contatos</Text>
      <Text>LinkedIn: <Text style={{ color: 'blue' }}>linkedin.com/in/seu-perfil</Text></Text>
      <Text>GitHub: <Text style={{ color: 'blue' }}>github.com/seu-usuario</Text></Text>
    </View>
  );
};

const HabilidadesScreen = () => {
  const skills = [
    { name: 'JavaScript', level: 5 },
    { name: 'React Native', level: 4 },
    { name: 'Node.js', level: 3 },
    { name: 'Python', level: 2 },
    { name: 'Git', level: 4 },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Minhas Habilidades</Text>
      {skills.map((skill) => (
        <View key={skill.name} style={{ marginVertical: 10 }}>
          <Text>{skill.name}: {'⭐'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}</Text>
        </View>
      ))}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contatos" component={ContatosScreen} />
        <Stack.Screen name="Habilidades" component={HabilidadesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;