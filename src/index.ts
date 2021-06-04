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