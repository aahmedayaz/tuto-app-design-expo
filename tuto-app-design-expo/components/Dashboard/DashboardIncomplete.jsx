import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Wrapper from '../Wrapper/Wrapper';
import Banner from '../../assets/dashboard/Banner-image.png';
import MonthlySummary from '../MonthlySummary/MonthlySummary';
import { useNavigation } from '@react-navigation/native';

const DashboardIncomplete = () => {
    const navigation = useNavigation();
  return (
    <Wrapper bottomNavigation={true} onDashboard={true}>
      <Image source={Banner} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />
      <MonthlySummary month="September" AttendedHours="00:00" ScheduledHours="00:00" TutorRating={0.0} ActiveStudents={0} />
      <View style={{ margin: 25, borderRadius: 10, backgroundColor: '#034BD9', paddingVertical: 25 , display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
        <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 14 }}>
          Your Profile is under review
        </Text>
        <Text style={{ width: '100%', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 14 , marginTop: -2 , marginBottom: 10}}>
          Please complete your profile
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#6C9EFF', alignItems: 'center', justifyContent: 'center', width: '70%', paddingVertical: 5, marginTop: 2, borderRadius: 10 }}
            onPress={() => navigation.navigate('DashboardComplete')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Complete Now</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}

export default DashboardIncomplete;
