import {View, Text} from 'react-native';

const ReceiptComponent = (
    {
        classes,
        name,
        amount,
        payment_method,
        date,
        time
    }
) => {
    return (
        <View className={`bg-white pl-3 py-2 ${classes} border-b border-gray-200`}>
            <View className="flex-row ">
                <Text className="text-xl font-bold">
                    {name}
                </Text>
            </View>
            <View className="flex-row">
                <Text className="text-lg font-bold">
                    Amount:
                </Text>
                <Text className="text-lg ml-2">
                    GHs. {amount}
                </Text>
            </View>
            <View className="flex-row">
                <Text className="text-lg font-bold">
                    Payment Method:
                </Text>
                <Text className="text-lg ml-2">
                    {payment_method}
                </Text>
            </View>
            <View className="flex-row">
                <Text className="text-lg text-gray-400">
                    {date}
                </Text>
                <Text className="text-lg text-gray-400"> •</Text>
                <Text className="ml-1 text-lg text-gray-400">
                    {time}
                </Text>
            </View>
        </View>
    );
};

export default ReceiptComponent;

/*
Name
amount
mode of payment
date
time
contact
received by
notes
 */