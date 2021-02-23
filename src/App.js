import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import axios from 'axios';
 
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [data, setData] = useState({questions: []});

  useEffect(() => {
    loadData();
  },[])

  async function loadData() {
    const quizData = await axios.get(endPoint);

    setData({questions: quizData.data.results});
  }
  return (
    <div className="App">
      <SplitterLayout>
        <div><Quiz /></div>
        <div><Quiz /></div>
      </SplitterLayout>
    </div>
  );
}

export default App;
