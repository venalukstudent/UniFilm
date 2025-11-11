import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import Header3 from '../../components/molecules/Header3';

// Lebar layar
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 40;
const GenresData = [
  { id: '1', name: 'Horror', display: 'Horror', 
    image: require('../../assets/Genres/horor.png') }, 
  { id: '2', name: 'Action', display: 'Action', 
    image: require('../../assets/Genres/action.png') }, 
  { id: '3', name: 'Adventure', display: 'Adventure', 
    image: require('../../assets/Genres/advanture.png') },
  { id: '4', name: 'Romance', display: 'Romance', 
    image: require('../../assets/Genres/romance.png') },
  { id: '5', name: 'Shounen', display: 'Shounen', 
    image: require('../../assets/Genres/shounen.png') },
  { id: '6', name: 'Tatutup', display: 'mystery', 
    image: require('../../assets/Genres/mystery.png') }, 
];