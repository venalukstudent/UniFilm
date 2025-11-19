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

          <Text style={styles.title}>The Last of Us</Text>
          <Gap height={8} />

          <View style={styles.infoContainer}>
            <Text style={styles.ratingText}>⭐ 8,2</Text>
          </View>
          <Gap height={24} />

          <Text style={styles.synopsisTitle}>SINOPSIS</Text>
          <Gap height={8} />
          <Text style={styles.synopsisText}>
            Dua puluh tahun setelah dunia dihancurkan oleh wabah jamur Cordyceps
            yang mengubah manusia menjadi makhluk ganas seperti zombie, seorang
            penyintas keras bernama Joel Miller diberi tugas berbahaya:
            mengantarkan seorang remaja bernama Ellie Williams melintasi Amerika
            Serikat yang hancur. Ellie ternyata kebal terhadap infeksi, dan
            mungkin menjadi kunci untuk menemukan obat bagi umat manusia.
            Perjalanan mereka dipenuhi bahaya — bukan hanya dari para
            “terinfeksi”, tetapi juga dari manusia lain yang kejam dan putus
            asa. Di tengah kekacauan dunia pasca-apokaliptik, Joel dan Ellie
            perlahan membangun ikatan layaknya ayah dan anak, yang diuji oleh
            kehilangan, pengkhianatan, dan pilihan-pilihan moral yang sulit.
            Serial ini menggambarkan perjuangan manusia untuk bertahan hidup dan
            tetap memiliki harapan di dunia yang runtuh, dengan tema mendalam
            tentang cinta, kehilangan, dan kemanusiaan.
          </Text>
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
