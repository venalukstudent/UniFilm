import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import MovieDetailHeader from '../../components/molecules/Header';
import {database} from '../../../config/firebase';
import {ref as dbRef, onValue, off} from 'firebase/database';

const SeriesDetail = ({navigation}) => {
  const seriesImageUrl = require('../../assets/Series/Series1/Series1.png');

  const [title, setTitle] = useState('');
  const [synTitle, setSynTitle] = useState('');
  const [synText, setSynText] = useState(``);

  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

    useEffect(() => {
      const seriesRef = dbRef(database, 'Series');
      const unsubscribe = onValue(
        seriesRef,
        snapshot => {
          const data = snapshot.val();
          if (!data) return;

          let seriesData: any = data;
          if (typeof data === 'object' && !('Judul' in data) && !('judul' in data) && !('title' in data)) {
            const first = Object.values(data)[0];
            if (first && typeof first === 'object') seriesData = first;
          }

          if (seriesData) {
            setTitle(seriesData.Judul || seriesData.judul || seriesData.title || title);
            setSynTitle(seriesData.Sinopsis || seriesData.sinopsis || 'SINOPSIS');
            setSynText(
              seriesData['Isi sinopsis'] || seriesData.isi || seriesData.isi_sinopsis || seriesData.isiSinopsis || seriesData.synopsis || synText,
            );
          }
        },
        err => {
          console.error('Realtime read error (Series):', err);
        },
      );

      return () => {
        try {
          if (typeof unsubscribe === 'function') unsubscribe();
          off(seriesRef);
        } catch (e) {
          console.warn('Error cleaning up series listener', e);
        }
      };
    }, []);

  const handlePlayPress = () => {
    console.log('Play button pressed!');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieDetailHeader
          imageUri={seriesImageUrl}
          onBackPress={handleBackPress}
          onPlayPress={handlePlayPress}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>EPISODE</Text>
          <Gap height={12} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.episodeCard}>
              <ImageBackground
                source={require('../../assets/Series/Series1/eps1.png')}
                style={styles.episodeImage}
                imageStyle={styles.episodeImageRadius}>
                <Text style={styles.episodeText}>EPS 1</Text>
              </ImageBackground>
              <Text style={styles.episodeDuration}>1:21:00</Text>
            </View>
            <Gap width={16} />
            <View style={styles.episodeCard}>
              <ImageBackground
                source={require('../../assets/Series/Series1/eps2.png')}
                style={styles.episodeImage}
                imageStyle={styles.episodeImageRadius}>
                <Text style={styles.episodeText}>EPS 2</Text>
              </ImageBackground>
              <Text style={styles.episodeDuration}>0:55:00</Text>
            </View>
            <Gap width={16} />
            <View style={styles.episodeCard}>
              <ImageBackground
                source={require('../../assets/Series/Series1/eps3.png')}
                style={styles.episodeImage}
                imageStyle={styles.episodeImageRadius}>
                <Text style={styles.episodeText}>EPS 3</Text>
              </ImageBackground>
              <Text style={styles.episodeDuration}>1:16:00</Text>
            </View>
          </ScrollView>
          <Gap height={24} />

          <View style={styles.tagsContainer}>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>Post-apocalyptic</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>DRAMA</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>ACTION</Text>
            </View>
          </View>
          <Gap height={16} />

          <Text style={styles.title}>{title}</Text>
          <Gap height={8} />

          <View style={styles.infoContainer}>
            <Text style={styles.ratingText}>⭐ 8,2</Text>
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

export default SeriesDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170038',
  },
  contentContainer: {
    padding: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeCard: {
    width: 150,
  },
  episodeImage: {
    width: '100%',
    height: 90,
    justifyContent: 'flex-end',
    padding: 8,
  },
  episodeImageRadius: {
    borderRadius: 8,
  },
  episodeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  episodeDuration: {
    color: '#8D92A3',
    fontSize: 12,
    marginTop: 4,
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
