import React from "react";
import WORDS_API from "../utils/ApiConfig";

const Home = () => {
    WORDS_API.get("test/auth").then((response)=>{return (response.data);})
    .catch((rseponse) => {return(rseponse)});
    return (<div>
    </div>)
}

export default Home;