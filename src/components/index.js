import Homepage from "../pages/Homepage"
import Layout from "./Layout";

const Homepage = () => {
    console.log("layout");
    window.alert("layout 들어옴");
    return (
        <Layout>
            <Homepage/>
        </Layout>
    )
}

export default Homepage