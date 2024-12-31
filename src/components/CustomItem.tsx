import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../constant/Color';

type CustomItemProps = {
    type:string;
    date?:Date;
    time?:string;
    active?:boolean;
    handlePress:Function;
}
type Date = {
    day:string,
    month:string,
    weekdays:string,
    year:string,
}


const CustomItem = ({ type , date , time, active, handlePress} : CustomItemProps) => {
    
    return (
        <TouchableOpacity onPress={() => handlePress(type == "date" ? date : time)} activeOpacity={0.8} style={[styles.container, active ?  styles.activeContainer : null]}>
            <Text style={[styles.primaryText,active ? styles.activeText : null]}>
                {
                    type == "date" ? date?.day+" "+date?.month : time
                }
            </Text>
            {
                type == "date" && 
                <Text style={[styles.secondaryText,active ? styles.activeText : null]}>{date?.weekdays}</Text>
            }
        </TouchableOpacity>
    )
}

export default CustomItem

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        backgroundColor:"#FAFAFA",
        borderRadius:16,
        width:"32%",
        justifyContent:"center"
    },
    primaryText:{
        fontSize:14,
        fontFamily:"Nunito400",
        color:"black"
    },
    secondaryText:{
        fontSize:12,
        fontFamily:"Nunito500",
        color:"black"
    },
    activeContainer:{
        backgroundColor:Color.primaryColor
    },
    activeText:{
        color:"white"
    }
})