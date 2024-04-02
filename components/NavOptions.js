import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
]


const NavOptions = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View style={!origin && {opacity: 0.2}}>
            <Image 
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }}
              source={{uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon style={{backgroundColor: 'black', borderRadius: 20, width: 40, height: 40, justifyContent: 'center'}} type="antdesign" color="white" name="arrowright" />


          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions;

