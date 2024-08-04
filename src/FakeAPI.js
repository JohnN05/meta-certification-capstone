const seededGenerator = (date, hour) => {
    const m = 9;
    const result = ((date*4 + hour) % m ) / 10;
  
    return result;
}

export const fetchAPI = function(date) {
    let result = [];
    result.push('');

    for(let i = 17; i <= 23; i++) {
        if(seededGenerator(date, i) < 0.5) {
            result.push(i + ':00');
        }
        if(seededGenerator(date, i+7) < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};