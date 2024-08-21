import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native"
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";

const Welcome = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-up");
            }}
            className="w-full flex justify-end items-end p-5"
          >
            <Text className="text-black text-md font-JakartaBold">Skip</Text>
          </TouchableOpacity>

          <Swiper
            ref={swiperRef}
            loop={false}
            dot={
                <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
            }
            activeDot={
                <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
            }
            onIndexChanged={(index) => setActiveIndex(index)}
          >
            {onboarding.map((item) => (
                <View 
                    className="flex items-center justify-center p-5"
                    key={item.id}
                >
                    <Text>{item.title}</Text>
                </View>
            ))}
          </Swiper>
        </SafeAreaView>
    )
}

export default Welcome;