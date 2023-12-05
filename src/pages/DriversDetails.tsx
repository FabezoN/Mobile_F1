import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { driverImagesMapping } from '../components/DriverList.constants';


export function DriversDetails() {
  const route = useRoute();
  const driverId = route.params?.driverId;
  const position = route.params?.position;
  const constructors = route.params?.constructors;
  const points = route.params?.points;
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
    <View style={{ backgroundColor: 'black' }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {driverDetails && (
        <><React.Fragment>
          <Text style={{ fontWeight: '700', fontSize: 34, color: 'white', marginTop: 110, paddingLeft: 26 }}>{driverDetails.familyName}</Text>
          <Text style={{ fontWeight: '700', fontSize: 120, color: 'white', paddingLeft: 26, paddingTop: 110, lineHeight: 25 }}>{position}</Text>
          <Image style={{ width: 400, height: 400, position: 'relative', bottom: 178, alignItems: 'center', justifyContent: 'center' }} source={driverImagesMapping[driverId]} />
        </React.Fragment>


        <View style={{ backgroundColor: '#1B1A19', height: 354, top: 500, position: 'absolute', width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 25, lineHeight: 21, top: 43, left: 26, width: 75, height: 30, justifyContent: 'center', alignItems: 'center' }}>{driverDetails.givenName}</Text>
          <Text style={{color: 'white', textAlign: 'center', top: 36, position: 'absolute', right: 26, fontWeight: '700', fontSize: 25, width: 90}}>{points} PTS</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 40, lineHeight: 25, paddingLeft: 26, paddingTop: 50 }}>{driverDetails.familyName}</Text>
          <Text style={{ color: '#CCCDD7', paddingLeft: 26, fontWeight: '500', fontSize: 14, paddingTop: 10 }}>{moment().diff(driverDetails.dateOfBirth, 'years')} ans</Text>
          <Text style={{ color: '#CCCDD7', paddingLeft: 26, fontWeight: '500', fontSize: 14, paddingTop: 10 }}>{constructors}</Text>
        </View></>
      )}
    </View>
  );
}
