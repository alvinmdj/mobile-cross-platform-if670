import { 
  IonCard, 
  IonCardContent,
  IonCol, 
  IonGrid, 
  IonItemDivider, 
  IonLabel, 
  IonRow 
} from '@ionic/react'
import React from 'react'

interface Types {
  name: string;
  image: string;
}

const FoodTypes: React.FC = () => {
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

  return (
    <>
      {/* Divider */}
      <IonItemDivider>
        <IonLabel>Search by Type</IonLabel>
      </IonItemDivider>

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

export default FoodTypes