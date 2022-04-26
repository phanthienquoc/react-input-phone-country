import React, { useEffect, useRef } from 'react';
import PhoneInput from '../../shareComponent/Input/Phone';
import { getUserLocationInfo } from '../../services/location';
import CountrySelect from '../../shareComponent/Input/Country';

const InputLocation = (props) => {
    const phoneRef = useRef();

    useEffect(() => {
        if (phoneRef.current.tel) {
            getUserLocation();
        }
    }, [])

    const getUserLocation = async () => {
        try {
            let userLocation = await getUserLocationInfo();
            phoneRef.current.setFlag(userLocation.country.toLocaleLowerCase())
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    const _handleChangeCountry = (event) => {
        phoneRef.current.setFlag(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",

        }}>
            <div style={{
                padding: "72px",
                background: "#FFFFFF",
                boxShadow: "0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%), 0px 0px 0px 4px #d1e9ff",
                borderRadius: "16px"
            }}>
                <div style={{ marginBottom: "24px" }}>
                    <CountrySelect onChange={_handleChangeCountry} />
                </div>
                <div style={{ marginBottom: "24px" }}>
                    <PhoneInput ref={phoneRef} />
                </div>
            </div>
        </div>
    )
}

export default InputLocation;