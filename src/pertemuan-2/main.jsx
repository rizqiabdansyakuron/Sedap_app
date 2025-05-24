import { createRoot } from "react-dom/client";
import Artikel from "./ArtikelDetail";
// import HelloWorld from "./HelloWorld";
import Container from "./Container";

import './custom.css';



createRoot(document.getElementById("root"))
    .render(
       <div>
        <Container></Container><Artikel></Artikel>
        
            </div>
    )

