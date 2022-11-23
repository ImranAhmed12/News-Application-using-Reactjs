import React,{Component} from "react";
import NavBar from "./NavBar";
import News from "./News"
import NewsItem from "./NewsItem";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export default class App extends Component{
    render(){
        return(
            <>
               <BrowserRouter>
               <NavBar/>
                   <Routes>
                  
                       <Route path="/" element={<News category="all"/>}></Route>
                       <Route path="/science" element={<News category="Science"/>}></Route>
                       <Route path="/Technology" element={<News category="Technology"/>}></Route>
                       <Route path="/Sports" element={<News category="sports"/>}></Route>
                       <Route path="Politics" element={<News category="Politics"/>}></Route>
                       <Route path="jokes" element={<News category="jokes"/>}></Route>
                       <Route path="Education" element={<News category="Education"/>}></Route>
                       <Route path="Crime" element={<News category="/Crime"/>}></Route>
                       <Route path="Entertainment" element={<News category="/Entertainment"/>}></Route>
                   </Routes>
               </BrowserRouter>
               
            </>
        )
    }
}