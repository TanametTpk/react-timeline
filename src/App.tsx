import React from 'react';
import './App.css';
import Timeline, { TimeEvent } from './components/Timeline'

function App() {

  const events: TimeEvent[] = [
    {
      backgroundColor: "red",
      date: "31/5/20",
      content: <div>
        now
      </div>
    },
    {
      backgroundColor: "red",
      date: "12/12/12",
      content: <div>
        hello
      </div>
    },
    {
      backgroundColor: "green",
      date: "12/11/12",
      content: <div>
        start
      </div>
    }
  ]

  return (
    <div style={{backgroundColor:"#f6f7f9"}}>
      <Timeline events={events} />
    </div>
  );
}

export default App;
