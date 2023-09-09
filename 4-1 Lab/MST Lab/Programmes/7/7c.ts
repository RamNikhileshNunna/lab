function getMobileByManufacturer(manufacturer: string): string[]
    {
        let mobileList: string[];
        if (manufacturer === 'Samsung')
            { 
                mobileList = ['Samsung Galaxy S6 Edge', 'Samsung Galaxy Note 7','Samsung Galaxy J7 SM-J700F'];
                return mobileList;
            }
        else if (manufacturer === 'Apple') 
            {
                mobileList = ['Apple iPhone 5s', 'Apple iPhone 6s ', 'Apple iPhone 7'];
                return mobileList;
            }
        else 
            {
                mobileList = ['Nokia 105', 'Nokia 230 Dual Sim'];
                return mobileList;
            } 
    }
console.log('The available Samsung mobile list: [' +getMobileByManufacturer('Samsung')+']');
console.log('\nThe available Iphone mobile list: [' +getMobileByManufacturer('Apple')+"]");