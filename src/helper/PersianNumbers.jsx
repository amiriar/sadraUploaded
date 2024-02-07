import { useState, useEffect } from 'react';

const usePersianNumber = (englishNumber) => {
    const [persianNumber, setPersianNumber] = useState('');

    useEffect(() => {
        // Convert the English number to Persian when the component mounts or englishNumber changes
        setPersianNumber(convertToPersianNumber(englishNumber));
    }, [englishNumber]);

    const convertToPersianNumber = (number) => {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return String(number).replace(/\d/g, (digit) => persianNumbers[digit]);
    };

    return persianNumber;
};

export default usePersianNumber;
