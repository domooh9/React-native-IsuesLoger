import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import Createstyle from '../style/Createstyle';

const Create = ({ navigation, refreshRead }) => {
  const [issueText, setIssueText] = useState('');

  const createIssue = async () => {
    try {
      const response = await axios.post('https://crudcrud.com/api/ef96cc6325ef4833bb5a05d4a7adc9b0/read', {
        text: issueText,
      });

      if (response.status === 201) {
        refreshRead(); 
        if (navigation && navigation.goBack) {
          navigation.goBack();
        } 
      } else {
        console.error('Failed to create issue. Status:', response.status);
      }
    } catch (error) {
      console.error('Error creating issue:', error.message);
    }
  };

  return ( 
     <View style={Createstyle.container}>
      <TextInput
        style={Createstyle.input}
        placeholder="Create Issue"
        value={issueText}
        onChangeText={(text) => setIssueText(text)}
      />
      <TouchableOpacity style={Createstyle.button} onPress={createIssue}>
        <Text style={Createstyle.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create