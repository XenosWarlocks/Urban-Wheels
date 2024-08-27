import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { icons } from "@/constants";
import { useFetch } from "@/lib/fetch";
// import {
//   calculateDriverTimes,
//   calculateRegion,
//   generateMarkersFromData,
// } from "@/lib/map";
// import { useDriverStore, useLocationStore } from "@/store";
import { Driver, MarkerData } from "@/types/type";

// const directionsAPI = process.env.EXPO_PUBLIC_DIRECTIONS_API_KEY;
const directionsAPI = "<YOUR_GoogleAPIKey_HERE>";

const Map = () => {
    const { data: drivers, loading, error } = useFetch<Driver[]>("/(api)/driver");
    const [markers, setMarkers] = useState<MarkerData[]>([])
    return (
        <View className="flex justify-between items-center w-full">
            <ActivityIndicator size="small" color="#000" />
        </View>
    );

    if (error)
        return (
            <View className="flex justify-between items-center w-full">
                <Text>Error: {error}</Text>
            </View>
        )
}

export default Map;