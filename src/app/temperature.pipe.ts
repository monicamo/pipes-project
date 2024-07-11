import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): unknown {
    let val: number;

    if (!value)
      return value

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah')
    {
      outputTemp = val * (9/5) + 32;
    }
    else if (inputType === 'fah' && outputType === 'cel')
    {
      outputTemp =(val - 32) * (5/9);
    }
    else
    {
      outputTemp = val;
    }

    let symbol: '℃' | '℉';

    if (!outputType) {
      symbol = inputType === 'cel' ? '℃' : '℉';
    } else {
      symbol = outputType === 'cel' ? '℃' : '℉';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
