import { Component } from '@angular/core';
import Quill from 'quill';
import { VideoHandler, ImageHandler, Options } from 'ngx-quill-upload';

Quill.register('modules/imageHandler', ImageHandler);
Quill.register('modules/videoHandler', VideoHandler);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  upload = (file: File) => {
    return new Promise((resolve, reject) => {
      if (
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/jpg'
      ) {
        // File types supported for image
        if (file.size < 1000000) {
          // Customize file size as per requirement

          // Sample API Call
          setTimeout(() => {
            resolve(
              'data:image/jpeg;base64,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'
            );
          }, 3000);
        } else {
          reject('Size too large');
          // Handle Image size large logic
        }
      } else {
        reject('Unsupported type');
        // Handle Unsupported type logic
      }
    });
  };

  private toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
    ['image'],
  ];
  modules = {
    toolbar: this.toolbarOptions,
    imageHandler: {
      upload: this.upload,
      accepts: ['png', 'jpg', 'jpeg', 'jfif'], // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
    } as Options,
    videoHandler: {
      upload: this.upload,
      accepts: ['mpeg', 'avi'], // Extensions to allow for videos (Optional) | Default - ['mp4', 'webm']
    } as Options,
  };
}
