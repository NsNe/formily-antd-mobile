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