import { createContext, useContext, useEffect, useState } from "react"

// candidate interface
export interface CandidateInfo {
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
      name: 'Taiga Aisaka',
      status: 'Hello',
      gender: 'Female',
      photo: '/assets/candidates/1.png'
    },
    {
      name: 'Ritsuko Akagi',
      status: 'Mantap',
      gender: 'Female',
      photo: '/assets/candidates/2.png'
    },
    {
      name: 'Mikasa Ackermann',
      status: 'Sasageyo',
      gender: 'Female',
      photo: '/assets/candidates/3.png'
    },
    {
      name: 'Annie Leonhart',
      status: 'World',
      gender: 'Female',
      photo: '/assets/candidates/4.png'
    },
    {
      name: 'Nezuko Kamado',
      status: 'Single',
      gender: 'Female',
      photo: '/assets/candidates/5.png'
    },
    {
      name: 'Sakura Haruno',
      status: 'Okay',
      gender: 'Female',
      photo: '/assets/candidates/6.png'
    },
    {
      name: 'Yuno Gasai',
      status: 'Busy!',
      gender: 'Female',
      photo: '/assets/candidates/7.png'
    },
    {
      name: 'Hange Zoe',
      status: 'Noice',
      gender: 'Female',
      photo: '/assets/candidates/8.png'
    },
    {
      name: 'Erza Scarlet',
      status: 'Nice',
      gender: 'Female',
      photo: '/assets/candidates/9.png'
    },
    {
      name: 'Nico Robin',
      status: 'Great',
      gender: 'Female',
      photo: '/assets/candidates/10.png'
    },
    {
      name: 'Emilia Tan',
      status: 'Perfect',
      gender: 'Female',
      photo: '/assets/candidates/11.png'
    },
    {
      name: 'Marin Kitagawa',
      status: 'Good bye',
      gender: 'Female',
      photo: '/assets/candidates/12.png'
    },
    {
      name: 'Naruto Uzumaki',
      status: 'Konoha',
      gender: 'Male',
      photo: '/assets/candidates/13.png'
    },
    {
      name: 'Sasuke Uchiha',
      status: 'Akatsuki',
      gender: 'Male',
      photo: '/assets/candidates/14.png'
    },
    {
      name: 'Eren Yeager',
      status: 'Good',
      gender: 'Male',
      photo: '/assets/candidates/15.png'
    },
    {
      name: 'Armin Arlert',
      status: 'Cool',
      gender: 'Male',
      photo: '/assets/candidates/16.png'
    },
    {
      name: 'Percy Jackson',
      status: 'Good morning',
      gender: 'Male',
      photo: '/assets/candidates/17.png'
    },
    {
      name: 'Kirigaya Kazuto',
      status: 'Swordman',
      gender: 'Male',
      photo: '/assets/candidates/18.png'
    },
    {
      name: 'Noel Noah',
      status: 'Football is my life',
      gender: 'Male',
      photo: '/assets/candidates/19.png'
    },
    {
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
    setCandidate((currCandidate) => currCandidate.filter((c) => c.name !== newTarget.name))
  }

  // remove from target, add back to candidate
  const removeTarget = (selectedTarget: CandidateInfo) => {
    setTarget((currTarget) => currTarget.filter((c) => c.name !== selectedTarget.name))
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
    }, 500)
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