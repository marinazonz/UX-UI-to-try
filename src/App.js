import {
    Footer,
    Blog,
    Possibility,
    Features,
    WhatGPT3,
    Header,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";

import "./App.css";

function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;

// command + w - close the window
