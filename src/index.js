module.exports = function check(str, bracketsConfig) {
    const averStrLength = str.length / 2,
        bracketsLength = bracketsConfig.length;
    if (str.length % 2 != 0) {
        return false;
    }
    for (let i = 0; i < averStrLength; i++) {
        for (let j = 0; j < bracketsLength; j++) {
            let bracketsType = bracketsConfig[j][0] + bracketsConfig[j][1];
            while (str.indexOf(bracketsType) >= 0) {
                str = str.replace(bracketsType, "");
            }
        }
    }
    return str == "" ? true : false;
};
