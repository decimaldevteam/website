import Home from './pages/Home';
import Projects from './pages/Projects';
import News from './pages/News';

export default function App(){

    const route = window.location.pathname;

    if(route === '/projects') return <Projects/>
    else if(route === '/news') return <News/>
    else return <Home/>

}