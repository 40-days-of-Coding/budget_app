import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable,
    StyleSheet
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React, {useLayoutEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Icon} from "@rneui/base";
import ReceiptComponent from "../Components/ReceiptComponent";
import InputFieldComponent from "../Components/InputFieldComponent";
import RBSheet from "@nonam4/react-native-bottom-sheet";

const ReceiptFragment = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisibility] = useState(false);

    // ref
    const refRBSheet = useRef(null);

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
                        onPress={() => refRBSheet.current?.open()}
                        activeOpacity={0.9}
                        className="mr-5 rounded-md px-3 py-2 bg-blue-500">
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
                    classes="mb-16"
                    amount="1009.00"
                />
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="slide"
                height={350}
                customStyles={{
                    container: {
                        borderTopLeftRadius : 20,
                        borderTopRightRadius : 20,
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View>
                    <View className="items-center text-center border-b border-gray-200">
                        <View className="flex-row items-center">
                            <Text className="flex-1 font-bold text-center text-2xl py-3">
                                Add Receipt
                            </Text>
                            <TouchableOpacity
                                className="mr-3"
                                onPress={() => refRBSheet.current?.close()}
                            >
                                <Icon type="ionicon" color="blue" name="close-outline"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        <View className="flex-1 h-72 rounded-t-xl bg-white">

                            <View>
                                <InputFieldComponent
                                    label="Name:"
                                    placeholder="Name"/>
                                <InputFieldComponent
                                    label="Amount:"
                                    placeholder="Amount"
                                    keyboardType="numeric"
                                />
                                <InputFieldComponent label="Payment Method:" placeholder="Cash/Cheque/MoMo"/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>

            <Modal
                className=""
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisibility(false)}>

                <Pressable
                    className="h-60"
                    onPress={() => setModalVisibility(false)}>
                </Pressable>
                <View className="flex-1 h-72 rounded-t-xl bg-white">
                    <View className="items-center text-center border-b border-gray-200">
                        <View className="flex-row items-center">
                            <Text className="flex-1 font-bold text-center text-2xl py-3">
                                Add Receipt
                            </Text>
                            <TouchableOpacity
                                className="mr-3"
                                onPress={() => setModalVisibility(false)}
                            >
                                <Icon type="ionicon" color="blue" name="close-outline"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <InputFieldComponent label="Name:" placeholder="Name"/>
                        <InputFieldComponent label="Amount:" placeholder="Amount"/>
                        <InputFieldComponent label="Payment Method:" placeholder="Cash/Cheque/MoMo"/>
                    </View>
                </View>

            </Modal>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default ReceiptFragment;