import { 
  IonCard, 
  IonCardContent,
  IonCol, 
  IonGrid,
  IonRow 
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
              <IonCard>
                <IonCardContent>
                  {t.name}
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  )
}

export default SearchByTypes