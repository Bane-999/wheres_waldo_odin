function isMatching(x, y, left, right, top, bottom) {    
    if(x >= left && x <= right && y >= top && y <= bottom) {
        return true;
    }
    else {
        return false;
    }
};

export default isMatching;