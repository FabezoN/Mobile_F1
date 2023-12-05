import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/core';

export function DriversDetails(){
  const route = useRoute();
  const driverId = route.params?.driverId;
  return (
      <Text>{driverId}</Text>
  );
};
