import { 
  IonCard,
  IonCol, 
  IonGrid,
  IonRow, 
  IonThumbnail
} from '@ionic/react'
import React from 'react'

import './SearchByType.css'

interface Types {
  name: string;
  image: string;
}

const types: Types[] = [
  {
    'name': 'Pork',
    'image': '',
  },
  {
    'name': 'Game',
    'image': '',
  },
  {
    'name': 'Beef',
    'image': '',
  },
  {
    'name': 'Poultry',
    'image': '',
  },
  {
    'name': 'Lamb',
    'image': '',
  },
  {
    'name': 'Seafood',
    'image': '',
  },
  {
    'name': 'Vegetables',
    'image': '',
  },
  {
    'name': 'Desserts',
    'image': '',
  },
  {
    'name': 'Other',
    'image': '',
  },
]

const SearchByTypes: React.FC = () => {
  return (
    <>
      {/* Divider */}
      <div className='type-divider'>
        Search by Type
      </div>

      {/* Types Grid */}
      <IonGrid>
        <IonRow>
          {types.map(t => (
            <IonCol sizeXs='4' key={t.name}>
              <IonCard className='type-card' button>
                <IonThumbnail className='type-thumbnail'>
                  <img src="/assets/type-image.webp" alt={t.name} />
                </IonThumbnail>
                <p className='type-content'>{t.name}</p>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  )
}

export default SearchByTypes