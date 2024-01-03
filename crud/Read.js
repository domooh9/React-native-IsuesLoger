import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Update from './Update'; // Import the Update component
import Updatestyle from '../style/Updatestyle';

const Read = ({ navigation }) => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchIssues();
  }, [refreshKey]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating');
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
      const response = await axios.delete(`https://crudcrud.com/api/9ac036badf0e4c6c9271c7bbd52e3ad1/creating/${id}`);
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

  const handleUpdatePress = (issueId) => {
    setSelectedIssue(issueId);
  };

  const handleCancelUpdate = () => {
    setSelectedIssue(null);
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
              <Text style={Updatestyle.button}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteIssue(item._id)}>
              <Text style={Updatestyle.button}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={Updatestyle.refreshButton} onPress={handleRefresh}>
        <Text style={Updatestyle.buttonText}>Refresh</Text>
      </TouchableOpacity>

      {selectedIssue && (
        <Update
          issueId={selectedIssue}
          refreshRead={handleRefresh}
          onCancel={handleCancelUpdate}
        />
      )}
    </View>
  );
};

export default Read;