import React, { useCallback } from 'react';
import DropDown from '../../Componants/DropDown/DropDown';
import ConverterInputBar from '../../Componants/ConverterInputBar/ConverterInputBar';
import { SimpleSwitch } from '../../Componants/MUISwitch/MUISwitch';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/hooks';
import { fillUTMParamObject, setFullURL, setLinkName, setSelectedDomain, toggleRedirectURLError, toggleUTMSwitch } from '../../Redux/Slices/BuildLinkSlice';
import { Helper } from '../../Utils/Helper/Helper';
import ButtonComponant from '../../Componants/ButtonComponant/ButtonComponant';
import { icons } from '../../data/iconsData';

import "./BuildLinks.scss";

const BuildLinks = () => {

    const { isUTMEnable, UTM_Param_Object, selectedDomain, domainOptions, redirectURLError, fullURL, linkName } = useAppSelector((state) => state.BuildLinkSlice);
    const dispatch = useAppDispatch();

    const handleUTMSwitchButton = useCallback(() => {
        dispatch(toggleUTMSwitch());
    }, [dispatch]);

    const handleChangeInUTMString = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let urlParamObj = Helper.extractParamFromURL(e.target.value);
        dispatch(fillUTMParamObject(urlParamObj));
    }, [dispatch]);

    const handleLinkName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLinkName(e.target.value))
    }, [dispatch])

    const handleRedirectURL = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        dispatch(setFullURL(url)); // store full URL

        if (Helper.isDomainExistInURL(selectedDomain, url)) {
            dispatch(toggleRedirectURLError(false));
        } else {
            dispatch(toggleRedirectURLError(true));
        }
    }, [dispatch, selectedDomain]);

    const handleDomainChange = useCallback((value: string) => {
        dispatch(setSelectedDomain(value));

        // re-validate the current fullURL against the new domain
        if (Helper.isDomainExistInURL(value, fullURL)) {
            dispatch(toggleRedirectURLError(false));
        } else {
            dispatch(toggleRedirectURLError(true));
        }
    }, [dispatch, fullURL]);


    return (
        <div className='build-links-container'>

            <div className="build-link-text">Build Your Link</div>

            <div className="allowed-domain-url-input-container">
                <DropDown
                    longLabel='Domain'
                    label="Domain to redirect"
                    options={domainOptions}
                    value={selectedDomain}
                    onChange={handleDomainChange}
                />
            </div>

            <div className="complete-url-input-container">
                <ConverterInputBar
                    borderRadius={2}
                    fontSize="large"
                    bold="small"
                    value={linkName}
                    label="eg: my link"
                    longLable='Link Name'
                    handleChange={handleLinkName}
                />
            </div>

            <div className="complete-url-input-container">
                <ConverterInputBar
                    borderRadius={2}
                    fontSize="large"
                    bold="small"
                    label="Complete URL"
                    value={fullURL}
                    longLable='Actual URL to Redirect'
                    handleChange={handleRedirectURL}
                    isError={redirectURLError}
                />
            </div>

            <div className="switch-button-for-utm-param">
                <div className="utm-param-text">UTM Param</div>
                <SimpleSwitch checked={isUTMEnable} onChange={handleUTMSwitchButton} />
            </div>

            {isUTMEnable && (
                <>
                    <div className="utm-param-block">
                        <div className="utm-param-input-container">
                            <ConverterInputBar
                                borderRadius={2}
                                fontSize='large'
                                bold='small'
                                label='Paste URL with UTM'
                                handleChange={handleChangeInUTMString}
                            />
                            <p className='example-text'>https://www.ezytap.com/products?feature=urlshortner&brand=ezytaps <span>--or--</span> feature=urlshortner&brand=ezytaps</p>
                        </div>

                        {Object.entries(UTM_Param_Object).map(([key, value], index) => (
                            <div className="utm-key-value-pair" key={index}>
                                <ConverterInputBar value={key} borderRadius={2} fontSize='large' bold='small' isEditable={false} />
                                <ConverterInputBar value={value} borderRadius={2} fontSize='large' bold='small' isEditable={false} />
                            </div>
                        ))}
                    </div>
                </>
            )}
            <div className="create-link-button">
                <ButtonComponant
                    text='Create Link'
                    size='small'
                    type="contained"
                    endIcon={<icons.ArrowForwardIosRounded />}
                />
            </div>
        </div>
    );
};

export default BuildLinks;
