import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
function Layouts(props) {

    //console.log(userInfo);
    return ( 
    <>
        <div id="wrapper">
        <Sidebar/>
       <div id="content-wrapper" class="d-flex flex-column">
           <div id="content">
           <Header/>
            <div class="container-fluid">
            {props.children}
            </div>
           </div>
           <Footer/>
        </div>
        
        </div>
    
        </>);
}

export default Layouts;