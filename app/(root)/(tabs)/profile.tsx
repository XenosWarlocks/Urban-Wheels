import { useUser } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/inputField";

const Profile = () => {
    const { user } = useUser();
    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="px-5"
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Text className="text-2xl font-JakartaBold my-5">My profile</Text>
                <View className="flex items-center justify-center my-5">
                    <Image
                        source={{
                            uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
                        }}
                        style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                        className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;
