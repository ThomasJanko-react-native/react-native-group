// import React from 'react';
// import {View, StyleSheet, Text, TextInput} from 'react-native';
// import AddTaskDateComp from '../components/AddTaskDateComp';
// import AddTaskNameComp from '../components/AddTaskNameComp';
// import AddTaskStepComp from '../components/AddTaskStepComp';
// import AddTaskTimeComp from '../components/AddTaskTimeComp';
// import CancelAndAddTaskBtns from '../components/CancelAndAddTaskBtns';

// import styled from 'styled-components/native';
// import AddNewStepBtn from '../components/AddNewStepBtn';
// import { useTranslation } from 'react-i18next';

// function AddNewTaskScreen() {

//   const {t} = useTranslation();

//   return (
//     <Container>
//       <Title>{t('taskTitle')} </Title>
//       <Spacer height={60} />
//       <AddTaskNameComp />
//       <Spacer height={40} />
//       <AddTaskStepComp title={t('taskName')}  />
//       <Spacer height={10} />

//       <AddNewStepBtn />
//       <Spacer height={30} />
//       <AddTaskTimeComp />
//       <Spacer height={30} />
//       <AddTaskDateComp />
//       <Spacer height={90} />
//       <CancelAndAddTaskBtns />
//     </Container>
//   );
// }

// const Container = styled.View`
//   margin: 20px;
//   padding: 20px;
// `;

// const Title = styled.Text`
//   font-weight: bold;
//   font-size: 24px;
//   text-align: center;
//   color: ${props => props.theme.textColor};
// `;

// const Spacer = styled.View`
//   height: ${props => props.height}px;
// `;

// export default AddNewTaskScreen;

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  PermissionsAndroid,
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

function AddNewTaskScreen() {
  const {t} = useTranslation();
  const [image, setImage] = useState(null);

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
      <Spacer height={90} />

      {image && <Image source={{uri: image}} style={{width: 25, height: 25}} />}
      <Button title="ajouter une photo" onPress={takePicture} />

      <Spacer height={30} />
      <CancelAndAddTaskBtns />
    </Container>
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

export default AddNewTaskScreen;
