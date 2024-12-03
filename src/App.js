import React from "react";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

function App() {
    console.log("App.js 들어옴");
    return (
        <Layout>
            <Homepage />
        </Layout>
    );
}

export default App;
