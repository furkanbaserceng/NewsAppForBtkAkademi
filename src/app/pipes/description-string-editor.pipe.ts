import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionStringEditor'
})
export class DescriptionStringEditorPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,100);
  }

}
