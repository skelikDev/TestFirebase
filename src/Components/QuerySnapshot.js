import React, { useState } from 'react';
import { db } from "../Firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { Box, Button, TextField } from "@material-ui/core";
const QuerySnapshot = () => {
    const [querySnapshotText, setQuery] = useState('');
    const handler = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, querySnapshotText));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        }
        catch (e) {
            console.error("Error getting Snapshot: ", e);
        }
    };
    return (React.createElement(Box, { bgcolor: 'lightpink' },
        React.createElement(TextField, { value: querySnapshotText, onChange: (e) => {
                setQuery(e.target.value);
            }, placeholder: "QuerySnapshot" }),
        React.createElement(Button, { onClick: () => {
                handler();
            } }, "GetSnapshot")));
};
export default QuerySnapshot;
