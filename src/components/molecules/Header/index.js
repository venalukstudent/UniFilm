import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

import BackArrow from '../../../assets/backarrow.svg';
import Play from '../../../assets/play.svg';

const MovieDetailHeader = ({imageUri, onBackPress}) => {
  return (
    <ImageBackground source={imageUri} style={styles.headerImage}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <BackArrow width={20} height={20} />
      </TouchableOpacity>
      <View style={styles.playIconWrapper}>
        <Play width={40} height={40} />{' '}
      </View>
    </ImageBackground>
  );
};

export default MovieDetailHeader;

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconWrapper: {
    paddingLeft: 4,
  },
});
