import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/molecules/Header2';
import Gap from '../../components/atoms/Gap';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    title: 'Annabelle',
    date: 'October 1, 2014',
    duration: '1:49:39',
    rating: 3,
    image: require('../../assets/annabelle.jpg'),
  },
  {
    id: '2',
    title: 'Ant-Man',
    date: 'June 29, 2015',
    duration: '1:47:00',
    rating: 4,
    image: require('../../assets/antman.jpg'),
  },
  {
    id: '3',
    title: 'Deadpool',
    date: 'February 28, 2016',
    duration: '1:48:21',
    rating: 3,
    image: require('../../assets/deadpool.jpg'),
  },
  {
    id: '4',
    title: 'Despicable Me',
    date: 'July 9, 2010',
    duration: '1:35:00',
    rating: 4,
    image: require('../../assets/despicable.jpg'),
  },
];
