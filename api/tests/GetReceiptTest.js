import axios from "axios";
import env from "../../env";

const token = env.TOKEN ;
console.log(token)
const testApi = () => {
    axios.get(
        'https://api.apito.io/secured/rest/budget_app_br7v4/receipts',
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                    'Content-Type': "application/json"
            }

        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })

//     const myHeaders = new Headers();
//     myHeaders.append("accept", "application/json");
//     myHeaders.append("Authorization", `Bearer ${token}`);
//     myHeaders.append("Content-Type", "application/json");
//     console.log(myHeaders)
//     const requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//     fetch("https://api.apito.io/secured/rest/budget_app_br7v4/receipts", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
}
let x = [
    {"data":
            {"address": "2231 South Mountains mouth", "amount": 21.4, "date": "I", "item": null, "items": "Incredible Plastic Shoes", "money": null, "name": "Elsie Purdy", "paymentmethod": "Cash", "quantity": "Gold", "receipt_id": "78793ecb-a0a9-4a74-8c10-e7f67028d736", "time": "3:05AM"}, "id": "fd4f8859-8004-4c6e-b91a-288b4d3ea7fc"}, {"data": {"address":
"23589 Village town", "amount": 53.69, "date": "II", "item": null, "items": "Intelligent Plastic Table", "money": null, "name": "Charlene Dickinson", "paymentmethod": "Cash", "quant
ity": "Coral", "receipt_id": "ca97eb14-e02c-4f11-9dbd-cb589c8ed357", "time": "4:42PM"}, "id": "0a4e9333-3050-47b1-8138-318c2fba0ac9"}, {"data": {"address": "48647 Cliffs berg", "amo
unt": 64.37, "date": "DDS", "item": null, "items": "Sleek Rubber Pants", "money": null, "name": "Bridie Osinski", "paymentmethod": "Cash", "quantity": "Moccasin", "receipt_id": "5da
6ed62-64f3-45e0-8553-e9659be24eaa", "time": "12:36PM"}, "id": "94eb1891-c768-42cb-8b94-900ee03113f5"}, {"data": {"address": "3843 Corners mouth", "amount": 49.52, "date": "II", "ite
m": null, "items": "Awesome Rubber Pants", "money": null, "name": "George Mraz", "paymentmethod": "Cash", "quantity": "MediumAquaMarine", "receipt_id": "b7e7754a-9c9c-4c03-964c-78f8
8916dee4", "time": "9:56PM"}, "id": "142fbb85-8b32-41b0-b26d-7926bc4ab299"}, {"data": {"address": "2542 South Stream burgh", "amount": 24.67, "date": "DVM", "item": null, "items": "
Practical Plastic Chair", "money": null, "name": "Dennis Morissette", "paymentmethod": "Cash", "quantity": "PaleVioletRed", "receipt_id": "d0198ba4-553c-4490-8a1f-daf7a5e6f56e", "ti
me": "6:58AM"}, "id": "9859efa8-f8d7-42c0-850d-d077ad0b06f4"}, {"data": {"address": "49872 Parks mouth", "amount": 66.5, "date": "DDS", "item": null, "items": "Intelligent Cotton Gl
oves", "money": null, "name": "Jo Keeling", "paymentmethod": "Cash", "quantity": "Yellow", "receipt_id": "39608a6d-4474-461a-b4a9-e2d4124fa7cb", "time": "11:52PM"}, "id": "7dc3142c-
3585-44dc-8320-d3e1ae1f8edd"}, {"data": {"address": "62934 Cliffs town", "amount": 44.92, "date": "PhD", "item": null, "items": "Awesome Concrete Chair", "money": null, "name": "Lin
coln Mueller", "paymentmethod": "Cash", "quantity": "Green", "receipt_id": "cf9f2fca-e29b-49f4-b40d-fb9298e8a3c0", "time": "3:18AM"}, "id": "37d51e64-54c0-4b26-b651-a8f6aeb00837"},
{"data": {"address": "995 Manors mouth", "amount": 26.46, "date": "DDS", "item": null, "items": "Fantastic Steel Computer", "money": null, "name": "Emmie Kemmer", "paymentmethod": "
    Cash", "quantity": "Ivory", "receipt_id": "5afaef10-bb75-4d25-8a4b-146b165508b9", "time": "7:37PM"}, "id": "b525f7b6-8312-4fa0-9ae2-8f5db8f6d15c"}, {"data": {"address": "75560 Lock
    haven", "amount": 61.1, "date": "I", "item": null, "items": "Gorgeous Granite Car", "money": null, "name": "Floy Weimann", "paymentmethod": "Cash", "quantity": "LavenderBlush", "rec
    eipt_id": "65a4f265-2375-4b1c-8fab-25a6758fc703", "time": "2:36PM"}, "id": "7552cf56-344d-4012-ac4d-3811b9ac5ee7"}, {"data": {"address": "360 Shore fort", "amount": 59.77, "date": "
    I", "item": null, "items": "Gorgeous Rubber Shirt", "money": null, "name": "Cordia Kohler", "paymentmethod": "Cash", "quantity": "GoldenRod", "receipt_id": "bbb5c582-3db8-46c4-9ca1-
    b49d80087f8b", "time": "3:58PM"}, "id": "446ecf4d-f7cb-4ceb-a0f5-db72a6587c0b"}, {"data": {"address": "9124 Cliff ville", "amount": 15.34, "date": "MD", "item": null, "items": "Prac
    tical Granite Hat", "money": null, "name": "Lowell Spinka", "paymentmethod": "Cash", "quantity": "AliceBlue", "receipt_id": "a47ba0a0-d0b7-4511-a862-84a7f1b28a66", "time": "4:38AM"}
        , "id": "df83ced4-a121-45e0-bfe0-27ca5cf7f2c2"}, {"data": {"address": "955 Port Wall ton", "amount": 94.1, "date": "PhD", "item": null, "items": "Incredible Steel Hat", "money": nul
    l, "name": "Raphael Lebsack", "paymentmethod": "Cash", "quantity": "Khaki", "receipt_id": "6c2076d7-84da-4d25-8c4d-a7c08761f822", "time": "4:57PM"}, "id": "2a162ff7-60ba-4b62-80b1-c
    177e720e1f8"}, {"data": {"address": "90350 Stream mouth", "amount": 46.63, "date": "DVM", "item": null, "items": "Fantastic Plastic Shoes", "money": null, "name": "Bella Wiegand", "
    paymentmethod": "Cash", "quantity": "White", "receipt_id": "227778ac-75d1-4810-b202-9512bfebb467", "time": "12:33PM"}, "id": "000a0d41-42dd-4b86-ae0a-f218f7451bca"}, {"data": {"addr
    ess": "2251 River town", "amount": 82.49, "date": "III", "item": null, "items": "Rustic Concrete Computer", "money": null, "name": "Leora Hahn", "paymentmethod": "Cash", "quantity":
    "Yellow", "receipt_id": "c1182fe5-5c1b-4d37-a836-fd11aca059c6", "time": "12:31AM"}, "id": "27ccbe69-831e-4def-a15b-54d69f5b03c8"}, {"data": {"address": "6809 North Stravenue haven"
    , "amount": 47.59, "date": "II", "item": null, "items": "Fantastic Concrete Shirt", "money": null, "name": "Shawn Stanton", "paymentmethod": "Cash", "quantity": "BlueViolet", "recei
    pt_id": "491e6fb7-0b01-4207-ac01-2472f483011b", "time": "7:16PM"}, "id": "f8a7e8f0-13bb-4d46-acdf-484c0b7d650a"}, {"data": {"address": "6932 Cove burgh", "amount": 84.33, "date": "S
    r.", "item": null, "items": "Gorgeous Steel Gloves", "money": null, "name": "Tyree Hammes", "paymentmethod": "Cash", "quantity": "HotPink", "receipt_id": "93849e25-f40f-45c8-b2cd-a3
    e22eed1c7c", "time": "1:34AM"}, "id": "80df8679-143c-47d1-b752-1e4654005e75"}, {"data": {"address": "759 Lake Plain ton", "amount": 6.21, "date": "V", "item": null, "items": "Fantas
    tic Cotton Shirt", "money": null, "name": "Leora Lind", "paymentmethod": "Cash", "quantity": "White", "receipt_id": "0549f8ed-8dcd-4925-8695-f764eadd1e41", "time": "6:51PM"}, "id":
    "2f65efc2-444e-4365-ae67-67dfe85c002e"}, {"data": {"address": "96129 Harbors land", "amount": 52.97, "date": "DDS", "item": null, "items": "Gorgeous Steel Computer", "money": null,
    "name": "Roslyn Buckridge", "paymentmethod": "Cash", "quantity": "Linen", "receipt_id": "517bbdef-67f8-42ff-b6c0-0698d0f5a4e2", "time": "2:05AM"}, "id": "19a40426-5dc9-4cd6-a9c3-1e0
    e26393347"}, {"data": {"address": "9688 Curve chester", "amount": 13.52, "date": "DVM", "item": null, "items": "Gorgeous Cotton Pants", "money": null, "name": "Westley Huels", "paym
    entmethod": "Cash", "quantity": "Gold", "receipt_id": "d09b1479-9994-40ae-a611-0753dbd1016e", "time": "9:38AM"}, "id": "2134baa6-b066-4f4a-917a-1bf748e8bbb7"}, {"data": {"address":
    "6341 Port Via mouth", "amount": 15.31, "date": "IV", "item": null, "items": "Incredible Concrete Pants", "money": null, "name": "Jerrell Kemmer", "paymentmethod": "Cash", "quantity
    ": "BlueViolet", "receipt_id": "40cea7d4-4068-47ce-afc3-5a0ee66e827d", "time": "11:32PM"}, "id": "7b9eb47e-47df-4697-822a-4d4017225e39"}, {"data": {"address": "8714 Forest furt", "a
    mount": 74.76, "date": "DVM", "item": null, "items": "Sleek Granite Car", "money": null, "name": "Jolie Considine", "paymentmethod": "Cash", "quantity": "PaleVioletRed", "receipt_id
    ": "428bc514-18aa-42cb-8af6-18becd0e41b1", "time": "7:05AM"}, "id": "2d632b3b-68d8-4bd7-993f-1362339b6350"}, {"data": {"address": "87075 Inlet view", "amount": 54.27, "date": "II",
    "item": null, "items": "Sleek Granite Shirt", "money": null, "name": "Keira Rath", "paymentmethod": "Cash", "quantity": "MediumVioletRed", "receipt_id": "03d0c7f8-b6bc-4ab0-9790-745
    903543cea", "time": "8:52PM"}, "id": "ebaf6ac6-4089-48f5-bc45-b2033db6433b"}, {"data": {"address": "737 Skyway mouth", "amount": 35.73, "date": "2023-06-09", "item": null, "items":
    "", "money": null, "name": "Kailey Johnson", "paymentmethod": "Cash", "quantity": "", "receipt_id": "f30ea3ef-d658-4311-8b21-a22c65a9137f", "time": "4:37AM"}, "id": "576a08bf-c3d0-4
    d82-9685-5cb8f27bb41e"}, {"data": {"address": "8862 Centers mouth", "amount": 46.41, "date": "2023-06-09", "item": null, "items": "", "money": null, "name": "Seth Gislason", "paymen
    tmethod": "Cash", "quantity": "", "receipt_id": "11c8ae89-c37e-43fe-a3b4-da11d6e487cc", "time": "3:04PM"}, "id": "06dcc152-c6e9-496b-a980-f32c363a826d"}, {"data": {"address": "2080
    South Place haven", "amount": null, "date": "2023-06-09", "item": null, "items": "Ergonomic Cotton Chair", "money": null, "name": "Isaiah Douglas", "paymentmethod": "Cash", "quantit
    y": "2 pcs", "receipt_id": "8f6fc70d-5b4f-495a-8f4c-c5d2fa3c4397", "time": "8:45AM"}, "id": "8df23462-8647-4e4f-ac1c-85e1e2ad93ca"}, {"data": {"address": "676 Park mouth", "amount":
    0, "date": "2023-06-09", "item": null, "items": "Fantastic Wooden Shoes", "money": null, "name": "Johanna Heaney", "paymentmethod": "Cash", "quantity": "3 pcs", "receipt_id": "159f
    9ffa-907d-4524-8d7f-69deadb23698", "time": "2:58AM"}, "id": "92da36f8-7c8c-4b77-9ca0-dc195ff988d9"}, {"data": {"address": "2037 Haven fort", "amount": 0, "date": "2023-06-09", "item
    ": null, "items": "Sleek Granite Pants", "money": null, "name": "Abdullah Stokes", "paymentmethod": "Cash", "quantity": "11 pcs", "receipt_id": "4be7fa91-4362-4100-b831-43b5f7515256
    ", "time": "7:36PM"}, "id": "2977e975-98f9-43ff-9992-7325fc9bca5c"}, {"data": {"address": "61487 Fords berg", "amount": 0, "date": "2023-06-09", "item": null, "items": "Practical St
    eel Hat", "money": null, "name": "Eli Swaniawski", "paymentmethod": "Cash", "quantity": "2 kg", "receipt_id": "cb38dff2-69d2-4d8c-90f7-28851f03edd3", "time": "1:07PM"}, "id": "242e4
    9c1-784d-4d79-8070-190df6539224"}, {"data": {"address": "347 Ramp chester", "amount": 53.24, "date": "2023-06-09", "item": null, "items": "Fantastic Wooden Pants", "money": null, "n
    ame": "Raymundo Pagac", "paymentmethod": "Cash", "quantity": "PapayaWhip", "receipt_id": "137e0520-b091-42b0-8da9-e6c1a6f255e6", "time": "3:35PM"}, "id": "58513d06-3baa-4add-8c5a-35
    68b759f9c6"}, {"data": {"address": "309 Hollow port", "amount": 26.37, "date": "2023-06-09", "item": null, "items": "Gorgeous Rubber Car", "money": null, "name": "Krista Beer", "paymentmethod": "Credit Card", "quantity": "9 pcs", "receipt_id": "c3f9b836-46d1-4e86-a675-61f807dfc5b6", "time": "12:19PM"}, "id": "697f6220-2e94-4b23-9726-4dd9afa6ba71"}]

export default testApi;