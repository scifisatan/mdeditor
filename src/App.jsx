import './App.css';
import { useState } from 'react';
import ReactMarkdown  from 'react-markdown';
export default function App() { 

    const [markdown, setMarkdown] = useState('#sup');

  return (
    <div className="app">
    <textarea onChange ={ (e)=> setMarkdown(e.target.value)} value={markdown}/>
    <ReactMarkdown className='preview' children={markdown}></ReactMarkdown>
  </div>
  )
}


