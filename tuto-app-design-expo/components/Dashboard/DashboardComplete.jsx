import React from 'react';
import { View, Text, Image } from 'react-native';
import Wrapper from '../Wrapper/Wrapper';
import MonthlySummary from '../MonthlySummary/MonthlySummary';
import Banner from '../../assets/dashboard/Banner-image.png';
import ClassBox from '../ClassBox/ClassBox';

const DashboardComplete = () => {
  const button1 = ["Clock Out"];
  
  return (
    <Wrapper bottomNavigation={true} onDashboard={true}>
      <Image source={Banner} style={{ width: '100%', height: undefined, aspectRatio: 16 / 9 }} resizeMode="cover" />
      <MonthlySummary month="September" AttendedHours="00:00" ScheduledHours="00:00" TutorRating={0.0} ActiveStudents={0} />
      <Text style={{ paddingHorizontal: 25, fontSize: 20, fontWeight: 'bold', color: '#034BD9', marginBottom: 10 }}>On Going Class</Text>
      <ClassBox allowCollapseArrow={false} upcomingText={true} buttonsTextArray={button1} />
      <Text style={{ paddingHorizontal: 25, fontSize: 20, fontWeight: 'bold', color: '#034BD9', marginBottom: 10, marginTop: 8 }}>Upcoming Classes</Text>
      <ClassBox allowCollapseArrow={true} upcomingText={true} buttonsTextArray={button1} />
      <View style={{width: '100%', height: 80}}></View>
    </Wrapper>
  );
}

export default DashboardComplete;
