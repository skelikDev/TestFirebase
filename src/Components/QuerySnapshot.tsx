import React, {useState} from 'react';
import {db} from "../Firebase";
import {collection} from "firebase/firestore";
import {getDocs} from "firebase/firestore";
import {Box, Button, TextField} from "@material-ui/core";


const QuerySnapshot = (): JSX.Element => {
    const [querySnapshotText, setQuery] = useState('')
    const handler = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, querySnapshotText));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            })
        } catch (e) {
            console.error("Error getting Snapshot: ", e);
        }

    }

    return (
        <Box bgcolor={'lightpink'}>
            <TextField value={querySnapshotText} onChange={(e) => {
                setQuery(e.target.value)
            }} placeholder={"QuerySnapshot"}/>
            <Button onClick={() => {
                handler()
            }}>GetSnapshot</Button>
        </Box>
    );
};

export default QuerySnapshot;
