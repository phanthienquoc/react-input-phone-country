import { forwardRef } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const PhoneInput = forwardRef((props, ref) => {
    return <IntlTelInput ref={ref} {...props} />
})

export default PhoneInput;