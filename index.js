'use strict';
module.exports.handler = (event, context, callback) => {
    let requestBody = JSON.parse(event.body);
    console.log("Request Body:: ", requestBody);
    
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(requestBody)
    }
    
    callback(null, response);
}