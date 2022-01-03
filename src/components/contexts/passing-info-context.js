import React, { useState } from 'react';


export const PassingInfoContext = React.createContext({
    basicInfoData: {},
    companyFeaturesData: {},
    sellingDetailsData: {},
    passBasicInfoData: () => {},
    passCompanyFeaturesData: () => {},
    passSellingDetailsData: () => {}
});

const MyStartupInformationContext = ({ children }) => {
    const [basicInfoData, setBasicInfoData] = useState({});
    const [companyFeaturesData, setCompanyFeaturesData] = useState({});
    const [sellingDetailsData, setSellingDetailsData] = useState({});
    const passBasicInfoData = (data) => setBasicInfoData(data);
    const passCompanyFeaturesData = (data) => setCompanyFeaturesData(data);
    const passSellingDetailsData = (data) => setSellingDetailsData(data);    
    const contextValue = {
        basicInfoData,
        companyFeaturesData,
        sellingDetailsData,
        passBasicInfoData,
        passCompanyFeaturesData,
        passSellingDetailsData
    };
    return (
        <PassingInfoContext.Provider value={contextValue}>
            { children }
        </PassingInfoContext.Provider>
    );
};

export default MyStartupInformationContext;
