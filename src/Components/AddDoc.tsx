import React, {useState} from 'react';
import {Box, Button, TextField} from "@material-ui/core";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../Firebase";
import {getFirestore} from "firebase/firestore/lite";


const AddDoc = (): JSX.Element => {
    const [coll, setColl] = useState('')
    const [firstField, setFirstField] = useState('')
    const [secondField, setSecondField] = useState('')
    const handlerClick = async () => {
        try {
            const docRef = await addDoc(collection(db, coll), {
                firstField,
                secondField
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (
        <Box bgcolor={"lightblue"}>
            <TextField  placeholder={"collection"} variant="outlined" value={coll}
                       onChange={(e) => {
                           setColl(e.target.value)
                       }}/>
            <TextField  placeholder={"firstField"} variant="outlined" value={firstField}
                       onChange={(e) => {
                           setFirstField(e.target.value)
                       }}/>
            <TextField  placeholder={"secondField"} variant="outlined" value={secondField}
                       onChange={(e) => {
                           setSecondField(e.target.value)
                       }}/>
            <Button onClick={() => {
                handlerClick()
            }}>
                AddDoc
            </Button>
        </Box>

    );
};

export default AddDoc;
