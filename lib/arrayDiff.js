/**
 * Find Delta between two arrays.
 *
 * Supports array of elements and array of objects
 * */

function findDeltaWithinTwoArraysOfObjects(listOriginal, listNew, uniqueProp) {
    var delta = {
        added: [],
        removed: []
    };
    var _deltaMap = {};
    var _objHolder = {};
    listOriginal.forEach(function (item) {
        _objHolder[uniqueProp && item[uniqueProp] || item] = item;
        _deltaMap[uniqueProp && item[uniqueProp] || item] = 'remove';
    });
    listNew.forEach(function (item) {
        _objHolder[uniqueProp && item[uniqueProp] || item] = item;
        var d = _deltaMap[uniqueProp && item[uniqueProp] || item];
        if (Boolean(d) && d == 'remove') {
            _deltaMap[uniqueProp && item[uniqueProp] || item] = 'noChange';
        } else {
            _deltaMap[uniqueProp && item[uniqueProp] || item] = 'added';
        }
    });
    Object.keys(_deltaMap).forEach(function (id) {
        if (_deltaMap[id] == 'remove') delta.removed.push(_objHolder[id]);
        else if (_deltaMap[id] == 'added') delta.added.push(_objHolder[id]);
    });
    return delta;
}


//Lets export the method as module require
exports = module.exports = findDeltaWithinTwoArraysOfObjects;
