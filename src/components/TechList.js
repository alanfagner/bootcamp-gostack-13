import React, {useState} from 'react';
import {FlatList, View, TextInput, TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

export default function components() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        keyExtractor={tech => tech}
        data={techs}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <TextInput
        value={newTech}
        onChangeText={setNewTech}
        testID="tech-input"
      />

      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
