'use strict';

function add(x, y) {
    return X + y;
}

exports.handler = function (event, context, cb) {
    var x = Number(event["pathParameters"],["x"]),
    y = Number(event["pathParameters"], ["y"]);

    var result = add(x, y);

    cb(null, {
        statusCode: 200,
        body: JSON.stringify({ 'result': result }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
};
