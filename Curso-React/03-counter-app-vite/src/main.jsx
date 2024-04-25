import { React } from 'react';
import { createRoot } from "react-dom/client"; 
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';




const root = createRoot(document.getElementById('root'));
root.render( 
        //<FirstApp title = 'Hola G, 123' subtitle = { 500 } value={555}/>
        <CounterApp value={20} />
);



/*obsoleto
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);*/