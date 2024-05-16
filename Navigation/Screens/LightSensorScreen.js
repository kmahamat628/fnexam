// LightSensorScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Barometer } from 'expo-sensors';

export default function LightSensorScreen() {
  const [lightLevel, setLightLevel] = useState(null);

  useEffect(() => {
    const subscribe = Barometer.addListener(({ light }) => {
      setLightLevel(light);
    });

    return () => {
      subscribe.remove();
    };
  }, []);

  const controlSmartLights = () => {
    // Simulated behavior to control smart lights
    if (lightLevel < 50) {
      console.log('Turning on smart lights...');
    } else {
      console.log('Turning off smart lights...');
    }
  };

  const triggerNotification = () => {
    // Simulated behavior to trigger notifications
    if (lightLevel < 50 || lightLevel > 200) {
      console.log('Sending notification: Light level is abnormal');
    } else {
      console.log('Light level is normal');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Light Level: {lightLevel}</Text>
      <Button title="Control Smart Lights" onPress={controlSmartLights} />
      <Button title="Trigger Notification" onPress={triggerNotification} />
    </View>
  );
}
