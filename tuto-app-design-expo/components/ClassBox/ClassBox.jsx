import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ClassDP from '../../assets/dashboard/class-dp-image.png';
import CollapseArrow from '../../assets/dashboard/collapse-arrow.png';

const ClassBox = ({ classBoxType, allowCollapseArrow, upcomingText, buttonsTextArray }) => {
  const [slide, setSlide] = useState(false);

  const collapse = () => {
    setSlide(!slide);
  };

  return (
    <View style={{ marginHorizontal: 25, overflow: 'hidden', borderWidth: 1, borderColor: '#505050bb', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 2, shadowOffset: { width: 0, height: 1 }}}>
      {slide ? (
        <>
          <View style={{ height: 70 , displayy: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , width: '100%' , flexDirection: 'row'}}>
            <View style={{}}>
              <Image source={ClassDP} style={{ height: '100%' ,width: 50 , resizeMode: 'contain' }} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{ fontSize: 13, fontWeight: '600' }}>Saira ( SOU University )</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 10 }}>Class Attending Hour</Text>
                <Text style={{ color: '#034BD9', fontWeight: 'bold', fontSize: 10, marginLeft: 5 }}>00:45</Text>
            </View>
          </View>
            {allowCollapseArrow ? (
              <TouchableOpacity style={{ backgroundColor: '#034BD9', width: 30, height: 30, marginTop: -20, borderRadius: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', position: 'relative' , marginRight: 16}} onPress={collapse}>
                <Image source={CollapseArrow} style={{width: '40%' }} />
                <Text style={{ fontSize: 9, color: '#414141', position: 'absolute', bottom: -25, right: 0 , width: 100}}>August 10th, 2023 / 09:00</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', marginTop: -25 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#034BD9' }}>Online</Text>
                <Text style={{ fontSize: 9, color: '#414141' }}>August 10th, 2023</Text>
                <Text style={{ fontSize: 9, color: '#414141' }}>09:00</Text>
              </View>
            )}
          </View>
          {upcomingText && (
            <View style={{ display: 'flex', flexDirection: 'column', fontSize: 10, fontWeight: 'bold', width: '100%', marginLeft: 73 }}>
              <Text style={{ color: '#034BD9' }}>Amiruddinr Anwar</Text>
              <Text style={{ color: '#034BD9' }}>Student# 5180896</Text>
            </View>
          )}
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 15, marginLeft: 10 , marginBottom: 10, gap: 2 }}>
            {buttonsTextArray.map((buttonText, index) => (
              <TouchableOpacity key={index} style={{ paddingVertical: 3, paddingHorizontal: 10, backgroundColor: '#BFD7FF', borderRadius: 5}}>
                <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>{buttonText}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, overflow: 'hidden', paddingRight: 15 }}>
            <View style={{ height: '100%', paddingVertical: 5 , marginHorizontal: -15}}>
              <Image source={ClassDP} style={{ height: '100%', resizeMode: 'contain' }} />
            </View>
            <View style={{ marginLeft: -5 }}>
              <Text style={{ fontSize: 13, fontWeight: '600' }}>Saira ( SOU University )</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 10 }}>Class Attending Hour</Text>
                <Text style={{ color: '#034BD9', fontWeight: 'bold', fontSize: 10, marginLeft: 5 }}>00:45</Text>
              </View>
            </View>
            {allowCollapseArrow ? (
              <TouchableOpacity style={{ backgroundColor: '#034BD9', width: 30, height: 30, marginTop: -20, borderRadius: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', position: 'relative' }} onPress={collapse}>
                <Image source={CollapseArrow} style={{ width: '40%'}} />
                <Text style={{ fontSize: 9, color: '#414141', position: 'absolute', bottom: -25 , right: -15, width: 100}}>August 10th, 2023 / 09:00</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', marginTop: -15 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#034BD9' }}>Online</Text>
                <Text style={{ fontSize: 9, color: '#414141' }}>August 10th, 2023</Text>
                <Text style={{ fontSize: 9, color: '#414141' }}>09:00</Text>
              </View>
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default ClassBox;
