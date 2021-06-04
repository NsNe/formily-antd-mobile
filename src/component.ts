import { registerFormFields, registerFormComponent, registerFormItemComponent } from '@formily/react-schema-renderer';

import { Input } from './input';
import { Radio } from './radio';
import { Form, FormItem } from './Form';
import { Textarea } from './textarea';
import { Checkbox } from './checkbox';
import { DatePicker } from './datepicker';
import { NumPicker } from './numpicker';
import { MonthPicker } from './monthpicker';
import { FormBlock } from './block';
import { FormCard } from './card';
import { CheckboxOther } from './checkbox-other';
import { NumpickerRadioOther } from './numpicker-radio-other';
import { Upload } from './Upload';

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