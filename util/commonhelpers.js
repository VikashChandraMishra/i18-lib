const isObjectEmpty = (object) =>
    object ? (
        Object.keys(object).length === 0 && object.constructor === Object ?
            true : false

    ) : true;

module.exports = { isObjectEmpty };