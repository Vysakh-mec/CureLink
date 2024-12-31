import { createSlice , PayloadAction } from "@reduxjs/toolkit";


type Doctor = {
    name:string;
    specialist:string;
    video_consultation_fee:number;  
}
type Date = {
    day:string,
    month:string,
    weekdays:string,
    year:string
}
interface BookingState {
    concern: string | null;
    selectedDoctor: Doctor | null;
    medicalDetailsStatus: 'pending' | 'completed' ;
    medicalProgress: number;
    appointmentDate:Date | null;
    appointmentTime:string;
    consulatationType:string;
    applicatiionID:string
}


const initialState:BookingState= {
    concern:null,
    selectedDoctor:null,
    medicalDetailsStatus:'pending',
    medicalProgress:0,
    appointmentDate:null,
    appointmentTime:"",
    consulatationType:"",
    applicatiionID:""
}

const bookingSlice = createSlice({
    name:'booking',
    initialState,
    reducers:{
        setConcern(state,action:PayloadAction<string>) {
            state.concern = action.payload
        },
        setDoctor(state,action:PayloadAction<Doctor>) {
            state.selectedDoctor = action.payload
        },
        setAppointmentTime(state,action:PayloadAction<string>) {
            state.appointmentTime = action.payload
        },
        setMedicalDetailsStatus(state,action:PayloadAction<'pending' | 'completed'>) {
            state.medicalDetailsStatus = action.payload
        },
        setMedicalProgress(state,action:PayloadAction<number>) {
            state.medicalProgress = action.payload
        },
        setAppointmentDate(state,action:PayloadAction<Date>) {
            state.appointmentDate = action.payload
        },
        setConsultationType(state,action:PayloadAction<string>) {
            state.consulatationType = action.payload
        },
        setApplicationID(state,action:PayloadAction<string>){
            state.applicatiionID = action.payload
        }
    }
})


export const {setConcern , setDoctor, setAppointmentDate,setConsultationType,setAppointmentTime , setMedicalDetailsStatus , setMedicalProgress , setApplicationID} = bookingSlice.actions

export default bookingSlice.reducer