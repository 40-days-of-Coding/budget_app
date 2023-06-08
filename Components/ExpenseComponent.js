import {View, Text, TouchableOpacity} from 'react-native';

const ExpenseComponent = (
    {
        classes,
        expense,
        amount,
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
                    {expense}
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

export default ExpenseComponent;

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