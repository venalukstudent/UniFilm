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

  const renderMovie = ({item}) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.movieRating}>RATING ⭐ {item.rating}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Section 1 */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>BARU TAYANG HARI INI</Text>
        </View>
        <FlatList
          data={newMovies}
          renderItem={renderMovie}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
        />

        {/* Section 2 */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TONTON FILM LAINNYA</Text>
        </View>
        <FlatList
          data={otherMovies}
          renderItem={renderMovie}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
        />
      </ScrollView>