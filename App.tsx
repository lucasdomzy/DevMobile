import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  navigation: any
}

// Tela Home Principal
function HomeScreen ({ navigation } : Props){
  return(
    <View style ={{
      flex:1,
      backgroundColor:'pink',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style = {{color:'yellow'}}>
        Yamelyin
      </Text>
      <Button
        title='Próximo doidão'
        onPress={() => navigation.navigate('Tela2')}
      />
    </View>
  );
}

// Próxima tela

function Tela2 ({ navigation } : Props){
  return(
    <View style ={{
      flex:1,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style = {{
        color:'white'
      }}>
        Yzmod
      </Text>
      <Button
        title='Voltar pro doidão anterior'
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

// Configurando as rotas no Stack Navigator

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Tela2' component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
