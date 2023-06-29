
import { HStack, PinInput, PinInputField } from '../../app/lib/chakraui'
import React, { useEffect, useState } from 'react'

const VerifyOtp = () => {
    const [timer, setTimer] = useState<number>(10)
    const [otpEntered, setOtpEntered] = useState<number>()    

    useEffect(() => {
        timer > -1 && setTimeout(() => {
            timer 
            setTimer(timer - 1)
        }, 1000)
    }, [timer])

    return (
        <div>
            <h1 className='text-2xl text-blueDeep font-semibold mb-2'>
                OTP Verification
            </h1>
            <p className='text-sm font-light text-[#00184485] mb-4'>An OTP has been sent to XXX XXX 8005</p>
            <HStack marginBottom={'15px'} spacing={'12px'}>
                <PinInput size={'lg'} onChange={(e:any)=>setOtpEntered(e)}
                >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
            {timer === -1 ? <p className='w-full text-center mb-4 font-bold cursor-pointer text-blueDeep' onClick={()=>setTimer(10)}>Resend OTP</p> : <p className='text-bluePrimary text-center font-bold mb-4 text-xl'>{timer}</p>}
            <button className='btn-primary w-full rounded-md mb-8'>Verify OTP & Proceed</button>
        </div>

    )
}

export default VerifyOtp