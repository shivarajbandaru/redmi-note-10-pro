import { StyleSheet, TextInput, Text, View, StatusBar, Button, Image, Modal, Alert } from 'react-native';
import Box from './components/Box';


import { useState } from 'react';

export default function App() {
  const data = [
    { "time": "10AM", "date": "28th", "availability": "No" },
    { "time": "11AM", "date": "28th", "availability": "No" },
    { "time": "12pM", "date": "28th", "availability": "No" },
    { "time": "1PM", "date": "28th", "availability": "YES" },
    { "time": "2pM", "date": "28th", "availability": "YES" },

  ]

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [mail, setMail] = useState("")
  const [errors, setErrors] = useState({})
  const [form, EnterForm] = useState(false)


  const validateForm = () => {
    let errors = {};
    if (!userName) errors.userName = "Username is required";
    if (!password) errors.password = "Password is required";
    if (!mail) errors.mail = "Mail is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setUserName("")
      setPassword("")
      setErrors({})
      EnterForm(false)
      Alert.alert("Sucsess", "Slot Booked", [
        {
          text: "Ok",
          onPress: () => console.log("OK")
        }
      ])
    }
  }
  const getFromChild = (data) => {
    EnterForm(data)
  }

  if (form) {
    return (<Modal visible={true} animationType="slide">
      <View style={styles.container} >
        <View style={styles.form} >
          <Image source={require("./assets/adaptive-icon.png")} style={styles.image} />

          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder='Enter Name'
            onChangeText={setUserName} value={userName} />
          {
            errors.userName ? <Text style={styles.errorText} >{errors.userName}</Text> : null
          }
          <Text style={styles.label}>Slot</Text>
          <TextInput style={styles.input} placeholder="Enter Mail"
            onChangeText={setMail} value={mail} />
          {
            errors.mail ? <Text style={styles.errorText} >{errors.mail}</Text> : null
          }

          <Text style={styles.label}>Slot</Text>
          <TextInput style={styles.input} placeholder="Enter Available Slot"
            onChangeText={setPassword} value={password} />
          {
            errors.password ? <Text style={styles.errorText} >{errors.password}</Text> : null
          }
          <Button
            title='Book A SLOT'
            onPress={() => {
              handleSubmit();
            }}
          />

        </View>
      </View>
    </Modal>)
  }
  else {
    return (
      <Box data={data} getFromChild={getFromChild} ></Box >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  }
  ,
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 30
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  }
});
