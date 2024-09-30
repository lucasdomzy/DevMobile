import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao meu Portfólio!</Text>
      <Button
        title="Ver Contatos"
        onPress={() => navigation.navigate('Contatos')}
      />
      <Button
        title="Ver Habilidades"
        onPress={() => navigation.navigate('Habilidades')}
      />
    </View>
  );
};

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