import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import AddTaskDateComp from '../components/AddTaskDateComp';
import AddTaskNameComp from '../components/AddTaskNameComp';
import AddTaskStepComp from '../components/AddTaskStepComp';
import AddTaskTimeComp from '../components/AddTaskTimeComp';
import CancelAndAddTaskBtns from '../components/CancelAndAddTaskBtns';
import AddNewStepBtn from '../components/AddNewStepBtn';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import ImageCropPicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

function AddNewTaskScreen() {
  const {t} = useTranslation();
  const [image, setImage] = useState(null);
  const theme = useSelector(state => state);

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission to take pictures.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const takePicture = async () => {
    await requestCameraPermission(); // Request camera permission before accessing camera
    ImageCropPicker.openCamera({
      mediaType: 'photo',
      compressImageQuality: 0.5,
    }).then(response => {
      if (!response.didCancel && !response.error) {
        setImage(response.path);
      }
    });
  };

  return (
    <ScrollView>
      <Container>
        <Title>{t('taskTitle')}</Title>
        <Spacer height={60} />
        <AddTaskNameComp />
        <Spacer height={40} />
        <AddTaskStepComp title={t('taskName')} />
        <Spacer height={10} />

        <AddNewStepBtn />
        <Spacer height={30} />
        <AddTaskTimeComp />
        <Spacer height={30} />
        <AddTaskDateComp />
        <Spacer height={20} />

        {image && <ImagePhoto source={{uri: image}} />}
        <TouchableOpacityCamera>
          <Icon
            name="camera"
            size={30}
            color={theme == 'dark' ? 'white' : 'black'}
            onPress={takePicture}
          />
        </TouchableOpacityCamera>

        <Spacer height={30} />
        <CancelAndAddTaskBtns />
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  margin: 20px;
  padding: 20px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.textColor};
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const ImagePhoto = styled.Image`
  align-self: center;
  border-radius: 10px;
  width: 140;
  height: 100;
  margin-bottom: 20px;
`;

const TouchableOpacityCamera = styled.TouchableOpacity`
  border-radius: 50px;
  align-self: center;
  margin-bottom: 20px;
`;

export default AddNewTaskScreen;
