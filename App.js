import React, { useEffect, useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import axios from 'axios';
import Create from './crud/Create';
import Read from './crud/Read';
// import { Text } from 'react-native-web';

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, [refreshKey]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/ef96cc6325ef4833bb5a05d4a7adc9b0/read');
      if (response.status === 200) {
        setIssues(response.data);
      } else {
        console.error('Failed to fetch issues. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const updateIssue = async (selectedIssue, updatedText) => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/ef96cc6325ef4833bb5a05d4a7adc9b0/read/${selectedIssue}`, {
        text: updatedText,
      });
      if (response.status === 200) {
        fetchIssues(); // Refresh the list after update
      } else {
        console.error('Failed to update issue. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={styles.container}>
     <Text style={styles.title}>IssueLogger</Text>
      <Create refreshRead={fetchIssues} />
      <Read
        fetchedData={issues}
        fetchIssues={fetchIssues}
        updateIssue={updateIssue}
        refreshIssues={fetchIssues}
        handleRefresh={handleRefresh}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E3DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#263A29',
  },
});