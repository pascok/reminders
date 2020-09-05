import React, {useState} from 'react';
import {Button, Text, StyleSheet, Platform, TextInput, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function CreateTaskComponent({navigation}) {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onCreateTaskPress = () => {
    navigation.navigate('Home');
  };

  return (
    <>
      <Text>Create a task</Text>
      <Text>Title: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeTitle(text)}
        value={title}
      />
      <Text>Description: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeDescription(text)}
        value={description}
      />
      <Text>Date: </Text>
      <View>
        <View>
          <Button onPress={showDatepicker} title="Select date" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Select time" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Button title="Create Task" onPress={onCreateTaskPress} />
    </>
  );
}

// <>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Login')}>
//         <Text>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => {}}>
//         <Text>Register</Text>
//       </TouchableOpacity>
//       {/* {firebase.auth().currentUser ? } */}
//     </>

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    margin: 10,
    padding: 10,
  },
});

export default CreateTaskComponent;
