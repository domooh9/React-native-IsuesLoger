import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Updatestyle from '../style/Updatestyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const Read = ({ navigation }) => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchIssues();
  }, [refreshKey]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/89a2df64215a423d90a939431c4a269f/read');
      if (response.status === 200) {
        setIssues(response.data);
      } else {
        Alert.alert('Error', 'Failed to fetch issues');
      }
    } catch (error) {
      console.error('Error fetching issues:', error);
      Alert.alert('Error', 'An error occurred');
    }
  };

  const deleteIssue = async (id) => {
    try {
      const response = await axios.delete(`https://crudcrud.com/api/89a2df64215a423d90a939431c4a269f/read/${id}`);
      if (response.status === 200) {
        fetchIssues(); // Refresh the list after deletion
      } else {
        Alert.alert('Error', 'Failed to delete issue');
      }
    } catch (error) {
      console.error('Error deleting issue:', error);
      Alert.alert('Error', 'An error occurred while deleting the issue');
    }
  };

  const updateIssue = async () => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/89a2df64215a423d90a939431c4a269f/read/${selectedIssue}`, {
        text: updatedText,
      });
      if (response.status === 200) {
        fetchIssues(); // Refresh the list after update
        setSelectedIssue(null); // Reset selected issue
        setUpdatedText(''); // Clear the input field
      } else {
        Alert.alert('Error', 'Failed to update issue');
      }
    } catch (error) {
      console.error('Error updating issue:', error);
      Alert.alert('Error', 'An error occurred while updating the issue');
    }
  };

  const handleUpdatePress = (issueId) => {
    setSelectedIssue(issueId);
    // Fetch the current text of the selected issue
    const selectedIssueText = issues.find((issue) => issue._id === issueId)?.text;
    setUpdatedText(selectedIssueText || '');
  };

  const handleCancelUpdate = () => {
    setSelectedIssue(null);
    setUpdatedText('');
  };

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={Updatestyle.container}>
      <Text style={Updatestyle.heading}>Issues:</Text>
      <FlatList
        data={issues}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={Updatestyle.issueContainer}>
            <Text style={Updatestyle.issueText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleUpdatePress(item._id)}>
              <Text style={Updatestyle.button}><Icon name="pencil" size={15} color="black" /></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteIssue(item._id)}>
              <Text style={Updatestyle.button}><Icon name="trash-o" size={15} color="red" /></Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={Updatestyle.refreshButton} onPress={handleRefresh}>
        <Text style={Updatestyle.buttonText}>Refresh</Text>
      </TouchableOpacity>

      {selectedIssue !== null && (
        <View style={Updatestyle.updateContainer}>
          <TextInput
            style={Updatestyle.input}
            placeholder="Enter updated text"
            value={updatedText}
            onChangeText={(text) => setUpdatedText(text)}
          />
          <TouchableOpacity style={Updatestyle.refreshButton} onPress={updateIssue}>
            <Text style={Updatestyle.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Updatestyle.refreshButton} onPress={handleCancelUpdate}>
            <Text style={Updatestyle.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Read;