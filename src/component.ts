import { registerFormFields, registerFormComponent, registerFormItemComponent } from '@formily/react-schema-renderer';

import { Input } from './input';
import { Radio } from './radio';
import { Form, FormItem } from './form';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';
import { DatePicker } from './date-picker';
import { NumPicker } from './num-picker';
import { MonthPicker } from './moth-picker';
import { FormBlock } from './block';
import { FormCard } from './card';
import { CheckboxOther } from './checkbox-other';
import { NumpickerRadioOther } from './num-picker-radio-other';
import { Upload } from './upload';

export const setup = () => {
  registerFormFields(
    {
      'input': Input,
      'checkbox': Checkbox,
      'radio': Radio,
      'datepicker': DatePicker,
      'numpicker': NumPicker,
      'monthpicker': MonthPicker,
      'textarea': Textarea,
      'checkbox-other': CheckboxOther,
      'numpicker-radio-other': NumpickerRadioOther,
      'block': FormBlock,
      'card': FormCard,
      'upload': Upload,
    }
  );

  registerFormComponent(Form);

  registerFormItemComponent(FormItem);
}