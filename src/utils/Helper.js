class Helper {

    static trim(stringToTrim) {
        let amountToTrim = 30;
        if(stringToTrim.length > amountToTrim) {
            return stringToTrim.substring(0, 30) + '...';
        } else {
            return stringToTrim;
        }
        
    }
}
export default Helper;