import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Createstyle from '../style/Createstyle';

const Create = ({ navigation, refreshRead }) => {
  const [title, setTitle] = useState('');
  const [issueText, setIssueText] = useState('');

  const fetchIssues = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating');
      if (response.status === 200) {
        // Set the fetched issues to the state
        // This assumes that 'setIssues' is available in the 'Create' component
        setIssues(response.data);
      } else {
        console.error('Failed to fetch issues. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching issues:', error.message);
    }
  };

  useEffect(() => {
    // This effect runs whenever the 'refreshRead' prop changes (i.e., when the 'Read' component needs to refresh)
    if (refreshRead) {
      // Refresh the 'Read' component data
      fetchIssues();
    }
  }, [refreshRead]);

  const createIssue = async () => {
    try {
      const response = await axios.post('https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating', {
        title: title,
        text: issueText,
      });

      if (response.status === 201) {
        // Trigger the refresh of the 'Read' component by invoking the 'refreshRead' callback
        refreshRead();
        // Ensure navigation object is defined and has the goBack method
        if (navigation && navigation.goBack) {
          navigation.goBack(); // Navigate back to the Read screen or any other desired screen
        } else {
          console.error('Navigation object or goBack method is undefined');
        }
      } else {
        console.error('Failed to create issue. Status:', response.status);
        // Handle other status codes if needed
      }
    } catch (error) {
      console.error('Error creating issue:', error.message);
      // Handle other errors, such as network issues
    }
  };

  return (
    <View style={Createstyle.container}>
      <Text style={Createstyle.title}>Create Issue</Text>
      <TextInput
        style={Createstyle.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={Createstyle.input}
        placeholder="Enter issue text"
        value={issueText}
        onChangeText={(text) => setIssueText(text)}
      />
      <TouchableOpacity style={Createstyle.button} onPress={createIssue}>
        <Text style={Createstyle.buttonText}>Create Issue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create;