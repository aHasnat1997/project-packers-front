import React, { useState } from 'react';
import star from '../assets/icon/star.svg';

const DemoPass = () => {
    const [pass, setPass] = useState([]);
    const [newPass, setNewPass] = useState();

    console.log(pass);

    return (
        <>
            <input
                type="password"
                className='input-field p-2'
                // value={newPass}
                onChange={(event) => {
                    const passValue = event.target.value;
                    const passArray = passValue.split('');
                    // setNewPass(passArray.map(i => <img
                    //     key={i}
                    //     src={star}
                    //     className='w-4'
                    // />))
                    setPass(passArray);
                    // const passArray = passValue.replace();
                }}
            />
            <span className='w-[20rem] mt-4 flex items-center gap-2 bg-white rounded-full p-4'>
                {
                    pass.map(i => <img
                        key={i}
                        src={star}
                        className='w-4'
                    />)
                }
            </span>
        </>
    );
};

export default DemoPass;
