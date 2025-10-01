import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  
  const askPermission = async () => {
        try{
          await requestPermission();
        }catch(err){
          console.log(err)
        }
      }
    
  useEffect(()=>{
    askPermission();
  },[])


  const clickPhoto = () => {

  }
  
  console.log(permission);




  return (
    <View style={styles.container}>
    <CameraView style = {styles.camera}/>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text>Touch Meh!</Text>
    </TouchableOpacity>
    </View>
      <Text style = {styles.text}>How much pink is too much pink ?!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'black',
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: 300,
    width: 300,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    height: 300,
    width: 300,
    paddingTop: 10,
  },
})
