import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme';
import { Shadow } from 'react-native-shadow-2'
import MovieList from '../components/movieList'

var { width, height } = Dimensions.get('window');

export default function PersonScreen() {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const [isFavorite, toggleFavorite] = useState(false)
    const [personMovies, setPersonMoviews] = useState([1,2,3,4])
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
            className="flex-1 bg-neutral-900"
        >
            {/* Botões de Navegação */}
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center p4- pt-3"}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
            <Text className="text-white text-3xl font-bold">
                <Text style={styles.text}>GM</Text>ovies
            </Text>
            <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
            </TouchableOpacity>
            </SafeAreaView>

            {/* Dados da Pessoa */}
            <View>
                <View className="flex-row justify-center">
                    <Shadow className="items-center overflow-hidden h-72 w-72 border-3 border-neutral-500" startColor='rgb(60 60 60)'>
                        <Image
                          style={{ height: height * 0.42, width: width * 0.70, borderRadius: 150 }}
                          source={require('../assets/image/actor.jpg')}
                       />
                    </Shadow>
                </View>
            </View>
        </ScrollView>
    )
}