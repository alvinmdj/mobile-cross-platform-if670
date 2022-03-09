import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

// candidate interface
export interface CandidateInfo {
  id: string
  name: string
  status: string
  gender: string
  photo: string
}

// context interface
interface Context {
  candidate: CandidateInfo[]
  target: CandidateInfo[]
  isEmptyTarget: boolean
  addTarget: (candidate: CandidateInfo) => void
  removeTarget: (candidate: CandidateInfo) => void
}

// Default value for candidates
const defaultValue = {
  id: uuidv4(),
  candidate: [],
  target: [],
  isEmptyTarget: true,
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

  // dummy candidates
  const defaultCandidates = [
    {
      id: uuidv4(),
      name: 'Taiga Aisaka',
      status: 'Hello',
      gender: 'Female',
      photo: '/assets/candidates/1.png'
    },
    {
      id: uuidv4(),
      name: 'Ritsuko Akagi',
      status: 'Mantap',
      gender: 'Female',
      photo: '/assets/candidates/2.png'
    },
    {
      id: uuidv4(),
      name: 'Mikasa Ackermann',
      status: 'Sasageyo',
      gender: 'Female',
      photo: '/assets/candidates/3.png'
    },
    {
      id: uuidv4(),
      name: 'Annie Leonhart',
      status: 'World',
      gender: 'Female',
      photo: '/assets/candidates/4.png'
    },
    {
      id: uuidv4(),
      name: 'Nezuko Kamado',
      status: 'Single',
      gender: 'Female',
      photo: '/assets/candidates/5.png'
    },
    {
      id: uuidv4(),
      name: 'Sakura Haruno',
      status: 'Okay',
      gender: 'Female',
      photo: '/assets/candidates/6.png'
    },
    {
      id: uuidv4(),
      name: 'Yuno Gasai',
      status: 'Busy!',
      gender: 'Female',
      photo: '/assets/candidates/7.png'
    },
    {
      id: uuidv4(),
      name: 'Hange Zoe',
      status: 'Noice',
      gender: 'Female',
      photo: '/assets/candidates/8.png'
    },
    {
      id: uuidv4(),
      name: 'Erza Scarlet',
      status: 'Nice',
      gender: 'Female',
      photo: '/assets/candidates/9.png'
    },
    {
      id: uuidv4(),
      name: 'Nico Robin',
      status: 'Great',
      gender: 'Female',
      photo: '/assets/candidates/10.png'
    },
    {
      id: uuidv4(),
      name: 'Emilia Tan',
      status: 'Perfect',
      gender: 'Female',
      photo: '/assets/candidates/11.png'
    },
    {
      id: uuidv4(),
      name: 'Marin Kitagawa',
      status: 'Good bye',
      gender: 'Female',
      photo: '/assets/candidates/12.png'
    },
    {
      id: uuidv4(),
      name: 'Naruto Uzumaki',
      status: 'Konoha',
      gender: 'Male',
      photo: '/assets/candidates/13.png'
    },
    {
      id: uuidv4(),
      name: 'Sasuke Uchiha',
      status: 'Akatsuki',
      gender: 'Male',
      photo: '/assets/candidates/14.png'
    },
    {
      id: uuidv4(),
      name: 'Eren Yeager',
      status: 'Good',
      gender: 'Male',
      photo: '/assets/candidates/15.png'
    },
    {
      id: uuidv4(),
      name: 'Armin Arlert',
      status: 'Cool',
      gender: 'Male',
      photo: '/assets/candidates/16.png'
    },
    {
      id: uuidv4(),
      name: 'Percy Jackson',
      status: 'Good morning',
      gender: 'Male',
      photo: '/assets/candidates/17.png'
    },
    {
      id: uuidv4(),
      name: 'Kirigaya Kazuto',
      status: 'Swordman',
      gender: 'Male',
      photo: '/assets/candidates/18.png'
    },
    {
      id: uuidv4(),
      name: 'Noel Noah',
      status: 'Football is my life',
      gender: 'Male',
      photo: '/assets/candidates/19.png'
    },
    {
      id: uuidv4(),
      name: 'Jean Connie',
      status: 'Hello, world',
      gender: 'Male',
      photo: '/assets/candidates/20.png'
    },
  ]

  const [candidate, setCandidate] = useState<CandidateInfo[]>(defaultCandidates)
  const [target, setTarget] = useState<CandidateInfo[]>([])
  const [isEmptyTarget, setIsEmptyTarget] = useState(true)

  // add to target, remove from candidate
  const addTarget = (newTarget: CandidateInfo) => {
    setTarget((currTarget) => currTarget.concat(newTarget))
    setCandidate((currCandidate) => currCandidate.filter((c) => c.id !== newTarget.id))
  }

  // remove from target, add back to candidate
  const removeTarget = (selectedTarget: CandidateInfo) => {
    setTarget((currTarget) => currTarget.filter((c) => c.id !== selectedTarget.id))
    setCandidate((currCandidate) => currCandidate.concat(selectedTarget))
  }

  // clean up
  useEffect(() => {
    let isMounted = true
    setTimeout(() => {
      if (isMounted) {
        if (target.length > 0) setIsEmptyTarget(false)
        else setIsEmptyTarget(true)
      }
    }, 1000)
    return () => { isMounted = false }
  }, [target])

  return (
    <CandidateContext.Provider
      value={{
        candidate,
        target,
        isEmptyTarget,
        addTarget,
        removeTarget
      }}
    >
      {children}
    </CandidateContext.Provider>
  )
}