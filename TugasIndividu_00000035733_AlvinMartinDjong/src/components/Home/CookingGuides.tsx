import { IonItem, IonItemDivider, IonLabel, IonThumbnail } from '@ionic/react'
import React from 'react'

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
      <IonItemDivider>
        <IonLabel>Cooking Guides</IonLabel>
      </IonItemDivider>

      {guideList.map(guide => (
        <IonItem key={guide.title}>
          <IonThumbnail slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt={guide.title} />
          </IonThumbnail>
          <IonLabel>{guide.title}</IonLabel>
        </IonItem>
      ))}
    </>
  )
}

export default CookingGuides