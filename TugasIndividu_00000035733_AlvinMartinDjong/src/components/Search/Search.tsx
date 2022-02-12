import {
  IonContent,
  IonLabel,
  IonSearchbar, 
  IonSegment, 
  IonSegmentButton,
  IonToolbar,
} from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

import './Search.css'
import SearchCard from './SearchCard'

// Export for SearchCard component
export interface Item {
  title: string
  segment: string
  category: string
  time?: string
  image: string
}

// Sample item list (keyword: chicken)
const guideList: Item[] = [
  {
    title: 'Ultimate Chicken Breast',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Basic Chicken Breast',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Ultimate Chicken Thighs',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Foolproff Fried Chicken',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Juicy Grilled Chicken Leg',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Guide Boost: Green Curry Chicken',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Black Pepper Chicken, With Chef Gregory Gourdet',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
  {
    title: 'Herbed Chicken Breast, Broccoli, and Potatoes With Jef Nelson',
    segment: 'joule',
    category: 'Visual Doneness Guides',
    image: 'assets/doneness-image.webp',
  },
]
const justList = [
  {
    title: 'Chicken Leg',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour 15 minutes - 1 hour 45 minutes',
    image: 'assets/just-image.webp',
  },
  {
    title: 'Chicken Breast',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '45 minutes - 2 hour 15 minutes',
    image: '/assets/just-image.webp',
  },
  {
    title: 'Chicken Thighs',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 30 minutes',
    image: '/assets/just-image.webp',
  },
  {
    title: 'Chicken Wings',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 15 minutes',
    image: '/assets/just-image.webp',
  },
  {
    title: 'Chicken Liver',
    segment: 'joule',
    category: 'Just Time & Temp',
    time: '1 hour - 1 hour 30 minutes',
    image: '/assets/just-image.webp',
  },
]
const chefStepList = [
  {
    title: "Can't-F***-It-Up Fried Chicken",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '/assets/chefstep-image.webp',
  },
  {
    title: "Chicken Liver Pate",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: 'assets/chefstep-image.webp',
  },
  {
    title: "Sous Vide Chicken Breast",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '/assets/chefstep-image.webp',
  },
  {
    title: "Crispy Chicken Thighs Made Simple With Sous Vide",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '/assets/chefstep-image.webp',
  },
  {
    title: "Smokerless Smoked Chicken",
    segment: 'chefstep',
    category: 'ChefStep.com',
    image: '/assets/chefstep-image.webp',
  },
]

const Search: React.FC = () => {
  const history = useHistory()

  const [searchText, setSearchText] = useState<string>('');
  const [segment, setSegment] = useState<string | undefined>('all');
  
  // Set focus on searchbar at component mount
  const searchRef = useRef<HTMLIonSearchbarElement>(null);
  useEffect(() => {
    setTimeout(() => searchRef.current?.setFocus(), 100)
  }, [])

  // Back to home page
  const handleCancle = () => {
    setTimeout(() => {
      history.push('/page/Home')
    }, 100)
  }

  // Filter item list by search text & segment
  const handleSearch = (itemList: Item[]) => {
    return itemList.filter((item) => (
      item.title.toLowerCase().includes(searchText.toLowerCase())
    )).filter((searchItem) => (
      searchItem.segment === segment || segment === 'all'
    ))
  }

  const showSectionDivider = (itemList: Item[]) => {
    if (searchText === '') // if search text is empty, hide all sections
      return false
    else if (handleSearch(itemList).length === 0) // if search text is not empty, but no item matches, hide section
      return false
    else // if search text is not empty, and item matches, show section
      return true
  }

  return (
    <>
      {/* Toolbar */}
      <IonToolbar className='search-toolbar'>
        {/* Search bar */}
        <IonSearchbar
          className='search-bar'
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
        <IonSegment className='search-segment' mode='ios' value={segment} onIonChange={e => setSegment(e.detail.value)}>
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
        {/* Visual Doneness Guides Section */}
        {showSectionDivider(guideList) && 
        <div className='section-divider'>
          <p>Visual Doneness Guides</p>
        </div>}

        {/* Search Result for Visual Doneness Guides */}
        {searchText && handleSearch(guideList).map(item => (
          <SearchCard key={item.title} item={item} />
        ))}

        {/* Just Time & Temp Section */}
        {showSectionDivider(justList) && 
        <div className='section-divider'>
          <p>Just Time & Temp</p>
        </div>}

        {/* Search Result for Visual Doneness Guides */}
        {searchText && handleSearch(justList).map(item => (
          <SearchCard key={item.title} item={item} />
        ))}

        {/* ChefStep.com Section */}
        {showSectionDivider(chefStepList) && 
        <div className='section-divider'>
          <p>ChefStep.com</p>
        </div>}

        {/* Search Result for ChefStep.com */}
        {searchText && handleSearch(chefStepList).map(item => (
          <SearchCard key={item.title} item={item} />
        ))}
      </IonContent>
    </>
  )
}

export default Search