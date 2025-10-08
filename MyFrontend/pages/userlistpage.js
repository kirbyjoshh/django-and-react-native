import {View, Text, FlatList, Button} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "../styles";

export default function UserListPage({navigation}){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) =>{
            console.error(err);
        })
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate("EditUser", {userId: user.id});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList 
                data={users} 
                style={styles.flatListContainer}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({item}) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>First Name: </Text>
                            {item.first_name}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>Last Name: </Text>
                            {item.last_name}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.userLabel}>Email: </Text>
                            {item.email}
                        </Text>
                        <View>
                            <Button title="Edit" color="#666666ff"
                            onPress={() => handleEdit(item)}></Button>
                            <Button title="Delete"
                            color="red"></Button>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}