const replaceKeys = (text, interpolationObject) => {

    let interpolatedText = text;

    for (key in interpolationObject) {

        const regex = new RegExp(`{{${key}}}`, 'g');
        interpolatedText = interpolatedText.replace(regex, interpolationObject[key]);

    }

    return interpolatedText;

}

module.exports = { replaceKeys };