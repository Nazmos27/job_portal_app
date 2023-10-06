import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'


import styles from './welcome.style'
import { icons, images, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = () => {

  const router = useRouter()
  const jobTypes = ['Full-time', 'Part-time', 'Contractor']
  const [activeJobType,setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Sakib</Text>
        <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
      </View>

      {/* search box area */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            placeholder="What are you looking for?"
            onChange={() => { }}
          >
          </TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      {/* list of jobs */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
          <TouchableOpacity
             style={styles.tab(activeJobType,item)}
             onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }
            }
          >
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
        </TouchableOpacity>)
          }
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome