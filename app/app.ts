import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, PipeTransform} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Pipe({ name: 'byteFormat'})
class ByteFormatPipe implements PipeTransform {
  // Credit: http://stackoverflow.com/a/18650828
  transform(bytes, args) {
    if(bytes == 0) return '0 Bytes';
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  }
}

@Component({
  selector: 'app',
  pipes: [ByteFormatPipe],
  template: `
   <div class="container">
        <h1>Hello Electron</h1>
  </div>
  ` 
})

export class App {
  constructor() {}
  }
}

bootstrap(App);