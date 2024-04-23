import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { imageSlider, categoryList } from '../../data/Data'
import { SliderBox } from 'react-native-image-slider-box'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <SliderBox
        images={imageSlider}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={250}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>
          Categories
        </Text>
      </View>
      <FlatList
        data={categoryList}
        numColumns={3}
        keyExtractor={(item) => item.id}        
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.icon}
                source={{uri: item.icon}}
              />
              <Text style={styles.itemName}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: 'white',
    flex: 1
  },
  titleContainer: {
    marginTop: 16,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  flatListContainer: {
    padding: 8
    },
    button: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#7CAF58',
    borderRadius: 10,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
    },
    icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
    },
    itemName: {
    color: 'black'
    }
})

export default HomeScreen