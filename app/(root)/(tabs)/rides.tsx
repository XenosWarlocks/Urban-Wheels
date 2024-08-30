import { useUser } from "@clerk/clerk-expo";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RideCard from "@/components/RideCard";
import { images } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";

const Rides = () => {
    const { user } = useUser();
    const {
        data: recentRides,
        loading,
        error,
    } = useFetch<Ride[]>(`/(api)/ride/${user?.id}`);

    return (
        <SafeAreaView>
            <FlatList
                data={recentRides}
                renderItem={({ item }) => <RideCard ride={item} />}
                keyExtractor={(item, index) => index.toString()}
                className="px-5"
                keyboardShouldPersistTaps="handled"
            />
        </SafeAreaView>
    )
}

export default Rides;
