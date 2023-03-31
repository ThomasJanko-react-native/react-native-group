import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';

const DateContainer = styled.TouchableOpacity`
  background-color: #dcdcdc;
  border-radius: 10px;
  padding: 10px;
`;

const DateText = styled.Text`
  color: black;
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
        <DateText>{selectedDate.toLocaleDateString()}</DateText>
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
