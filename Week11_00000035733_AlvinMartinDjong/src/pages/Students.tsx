import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import app from '../firebaseConfig';

const Students = () => {
  const nim = useRef<HTMLIonInputElement>(null);
  const nama = useRef<HTMLIonInputElement>(null);
  const prodi = useRef<HTMLIonInputElement>(null);

  const [disabled, setDisabled] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileName, setFileName] = useState('');

  const [students, setStudents] = useState<Array<any>>([]);

  const db = getFirestore(app);
  const storage = getStorage(app);

  const addData = async (url: string) => {
    try {
      const docRef = await addDoc(collection(db, 'students'), {
        nim: nim.current?.value,
        nama: nama.current?.value,
        prodi: prodi.current?.value,
        foto: fileName,
        fotoUrl: url,
      });
      console.log('Document written with ID: ', docRef.id);
      getData();
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target!.files![0]);
    setFileName(event.target!.files![0].name);
  };

  const insertHandler = async () => {
    setDisabled(true);
    const storageRef = ref(storage, fileName);
    uploadBytes(storageRef, selectedFile as Blob).then((snapshot) => {
      console.log('upload file success:', snapshot);
      getDownloadURL(ref(storage, fileName)).then((url) => {
        addData(url);
        console.log('file stored at', url);
        setDisabled(false);
      });
    });
  };

  const getData = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'students'));
    console.log('querySnapshot:', querySnapshot);
    setStudents(querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    }));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log('doc:', doc);
    });
  }, [db]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {students.map((student) => (
            <IonItem key={student.id}>
              <IonAvatar slot='start'>
                <img src={student.fotoUrl} alt={student.foto} />
              </IonAvatar>
              <IonLabel>
                {student.nim}<br />
                {student.nama}<br />
                {student.prodi}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonLabel position='floating'>NIM</IonLabel>
          <IonInput ref={nim} />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Nama</IonLabel>
          <IonInput ref={nama} />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Prodi</IonLabel>
          <IonInput ref={prodi} />
        </IonItem>
        <IonItem>
          <input type='file' onChange={fileChangeHandler} />
        </IonItem>
        <IonButton disabled={disabled} onClick={insertHandler}>Save student data</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Students;