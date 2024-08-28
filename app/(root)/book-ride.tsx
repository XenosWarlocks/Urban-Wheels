import { useUser } from "@clerk/clerk-expo";
// import { StripeProvider } from "@stripe/stripe-react-native";
import { Image, Text, View } from "react-native";

// import Payment from "@/components/Payment";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { formatTime } from "@/lib/utils";
import { useDriverStore, useLocationStore } from "@/store";

const BookRide = () => {
    const { user } = useUser();
    const { userAddress, destinationAddress } = useLocationStore();
    const { drivers, selectedDriver } = useDriverStore();

    const driverDetails = drivers?.filter(
        (driver) => driver.id === selectedDriver,   
    )[0];
    return (
        <RideLayout>
            <>
                <Text className="text-xl font-JakartaSemiBold mb-3">
                    Ride Information
                </Text>
            </>
        </RideLayout>
    );
}

export default BookRide;
