import "./../style/reset/reset.css"
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import BestSellers from "./BestSellers/BestSellers";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Home linksToProps={props.data.categories.links}/>
            <BestSellers/>

        </div>
    );
}

export default App;
