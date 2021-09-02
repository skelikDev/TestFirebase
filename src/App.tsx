import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Box, Button, Container} from "@material-ui/core";
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {db} from "./Firebase";
import AddDoc from "./Components/AddDoc";
import AuthGoogle from "./Components/AuthGoogle";
import QuerySnapshot from "./Components/QuerySnapshot";

function App() {


    async function getCities() {
        const citiesCol = collection(db, 'testingCollectionID');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }


    return (
        <Container className="App">
           <Box flexDirection={'column'} >
               <AuthGoogle/>

               <AddDoc/>
               <QuerySnapshot/>
           </Box>

        </Container>
    )
}

export default App
