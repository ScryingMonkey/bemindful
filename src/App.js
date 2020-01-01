import React, { useState } from "react";
import logo from "./assets/circle.svg";
import "./App.css";
import { useFirestoreCollectionData, useFirestore } from "reactfire";
import { Header, PageLayout, RoadList } from "./components/_index";

// const [roads, setRoads] = useState([
//   {
//     id: 1234,
//     name: "Suspense Dr",
//     state: "Alaska",
//     votes: 2
//   },
//   {
//     id: 1235,
//     name: "Double Suspense Dr",
//     state: "Alaska",
//     votes: 4
//   }
// ]);
const appTitle = "beMindful";

function App() {
  const firestore = useFirestore();
  const query = firestore().collection("roads");
  const roads = useFirestoreCollectionData(query);

  // // create a document reference
  // const burritoRef = firestore()
  //   .collection('tryreactfire')
  //   .doc('burrito');

  // // subscribe to the doc. just one line!
  // const burrito = useFirestoreDocData(burritoRef);

  return (
    <div className="App">
      <Header logo={logo} appTitle={appTitle} />

      <PageLayout>
        <RoadList roads={roads} />
      </PageLayout>
    </div>
  );
}
export default App;
