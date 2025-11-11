import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  // Data dummy film
  const newMovies = [
    {
      id: '1',
      title: 'ONE PIECE FILM RED',
      rating: 8.6,
      image: require('../../assets/onepiece.jpg'),
    },
    {
      id: '2',
      title: 'LARA ATI',
      rating: 8.5,
      image: require('../../assets/laraati.jpg'),
    },
    {
      id: '3',
      title: 'MIRACLE IN CELL NO.7',
      rating: 7.5,
      image: require('../../assets/miracle.jpg'),
    },
  ];

  const otherMovies = [
    {
      id: '4',
      title: 'SNOWDEN',
      rating: 7.8,
      image: require('../../assets/snowden.jpg'),
    },
    {
      id: '5',
      title: 'WHO AM I',
      rating: 8.0,
      image: require('../../assets/whoami.jpg'),
    },
    {
      id: '6',
      title: 'MR. ROBOT',
      rating: 8.5,
      image: require('../../assets/mrrobot.jpg'),
    },
  ];