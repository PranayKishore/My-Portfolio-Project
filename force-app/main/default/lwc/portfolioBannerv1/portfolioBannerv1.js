import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import HEADER from '@salesforce/schema/Portfolio__c.Header__c'
import CURRENT_LOCATION from '@salesforce/schema/Portfolio__c.Current_Location__c'
export default class PortfolioBanner extends LightningElement {

@api recordId //= 'a02ao000000qb0HAAQ'    
@api Linkedinurl = `https://www.linkedin.com/in/pranay-kishore-sf/`
@api youtubeurl //= `https://www.youtube.com/channel/UC7iElxgiGA1GzyJ8L3B6V0A`
@api trailheadurl //= `https://www.salesforce.com/trailblazer/pranaykishore`
@api giturl //= `https://github.com/PranayKishore`

userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`
linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
git = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`

@wire(getRecord,{recordId:'$recordId',fields:[FULLNAME,HEADER,CURRENT_LOCATION]})
portfolioData
//portfolioHandler({data, error}){
//    if(data){
//        console.log("record Data", JSON.stringify(data))
//    }
//    if(error){
//        console.log("error",error)
//    }
//}

get fullName(){
    return getFieldValue(this.portfolioData.data,FULLNAME)
}
get header(){
    return getFieldValue(this.portfolioData.data,HEADER)
}
get currentLocation(){
    return getFieldValue(this.portfolioData.data,CURRENT_LOCATION)
}
}