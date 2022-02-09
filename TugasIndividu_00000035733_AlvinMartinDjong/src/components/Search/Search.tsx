import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonSearchbar, 
  IonSegment, 
  IonSegmentButton,
  IonThumbnail,
} from '@ionic/react'
import React, { useState } from 'react'

interface Item {
  title: string
  segment: string
  category: string
  time?: string
  image: string
}

const itemList: Item[] = [
  {
    title: 'Ultimate Chicken Breast',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Basic Chicken Breast',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Ultimate Chicken Thighs',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Foolproff Fried Chicken',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Juicy Grilled Chicken Leg',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Guide Boost: Green Curry Chicken',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Black Pepper Chicken, With Chef Gregory Gourdet',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Herbed Chicken Breast, Broccoli, and Potatoes With Jef Nelson',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: '',
  },
  {
    title: 'Chicken Leg',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour 15 minutes - 1 hour 45 minutes',
    image: '',
  },
  {
    title: 'Chicken Breast',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '45 minutes - 2 hour 15 minutes',
    image: '',
  },
  {
    title: 'Chicken Thighs',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 30 minutes',
    image: '',
  },
  {
    title: 'Chicken Wings',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 15 minutes',
    image: '',
  },
  {
    title: 'Chicken Liver',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 30 minutes',
    image: '',
  },
  {
    title: "Can't-F***-It-Up Fried Chicken",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '',
  },
  {
    title: "Chicken Liver Pate",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '',
  },
  {
    title: "Sous Vide Chicken Breast",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '',
  },
  {
    title: "Crispy Chicken Thighs Made Simple With Sous Vide",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '',
  },
  {
    title: "Smokerless Smoked Chicken",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '',
  },
]

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <>
      <IonHeader>
        {/* Search bar */}
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} />

        {/* Segments */}
        <IonSegment value={'all'}>
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="joule">
            <IonLabel>Joule App</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="chefstep">
            <IonLabel>ChefSteps.com</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>

      <IonContent fullscreen>
        {/* Divider */}
        <IonItemDivider>
          <IonLabel>Visual Doneness Guides</IonLabel>
        </IonItemDivider>

        {/* Search Result */}
        {itemList.map(item => (
          <IonItem key={item.title}>
            <IonThumbnail slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt={item.title} />
            </IonThumbnail>
            <IonLabel>
              <h2>{item.title}</h2>
              <p>{item.time ? item.time : item.category}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonContent>
    </>
  )
}

export default Search