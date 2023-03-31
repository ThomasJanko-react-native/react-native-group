import React from 'react';
import styled from 'styled-components/native';
import CustomProgressBar from './ProgressBar';

const TaskItem = ({task}) => {
  return (
    <Container>
      <Header>
        <Date>July 5, 2020</Date>
        <WeeksLeft>3 week left</WeeksLeft>
      </Header>
      <TitleBlock>
        <Title>Task 1</Title>
        <Subtitle>{task.taskName}</Subtitle>
      </TitleBlock>
      <CustomProgressBar />
    </Container>
  );
};

const Container = styled.View`
  width: 250px;
  height: 250px;
  background-color: #f3e6dd;
  padding: 20px;
  border-radius: 30px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const Date = styled.Text`
  color: black;
  font-size: 14px;
`;

const WeeksLeft = styled.Text`
  color: #eebc73;
  background-color: white;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 50px;
  font-weight: bold;
`;

const TitleBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25px;
  color: black;
`;

const Subtitle = styled.Text`
  font-size: 13px;
`;

export default TaskItem;
