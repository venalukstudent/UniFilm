import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import Footer from '../../components/molecules/Footer';
const UserProfileImage = require('../../assets/Images/profile.png');
import LikesIcon from '../../assets/IconContent/likes.svg';
import DownloadsIcon from '../../assets/IconContent/downloads.svg';
import HistoryIcon from '../../assets/IconContent/history.svg';
import LogoutIcon from '../../assets/IconContent/logout.svg';
import {auth, database} from '../../../config/firebase';
import {signOut} from 'firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import {push} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';
import {ref as dbRef, set, onValue, off} from 'firebase/database';

const ProfileMenuItem = ({IconComponent, text, onPress}: any) => {
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

const Profile = ({navigation}: any) => {
  const [profileImage, setProfileImage] = useState<any>(UserProfileImage);
  const [bioLine1, setBioLine1] = useState<string>('');
  const [bioLine2, setBioLine2] = useState<string>('');

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      maxHeight: 500,
      maxWidth: 500,
      quality: 0.8,
      includeBase64: true,
    } as const;

    // Android: request runtime permission when needed
    try {
      // Do not call PermissionsAndroid.request here because some emulator
      // environments may not have an Activity attached and calling the
      // permissions API can throw `Tried to use permissions API while not attached to an Activity`.
      // Rely on `launchImageLibrary` to surface permission issues, and handle errors
      // below with a user-friendly message suggesting a physical device or adding
      // images to the emulator.

      const result: any = await launchImageLibrary(options);

      if (result.didCancel) {
        showMessage({
          message: 'Foto profile tidak jadi di ubah',
          type: 'danger',
          position: 'top',
        });
        return;
      }

      if (result.errorCode) {
        // Provide a clearer message for activity errors on emulator
        const errCode = result.errorCode;
        const errMsg = result.errorMessage || errCode;
        console.error('ImagePicker error:', errCode, errMsg);
        showMessage({
          message: 'Gagal memilih foto',
          description:
            errCode === 'activity_error'
              ? 'Activity error — coba jalankan di perangkat fisik atau pastikan ada aplikasi galeri di emulator.'
              : String(errMsg),
          type: 'danger',
          position: 'top',
        });
        return;
      }

      const asset = result.assets && result.assets[0];
      if (!asset) return;

      if (asset.base64) {
        const dataUri = `data:${asset.type};base64,${asset.base64}`;
        setProfileImage({uri: dataUri});

        try {
          const uid = auth.currentUser?.uid;
          if (uid) {
            const profileRef = dbRef(database, `profile/${uid}`);
            await set(profileRef, {
              photoBase64: dataUri,
              updatedAt: Date.now(),
            });

            const historyRef = dbRef(database, `profile/${uid}/history`);
            await push(historyRef, {
              photo: dataUri,
              updatedAt: Date.now(),
            });

            showMessage({
              message: 'Foto profile tersimpan ke database',
              type: 'success',
              position: 'top',
            });
          } else {
            showMessage({
              message: 'User tidak terautentikasi. Foto tidak disimpan.',
              type: 'danger',
              position: 'top',
            });
          }
        } catch (dbErr) {
          console.error('Save photo error:', dbErr);
          showMessage({
            message: 'Gagal menyimpan foto ke database',
            description: String(dbErr),
            type: 'danger',
            position: 'top',
          });
        }
      } else if (asset.uri) {
        setProfileImage({uri: asset.uri});
      }
    } catch (err) {
      const error = err as any;
      console.error('pickImage error:', error);
      showMessage({
        message: 'Terjadi error saat memilih foto',
        description: error?.message || String(error),
        type: 'danger',
        position: 'top',
      });
    }
  };

  useEffect(() => {
    // Baca node `Bio` di Realtime Database (independen dari profile/users)
    const bioRef = dbRef(database, `Bio`);
    const unsubscribe = onValue(
      bioRef,
      snapshot => {
        const data = snapshot.val();
        if (data) {
          // Baca `Bio.text1` dan `Bio.text2` secara terpisah dari database.
          // text1 = greeting (mis. "Hi Adam"), text2 = subtitle (mis. "What movie...").
          if (data.text1) {
            setBioLine1(String(data.text1));
          } else {
            setBioLine1('');
          }

          if (data.text2) {
            setBioLine2(String(data.text2));
          } else {
            setBioLine2('');
          }

          // optional: photo
          if (data.photoBase64) setProfileImage({uri: data.photoBase64});
        }
      },
      err => {
        console.error('Realtime read error (Bio):', err);
      },
    );

    return () => {
      try {
        if (typeof unsubscribe === 'function') unsubscribe();
        off(bioRef);
      } catch (e) {
        console.warn('Error cleaning up realtime listener', e);
      }
    };
  }, []);

  const handleAction = (action: any) => {
    if (action === 'Logout') {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await signOut(auth);
              showMessage({
                message: 'Berhasil logout',
                type: 'success',
                position: 'top',
              });
              // Reset navigation stack to SignIn
              try {
                navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
              } catch (navErr) {
                // fallback
                navigation.replace && navigation.replace('SignIn');
              }
            } catch (err) {
              const error = err as any;
              console.error('Logout error:', error);
              showMessage({
                message: 'Gagal logout',
                description: error?.message || 'Failed to logout',
                type: 'danger',
                position: 'top',
              });
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
            <TouchableOpacity onPress={pickImage} activeOpacity={0.8}>
              <Image source={profileImage} style={styles.profileImage} />
            </TouchableOpacity>
            <View style={styles.profileTextContainer}>
              <Text style={styles.greetingText}>{bioLine1}</Text>
              <Text style={styles.questionText}>{bioLine2}</Text>
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

        {React.createElement(Footer as any, {navigation})}
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
