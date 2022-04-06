import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useHistory } from 'react-router';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@react-google-maps/api';
import MemoriesContext from '../data/memories-context';
import './NewMemory.css';

async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string')
      }
    };
    reader.readAsDataURL(blob);
  });
};

const NewMemory: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);
  const history = useHistory();

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined, // will store original URL
    preview: string, // will store preview URL for web
  }>();
  const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good');
  const titleRef = useRef<HTMLIonInputElement>(null);
  
  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    });
    console.log(photo);

    if (!photo || /* !photo.path || */ !photo.webPath) {
      return;
    }

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath,
    });
  };

  const addMemoryHandler = async () => {
    const enteredTitle = titleRef.current?.value;
    if (!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto) {
      console.log('Entered title: ', enteredTitle);
      console.log('Taken photo:', takenPhoto);
      console.log(`Lat, Lng: ${lat}, ${lng}`);
      return;
    }

    const fileName = new Date().getTime() + '.jpeg';
    const base64 = await base64FromPath(takenPhoto!.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    memoriesCtx.addMemory(fileName, base64, enteredTitle.toString(), chosenMemoryType, lat, lng);
    chosenMemoryType === 'good' ? history.push('/tabs/good') : history.push('/tabs/bad');
  };

  const selectPosition = (e: google.maps.MapMouseEvent) => {
    if (e.latLng?.lat()) { setLat(e.latLng?.lat()); }
    if (e.latLng?.lng()) { setLng(e.latLng?.lng()); }
  }

  useEffect(() => {
    const getCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
      setLat(coordinates.coords.latitude);
      setLng(coordinates.coords.longitude);
    };
    getCurrentPosition();
  }, []);

  const containerStyle = {
    margin: 'auto',
    width: '90%',
    height: '90%',
    maxWidth: '320px',
    maxHeight: '320px',
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Add New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Memory Title</IonLabel>
              <IonInput type='text' ref={titleRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonSelect onIonChange={selectMemoryTypeHandler} value={chosenMemoryType}>
              <IonSelectOption value='good'>Good Memory</IonSelectOption>
              <IonSelectOption value='bad'>Bad Memory</IonSelectOption>
            </IonSelect>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='ion-text-center'>
            <div className="image-preview">
              {!takenPhoto && <h3>No photo chosen.</h3>}
              {takenPhoto && <img src={takenPhoto.preview} alt='Preview' />}
            </div>
            <IonButton fill='clear' onClick={takePhotoHandler}>
              <IonIcon slot='start' icon={camera} />
              <IonLabel>Take Photo</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
        <GoogleMap
          mapContainerStyle={ containerStyle }
          center={{ lat, lng }}
          zoom={18}
          onClick={selectPosition}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
        <IonRow className='ion-margin-top'>
          <IonCol className='ion-text-center'>
            <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonApp>
  );
};

export default NewMemory;