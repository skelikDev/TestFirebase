import React from 'react';
import './App.css';
import { Box, Container } from "@material-ui/core";
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "./Firebase";
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
    return (React.createElement(Container, { className: "App" },
        React.createElement(Box, { flexDirection: 'column' },
            React.createElement(AuthGoogle, null),
            React.createElement(AddDoc, null),
            React.createElement(QuerySnapshot, null))));
}
export default App;
