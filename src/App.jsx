import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App(){

    const route = window.location.pathname;

    if(route === '/projects') return <Projects/>
    else return <Home/>

}