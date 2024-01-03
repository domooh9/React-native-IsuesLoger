import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Update = ({ navigation, route }) => {
  const { issueId, refreshRead } = route.params;
  const [title, setTitle] = useState('');
  const [issueText, setIssueText] = useState('');

  useEffect(() => {
    fetchIssueDetails();
  }, []);

  const fetchIssueDetails = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating/${issueId}`);
      if (response.status === 200) {
        const issue = response.data;
        setTitle(issue.title);
        setIssueText(issue.text);
      } else {
        console.error('Failed to fetch issue details. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching issue details:', error.message);
    }
  };

  const updateIssue = async () => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating/${issueId}`, {
        title: title,
        text: issueText,
      });

      if (response.status === 200) {
        refreshRead(); // Refresh the 'Read' component after update
        if (navigation && navigation.goBack) {
          navigation.goBack();
        } else {
          console.error('Navigation object or goBack method is undefined');
        }
      } else {
        console.error('Failed to update issue. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating issue:', error.message);
    }
  };

  return (
    <View>
      <Text>Update Issue:</Text>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Enter issue text"
        value={issueText}
        onChangeText={(text) => setIssueText(text)}
      />
      <TouchableOpacity onPress={updateIssue}>
        <Text>Update Issue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Update;