import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text} from 'react-native';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TimeContainer = styled.TouchableOpacity`
  background-color: #dcdcdc;
  border-radius: 18px;
  padding: 18px;
  padding-left: 20px;
  opacity: 0.7;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TimeText = styled.Text`
  color: black;
  font-weight: 700;
`;
const TextTime = styled.Text`
  margin-left: 8px;
  color: black;
  font-weight: 700;
`;
function AddTaskTimeComp() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleConfirm = time => {
    setShowPicker(false);
    setSelectedTime(time);
  };

  const formattedTime = moment(selectedTime).format('h:mm A');

  return (
    <>
      <TimeContainer onPress={() => setShowPicker(true)}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Icon
            name="clockcircle"
            size={24}
            color="black"
            onPress={() => console.log('Check button pressed')}
          />
          <TextTime>Task Time</TextTime>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <TimeText>{formattedTime}</TimeText>
          <TouchableOpacity>
            <Icon
              name="right"
              size={24}
              color="black"
              onPress={() => console.log('right button pressed')}
              style={{marginLeft: 8}}
            />
          </TouchableOpacity>
        </View>
      </TimeContainer>
      {showPicker && (
        <DateTimePickerModal
          value={selectedTime}
          mode="time"
          display="clock"
          is24Hour={true}
          onChange={(event, time) => handleConfirm(time)}
        />
      )}
    </>
  );
}

export default AddTaskTimeComp;
