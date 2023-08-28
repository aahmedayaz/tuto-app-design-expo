import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import DP from '../../assets/dashboard/DP.png';
import Hamburger from '../../assets/dashboard/hamburger.png';
import backArrow from '../../assets/dashboard/back-arrow.png';
import Home from '../../assets/dashboard/home-icon.png';
import Calender from '../../assets/dashboard/calendor-icon.png';
import Bag from '../../assets/dashboard/bag-icon.png';
import Student from '../../assets/dashboard/student-icon.png';

const Wrapper = ({ bottomNavigation, onDashboard, children }) => {
  return (
    <View style={{ flex:1, overflow: 'hidden'}}>
      <View style={{ width: '100%', position: 'fixed', top: 0, height: 110}}>
        <View style={{height: 80, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 15, overflow: 'hidden'}}>
          {
            onDashboard ?
              <>
                <View style={{ display: 'flex', flexDirection: 'row', height: 100, justifyContent: 'flex-start', gap: 10 }}>
                  <Image source={DP} alt="Profile" style={{resizeMode: 'contain', width: 40 , height: 100}} />
                  <Text style={{ alignSelf: 'center', color: '#034BD9', fontWeight: 'bold', fontSize: 24 }}>Hi, Bella</Text>
                </View>
                <Image source={Hamburger} alt="Hamburger" style={{resizeMode: 'contain', width: 15 , height: 100 , paddingRight: 25}} />
              </>
              :
              <>
                <Image source={backArrow} alt="back arrow" style={{resizeMode: 'contain', width: 25 , height: 100}} />
                <Text style={{ color: '#034BD9', fontWeight: 'bold', fontSize: 30 }}>Support</Text>
                <Image source={Hamburger} alt="Hamburger" style={{resizeMode: 'contain', width: 25 , height: 100}} />
              </>
          }
        </View>
      </View>
      <ScrollView style={{marginTop: -30}}>
        {children}
      </ScrollView>
      {
        bottomNavigation &&
        <View style={{height: 60, position: 'fixed', bottom: 0, flexDirection: 'row', backgroundColor: '#034BD9', paddingHorizontal: 30, justifyContent: 'space-between' }}>
          <Image source={Home} alt="" style={{resizeMode: 'contain', width: 20 , marginTop: -10}}/>
          <Image source={Calender} alt="" style={{resizeMode: 'contain', width: 20}}/>
          <Image source={Bag} alt="" style={{resizeMode: 'contain', width: 20, marginTop: 3}}/>
          <Image source={Student} alt="" style={{resizeMode: 'contain', width: 20}}/>
        </View>
      }
    </View>
  );
}

export default Wrapper;
