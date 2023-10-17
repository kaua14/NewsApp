import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const newsData = [
  {
    id: '1',
    title: 'Sample News 1',
    description: 'This is the first sample news article.',
  },
  {
    id: '2',
    title: 'Sample News 2',
    description: 'This is the second sample news article.',
  },
  {
    id: '3',
    title: 'Sample News 3',
    description: 'This is the third sample news article.',
  },
];

const News = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest News</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374048',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },
  newsItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  newsDescription: {
    fontSize: 16,
    color: 'white',
  },
});

export default News;
