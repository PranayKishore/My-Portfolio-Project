import { LightningElement, api } from 'lwc';

export default class UserDetails extends LightningElement {
    @api recordId
    @api objectApiName

    downloadResume(){
        window.open("https://github.com/PranayKishore/Manekar-Pranay-Kishore-Resume/raw/main/Manekar%20Pranay%20Kishore-Resume.pdf","_blank")
    }
}