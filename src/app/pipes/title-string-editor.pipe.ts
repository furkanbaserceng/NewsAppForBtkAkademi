import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleStringEditor'
})
export class TitleStringEditorPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,60);
  }

}
