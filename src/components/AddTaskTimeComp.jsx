import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';

const TimeContainer = styled.TouchableOpacity`
  background-color: #dcdcdc;
  border-radius: 10px;
  padding: 10px;
`;

const TimeText = styled.Text`
  color: black;
`;

function AddTaskTimeComp() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleConfirm = time => {
    setShowPicker(false);
    setSelectedTime(time);
  };

  return (
    <>
      <TimeContainer onPress={() => setShowPicker(true)}>
        <TimeText>{selectedTime.toLocaleTimeString()}</TimeText>
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
