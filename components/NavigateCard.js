import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 z-30">
        <Text className="text-center py-5 text-xl">Good Morning, Bryan</Text>
        <View className="border-t border-gray-200 flex-shrink">
          <View>
            <GooglePlacesAutocomplete
              placeholder='Where to?'
              fetchDetails={true}
              styles={toInputBoxStyles}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                dispatch(setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }));
                navigation.navigate('RideOptionsCard');
              }}
              debounce={400}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              />
          </View>
          <NavFavorites />
        </View>
        
        {/* <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100 z-0">
          <TouchableOpacity 
            onPress={() => navigation.navigate("RideOptionsCard")}
            className="flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text className="text-white text-center">Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between w-24 px-4 py-3 rounded-full">
            <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
            <Text className="text-center">Eats</Text>
          </TouchableOpacity>
        </View> */}
    </SafeAreaView>
  );
}

export default NavigateCard

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 0,
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: '#dddddf',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})