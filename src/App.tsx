import { useState, useRef, useEffect } from 'react'
import './App.css'
import { getFormattedHelp } from './data/help'
import { getFormattedEducation } from './data/education';
import { getFormattedSkills } from './data/skills';
import { getFormattedExperience } from './data/experience';
import { getFormattedPing } from './data/ping';
import { getFormattedProjects } from './data/projects';

const portfolioInfo = {
  name: "Radhey Detroja, Software Engineer: Full-stack developer with extensive experience in building robust web applications using MERN stack technologies. Proficient in TypeScript, PostgreSQL, and WebSocket for creating dynamic and interactive user experiences. Good command of data structures and algorithms. Skilled in Git and GitHub for version control, project management, and collaborative development. Passionate about delivering high-quality, scalable solutions that meet client needs and industry standards.",
  education: "Your Education",
  experience: [
    "Job Title 1 - Company 1 (Year - Year)",
    "Job Title 2 - Company 2 (Year - Year)"
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  projects: [
    "Project 1 - Description",
    "Project 2 - Description"
  ]
}

const asciiArt = `
██████╗  █████╗ ██████╗ ██╗  ██╗███████╗██╗   ██╗    ██████╗ ███████╗████████╗██████╗  ██████╗      ██╗ █████╗ 
██╔══██╗██╔══██╗██╔══██╗██║  ██║██╔════╝╚██╗ ██╔╝    ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗     ██║██╔══██╗
██████╔╝███████║██║  ██║███████║█████╗   ╚████╔╝     ██║  ██║█████╗     ██║   ██████╔╝██║   ██║     ██║███████║
██╔══██╗██╔══██║██║  ██║██╔══██║██╔══╝    ╚██╔╝      ██║  ██║██╔══╝     ██║   ██╔══██╗██║   ██║██   ██║██╔══██║
██║  ██║██║  ██║██████╔╝██║  ██║███████╗   ██║       ██████╔╝███████╗   ██║   ██║  ██║╚██████╔╝╚█████╔╝██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝
`

type HistoryItem = {
  text: string | string[];
  color: string;
  delay?: boolean;
}

function App() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { text: asciiArt, color: 'green' },
    { text: "Welcome to my portfolio! Type 'help' to see available commands.", color: 'blue' }
  ])
  const [input, setInput] = useState('')
  const [clearScreen, setClearScreen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (clearScreen) {
      setHistory([])
      setHistory([{ text: asciiArt, color: 'green' }, { text: "Welcome to my portfolio! Type 'help' to see available commands.", color: 'blue' }])
      setClearScreen(false)
    }
  }, [clearScreen])

  useEffect(() => {
    const scrollToBottom = () => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
    }

    const timeoutId = setTimeout(scrollToBottom, 0)

    return () => clearTimeout(timeoutId)
  }, [history])

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isProcessing) {
      setIsProcessing(true)
      const output = processCommand(input)
      setHistory(prev => [...prev, { text: `$ ${input}`, color: 'white' }])
      setInput('')

      if (output.delay) {
        for (const line of output.text) {
          await new Promise(resolve => setTimeout(resolve, 500))
          setHistory(prev => [...prev, { text: line, color: output.color }])
        }
      } else {
        setHistory(prev => [...prev, output])
      }
      setIsProcessing(false)
    }
  }

  const processCommand = (cmd: string): HistoryItem => {
    const lowerCmd = cmd.toLowerCase()
    switch (lowerCmd) {
      case 'help':
        return { 
          text: getFormattedHelp(),
          color: 'yellow' 
        }
      case 'cls':
        setClearScreen(true)
        return { text: '', color: 'white' }
      case 'whoami':
        return { text: portfolioInfo.name, color: 'green' }
      case 'education':
        return { 
        text: getFormattedEducation(),
        color: 'green' 
      }
      case 'experience':
        return { 
          text: getFormattedExperience(),
          color: 'green' 
        };
      case 'skills':
        return { 
          text: getFormattedSkills(),
          color: 'yellow' 
        };
      case 'projects':
        return { 
          text: getFormattedProjects(),
          color: 'green' 
        };
      case 'ping radhey.dev':
        return { 
          text: getFormattedPing(),
          color: 'blue',
          delay: true 
        };
      default:
        if (lowerCmd.startsWith('echo ')) {
          return { text: cmd.slice(5), color: 'blue' }
        }
        return { text: `Command not found: ${cmd}. Type 'help' for available commands.`, color: 'red' }
    }
  }

  return (
    <div className="terminal" onClick={handleTerminalClick}>
      <div className="terminal-output" ref={outputRef}>
      <pre className="ascii-art" style={{ fontSize: 'min(1.5vw, 10px)', lineHeight: '1', whiteSpace: 'pre' }}>{asciiArt}</pre>
        {history.slice(1).map((item, index) => (
          <div key={index} className={`color-${item.color}`}>
            {Array.isArray(item.text) 
              ? <pre dangerouslySetInnerHTML={{ __html: item.text.join('\n') }} />
              : <span dangerouslySetInnerHTML={{ __html: item.text }} />}
          </div>
        ))}
        <form onSubmit={handleSubmit}>
        <span style={{ fontSize: '16px' }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      </div>
    </div>
  )
}

export default App
