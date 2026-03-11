import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photo-preview',
  standalone: false,
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent {

  @Input() src: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() previewMode: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  constructor(@Optional() private modalCtrl: ModalController) {}

  get safeSrc(): string | null {

    if (!this.src) return null;

    if (this.src.includes('undefined')) return null;

    return this.src;

  }

  handleClick() {

    if (this.previewMode && this.modalCtrl) {
      this.modalCtrl.dismiss();
      return;
    }

    this.onClick.emit();

  }

}
