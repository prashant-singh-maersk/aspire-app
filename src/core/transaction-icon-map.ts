import fileStorage from 'icons/file-storage.svg';
import flights from 'icons/flights.svg'
import megaphone from 'icons/megaphone.svg'

export function getTransactionIcon(iconName : string){
    switch(iconName){
        case 'fileStorage': 
        return fileStorage;
        case 'flights':
        return flights;
        case 'megaphone':
        return megaphone;
    };
};
