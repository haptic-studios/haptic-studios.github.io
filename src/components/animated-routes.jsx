import { Routes, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import Home from './home';
import About from './about';
import Games from './games';
import NoMatch from './no-match';

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/games" element={<Games />}/>
                {/* Catchall route*/}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AnimatePresence>
    )
}