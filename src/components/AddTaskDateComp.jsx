import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

const DateContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.itemBackgroundColor};
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
  color: ${props => props.theme.textColor}
  font-weight: 700;
`;

const TextDate = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.textColor}
  font-weight: 700;
`;

const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function AddTaskDateComp() {
  const {t} = useTranslation();

  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = date => {
    setShowPicker(false);
    setSelectedDate(date);
  };

  return (
    <>
      <DateContainer onPress={() => setShowPicker(true)}>
        <View>
          <Icon name="calendar" size={24} color="black" />
          <TextDate>{t('taskDate')}</TextDate>
        </View>
        <DateTextContainer>
          <DateText>{selectedDate.toLocaleDateString()}</DateText>
          <TouchableOpacity>
            <Icon name="right" size={15} color="black" />
          </TouchableOpacity>
        </DateTextContainer>
      </DateContainer>
      {showPicker && (
        <DateTimePickerModal
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={(event, date) => handleConfirm(date)}
        />
      )}
    </>
  );
}

export default AddTaskDateComp;
