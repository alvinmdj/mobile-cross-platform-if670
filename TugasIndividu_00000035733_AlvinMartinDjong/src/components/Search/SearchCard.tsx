import { IonCard } from '@ionic/react'
import React from 'react'
import { Item } from './Search'

interface Props {
  item: Item;
}

const SearchCard: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <IonCard button>
        <div className='search-card'>
          <img
            className={item.category !== 'Visual Doneness Guides' ? 'rounded-image' : ''} 
            src={item.image ? item.image : "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"}
            alt={item.title}
            width={80}
          />
          <div className='search-item'>
            <span className='search-title'>{item.title}</span>
            <br />
            <span className='search-category'>{item.time ? item.time : item.category}</span>
          </div>
        </div>
      </IonCard>
    </div>
  )
}

export default SearchCard