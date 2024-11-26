import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av'; // Importa o componente Video do Expo

const { width, height } = Dimensions.get('window');

const VideoComponent = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/video_comida_ratatouille.mp4')} // Caminho para o vídeo local
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width - 20,
    height: height / 3, // Ajuste a altura conforme necessário
  },
});

export default VideoComponent;
