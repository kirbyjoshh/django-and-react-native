import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4fb', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    title: {
        fontSize: 50, 
        fontWeight: '700', 
        color: '#2c3e50', 
        marginBottom: 28, 
        textAlign: 'center',
        letterSpacing: 0.6,
    },

   
    button: {
        backgroundColor: '#062049ff', 
        padding: 14,
        width: '30%', 
        color: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        elevation: 4,
        marginTop: 16,
        marginBottom: 10, 
    },
    

    viewUserButton: {
        backgroundColor: '#000000ff', 
        padding: 20,
        width: '10%', 
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000000ff', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
        marginTop: 25, 
    },

    
    viewUserButtonText: {
        color: '#2c3e50', 
        fontSize: 50,
        fontWeight: '600',
    },

    input: {
        width: '20%', 
        padding: 14, 
        marginVertical: 12, 
        borderColor: '#052861ff', 
        backgroundColor: '#ffffff', 
        borderWidth: 1.5, 
        borderRadius: 12, 
        fontSize: 16,
        color: '#000000ff', 
        shadowColor: '#00000033',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 2,
    },

    list_user:{
        padding: 10,
        marginVertical: 8,
        borderColor: '#0f0f0fff',
        backgroundColor: '#96ffff71',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        color: '#000000ff',
    },

    userCard: {
        backgroundColor: '#ffffff',
        margin: 40,
        padding: 50,
        borderRadius: 12,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },

    userInfo: {
        fontSize: 15,
        marginBottom: 6,
        color: '#333',
    },

    userLabel: {
        fontWeight: 'bold',
        color: '#666',
    },

    flatListContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 8,
    }
});

export default styles;