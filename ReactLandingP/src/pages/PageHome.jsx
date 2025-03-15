import "./PageHome.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import HeaderOne from "../components/HeaderOne";
// import { useState, useEffect } from "react";


function PageHome() {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })

    return (
        
        <ReactLenis root>
           
           <HeaderOne />
                <main>
                    <br />
                    <section className="Introduction">
                        <h2>UX/UI Designer &</h2>
                        <h1>Creative Developer</h1>
                    </section>


                
                </main>

        </ReactLenis>


    )

}

export default PageHome