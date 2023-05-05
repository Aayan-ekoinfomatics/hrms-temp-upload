import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Leaves = () => {

  const titles = ['S. No', 'ID', 'Name', 'Type', 'From Date', 'To Date', 'Reason', 'Actions'];

  const accountData = [

    { id: 1, emp_id: '1260', name: "John Doe", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 2, emp_id: '1261', name: "Lauran Karen", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 3, emp_id: '1262', name: "Darshana Deka", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 4, emp_id: '1264', name: "Dolly Jonson", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 5, emp_id: '1265', name: "Jack Trule", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 6, emp_id: '1266', name: "Karen Mira", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 7, emp_id: '1267', name: "James Camry", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 8, emp_id: '1268', name: "Agato Corlea", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 1, emp_id: '1260', name: "Jector James", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 2, emp_id: '1261', name: "Gabriel Mantez", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 3, emp_id: '1262', name: "Dom Noe", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 4, emp_id: '1264', name: "Christian Gyllenhall", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 5, emp_id: '1265', name: "Mak Makrus", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 6, emp_id: '1266', name: "Lauran Karen", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 7, emp_id: '1267', name: "Darshana Deka", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 8, emp_id: '1268', name: "Lauran Karen", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
  ];

  const accountArchivedData = [

    { id: 1, emp_id: '1260', name: "John Doe", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 2, emp_id: '1261', name: "Lauran Karen", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 3, emp_id: '1262', name: "Darshana Deka", designation: 'Casual', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 4, emp_id: '1264', name: "Dolly Jonson", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 5, emp_id: '1265', name: "Jack Trule", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 6, emp_id: '1266', name: "Karen Mira", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 7, emp_id: '1267', name: "James Camry", designation: 'Medical', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
    { id: 8, emp_id: '1268', name: "Agato Corlea", designation: 'Paid', to_date: '19/12/23', from_date: '12/12/23', reason: "visiting home for sister's marriage", actions: '' },
  ];

  const [tabState, setTabState] = useState('All');

  const [searchData, setSearchData] = useState('');

  const [popUpToggle, setPopUpToggle] = useState(false);

  const [signUpPopUpToggle, setSignUpPopUpToggle] = useState(false);


  useEffect(() => { console.log(accountArchivedData) }, [])


  return (
    <div className='w-full bg-gray-100 relative'>

      {/* header */}
      <div className='w-full flex justify-between p-6  bg-white shadow-md '>
        <h1 className='text-[40px] font-[500]'>Leaves</h1>
        {/* <div className='flex items-center'>
          <button onClick={() => setPopUpToggle(!popUpToggle)} className='py-3 px-6 shadow-md active:scale-95 transition-all duration-200 ease-out rounded-[10px] bg-[var(--primary-color)] text-white text-[16px]'>+ Create User</button>
        </div> */}
      </div>


      {/* body */}
      <div className='h-[85vh]'>

        {/* tabs & searchbar */}
        <div className='w-full flex justify-between items-center my-8 px-8'>

          {/* tabs */}
          <div className='w-full flex justify-start gap-2'>
            <button onClick={() => setTabState('All')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'All' ? 'bg-[var(--cta-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--cta-color)] active:scale-95 transition-all text-[14px] duration-200 ease-out`}>Requests</button>
            <button onClick={() => setTabState('Archived')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'Archived' ? 'bg-[var(--cta-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--cta-color)] active:scale-95 transition-all text-[14px] duration-200 ease-out`}>Records</button>
          </div>

          {/* searchbar */}
          <div className='w-full flex items-center max-w-[300px] bg-white rounded-[15px] px-3'>
            <div>
              <SearchOutlinedIcon fontSize='medium' className='text-[var(--cta-color)]' />
            </div>
            <input type="text" onChange={(e) => setSearchData(e?.target?.value)} value={searchData} className='w-full rounded-[15px] py-3 px-1 outline-none text-[14px]' placeholder='Search' />
          </div>


        </div>

        {/* tables */}
        <>
          {
            tabState === 'All' ?

              <>
                {/* table content */}
                <div className='w-full px-6 py-4'>
                  <div className='w-full grid grid-cols-[5%_10%_12%_15%_12%_12%_auto_12%]  border rounded-t-[15px] text-white py-5 bg-white'>
                    {
                      titles?.map((data, i) => (
                        <div key={i} className='w-full flex justify-start pl-5 items-center text-gray-600 font-bold'>
                          <h1>{data}</h1>
                        </div>
                      ))
                    }
                  </div>
                  <div className='w-full grid grid-cols-[5%_10%_12%_15%_12%_12%_auto_12%]  border-b border-l border-r rounded-b-[15px] bg-white max-h-[600px] overflow-y-scroll pb-5'>
                    {
                      accountData?.filter((filterValue) => {
                        if (searchData === '') {
                          return filterValue
                        } else if (filterValue?.emp_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.designation?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.joining_date?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                          return filterValue
                        }
                      })?.map((data, i) => {
                        return (
                          <React.Fragment key={i}>
                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.id}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.emp_id}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.name}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.designation}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.from_date}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.to_date}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.reason}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 xl:pl-8 gap-4 items-center py-5 '>
                              {/* <button><EditOutlinedIcon onClick={() => setSignUpPopUpToggle(!signUpPopUpToggle)} className='text-gray-600' fontSize='small' /></button> */}
                              <button title='Approve'><DownloadDoneRoundedIcon onClick={() => console.log(i)} className='text-green-600 active:scale-110 transition-all duration-200 ease-out' fontSize='large' /></button>
                              <button title='Decline'><CancelRoundedIcon onClick={() => console.log(i)} className='text-red-600 active:scale-110 transition-all duration-200 ease-out' fontSize='medium' /></button>
                            </div>

                          </React.Fragment>
                        )
                      })
                    }
                  </div>
                </div>
              </>
              :
              tabState === 'Archived' ?

                <>
                  {/* table content */}
                  <div className='w-full px-6 py-4'>
                    <div className='w-full grid grid-cols-[5%_8%_12%_12%_15%_15%_auto] border rounded-t-[15px] text-white py-5 bg-white'>
                      {
                        titles?.map((data, i) => {
                          if (data !== 'Actions') {
                            return (
                              <div key={i} className='w-full flex justify-start pl-5 items-center text-gray-600 font-bold'>
                                <h1>{data}</h1>
                              </div>  
                            )
                          }
                        })
                      }
                    </div>
                    <div className='w-full grid grid-cols-[5%_8%_12%_12%_15%_15%_auto]  border-b border-l border-r rounded-b-[15px] bg-white max-h-[600px] overflow-y-scroll pb-5'>
                      {
                        accountArchivedData?.filter((filterValue) => {
                          if (searchData === '') {
                            return filterValue
                          } else if (filterValue?.emp_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.designation?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.joining_date?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                            return filterValue
                          }
                        })?.map((data, i) => {
                          return (
                            <React.Fragment key={i}>
                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.id}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.emp_id}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.name}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.designation}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.from_date}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.to_date}</h1>
                              </div>

                              <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                <h1>{data?.reason}</h1>
                              </div>

                              {/* <div className='w-full flex justify-start pl-5 xl:pl-8 gap-4 items-center py-5 '>
                                <button><EditOutlinedIcon onClick={() => setSignUpPopUpToggle(!signUpPopUpToggle)} className='text-gray-600' fontSize='small' /></button>
                                <button title='Approve'><DownloadDoneRoundedIcon onClick={() => console.log(data?.id)} className='text-green-600 active:scale-110 transition-all duration-200 ease-out' fontSize='large' /></button>
                                <button title='Decline'><CancelRoundedIcon onClick={() => console.log(data?.id)} className='text-red-600 active:scale-110 transition-all duration-200 ease-out' fontSize='medium' /></button>
                              </div> */}

                            </React.Fragment>
                          )
                        })
                      }
                    </div>
                  </div>
                </>
                :
                null
          }
        </>

      </div>

      {/* create user popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${popUpToggle ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setPopUpToggle(false)} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Add User</h1>
        </div>
        <div className='flex flex-col p-3'>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='First Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Last Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Designation' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="date" placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="email" placeholder='Email' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Password' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white'>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* edit user popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${signUpPopUpToggle ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setSignUpPopUpToggle(false)} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Edit User</h1>
        </div>
        <div className='flex flex-col p-3'>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='First Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Last Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Designation' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="date" placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="email" placeholder='Email' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Password' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white'>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className={`bg-black bg-opacity-5 fixed inset-0 z-[80] ${popUpToggle || signUpPopUpToggle ? 'block' : 'hidden'}`} onClick={() => {
        setPopUpToggle(false)
        setSignUpPopUpToggle(false)
      }}>

      </div>
    </div >
  )
}

export default Leaves