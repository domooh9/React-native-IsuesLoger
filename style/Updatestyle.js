import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#41644A',
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    marginVertical: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F2E3DB',
  },
  issueContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    backgroundColor: '#F2E3DB', 
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingLeft: 3,
    paddingBottom: 6,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },

  issueText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'serif',
    color: '#263A29'
  },
  button: {
    color: '#E86A33',
    fontSize: 16,
    marginLeft: 'auto',  
  },
  refreshButton: {
    backgroundColor: '#E86A33',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#263A29',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    borderWidth: 1,
    marginTop: 10,
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
    color: '#263A29',
    backgroundColor: '#F2E3DB',
  },
  
});