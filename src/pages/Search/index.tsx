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
const Search = () => {
  const [query, setQuery] = useState('');

  const filteredData = DATA.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  const renderStars = rating => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <Text key={i} style={{color: i <= rating ? 'orange' : 'gray'}}>
          ★
        </Text>,
      );
    }
    return <View style={{flexDirection: 'row'}}>{stars}</View>;
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        {renderStars(item.rating)}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Watch now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <Gap height={16} />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#2D004D',
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
  },
  image: {
    width: 90,
    height: 130,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 14,
    color: '#ddd',
  },
  duration: {
    fontSize: 13,
    color: '#bbb',
    marginBottom: 4,
  },
  button: {
    marginTop: 6,
    backgroundColor: 'orange',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'orange',
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backArrow: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
