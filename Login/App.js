import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      console.log('response')

      const url = 'http://localhost:5000';

      const response = await axios.get(url);
      console.log("🚀 ~ file: App.js:13 ~ fetchData ~ response:", response)

      setData(response?.data?.message);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
