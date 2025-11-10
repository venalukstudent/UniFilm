import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import Gap from '../../components/atoms/Gap';
import MovieDetailHeader from '../../components/molecules/Header';

const MovieDetail = ({navigation}) => {
  const movieImageUrl = require('../../assets/movies/Movies1.jpg');

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
          imageUri={movieImageUrl}
          onBackPress={handleBackPress}
          onPlayPress={handlePlayPress}
        />

        <View style={styles.contentContainer}>
          <View style={styles.tagsContainer}>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>CRIME</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>DRAMA</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tagText}>MYSTERY</Text>
            </View>
          </View>
          <Gap height={16} />

          <Text style={styles.title}>Who Am I (2014)</Text>
          <Gap height={8} />

          <View style={styles.infoContainer}>
            <Text style={styles.ratingText}>⭐ 7,5</Text>
            <Text style={styles.durationText}>1j. 46m</Text>
          </View>
          <Gap height={24} />

          <Text style={styles.synopsisTitle}>SINOPSIS</Text>
          <Gap height={8} />
          <Text style={styles.synopsisText}>
            Benjamin Engel adalah seorang pemuda jenius komputer yang hidupnya
            terasa hampa dan tak berarti. Ia sering merasa tak terlihat oleh
            dunia, hingga suatu hari ia bertemu dengan Max, seorang hacker
            karismatik yang memperkenalkannya pada dua teman lainnya, Stephan
            dan Paul. Bersama-sama mereka membentuk kelompok hacker bernama CLAY
            (Clowns Laughing At You).
            {'\n\n'}
            Awalnya, CLAY hanya melakukan peretasan iseng dan spektakuler untuk
            mencari pengakuan publik. Namun, aksi mereka mulai menarik perhatian
            organisasi hacker internasional berbahaya dan pihak Interpol,
            terutama agen siber Hanne Lindberg, yang bertekad menangkap mereka.
            {'\n\n'}
            Semakin dalam Benjamin terlibat, semakin ia kehilangan kendali atas
            batas antara dunia nyata dan dunia maya. Permainan identitas,
            kebohongan, dan manipulasi pun dimulai—hingga akhirnya semua
            mengarah pada pertanyaan besar: Siapa sebenarnya Benjamin, dan
            seberapa jauh seseorang rela pergi demi diakui?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;
