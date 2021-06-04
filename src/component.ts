import { registerFormFields, registerFormComponent, registerFormItemComponent } from '@formily/react-schema-renderer';

import { Input } from './Input';
import { Radio } from './Radio';
import { Form, FormItem } from './Form';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';
import { DatePicker } from './DatePicker';
import { NumPicker } from './NumPicker';
import { MonthPicker } from './MonthPicker';
import { FormBlock } from './Block';
import { FormCard } from './Card';
import { CheckboxOther } from './CheckboxOther';
import { NumpickerRadioOther } from './NumpickerRadioOther';
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