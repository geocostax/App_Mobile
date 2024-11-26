import React, {useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text  } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import Texto from './src/componentes/Texto';

import Produto from "./src/telas/produtos/";
import mock from "./src/mocks/produto";


import mock2 from "./src/mocks/prod";
import Prod from "./src/telas/prod";


import mock1 from "./src/mocks/sobre";
import Sobre from "./src/telas/Sobre";

import mock3 from "./src/mocks/coracao";
import Desejo from "./src/telas/Desejo";

// camerazinha
import { Camera } from 'expo-camera'; 

//Audio
import { Audio } from 'expo-av';

//video 
import { Video } from 'expo-av';

//lógica para camera 

//lógica para o video
function TelaVideo() {
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar a reprodução
  const videoRef = useRef(null); // Referência para o componente de vídeo

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync(); // Pausa o vídeo
      } else {
        await videoRef.current.playAsync(); // Continua a reprodução do vídeo
      }
      setIsPlaying(!isPlaying); // Alterna o estado
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={videoRef} // Atribui a referência ao componente de vídeo
        source={require('./assets/video_comida_ratatouille.mp4')} 
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ width: '100%', height: '100%' }}
      />
      <TouchableOpacity 
        onPress={togglePlayPause} 
        style={{
          position: 'absolute', 
          bottom: 30, 
          alignSelf: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: 10, 
          borderRadius: 5
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


// Lógica para o áudio

function MenuAudio() {

  //Áudio para o APP
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/wakawaka.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
    <Texto>🎧 Liga/Desliga</Texto>
  </TouchableOpacity>
}


// function menu kit
function MenuKit() {
  return <View>
    <Produto {...mock} />
  </View>
}

//function para a tela sobre
function MenuSobre() {
  return <View>
    <Sobre {...mock1} />
  </View>
}

//function menu kit
function MenuProd() {
  return <View>
    <Prod {...mock2} />
  </View>
}


function MenuDesejo() {
  return <View>
    <Desejo {...mock3} />
  </View>
}


const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator screenOptions={
    ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Kit") {
          iconName = focused
            ? 'basket'
            : 'basket-outline';
        } else if (route.name === "Sobre Nós") {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        } else if (route.name === "Vídeo") {
          iconName = focused 
          ? 'videocam' 
          : 'videocam-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,

    })
  }>
    <Tab.Screen name="Kit" component={MenuKit} />
    <Tab.Screen name="Sobre Nós" component={MenuSobre} />
    <Tab.Screen name="Produtos" component={MenuProd} />
    <Tab.Screen name="Lista de Desejos" component={MenuDesejo} />
    <Tab.Screen name="Vídeo" component={TelaVideo} />
    
  </Tab.Navigator>
}

export default function App() {
  //carrega a fonte do projeto
  const [fonteCarregada] = useFonts({
    SpaceGRegular: SpaceGrotesk_300Light,
    SpaceGBold: SpaceGrotesk_700Bold,
  });

  //checa se carregou as fontes
  if (!fonteCarregada) {
    return <View />;
  }

  return <NavigationContainer>
    <TabsMenu />
    <MenuAudio />
  </NavigationContainer>;
}