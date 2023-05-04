import React, { useEffect, useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import sidebarToggleAtom from '../../recoil/sidebarToggleAtom'
import { useRecoilState } from 'recoil';
import { Link, useLocation, useParams, } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation()

    const [sidebarWidthFull, setSidebarWidthFull] = useRecoilState(sidebarToggleAtom);

    // useEffect(() => {console.log(location?.pathname)}, [])


    return (
        <div className={`w-full ${sidebarWidthFull ? 'max-w-[300px]' : 'max-w-[70px]'} transition-all duration-300 ease-out bg-[#757be5] fixed h-screen`}>
            <div className='p-4' onClick={() => setSidebarWidthFull(!sidebarWidthFull)}>
                <MenuRoundedIcon className='text-white cursor-pointer' fontSize='large' />
            </div>
            <div className={`pt-[100px] flex flex-col ${sidebarWidthFull ? 'items-center' : 'gap-2 '} `}>

                {/* <Link className='w-full' to='/'>
                    <div className={` ${sidebarWidthFull ? 'w-full' : 'justify-center w-[80%] mx-auto rounded-[6px]'} ${location?.pathname === '/' ? 'bg-[#9ba0f5]' : ''} p-4 hover:bg-[#888df7] flex items-center gap-3 cursor-pointer`} title='Dashboard'>
                        <DashboardRoundedIcon className='text-white' fontSize='small' />
                        <h1 className={`text-white text-lg ${sidebarWidthFull ? 'block' : 'hidden'} font-semibold`}>Dashboard</h1>
                    </div>
                </Link> */}

                <Link className='w-full' to='/accounts' >
                    <div className={` ${sidebarWidthFull ? 'w-full' : 'justify-center w-[80%] mx-auto rounded-[6px]'} ${location?.pathname === '/accounts' ? 'bg-[#9ba0f5]' : ''} p-4 hover:bg-[#888df7] flex items-center gap-3 cursor-pointer`} title='Accounts'>
                        <GroupRoundedIcon className='text-white' fontSize='small' />
                        <h1 className={`text-white text-lg ${sidebarWidthFull ? 'block' : 'hidden'} font-semibold`}>Accounts</h1>
                    </div>
                </Link>

                <Link className='w-full' to='/employees'>
                    <div className={` ${sidebarWidthFull ? 'w-full' : 'justify-center w-[80%] mx-auto rounded-[6px]'}  ${location?.pathname === '/employees' ? 'bg-[#9ba0f5]' : ''} p-4 hover:bg-[#888df7] flex items-center gap-3 cursor-pointer`} title='Employees'>
                        <HailRoundedIcon className='text-white' fontSize='small' />
                        <h1 className={`text-white text-lg ${sidebarWidthFull ? 'block' : 'hidden'} font-semibold`}>Employees</h1>
                    </div>
                </Link>

                <Link className='w-full' to='/leaves'>
                    <div className={` ${sidebarWidthFull ? 'w-full' : 'justify-center w-[80%] mx-auto rounded-[6px]'}  ${location?.pathname === '/leaves' ? 'bg-[#9ba0f5]' : ''} p-4 hover:bg-[#888df7] flex items-center gap-3 cursor-pointer`} title='Leaves'>
                        <WorkHistoryRoundedIcon className='text-white' fontSize='small' />
                        <h1 className={`text-white text-lg ${sidebarWidthFull ? 'block' : 'hidden'} font-semibold`}>Leaves</h1>
                    </div>
                </Link>

                <Link className='w-full' to='/events'>
                    <div className={` ${sidebarWidthFull ? 'w-full' : 'justify-center w-[80%] mx-auto rounded-[6px]'}  ${location?.pathname === '/events' ? 'bg-[#9ba0f5]' : ''} p-4 hover:bg-[#888df7] flex items-center gap-3 cursor-pointer`} title='Events'>
                        <EventNoteRoundedIcon className='text-white' fontSize='small' />
                        <h1 className={`text-white text-lg ${sidebarWidthFull ? 'block' : 'hidden'} font-semibold`}>Events</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar