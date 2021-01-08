import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const earth = require('../assets/img/earth.png');
const mars = require('../assets/img/mars.png');
const mercury = require('../assets/img/mercury.png');
const moon = require('../assets/img/moon.png');
const neptune = require('../assets/img/neptune.png');
const PlanetCardDetails = ({ planet }) => {
  const getImage = (name) => {
    switch (name) {
      case 'Earth':
        return earth;
      case 'Neptune':
        return neptune;
      case 'Moon':
        return moon;
      case 'Mars':
        return mars;
      case 'Mercury':
        return mercury;
    }
  };
  return (
    <View style={styles.infoCardParent}>
      <View style={styles.infoCard}>
        <View style={styles.infoCardChild}>
          <Image
            source={getImage(planet.name)}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.title}>{planet.name}</Text>
          <Text style={styles.subTitle}>{planet.location}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.climateInfo}>
              <Image
                source={require('../assets/img/ic_distance.png')}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.distance}</Text>
            </View>
            <View style={styles.climateInfo}>
              <Image
                source={require('../assets/img/ic_gravity.png')}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.gravity}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          height: '40%',
          width: '100%',
          overflow: 'hidden',
          paddingHorizontal: 10,
          bottom: 80,
        }}>
        <Text style={styles.title}>DESCRIPTION</Text>
        <View style={styles.blueStrike}></View>

        <ScrollView>
          <Text style={styles.subTitle}>{planet.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomBtn}>
        <View>
          <Text style={{ fontSize: 10, color: 'white', fontWeight: '100' }}>
            START FROM
          </Text>
          <Text style={styles.title}>{'$25.5m'}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.title}>{'BOOK NOW'}</Text>
          <Feather name="arrow-right" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlanetCardDetails;

const styles = StyleSheet.create({
  bottomBtn: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'linear-gradient(to right, #1e5799 0%,#207cca 41%,#207cca 43%,#7db9e8 100%)',
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },

  infoCardParent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    zIndex: 99,
    backgroundColor: '#3E3963',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  climateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  infoCard: {
    backgroundColor: '#434273',
    height: 130,
    position: 'absolute',
    top: -50,
    left: 20,
    right: 20,
    borderRadius: 10,
    boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.2)',
  },
  infoCardChild: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -40,
    alignItems: 'center',
  },

  title: { fontSize: 20, color: 'white', fontWeight: '600' },
  subTitle: {
    fontSize: 12,
    color: 'rgba(200,200,200, 0.5)',
    letterSpacing: 1.1,
  },
  blueStrike: {
    height: 2,
    backgroundColor: 'lightblue',
    width: 20,
  },
});
