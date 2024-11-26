import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text, Alert } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = ({ onCapture }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Atualizado para requestCameraPermissionsAsync
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        onCapture(photo.uri);
      } catch (error) {
        Alert.alert('Error', 'Failed to take picture');
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={(ref) => setCameraRef(ref)} />
      <Button title="Tirar Fotinha" onPress={takePicture} />
    </View>
  );
};

export default CameraComponent;
