import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CameraService } from '../../../core/services/camera.service';
import { ModalController } from '@ionic/angular';
import { PhotoPreviewComponent } from '../photo-preview/photo-preview.component';

@Component({
  selector: 'app-photo-selector',
  standalone: false,
  templateUrl: './photo-selector.component.html',
  styleUrls: ['./photo-selector.component.scss']
})
export class PhotoSelectorComponent {
  @Input() fotoActual: string = '';
  @Output() onFotoSeleccionada = new EventEmitter<string>();
  @Output() onFotoEliminada = new EventEmitter<void>();

  constructor(private cameraService: CameraService, private modalCtrl: ModalController) {}

  async tomarFoto() {
    const foto = await this.cameraService.takePhoto();
    if (foto) this.onFotoSeleccionada.emit(foto);
  }

  async seleccionarGaleria() {
    const foto = await this.cameraService.pickFromGallery();
    if (foto) this.onFotoSeleccionada.emit(foto);
  }

  eliminarFoto() {
    this.fotoActual = '';
    this.onFotoEliminada.emit();
  }

  async openPreview() {

  if (!this.fotoActual) return;

  const modal = await this.modalCtrl.create({
    component: PhotoPreviewComponent,
    componentProps: {
      src: this.fotoActual,
      size: 'large',
      previewMode: true
    }
  });

  await modal.present();

}
}
