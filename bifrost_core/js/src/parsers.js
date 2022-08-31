


function parseListValue(listValue)
{
    for (let i = 0; i < listValue.values.length; i++)
    {
        listValue.values[i] = getValueFromObj(listValue.values[i]);
    }
    return listValue.values;
}

function getValueFromObj(obj)
{
    for (let valueType in obj)
    {
        switch(valueType)
        {
            case 'stringValue':
            case 'numberValue':
            case 'boolValue':
                return obj[valueType];
            case 'listValue':
                return parseListValue(obj[valueType]);
            case 'nullValue':
                return undefined;
            case 'structValue':
                return parseStruct(obj[valueType].fields);
            default:
                console.log("Not implemented: ", valueType);
        }
    }
}

function parseStruct(struct)
{
    for (let varName in struct)
    {
        struct[varName] = getValueFromObj(struct[varName]);
    }
    return struct
};


module.exports = {
    parseStruct: parseStruct,
    getValueFromObj: getValueFromObj,
    parseListValue: parseListValue,
}