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
import 'antd-mobile/dist/antd-mobile.css';

import { setup } from './component';

setup();

export { createLinkageHandler } from './util';

export * from '@formily/react-schema-renderer';

export {
  Input,
  Radio,
  Form,
  FormItem,
  Textarea,
  Checkbox,
  DatePicker,
  NumPicker,
  MonthPicker,
  FormBlock,
  FormCard,
  CheckboxOther,
  NumpickerRadioOther,
}