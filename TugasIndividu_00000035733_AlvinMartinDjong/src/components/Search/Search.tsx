import {
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonSearchbar, 
  IonSegment, 
  IonSegmentButton,
  IonThumbnail,
  IonToolbar,
} from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

import './Search.css'

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
  const history = useHistory()

  const [searchText, setSearchText] = useState<string>('');

  const searchRef = useRef<HTMLIonSearchbarElement>(null);

  useEffect(() => {
    setTimeout(() => searchRef.current?.setFocus(), 100)
  }, [])

  const handleCancle = () => {
    setTimeout(() => {
      history.push('/page/Home')
    }, 100)
  }

  return (
    <>
      <IonToolbar className='search-toolbar'>
        {/* Search bar */}
        <IonSearchbar
          ref={searchRef}
          mode='ios'
          clearIcon={closeOutline}
          showClearButton='always'
          showCancelButton='always'
          cancelButtonText='Cancel'
          animated
          value={searchText}
          onIonCancel={handleCancle}
          onIonChange={e => setSearchText(e.detail.value!)} 
        />

        {/* Segments */}
        <IonSegment mode='ios' className='search-segment' value={'all'}>
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
      </IonToolbar>

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