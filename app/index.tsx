import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import {COLORS, images, icons, SIZES} from '../constants'
import {Nearbyjobs, ScreenHeaderBtn, Popularjobs, Welcome} from '../components'

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor : COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft : () => (
                <ScreenHeaderBtn iconUrl= {icons.menu} dimension="60%" handlePress={()=>{console.log("hi")}}/>
                ),
                headerRight : () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={()=>{
                        console.log("hello")
                    }}/>
                ),
                headerTitle : ""
                    
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome></Welcome>
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs></Nearbyjobs>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;