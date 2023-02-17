import './App.css';
import Blog from './pages/Blog';
import CalcReducer from './pages/CalcReducer';
import NavBar from './components/NavBar';

import {
    Route,
    Routes,
    useParams,
} from "react-router-dom";

function User() {
   const params = useParams();
   console.log(params);
    return (
        <h1> user {params.id}</h1>
    )
}

function App() {
    return (
        <div className="App-main" style={{ padding: 8 }}>
            <NavBar />
            <Routes>
                <Route path='/' element={<h1>Home</h1>} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/user/:id' element={<User />} />
                <Route path='/incr' element={<CalcReducer />} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </div>
    )
}
export default App;
