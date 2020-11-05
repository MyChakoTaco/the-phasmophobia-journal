import { useState } from "react"
import './App.css';
import ghostData from "./data/phasmophobia_journal.json"
import EvidenceTab from "./components/Evidence_Tab.js"
import GhostGrid from "./components/Ghost_Grid.js"

function App() {
  const [data, setData] = useState(null)
  const [evidence, setEvidence] = useState([])
  const [ghost, setGhost] = useState(null)

  if (!data)
    setData(ghostData)

  return (
    <div className="App">
      <header className="App-header">
        The Phasmophobia Journal
      </header>
      <div className="App-body">
        {data ?
          <div className="App-body-content">
            <EvidenceTab
              evidenceData={data.ghost_evidences}
              ghostData={data.ghosts}
              evidence={evidence}
              setEvidence={setEvidence}
            />
            <GhostGrid
              evidenceData={data.ghost_evidences}
              ghostData={data.ghosts}
              evidence={evidence}
              ghost={ghost}
              setGhost={setGhost}
            />
          </div> :
          "👀 Uh Oh! Looks like there's some problem loading the journal. 👀"
        }
      </div>
      <footer className="App-footer">
        MyChakoTaco 11/3/2020
      </footer>
    </div>
  );
}

export default App;
