import React, { useEffect, useState } from 'react'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import popUpToggleAtom from '../../recoil/popUpToggleAtom';
import { useRecoilState } from 'recoil';

const EmployeeDropdown = () => {

    
    
    const emp_list = [
        { id: 0, first_name: 'Vivek', last_name: 'Khanal', emp_id: 0 },
        { id: 1, first_name: 'Sukh Amrit', last_name: 'Singh', emp_id: 1 },
        { id: 2, first_name: 'Simran', last_name: 'Kaur', emp_id: 2 },
        { id: 3, first_name: 'Aayanjit', last_name: 'Bhuyan', emp_id: 3 },
        { id: 0, first_name: 'Vivek', last_name: 'Khanal', emp_id: 0 },
        { id: 1, first_name: 'Sukh Amrit', last_name: 'Singh', emp_id: 1 },
        { id: 2, first_name: 'Simran', last_name: 'Kaur', emp_id: 2 },
        { id: 3, first_name: 'Aayanjit', last_name: 'Bhuyan', emp_id: 3 },
    ];
    
    const [selectedName, setSelectedName] = useState(`${emp_list[0]?.first_name} ${emp_list[0]?.last_name}`);
    
    const [popUpToggle, setPopUpToggle] = useRecoilState(popUpToggleAtom);
    
    useEffect(() => {
        setPopUpToggle({
            ...popUpToggle,
            attendencePopUpToggle: false,
            leavesPopUpToggle: false,
            tasklogPopUpToggle: false,
            employeeSelectDropDown: false
        })
    }, []);


    return (
        <div className='relative w-full min-w-[230px] z-[100] bg-white shadow-md py-2 rounded-[10px] flex items-center cursor-pointer'  onClick={() => setPopUpToggle({
            ...popUpToggle,
            employeeSelectDropDown: !popUpToggle.employeeSelectDropDown
        })}>
            <div className='w-full pl-2'>
                <h1 className='poppins text-[18px] md:text-[23px] tracking-tight leading-3 md:leading-4 font-[600] text-[#5f66e1]'>{selectedName}</h1>
            </div>
            <div className='active:scale-90 transition-all duration-200 ease-out'>
                <ArrowDropDownRoundedIcon fontSize='large' className='cursor-pointer' />
            </div>
            <div className={`absolute ${popUpToggle?.employeeSelectDropDown ? 'h-[250px]' : 'h-0'} transition-all duration-200 ease-out overflow-hidden w-full bg-white top-[110%] rounded-[10px] shadow-lg`}>
                <div className='h-[250px] overflow-y-scroll'>
                    {
                        emp_list?.map((data, i) => (
                            <li className='list-none py-2 border-b px-2 text-[13px] text-gray-500 hover:bg-gray-100 hover:rounded-[6px] hover:text-gray-700 cursor-pointer' onClick={() => {
                                setSelectedName(`${data?.first_name} ${data?.last_name}`)
                                setPopUpToggle({
                                    ...popUpToggle,
                                    emplpoyeeSelecyDropdown: false
                                })
                            }}>{data?.first_name} {data?.last_name}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EmployeeDropdown