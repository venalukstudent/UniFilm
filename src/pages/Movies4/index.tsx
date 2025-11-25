import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import Gap from '../../components/atoms/Gap';
import MovieDetailHeader from '../../components/molecules/Header';
import {database} from '../../../config/firebase';
import {ref as dbRef, onValue, off} from 'firebase/database';

const MovieDetail = ({navigation, route}: any) => {
  // Prefer image passed via navigation params (route.params.movie.image),
  // fallback to local asset for this page.
  const movieImageUrl =
    route?.params?.movie?.image || require('../../assets/movies/Movies4.jpg');

  console.log('Movies3 mounted, route.params=', route?.params);

  const [title, setTitle] = useState('');
  const [synTitle, setSynTitle] = useState('S');
  const [synText, setSynText] = useState(``);

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  const handlePlayPress = () => {
    console.log('Play button pressed!');
  };

  useEffect(() => {
    const moviesRef = dbRef(database, 'Movies4');
    const unsubscribe = onValue(
      moviesRef,
      snapshot => {
        const data = snapshot.val();
        if (!data) return;

        // Jika Movies node langsung berisi fields (Judul, Sinopsis, Isi sinopsis)
        // gunakan langsung. Jika Movies berisi child nodes (by id), ambil child pertama.
        let movieData: any = data;
        if (
          typeof data === 'object' &&
          !('Judul' in data) &&
          !('judul' in data) &&
          !('title' in data)
        ) {
          const first = Object.values(data)[0];
          if (first && typeof first === 'object') movieData = first;
        }

        if (movieData) {
          setTitle(
            movieData.Judul || movieData.judul || movieData.title || title,
          );
          setSynTitle(movieData.Sinopsis || movieData.sinopsis || 'SINOPSIS');
          setSynText(
            movieData['Isi sinopsis'] ||
              movieData.isi ||
              movieData.isi_sinopsis ||
              movieData.isiSinopsis ||
              movieData.synopsis ||
              synText,
          );
        }
      },
      err => {
        console.error('Realtime read error (Movies):', err);
      },
    );

    return () => {
      try {
        if (typeof unsubscribe === 'function') unsubscribe();
        off(moviesRef);
      } catch (e) {
        console.warn('Error cleaning up movies listener', e);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieDetailHeader
          imageUri={movieImageUrl}
          onBackPress={handleBackPress}
          onPlayPress={handlePlayPress}
        />

        <View style={styles.contentContainer}>
          <View style={styles.tagsContainer}>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>ADVENTURE</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>LAGA</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>THRILLER</Text>
            </View>
          </View>
          <Gap height={16} />

          <Text style={styles.title}>{title}</Text>
          <Gap height={8} />

          <View style={styles.infoContainer}>
            <Text style={styles.ratingText}>⭐ 7,5</Text>
            <Text style={styles.durationText}>1j. 46m</Text>
          </View>
          <Gap height={24} />

          <Text style={styles.synopsisTitle}>{synTitle}</Text>
          <Gap height={8} />
          <Text style={styles.synopsisText}>{synText}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
  },
  contentContainer: {
    padding: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tagWrapper: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#FBC81B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationText: {
    color: '#8D92A3',
    fontSize: 16,
    marginLeft: 16,
  },
  synopsisTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  synopsisText: {
    color: '#E0E0E0',
    fontSize: 14,
    lineHeight: 22,
  },
});
