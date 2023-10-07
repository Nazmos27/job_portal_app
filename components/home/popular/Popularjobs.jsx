import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import {useRouter} from 'expo-router';
import useFetch from '../../../hooks/useFetch'

import  PopularJobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style';
import {COLORS,SIZES} from '../../../constants';


const Popularjobs = () => {
  const {isLoading,refetch,data,error} = useFetch('search',{query: 'react developer',num_of_pages : 1})
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all {data.length}</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong -- {error}</Text>
        ) : (
          <FlatList
            data={[1,2,3,4,5,6]}
            renderItem={({item})=>(
              <PopularJobCard
              item={item}
              />
            )} 
            keyExtractor={item=>item?.job_id}
            contentContainerStyle={{columnGap:SIZES.medium}}
            horizontal
            />
        )}
        
      </View>

    </View>
  )
}

export default Popularjobs