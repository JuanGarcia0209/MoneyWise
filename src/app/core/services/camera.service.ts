import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CameraService {
  async takePhoto(): Promise<string | null> {
    try {
      try {
        const pwa = await import('@ionic/pwa-elements/loader');
        if (pwa?.defineCustomElements) pwa.defineCustomElements(window);
      } catch {}

      const { Camera, CameraResultType, CameraSource } = await import('@capacitor/camera');
      const photo = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      } as any);

      const base64 = (photo as any)?.base64String ?? (photo as any)?.dataUrl?.split(',')[1];
      const format = (photo as any)?.format ?? 'jpeg';
      if (!base64) return null;
      return `data:image/${format};base64,${base64}`;
    } catch (err) {
      console.warn('Camera not available or failed', err);
      return null;
    }
  }

  async pickFromGallery(): Promise<string | null> {
    try {
      try {
        const pwa = await import('@ionic/pwa-elements/loader');
        if (pwa?.defineCustomElements) pwa.defineCustomElements(window);
      } catch {}

      const { Camera, CameraResultType, CameraSource } = await import('@capacitor/camera');
      const photo = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
      } as any);

      const base64 = (photo as any)?.base64String ?? (photo as any)?.dataUrl?.split(',')[1];
      const format = (photo as any)?.format ?? 'png';
      if (!base64) return null;
      return `data:image/${format};base64,${base64}`;
    } catch (err) {
      console.warn('Gallery not available or failed', err);
      return null;
    }
  }
}
// import { Injectable } from '@angular/core';
// import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';

// @Injectable({
//   providedIn: 'root'
// })
// export class CameraService {
//   constructor() {}

//   async takePhoto(): Promise<string> {
//     const photo = await Camera.getPhoto({
//       quality: 80,
//       resultType: CameraResultType.Base64,
//       source: CameraSource.Camera
//     });
//     return photo.base64String ? `data:image/${photo.format};base64,${photo.base64String}` : '';
//   }

//   async pickFromGallery(): Promise<string> {
//     const photo = await Camera.getPhoto({
//       quality: 80,
//       resultType: CameraResultType.Base64,
//       source: CameraSource.Photos
//     });
//     return photo.base64String ? `data:image/${photo.format};base64,${photo.base64String}` : '';
//   }

//   // opcional: guardar en filesystem y retornar path
//   async saveBase64AsFile(base64Data: string, fileName = `${new Date().getTime()}.jpeg`): Promise<string> {
//     try {
//       const saved = await Filesystem.writeFile({
//         path: fileName,
//         data: base64Data,
//         directory: Directory.Data
//       });
//       return saved.uri;
//     } catch (err) {
//       console.error('Error saving file', err);
//       throw err;
//     }
//   }
// }
