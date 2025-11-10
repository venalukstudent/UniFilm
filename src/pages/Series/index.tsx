import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import MovieDetailHeader from '../../components/molecules/Header';

const SeriesDetail = ({navigation}) => {
  const seriesImageUrl = require('../../assets/Series/Series1/Series1.png');

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const handlePlayPress = () => {
    console.log('Play button pressed!');
  };