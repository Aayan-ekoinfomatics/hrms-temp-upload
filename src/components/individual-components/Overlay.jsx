import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import popUpToggleAtom from '../../recoil/popUpToggleAtom';

const Overlay = () => {

    const [popUpToggle, setPopUpToggle] = useRecoilState(popUpToggleAtom);

    useEffect(() => {
        setPopUpToggle({
            ...popUpToggle,
            attendencePopUpToggle: false,
            leavesPopUpToggle: false,
            tasklogPopUpToggle: false,
            employeeSelectDropDown: false,
            createEventPopUp: false,
            editEventPopUp: false,
            addAccountPopUp: false,
            editAccountPopUp: false,
            
            
        })
    }, []);


    return (
        <div onClick={() => {
            setPopUpToggle({
                ...popUpToggle,
                attendencePopUpToggle: false,
                leavesPopUpToggle: false,
                tasklogPopUpToggle: false,
                monthListToggle: false,
                employeeSelectDropDown: false,
                createEventPopUp: false,
                editEventPopUp: false,
                addAccountPopUp: false,
                editAccountPopUp: false,
            })
        }} className={`fixed bg-black z-[90] inset-0 opacity-5 ${Object.values(popUpToggle).includes(true) ? 'block' : 'hidden'}`}></div>
    )
}

export default Overlay