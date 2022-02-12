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

      {/* Guide List */}
      {guideList.map(guide => (
        <IonCard button key={guide.title}>
          <div className='guide-card'>
            <img className='guide-img' src="/assets/guide-image.webp" alt={guide.title} />
            <IonItem className='guide-card-item' lines='none'>
              <p className='guide-title'>{guide.title}</p>
            </IonItem>
            <IonIcon icon={copyOutline} className='guide-icon' />
          </div>
        </IonCard>
      ))}
    </>
  )
}

export default CookingGuides