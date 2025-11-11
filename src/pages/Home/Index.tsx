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

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search-outline" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-circle" size={26} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#FF8C00',
    fontSize: 12,
  },
  movieCard: {
    marginRight: 12,
    width: 140,
  },
  movieImage: {
    width: 140,
    height: 200,
    borderRadius: 12,
  },
  movieTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 6,
  },
  movieRating: {
    color: '#FFD700',
    fontSize: 11,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
