import React, {useState} from 'react';
import {addTodo, remove_todo} from '../redux/actions/todo';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.rootReducer);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = event => {
    setNewTodo(event);
  };

  const handleNewTodoSubmit = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleTodoDelete = todoToDelete => {
    // const newTodos = todos.filter((todo) => todo !== todoToDelete);
    // setTodos(newTodos);
    dispatch(remove_todo(todoToDelete));
  };

  return (
    <Container>
      <Title>Ma liste de tâches</Title>
      <Form>
        <Label>Nouvelle tâche :</Label>
        <Input value={newTodo} onChangeText={handleNewTodoChange} />
        <Button title="Ajouter" onPress={handleNewTodoSubmit} />
      </Form>
      <List
        data={todos}
        keyExtractor={todo => todo}
        renderItem={({item: todo}) => (
          <Item>
            <TodoText>{todo}</TodoText>
            <DeleteButton
              title="Supprimer"
              onPress={() => handleTodoDelete(todo)}
            />
          </Item>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Form = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-right: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.Button``;

const List = styled.FlatList``;

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoText = styled.Text`
  flex: 1;
  font-size: 16px;
`;
const DeleteButton = styled.Button``;

export default TodoList;
