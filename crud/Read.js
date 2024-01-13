import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Updatestyle from '../style/Updatestyle';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const Read = ({ fetchedData, updateIssue, fetchIssues, handleRefresh }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const deleteIssue = async (id) => {
    try {
      const response = await axios.delete(`https://crudcrud.com/api/ef96cc6325ef4833bb5a05d4a7adc9b0/read/${id}`);
      if (response.status === 200) {
        console.log('Successfully deleted issue:', id);
        fetchIssues(); // Refresh the list after deletion
      } else {
        console.error('Failed to delete issue. Status:', response.status);
      }
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  const handleUpdatePress = (issueId) => {
    setSelectedIssue(issueId);
    const selectedIssueText = fetchedData.find((issue) => issue._id === issueId)?.text;
    setUpdatedText(selectedIssueText || '');
  };

  const handleCancelUpdate = () => {
    setSelectedIssue(null);
    setUpdatedText('');
  };

  const handleUpdateIssue = () => {
    if (selectedIssue !== null && updatedText.trim() !== '') {
      updateIssue(selectedIssue, updatedText);
    }
  };

  return (
    <View style={Updatestyle.container}>
    <Text style={Updatestyle.heading}>Issues:</Text>
    <FlatList
      data={fetchedData}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={Updatestyle.issueContainer}>
  <Text style={Updatestyle.issueText}>{item.text}</Text>
  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'absolute', bottom: 0, left: 0, }}>
    <TouchableOpacity onPress={() => handleUpdatePress(item._id)}>
      <Text style={[Updatestyle.button, { marginLeft: 6 }]}><Icon name="pencil" size={15} color="black" /></Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => deleteIssue(item._id)}>
      <Text style={[Updatestyle.button, { marginLeft: 8 }]}><Icon name="trash-o" size={15} color="red" /></Text>
    </TouchableOpacity>
  </View>
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
        <TouchableOpacity style={Updatestyle.refreshButton} onPress={handleUpdateIssue}>
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