import { useState } from 'react'
import DropDown from '../../Componants/DropDown/DropDown'

import "./BuildLinks.scss"
import ConverterInputBar from '../../Componants/ConverterInputBar/ConverterInputBar';

const BuildLinks = () => {

    const [selected, setSelected] = useState("google.com");

    const domainOptions = [
        { value: "google.com", label: "google.com" },
        { value: "github.com", label: "github.com" },
        { value: "netlify.app", label: "netlify.app" },
        { value: "vercel.app", label: "vercel.app" },
        { value: "cloudflare.com", label: "cloudflare.com" },
        { value: "example.com", label: "example.com" },
    ];

    return (
        <div className='build-links-container'>
            <div className="allowed-domain-url-input-container">
                <DropDown longLabel='Domain' label="Domain to redirect" options={domainOptions} value={selected} onChange={setSelected}/>
            </div>
            <div className="complete-url-input-container">
                <ConverterInputBar fontSize="large" bold="small" label="Complete URL" longLable='Actual URL to Redirect' />
            </div>
        </div>
    )
}

export default BuildLinks