import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const ReceiptFragment = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <SafeAreaView >
            <View>
                <Text>ReceiptFragment</Text>
            </View>
        </SafeAreaView>
    );
};

export default ReceiptFragment;