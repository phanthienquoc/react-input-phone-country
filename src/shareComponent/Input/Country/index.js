import React, { useEffect, useRef, useState } from 'react';
import IntlTelInput from 'react-intl-tel-input';

const CountrySelect = (props) => {
    const [options, setOptions] = useState([]);
    const countryPhoneRef = useRef()
    useEffect(() => {
        if (countryPhoneRef.current.tel) {
            let listCountries = countryPhoneRef.current.countries;
            listCountries = listCountries.map(item => ({ ...item, label: item.name, value: item.iso2 }))
            setOptions(listCountries)
        }
    }, [])

    const _handleChange = (event) => {
        props.onChange({
            target: {
                label: event.target.label,
                value: event.target.value
            }
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="countries">Choose Country</label>
            <select name="countries" id="countries" value={props.value} onChange={_handleChange}>
                {(options || []).map(item => {
                    return <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>
            <div style={{ display: "none" }}>
                <IntlTelInput ref={countryPhoneRef} />
            </div>
        </div >
    )
}

export default CountrySelect;