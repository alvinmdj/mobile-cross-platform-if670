import {
  IonCard,
  IonIcon,
  IonItem,
} from '@ionic/react'
import { copyOutline } from 'ionicons/icons'
import React from 'react'

import './CookingGuides.css'
interface Guide {
  title: string,
  image: string
}

const guideList: Guide[] = [
  {
    title: 'Welcome Guides: Hello UK Cooks',
    image: ''
  },
  {
    title: 'Sunday Roast Centerpieces',
    image: ''
  },
  {
    title: 'Batch Cook Like a Pro',
    image: ''
  },
  {
    title: 'Quick & Easy',
    image: ''
  },
  {
    title: 'Guide Boosts',
    image: ''
  },
  {
    title: 'Cook in a Jar - No Bag Required!',
    image: ''
  },
  {
    title: 'All the Guides',
    image: ''
  },
]

const CookingGuides: React.FC = () => {
  return (
    <>
      {/* Divider */}
      <div className='guide-divider'>
        Cooking Guides
      </div>

      {guideList.map(guide => (
        <IonCard class='guide-card' key={guide.title}>
          <img className='guide-img' src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt={guide.title} />
          <IonItem lines='none'>
            <p className='guide-title'>{guide.title}</p>
          </IonItem>
          <IonIcon icon={copyOutline}></IonIcon>
        </IonCard>
      ))}
    </>
  )
}

export default CookingGuides