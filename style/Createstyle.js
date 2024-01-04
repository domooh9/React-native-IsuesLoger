import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#41644A',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    marginHorizontal: '5%', 
    maxWidth: 400, 
    alignSelf: 'center', 
  },
 
  input: {
    height: 70,
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#F2E3DB',
    color: '#263A29',
  },
  button: {
    backgroundColor: '#E86A33',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#263A29',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

