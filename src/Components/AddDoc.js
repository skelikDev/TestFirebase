import React, { useState } from 'react';
import { Box, Button, TextField } from "@material-ui/core";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
const AddDoc = () => {
    const [coll, setColl] = useState('');
    const [firstField, setFirstField] = useState('');
    const [secondField, setSecondField] = useState('');
    const handlerClick = async () => {
        try {
            const docRef = await addDoc(collection(db, coll), {
                firstField,
                secondField
            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (React.createElement(Box, { bgcolor: "lightblue" },
        React.createElement(TextField, { placeholder: "collection", variant: "outlined", value: coll, onChange: (e) => {
                setColl(e.target.value);
            } }),
        React.createElement(TextField, { placeholder: "firstField", variant: "outlined", value: firstField, onChange: (e) => {
                setFirstField(e.target.value);
            } }),
        React.createElement(TextField, { placeholder: "secondField", variant: "outlined", value: secondField, onChange: (e) => {
                setSecondField(e.target.value);
            } }),
        React.createElement(Button, { onClick: () => {
                handlerClick();
            } }, "AddDoc")));
};
export default AddDoc;
