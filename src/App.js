import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Beg from  "./Components/Beg"
import Paper from "./Components/Paper"
import DownloadPage from './Components/download';
import {Routes,Route} from 'react-router-dom'
import Header from "./Components/Header";
import Test_image from "./Components/test"
import GeneratedImage from "./Components/GeneratedImage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Beg state={this.state}></Beg>}/>
          <Route path='paper' element={<Paper state={this.state}></Paper>}/>
          <Route exact path='result' element={<GeneratedImage/>}/>
          <Route path='download_image' element={<DownloadPage></DownloadPage>}/>
          {/* <Route path='test_image' element={<Test_image></Test_image>}/> */}
        </Routes>
      </div>
    );
  }
}

// <Beg state={this.state}></Beg>
//         <Paper></Paper>

export default App;
