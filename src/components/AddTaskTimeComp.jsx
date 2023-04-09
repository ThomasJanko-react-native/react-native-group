import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

const TimeContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.itemBackgroundColor};
  border-radius: 18px;
  padding: 18px;
  padding-left: 20px;
  opacity: 0.7;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TimeText = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 700;
`;
const TextTime = styled.Text`
  margin-left: 8px;
  color: ${props => props.theme.textColor};
  font-weight: 700;
`;

const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function AddTaskTimeComp() {
  const {t} = useTranslation();

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
        <View>
          <Icon name="clockcircle" size={24} color="black" />
          <TextTime>{t('taskTime')}</TextTime>
        </View>

        <View>
          <TimeText>{formattedTime}</TimeText>
          <TouchableOpacity>
            <Icon name="right" size={15} color="black" />
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
