import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Icon} from "@rneui/base";

const ReceiptFragment = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <SafeAreaView>
            <View className="bg-white py-3">
                <View className="flex-row items-center space-x-2">
                    <View className="flex-1">
                        <Text className="ml-5 text-2xl font-bold">
                            Receipts
                        </Text>
                    </View>
                    <TouchableOpacity className="mr-5 p-2">
                        <Icon type="font-awesome" name="plus"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ReceiptFragment;