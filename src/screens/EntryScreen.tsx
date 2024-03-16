import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Alert } from 'react-native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const EntryScreen: React.FC<Props> = ({ navigation }) => {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'Hari', purpose: 'Bussiness  Meeting' },
    { id: 2, name: 'SaiKumar', purpose: 'Billing related  work' },
    { id: 3, name: 'Ravi', purpose: 'Giving the order' },
    { id: 4, name: 'Sairam', purpose: 'regarding  project' },
    { id: 5, name: 'Dheeraj', purpose: 'Investment  Plan and opportunities' },
    { id: 6, name: 'Rohit', purpose: 'Supply chain optimization' },
    { id: 7, name: 'Satish', purpose: 'Looking for collaboration' },
    { id: 8, name: 'Yeswanth', purpose: 'asking for help' },
  ]);

  const [rejectReason, setRejectReason] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedVisitorId, setSelectedVisitorId] = useState<number | null>(null);

  const handleAccept = async(visitorId: number) => {
    await navigation.navigate('QrScanner')
    console.log('Accepted visitor with ID:', visitorId);
    // setVisitors(prevVisitors => prevVisitors.filter(visitor => visitor.id !== visitorId));
  };

  const handleReject = (visitorId: number) => {
    console.log('Rejecting visitor with ID:', visitorId);
    setSelectedVisitorId(visitorId);
    setModalVisible(true);
  };

  const handleSubmitReason = () => {
    if (rejectReason.trim() === '') {
      Alert.alert('Error ⚠️', 'Please provide a reason for rejection');
    } else {
      console.log('Rejection Reason:', rejectReason);
      setVisitors(prevVisitors => prevVisitors.filter(visitor => visitor.id !== selectedVisitorId));
      setModalVisible(false);
      setSelectedVisitorId(null);
      setRejectReason('');
    }
  };

  const handleCancelButton = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Visitor Management System</Text>
        <View style={styles.cardContainer}>
          {visitors.map(visitor => (
            <View key={visitor.id} style={styles.visitorCard}>
              <View style={styles.infoContainer}>
                <Text style={styles.textCardtitle}>Name: {visitor.name}</Text>
                <Text style={styles.textCardpurpose}>Purpose: {visitor.purpose}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.acceptButton]}
                  onPress={()=>handleAccept(visitor.id)}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.rejectButton]}
                  onPress={() => handleReject(visitor.id)}>
                  <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Reason</Text>
            <TextInput
              style={styles.reasonInput}
              placeholder="Enter reason for rejection"
              onChangeText={text => setRejectReason(text)}
              value={rejectReason}
              multiline={true}
            />
            <View>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReason}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton} onPress={handleCancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    backgroundColor: '#d4e3f8',
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    color: '#333',
  },
  cardContainer: {
    width: '90%',
    padding: 5,
    backgroundColor: '#a2bdf2',
    alignItems: 'center',
    borderRadius: 10,
  },
  visitorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#788eb5',
    shadowColor: '#000',
    height: 120,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: -10,
  },
  textCardtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
  },
  textCardpurpose: {
    fontSize: 15,
    marginBottom: 5,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    // marginHorizontal: 5,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: '#a29fee',
  },
  rejectButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  reasonInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#a29fee',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default EntryScreen;
