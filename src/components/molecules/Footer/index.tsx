import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeIcon from '../../../assets/IconFooter/home.svg'; 
import WatchlistIcon from '../../../assets/IconFooter/watchlist.svg'; 


const Footer = () => {
  const [activeTab, setActiveTab] = React.useState('Home'); 

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Home')}>
        <HomeIcon 
            width={24} 
            height={24} 
            fill={'black'} 
        />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Watchlist')}>
        <WatchlistIcon 
            width={24} 
            height={24} 
            fill={'black'}
        />
        <Text style={styles.tabText}>Watchlist</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF8C4B', 
    height: 60, 
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});