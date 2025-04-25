import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Platform } from 'react-native';

export default function LoginScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parlours Time</Text>
      <TouchableOpacity style={styles.loginButton} onPress={toggleModal}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
              <Text style={{ fontSize: 22 }}>×</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Welcome Back 👋</Text>
            <Text style={styles.modalSub}>Login to continue your beauty journey</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.otpButton}>
              <Text style={styles.otpText}>Send OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialGoogle}>
              <Text style={styles.socialText}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialFacebook}>
              <Text style={styles.socialText}>Login with Facebook</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Don’t have an account? Sign up{'\n'}
              <Text style={{ fontSize: 12 }}>By continuing, you agree to our Terms & Privacy Policy.</Text>
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcefee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#d14c79',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#d14c79',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  modalSub: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  otpButton: {
    backgroundColor: '#d14c79',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  otpText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  socialGoogle: {
    backgroundColor: '#4285F4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialFacebook: {
    backgroundColor: '#3b5998',
    padding: 12,
    borderRadius: 10,
  },
  socialText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  termsText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 13,
    color: '#666',
  },
});
