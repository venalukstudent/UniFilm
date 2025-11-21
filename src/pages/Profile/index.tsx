import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Footer from '../../components/molecules/Footer';
const UserProfileImage = require('../../assets/Images/Profile.jpg');
import LikesIcon from '../../assets/IconContent/likes.svg';
import DownloadsIcon from '../../assets/IconContent/downloads.svg';
import HistoryIcon from '../../assets/IconContent/history.svg';
import LogoutIcon from '../../assets/IconContent/logout.svg';
import {auth} from '../../../config/firebase';
import {signOut} from 'firebase/auth';

const ProfileMenuItem = ({IconComponent, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <IconComponent
        width={28}
        height={28}
        style={styles.menuIcon}
        fill="black"
      />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const handleAction = action => {
    if (action === 'Logout') {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await signOut(auth);
              navigation.replace('SignIn');
            } catch (err) {
              const error = err as any;
              console.error('Logout error:', error);
              Alert.alert('Error', error?.message || 'Failed to logout');
            }
          },
        },
      ]);
      return;
    }

    Alert.alert('Aksi', `Navigasi atau eksekusi: ${action}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileCard}>
            <Image source={UserProfileImage} style={styles.profileImage} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.greetingText}>Hi Adam,</Text>
              <Text style={styles.questionText}>
                What movie do you want to watch today?
              </Text>
            </View>
          </View>

          <View style={styles.menuContainer}>
            <ProfileMenuItem
              IconComponent={LikesIcon}
              text="Likes Films"
              onPress={() => handleAction('LikesFilms')}
            />
            <ProfileMenuItem
              IconComponent={DownloadsIcon}
              text="Downloads"
              onPress={() => handleAction('Downloads')}
            />
            <ProfileMenuItem
              IconComponent={HistoryIcon}
              text="History"
              onPress={() => handleAction('History')}
            />
            <ProfileMenuItem
              IconComponent={LogoutIcon}
              text="Logout"
              onPress={() => handleAction('Logout')}
            />
          </View>
        </ScrollView>

        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

// --- Stylesheet ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C0E3C',
  },
  container: {
    flex: 1,
    backgroundColor: '#1C0E3C',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileCard: {
    backgroundColor: '#FF8C4B',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 366,
    height: 123,
    borderEndEndRadius: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  greetingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  questionText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  menuContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    width: 366,
    height: 53,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8C4B',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    minHeight: 60,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
