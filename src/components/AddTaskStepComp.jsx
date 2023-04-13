import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

function AddTaskStepComp({title, setTaskSteps, data}) {
  const state = useSelector(state => state.rootReducer);

  const handleDelete = () => {
    setTaskSteps(prev => prev.filter(item => item.id !== data.id));
  };

  const handleCheck = () => {
    console.log(state.selectedTask.task.taskSteps);
    setTaskSteps(prev => {
      const taskStep = [...prev];
      taskStep[data.id].checked = true;
      return taskStep;
    });
  };

  const handleChangeText = txt => {
    setTaskSteps(prev => {
      const taskStep = [...prev];
      taskStep[data.id].content = txt;
      return taskStep;
    });
  };

  return (
    <Container>
      <StyledInput
        placeholder={title}
        placeholderTextColor="#C7C7CD"
        data={data}
        onChangeText={handleChangeText}
        value={data.content}
      />
      <IconContainer>
        <TouchableOpacity>
          <Icon
            name="check"
            size={24}
            color="black"
            onPress={handleCheck}
            style={{display: data.checked ? 'none' : 'flex'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="close" size={24} color="black" onPress={handleDelete} />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  margin: 5px 0;
`;

const StyledInput = styled.TextInput`
  border-radius: 15px;
  padding: 14px;
  padding-left: 20px;
  width: 100%;
  background-color: ${props =>
    props.data.checked
      ? props.theme.primaryColor
      : props.theme.itemBackgroundColor};
`;

const IconContainer = styled.View`
  position: absolute;
  right: 1px;
  padding: 14px;
  flex-direction: row;
`;

export default AddTaskStepComp;
