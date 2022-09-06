function dataParse (str){
    const st1 = str.split(':');
    const hour = +st1[0];
    const st2 = st1[1].split(' ');
    const min = +st2[0];
    const mer = st2[1];
    return {hour,min,mer}
}

function diff(start,end){
    const s = dataParse(start);
    const e = dataParse (end);
    const sCombined = +`${s.hour}${s.min}`;
    const eCombined = +`${e.hour}${e.min}`;
    if (s.mer === e.mer && sCombined < eCombined){
        const sMin = s.hour * 60 + s.min;
        const eMin =  e.hour * 60 + e.min;
        return eMin - sMin;
    }
    else if (s.mer === 'am' && e.mer === 'pm'){
        const sMin = s.hour * 60 + s.min;
        const eMin = (12 + e.hour) * 60 + e.min;
        return eMin - sMin;
    }
    else if (s.mer === 'am' && e.mer === 'am'){
        const sMin = s.hour * 60 + s.min;
        const eMin = (24 + e.hour) * 60 + e.min;
        return eMin - sMin;
    }
}
console.log(diff('10:10 am','10:30 am'))
console.log(diff('10:10 am','11:30 am'))
console.log(diff('10:10 am','1:30 pm'))

