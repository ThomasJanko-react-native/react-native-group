import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text} from 'react-native';

const DateContainer = styled.TouchableOpacity`
  background-color: #dcdcdc;
  border-radius: 18px;
  padding: 18px;
  padding-left: 20px;
  opacity: 0.7;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DateTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  color: black;
  font-weight: 700;
`;

function AddTaskDateComp() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = date => {
    setShowPicker(false);
    setSelectedDate(date);
  };

  return (
    <>
      <DateContainer onPress={() => setShowPicker(true)}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Icon
            name="calendar"
            size={24}
            color="black"
            onPress={() => console.log('calendar button pressed')}
          />
          <Text style={{marginLeft: 8}}>Task Date</Text>
        </View>
        <DateTextContainer>
          <DateText>{selectedDate.toLocaleDateString()}</DateText>

          <Icon
            name="right"
            size={24}
            color="black"
            onPress={() => console.log('right button pressed')}
          />
        </DateTextContainer>
      </DateContainer>
      {showPicker && (
        <DateTimePickerModal
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={(event, date) => handleConfirm(date)}
          style={{backgroundColor: '#EEBC73'}}
          textColor="#FFFFFF"
        />
      )}
    </>
  );
}

export default AddTaskDateComp;