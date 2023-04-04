import './Home.css';

import React, { useState } from 'react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import {
    IonButton, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const takePicture = async () => {
    setLoading(true);
    try {
      const image: Photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        quality: 100,
        width: 512,
        height: 512,
        allowEditing: false,
        promptLabelCancel: "Cancelar",
        promptLabelHeader: "Foto",
        promptLabelPhoto: "Desde Mis Fotos",
        promptLabelPicture: "Tomar Foto",
      });
      console.log("image");
      console.log(image);

      if (image && image.dataUrl) {
        console.log("doing something");
      }
    } catch (exc) {
      console.log("foobarbaz");
      console.log(exc);
    }

    setLoading(false);
  };

  return (
    <IonPage>
      <IonLoading isOpen={loading} />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => takePicture()}></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
