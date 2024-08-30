import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";

const Chat = () => {
    return (
        <SafeAreaView className="flex-1 bg-white p-5">
            <ScrollView>
                <Text></Text>
                <View>
                    <Image/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Chat;
