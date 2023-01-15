import React from 'react';

import First from './First';

function First3(){
    return(
        <>
        <h1> This is components of Components.</h1>
        <FirstComponent></FirstComponent>
        </>
    )
}

function FirstComponent(){
    return (
        <>
        <h1>This is from first component.</h1>
        <SecondComponent></SecondComponent>
        </>

    )
}

function SecondComponent(){
    return(
        <>
        <h1>This is from second component.</h1>
        <ThirdComponent></ThirdComponent>
        </>
    )
}


function ThirdComponent(){
    return(
        <>
        <h1>
            This is from Third component.
            <First></First>
            This is for Component in files. The previous one is a first component.
        </h1>
        </>
    )
}


export default First3;
