import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%', // Use percentage-based width
    maxWidth: 400, // Set a maximum width for the container
    alignSelf: 'center', // Center the container horizontally
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
  },
  issueContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0', // Grey background color
    borderRadius: 8, // Optional: Add border-radius for rounded corners
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space between the text and icons
    alignItems: 'center', // Vertically center the content
  },

  // Your existing styles...

  // Style for the icons
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  issueText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'serif',
  },
  button: {
    color: 'blue',
    fontSize: 16,
    marginVertical: 5,
  },
  refreshButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5, // Use a numeric value for borderRadius
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});