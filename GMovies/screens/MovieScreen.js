import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const navigation = useNavigation();
    let movieName = "Joker: Folie à Deux";
    useEffect(() => {
        // call API
    }, [item])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
            classname="flex-1 bg-neutral-900"
        >
            <View className="w-full">
              <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center p-4 pt-3"}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                    <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
                </TouchableOpacity>
                </SafeAreaView> 
                <View classname="w-full">
                    <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center p-4 pt-3"}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                            <HeartIcon size="36" color={isFavorite ? theme.background : "white"} />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <View>
                        <Image
                            source={requestAnimationFrame('../assets/images/moviePoster2.jpg')}
                            style={{ width: width, height: height * 0.55 }}
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1']}
                            style={{ width, height: height * 0.4 }}
                            start= {{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            clasName="absolute bottom-0"
                        />
                    </View>

                    <View style={{ marginTop: -(height * 0.99) }} clasName="space-y-3">
                        {/* Nome do Filme */}
                        <Text className="text-neutral text-center text-3x1 font-bold tracking-wider">
                            {movieName}
                        </Text>

                        {/* Status, Estreia, Tempo de Duração*/}
                        <Text className="text-neutral-400 font-semibold text-base text-center">
                            Lançado ° 2024 ° 138 min
                        </Text>

                        {/* Gêneros */}
                        <View className="text-neutral-400 font-semibold text-base text-center">
                            Drama °
                        </View>
                        <View className="text-neutral-400 font-semibold text-base text-center">
                            Crime °
                        </View>
                        <View className="text-neutral-400 font-semibold text-base text-center">
                            Thriller °
                        </View>
                    </View>
                    
                    {/* Sinopse */}
                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        Coringa 2 se passa depois dos acontecimentos do filme de 2019, após ser iniciado um movimento popular contra a... sei lá, o texto cortou no pdf
                    </Text>

                    {/* Elenco */}
                    <Cast navigation={navigation} cast={cast} />

                    {/* Filmes Similares */}
                    <MovieList title="Filmes Similares" data={similarMovies} />
                </View> 
            </View>
        </ScrollView>
    )
}