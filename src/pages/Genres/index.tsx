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


const GenreItem = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.genreButton} onPress={onPress}>
      <Image
        
        source={image} 
        style={styles.genreImage}
        resizeMode="cover"
      />
      <View style={styles.textOverlay}>
        <Text style={styles.genreText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Genres = ({ navigation }) => {
  
  const handleBack = () => {
    Alert.alert("Navigasi", "Fungsi Kembali");
  };
  
  const handleGenrePress = (genreName) => {
    Alert.alert("Genre Dipilih", `Anda memilih genre: ${genreName}`);
  };

  return (
    <View style={styles.container}>
      <Header3 title="Genres" onBackPress={handleBack} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {GenresData.map((genre) => (
          <GenreItem 
            key={genre.id}
            name={genre.display}
            image={genre.image}
            onPress={() => handleGenrePress(genre.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
