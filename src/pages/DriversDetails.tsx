import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { driverImagesMapping } from '../components/DriverList.constants';


export function DriversDetails() {
  const route = useRoute();
  const driverId = route.params?.driverId;
  const [driverDetails, setDriverDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchDriverDetails = async () => {
      try {
        setLoading(true);

        // Faire la requête à l'API avec le paramètre driverId
        const response = await fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`);
        const data = await response.json();

        // Mettre à jour l'état avec les détails du pilote
        setDriverDetails(data.MRData.DriverTable.Drivers[0]);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du pilote :', error);
      } finally {
        setLoading(false);
      }
    };

    if (driverId) {
      fetchDriverDetails();
    }
  }, [driverId]);

  return (
    <View>
      <Text>{driverId}</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {driverDetails && (
        <React.Fragment>
          <Text>{driverDetails.givenName} {driverDetails.familyName}</Text>
          <Text>{driverDetails.dateOfBirth}</Text>
          <Text>{moment().diff(driverDetails.dateOfBirth, 'years')}</Text>
          <Image source={driverImagesMapping[driverId]} />
        </React.Fragment>
      )}
    </View>
  );
}
