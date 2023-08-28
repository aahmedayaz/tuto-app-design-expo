import React from 'react';
import { View, Text, Image } from 'react-native';
import ActiveStudent from '../../assets/monthlysummary/Active-Student-icon.png';
import AttendedHour from '../../assets/monthlysummary/Attended-hour-icon.png';
import ScheduledHour from '../../assets/monthlysummary/Scheduled-Hour-icon.png';
import TutorRatings from '../../assets/monthlysummary/Tutor-Rating-icon.png';

const MonthlySummary = ({ month, AttendedHours, ScheduledHours, ActiveStudents, TutorRating }) => {
  return (
    <View style={{ marginHorizontal: 25, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: 'rgba(238, 237, 237, 0.71)', borderRadius: 10, marginBottom: 15, shadowColor: 'rgba(0, 0, 0, 0.75)', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.5 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#034BD9' }}>Monthly Summary</Text>
      <Text style={{ fontSize: 12 }}>{month}</Text>
      <View style={{ height: 75, width: '100%', flexDirection: 'row', marginTop: 15 }}>
        {/* Attended Hours */}
        <View style={{ flexDirection: 'row', gap: 10, marginRight: 20, justifyContent: 'center' , alignItems: 'center', display: 'flex' }}>
          <Image source={AttendedHour} style={{ width: 20 , resizeMode: 'contain', alignSelf: 'center'  }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 12 }}>Attended Hours</Text>
            <Text style={{ fontSize: 12 }}>{AttendedHours}</Text>
          </View>
        </View>

        {/* Active Students */}
        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' , alignItems: 'center', display: 'flex' }}>
          <Image source={ActiveStudent} style={{ width: 18 , resizeMode: 'contain' ,alignSelf: 'center' }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 12 }}>Active Students</Text>
            <Text style={{ fontSize: 12 }}>{ActiveStudents}</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', height: 75, flexDirection: 'row' }}>
        {/* Scheduled Hour */}
        <View style={{ flexDirection: 'row', gap: 10, marginRight: 20 , justifyContent: 'center' , alignItems: 'center', display: 'flex' }}>
          <Image source={ScheduledHour} style={{ width: 20 , resizeMode: 'contain', alignSelf: 'center'  }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 12 }}>Scheduled Hours</Text>
            <Text style={{ fontSize: 12 }}>{ScheduledHours}</Text>
          </View>
        </View>

        {/* Tutor Rating */}
        <View style={{ flexDirection: 'row', gap: 10 , justifyContent: 'center' , alignItems: 'center', display: 'flex'}}>
          <Image source={TutorRatings} style={{ width: 20 , resizeMode: 'contain', alignSelf: 'center' }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 12 }}>Tutor Ratings</Text>
            <Text style={{ fontSize: 12 }}>{TutorRating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MonthlySummary;
