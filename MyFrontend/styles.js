import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },

  headerText: {
    fontSize: 50,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  button: {
    width: '20%',
    backgroundColor: '#3e6ff8ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  input: {
    width: '25%',
    height: 50,
    borderColor: '#000000ff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#e0d6d6ff',
  },

  subheading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 10,
  },

  infoContainer: {
    width: '25%',
    backgroundColor: '#e0d6d6ff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },

userBox: {
  backgroundColor: '#707070ff',
  padding: 15,
  borderRadius: 10,
  marginBottom: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
  },

  userInfo: {
  fontSize: 16,
  color: 'white',
  textAlign: 'center',
  marginBottom: 5,
  },

  userTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: 20,
  marginTop: 10,  
  textAlign: 'center',
  }

});

export default Styles;