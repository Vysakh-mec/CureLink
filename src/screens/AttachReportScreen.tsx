import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import ImagePlaceholder from "../../assets/icons/ImagePlaceholder.svg"
import CloseIcon from "../../assets/icons/Close.svg"
import AddIcon from "../../assets/icons/AddMore.svg"
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/type'
import * as DocumentPicker from "expo-document-picker"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import CustomLoadingModal from '../components/CustomLoadingModal'
import Color from '../constant/Color'

type File ={ 
  name:string ,
  uri:string ,
  type?:string,
  fileType:string,
}

const AttachReportScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [files, setFiles] = useState<File[]>([])
  const [loading ,setLoading] = useState(false)
  const ApplicationID = useSelector((state:RootState) => state.booking.applicatiionID)
  const API_URL = process.env.EXPO_PUBLIC_API_URL
  const handleSelection = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type:['image/*', 'application/pdf'],
        copyToCacheDirectory:true,
      })

      if (!result.canceled) {
        let obj = {
          name:result.assets[0].name,
          uri:result.assets[0].uri,
          type:result.assets[0].mimeType
        }

        const fileType = obj.type?.startsWith("image/") ? "image" : obj.type?.startsWith("application/pdf") ? "pdf" : "other";
        
        setFiles((prevState) => [...prevState, {...obj,fileType}])
      }
      else{
        console.log("Cancelled")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const removeFile = (index: number) => {
    setFiles((prevState) => prevState.filter((_, idx) => idx !== index));
  };
  

  const handleSubmit = async () => {

    if (loading) {
      return
    }

    let obj = {
      reports:files,
      medicalProgress:3,
      medicalDetailsStatus:"completed"
    }

    try {
      setLoading(true)
      const response = await fetch(API_URL+"/appointments/"+ApplicationID,{
        method:"PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })

      if (response.ok) {
        navigation.navigate("thankYou")
      }else{
        Alert.alert("Something went wrong!","Unable to add the documents")
      }

    } catch (error) {
      Alert.alert("Something went wrong!",(error as Error).message)
    }finally{
      setLoading(false)
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader header='Attach Reports' />
      <ScrollView>

      <View style={styles.subContainer}>
        <Text style={styles.primaryText}>Attach Reports</Text>
        
          {
            files.length > 0 ?
              <>
                {files.map((item,index) => 
                  <ReportItem
                    key={index}
                    index={index}
                    uri={item.uri}
                    fileType={item.fileType}
                    name={item.name}
                    type={item.type}
                    handleRemove={removeFile}
                  />

                )}
              </>
              :
              <View style={styles.imageContainer} >
              <TouchableOpacity activeOpacity={0.7} onPress={handleSelection} style={styles.placeholderContainer}>
                <ImagePlaceholder />
                <Text style={styles.placeholderText}>Upload pdf, png, jpg or svg file</Text>
              </TouchableOpacity>
          </View>
          }
        {
          files.length > 0 ?
        <TouchableOpacity onPress={handleSelection} style={styles.buttonContainer}>
          <AddIcon />
          <Text style={styles.labelText}>Add more</Text>
        </TouchableOpacity>
        : null
        }
      </View>
        {
          loading && 
          <CustomLoadingModal />
        }
      <CustomButton text="I'll fill later" labelStyle={{color:"#B4B4B4"}} containerStyle={{backgroundColor:"white"}} onPress={() =>navigation.navigate("skipScreen")} />
      <CustomButton disabled={!files.length} text="Submit" onPress={handleSubmit} />

      </ScrollView>
    </SafeAreaView>
  )
}

type ReportItemProp = {
  uri:string,
  name:string,
  type?:string,
  fileType:string,
  handleRemove:(index:number) => void,
  index:number

}

const ReportItem = ({ uri , name , type , fileType , handleRemove ,index}: ReportItemProp) => {

  return (
    <View style={{position:"relative"}}>
      {
        fileType === "image" ?
        <Image style={styles.image} source={{
          uri: uri
        }} />
        : fileType === "pdf"?
        <View style={styles.pdfContainer}>
            <Text>{name}</Text>
          </View>
          :
          <Text>Preview not availabale</Text>
      }
      
      <TouchableOpacity onPress={() => handleRemove(index)} style={styles.iconContainer}>
        <CloseIcon />
      </TouchableOpacity>
      </View>
  )
}


export default AttachReportScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    rowGap: 10,
    flex:1
  },
  primaryText: {
    fontSize: 16,
    fontFamily: "Nunito600"
  },
  imageContainer: {
    borderRadius: 16,
    aspectRatio: 2 / 1
  },
  placeholderContainer: {
    backgroundColor: "#EAF2EA",
    flex: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#97AB97",
    borderStyle: "dashed",
  },
  placeholderText: {
    textAlign: "center",
    fontFamily: "Nunito400",
    fontSize: 14,
  },
  image: {
    backgroundColor: "black",
    resizeMode: "contain",
    borderRadius: 16,
    aspectRatio:2/1
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 150,
    paddingVertical: 10
  },
  labelText: {
    fontSize: 14,
    fontFamily: "Nunito500",
    color: Color.primaryColor
  },
  pdfContainer:{
    borderWidth:1,
    paddingVertical:20,
    paddingHorizontal:16,
    borderRadius:20

  }
})