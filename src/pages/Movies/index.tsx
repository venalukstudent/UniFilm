import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  // Hapus ImageBackground dan TouchableOpacity dari sini
} from 'react-native';
import Gap from '../../components/atoms/Gap';
// 1. IMPORT Komponen Header yang baru
import MovieDetailHeader from '../../components/molecules/Header';

const MovieDetail = ({navigation}) => {
  // Kita siapkan data untuk dikirim ke Header
  const movieImageUrl = require('../../assets/movies/Movies1.jpg');

  const handleBackPress = () => {
    // Fungsi untuk tombol kembali
    if (navigation) {
      navigation.goBack();
    }
  };

  const handlePlayPress = () => {
    // Fungsi untuk tombol play
    console.log('Play button pressed!');
  };
