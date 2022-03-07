import { createContext, useContext, useState } from "react"

export interface CandidateInfo {
  name: string
  gender: string
  photo: string
}

interface Context {
  candidate: CandidateInfo[]
  target: CandidateInfo[]
  addTarget: (candidate: CandidateInfo) => void
  removeTarget: (candidate: CandidateInfo) => void
}

// Default value for candidates
const defaultValue = {
  candidate: [],
  target: [],
  addTarget: () => {},
  removeTarget: () => {}
}

// Create context for candidate
const CandidateContext = createContext<Context>(defaultValue)

// Export context for other components to use
export const useCandidate = () => {
  return useContext(CandidateContext)
}

// Context provider
export const CandidateProvider: React.FC = ({ children }) => {

  const defaultCandidates = [
    {
      name: 'Taiga Aisaka',
      gender: 'Female',
      photo: '/assets/candidates/1.png'
    },
    {
      name: 'Ritsuko Akagi',
      gender: 'Female',
      photo: '/assets/candidates/2.png'
    },
    {
      name: 'Mikasa Ackermann',
      gender: 'Female',
      photo: '/assets/candidates/3.png'
    },
    {
      name: 'Annie Leonhart',
      gender: 'Female',
      photo: '/assets/candidates/4.png'
    },
    {
      name: 'Nezuko Kamado',
      gender: 'Female',
      photo: '/assets/candidates/5.png'
    },
    {
      name: 'Sakura Haruno',
      gender: 'Female',
      photo: '/assets/candidates/6.png'
    },
    {
      name: 'Yuno Gasai',
      gender: 'Female',
      photo: '/assets/candidates/7.png'
    },
    {
      name: 'Hange Zoe',
      gender: 'Female',
      photo: '/assets/candidates/8.png'
    },
    {
      name: 'Erza Scarlet',
      gender: 'Female',
      photo: '/assets/candidates/9.png'
    },
    {
      name: 'Nico Robin',
      gender: 'Female',
      photo: '/assets/candidates/10.png'
    },
    {
      name: 'Emilia Tan',
      gender: 'Female',
      photo: '/assets/candidates/11.png'
    },
    {
      name: 'Marin Kitagawa',
      gender: 'Female',
      photo: '/assets/candidates/12.png'
    },
  ]

  const [candidate, setCandidate] = useState<CandidateInfo[]>(defaultCandidates)
  const [target, setTarget] = useState<CandidateInfo[]>([])

  const addTarget = (newTarget: CandidateInfo) => {
    setTarget((currTarget) => currTarget.concat(newTarget))
    setCandidate((currCandidate) => currCandidate.filter((c) => c.name !== newTarget.name))
  }

  const removeTarget = (selectedTarget: CandidateInfo) => {
    setTarget((currTarget) => currTarget.filter((c) => c.name !== selectedTarget.name))
    setCandidate((currCandidate) => currCandidate.concat(selectedTarget))
  }

  return (
    <CandidateContext.Provider
      value={{
        candidate,
        target,
        addTarget,
        removeTarget
      }}
    >
      {children}
    </CandidateContext.Provider>
  )
}