import './App.css';
import { useState } from 'react';
import ReactMarkdown  from 'react-markdown';

export default function App() { 
  
  const [markdown, setMarkdown] = useState('# This is heading 1\n## This is heading 2\n### This is heading 3\n\nThis is *italics* , `coded`, **bold** texts.\n\n- this is bullet points\n- another point');

  return (
    <div className="app">
    <textarea onChange ={ (e)=> setMarkdown(e.target.value)} value={markdown}/>
    <ReactMarkdown className='preview' children={markdown}></ReactMarkdown>
  </div>
  )
}


