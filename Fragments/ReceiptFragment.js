import {View, Text, TouchableOpacity, ScrollView, Modal, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Icon} from "@rneui/base";
import ReceiptComponent from "../Components/ReceiptComponent";

const ReceiptFragment = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisibility] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // hiding or disabling the default header from react-native
        })
    }, []);

    return (
        <SafeAreaView>
            <View className="bg-white pt-3">
                <View className="flex-row items-center space-x-2 border-gray-200 border-b pb-3">
                    <View className="flex-1">
                        <Text className="ml-5 text-2xl font-bold">
                            Receipts
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisibility(true)}
                        activeOpacity={0.9}
                        className="mr-5 px-3 py-2 bg-blue-500">
                        <Icon type="ionicon" name="add-outline" color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <ReceiptComponent
                    name="Honourable Pharaoh"
                    amount="1000.00"
                    payment_method="cash"
                    date="12/10/2023"
                    time="1:09 pm"
                />
                <ReceiptComponent
                    name="Samuel John"
                    amount="5000.00"
                    payment_method="Bank Transfer"
                    date="03/01/2023"
                    time="12:34 pm"
                />
                <ReceiptComponent
                    name="Joseph Asemonu"
                    amount="50.00"
                    payment_method="Card"
                    time="5:21 am"
                    date="09/03/2023"
                />
                <ReceiptComponent
                    name="Aaron Will Djaba"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="100.00"
                />
                <ReceiptComponent
                    name="Ben"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="19.00"
                />
                <ReceiptComponent
                    name="Mary Cole"
                    time="8:12 am"
                    payment_method="Cash"
                    date="21/07/2023"
                    amount="900.00"
                />
                <ReceiptComponent
                    name="Will Perry"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    amount="20.50"
                />
                <ReceiptComponent
                    name="Maddy Nannie"
                    time="8:12 am"
                    payment_method="Cheque"
                    date="21/07/2023"
                    classes="mb-20"
                    amount="1009.00"
                />
            </ScrollView>
            <Modal
                className=""
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisibility(false)}
            >
                <Pressable
                    className="h-60 bg-black opacity-60"
                    onPress={() => setModalVisibility(false)}
                >

                </Pressable>
                <View className="flex-1 bg-white">
                    <Text>
                        Modal
                    </Text>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default ReceiptFragment;