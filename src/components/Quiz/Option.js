import React, { useEffect, useState } from 'react';

const Option = ({  t, revealAns, c }) => {

    const [rightAns, setRightAns] = useState(false)

    useEffect(() => {
        if (revealAns && (t === c)) setRightAns(true)
    }, [revealAns, t, c])

    const handleInputChange = e => {

        const selectedAns = e.target.value

        if (selectedAns === c) {
            setRightAns(true)
        }

    }

    return (
        <label htmlFor={t} className={`max-w-md cursor-pointer flex items-center w-full h-20 justify-self-center pl-4 border rounded-md ${(rightAns) && "bg-green-600 text-white"}`}>
            <p className='font-poppins'>
                <input onChange={handleInputChange} type="radio" id={t} value={t} name="answer" /> {t}
            </p>
        </label>
    );
};

export default Option;