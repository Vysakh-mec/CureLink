import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
    concern: string | null;
    selectedDoctor: object | null;
    appointment: {
        date: string ;
        time: string ;
    };
    medicalDetailsStatus: 'pending' | 'uploading' | 'completed' | 'skipped';
    skipStep: number;
}


const initialState:BookingState= {
    concern:null,
    selectedDoctor:null,
    appointment:{
        date:"",
        time:""
    },
    medicalDetailsStatus:'pending',
    skipStep:0,
}

const bookingSlice = createSlice({
    name:'booking',
    initialState,
    reducers:{
        setConcern(state,action:PayloadAction<string>) {
            state.concern = action.payload
        },
        setDoctor(state,action:PayloadAction<any>) {
            state.selectedDoctor = action.payload
        },
        setAppointment(state,action:PayloadAction<{date:string,time:string}>) {
            state.appointment = action.payload
        },
        setMedicalDetailsStatus(state,action:PayloadAction<'pending' | 'uploading' | 'completed' | 'skipped'>) {
            state.medicalDetailsStatus = action.payload
        },
        setSkipStep(state,action:PayloadAction<number>) {
            state.skipStep = action.payload
        }
    }
})


export const {setConcern , setDoctor , setMedicalDetailsStatus , setSkipStep} = bookingSlice.actions

export default bookingSlice.reducer