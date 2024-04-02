import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'





const NavFavorites = () => {

  const data = [
    {
      id: '123',
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
    },
    {
      id: '456',
      icon: "briefcase",
      location: "Work",
      destination: "London Eye, London, UK",
    }
  ]

  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View 
          style={{
            height: 0.5,
            backgroundColor: 'green',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
      )}
      renderItem={({item}) => (
        <TouchableOpacity className="flex-row items-center p-5">
           <Icon style={styles.icon} type="ionicon" color="white" name={item.icon} size={18}/>
           <View>
            <Text className="font-semibold text-lg blue p-2">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
           </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },

})