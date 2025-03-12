import "./PageHome.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
// import { useState, useEffect } from "react";


function PageHome() {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })

    return (

        <ReactLenis root>
            <main>
                <div className="rectangle"></div>


            
            </main>
        </ReactLenis>


    )

}

export default PageHome