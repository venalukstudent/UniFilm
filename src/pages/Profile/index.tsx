import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import Footer from '../../components/molecules/Footer'; 
const UserProfileImage = require('../../assets/Images/Profile.jpg'); 
import LikesIcon from '../../assets/IconContent/likes.svg'; 
import DownloadsIcon from '../../assets/IconContent/downloads.svg'; 
import HistoryIcon from '../../assets/IconContent/history.svg'; 
import LogoutIcon from '../../assets/IconContent/logout.svg'; 


const ProfileMenuItem = ({ IconComponent, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <IconComponent width={28} height={28} style={styles.menuIcon} fill="black" />
      <Text style={styles.menuText}>{text}</Text> 
    </TouchableOpacity>
  );
};


const Profile = () => {
  const handleAction = (action) => {
    Alert.alert("Aksi", `Navigasi atau eksekusi: ${action}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileCard}>
            <Image source={UserProfileImage} style={styles.profileImage} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.greetingText}>Hi Adam,</Text> 
              <Text style={styles.questionText}>What movie do you want to watch today?</Text>
            </View>
          </View>