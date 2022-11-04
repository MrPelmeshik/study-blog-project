import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {MainContent} from "./components/main-content/MainContent";
import {InstagramBlock} from "./components/instagram-block/InstagramBlock";
import {Footer} from "./components/footer/Footer";

export function App() {
    return <>
        <Header />
        <Hero />
        <MainContent />
        <InstagramBlock />
        <Footer />
    </>
}
