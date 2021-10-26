import React, { useState } from 'react';


export const PassingInfoContext = React.createContext({
    basicInfoData: {},
    companyFeaturesData: {},
    sellingDetailsData: {},
    financialDetailsData: {},
    passBasicInfoData: () => {},
    passCompanyFeaturesData: () => {},
    passSellingDetailsData: () => {},
    passFinancialDetailsData: () => {}
});

const MyStartupInformationContext = ({ children }) => {
    const [basicInfoData, setBasicInfoData] = useState({});
    const [companyFeaturesData, setCompanyFeaturesData] = useState({});
    const [sellingDetailsData, setSellingDetailsData] = useState({});
    const [financialDetailsData, setFinancialDetailsData] = useState({});
    const passBasicInfoData = (data) => setBasicInfoData(data);
    const passCompanyFeaturesData = (data) => setCompanyFeaturesData(data);
    const passSellingDetailsData = (data) => setSellingDetailsData(data);
    const passFinancialDetailsData = (data) => setFinancialDetailsData(data);    
    const contextValue = {
        basicInfoData,
        companyFeaturesData,
        sellingDetailsData,
        financialDetailsData,
        passBasicInfoData,
        passCompanyFeaturesData,
        passSellingDetailsData,
        passFinancialDetailsData
    };
    return (
        <PassingInfoContext.Provider value={contextValue}>
            { children }
        </PassingInfoContext.Provider>
    );
};

export default MyStartupInformationContext;
