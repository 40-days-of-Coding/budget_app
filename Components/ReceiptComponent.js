import {View, Text, TouchableOpacity} from 'react-native';

const ReceiptComponent = (
    {
        classes,
        name,
        amount,
        item,
        items,
        money,
        quantity,
        payment_method,
        date,
        time
    }
) => {
    return (
        <TouchableOpacity
            className={`
            bg-white pl-3 py-2 ${classes} 
            border-b border-gray-200`}>
            <View className="flex-row ">
                <Text className="text-xl font-bold">
                    {name}
                </Text>
            </View>
            { (money === 1) &&
                <>
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
                </>
            }
            { (item === 1) &&
                <>
                    <View className="flex-row">
                        <Text className="text-lg font-bold">
                            Item:
                        </Text>
                        <Text className="text-lg ml-2">
                            {items}
                        </Text>
                    </View>
                    <View className="flex-row">
                        <Text className="text-lg font-bold">
                            Quantity:
                        </Text>
                        <Text className="text-lg ml-2">
                            {quantity}
                        </Text>
                    </View>
                </>
            }
            <View className="flex-row">
                <Text className="text-lg text-gray-400">
                    {date}
                </Text>
                <Text className="text-lg text-gray-400"> •</Text>
                <Text className="ml-1 text-lg text-gray-400">
                    {time}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ReceiptComponent;