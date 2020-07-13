import { extend, localize } from 'vee-validate';
import { required, min, digits } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

extend('required', required);
extend('min', min);
extend('digits', digits);

localize('en', en);
