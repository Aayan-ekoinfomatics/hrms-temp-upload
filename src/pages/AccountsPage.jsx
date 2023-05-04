import React, { useEffect, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import no_data from '../assets/images/no_data.jpg'
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import popUpToggleAtom from '../recoil/popUpToggleAtom';
import Overlay from '../components/individual-components/Overlay';

const AccountsPage = () => {

  // const [accountData, setAccountData] = useState();
  // const [accountArchivedData, setAccountArchivedData] = useState();

  const mock_data = {
    user_list: [
      {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', PASSWORD: '1234vivekeko'},
      {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', PASSWORD: '1234amriteko'},
      {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', PASSWORD: '1234simraneko'},
      {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', PASSWORD: '1234aayaneko'},
      {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', PASSWORD: '1234vivekeko'},
      {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', PASSWORD: '1234amriteko'},
      {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', PASSWORD: '1234simraneko'},
      {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', PASSWORD: '1234aayaneko'},
    ],
    archived_list: [
      {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', PASSWORD: '1234vivekeko'},
      {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', PASSWORD: '1234amriteko'},
      {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', PASSWORD: '1234simraneko'},
      {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', PASSWORD: '1234aayaneko'},
    ],
  }

  const [activeAccountIndex, setActiveAccountIndex] = useState();


  const [allData, setAllData] = useState();

  const [addAccountData, setAddAccountData] = useState({
    first_name: '',
    last_name: '',
    designation: '',
    joining_date: '',
    email: '',
    password: '',
  })

  const [editAccountData, setEditAccountData] = useState({
    FIRST_NAME: '',
    LAST_NAME: '',
    DESIGNATION: '',
    JOINING_DATE: '',
    EMAIL: '',
    PASSWORD: '',
  })

  const titles = ['S. No', 'ID', 'Name', 'Designation', 'Joining Date', 'Actions'];

  // const accountArchivedData = [

  //   { id: 1, emp_id: '1260', name: "John Doe", designation: 'Backend Developer', joining_date: '12/12/23', actions: '' },
  //   { id: 2, emp_id: '1261', name: "Lauran Karen", designation: 'Frontend Developer', joining_date: '12/12/23', actions: '' },
  //   { id: 3, emp_id: '1262', name: "Darshana Deka", designation: 'Salseforce Developer', joining_date: '12/12/23', actions: '' },
  //   { id: 4, emp_id: '1264', name: "Lauran Karen", designation: 'Frontend Developer', joining_date: '12/12/23', actions: '' },
  //   { id: 5, emp_id: '1265', name: "John Doe", designation: 'Backend Developer', joining_date: '12/12/23', actions: '' },
  // ];

  const [tabState, setTabState] = useState('All');

  const [searchData, setSearchData] = useState('');

  // const [popUpToggle, setPopUpToggle] = useState(false);

  const [signUpPopUpToggle, setSignUpPopUpToggle] = useState(false);

  const [popUpToggle, setPopUpToggle] = useRecoilState(popUpToggleAtom);

  useEffect(() => {
    setPopUpToggle({
      ...popUpToggle,
      attendencePopUpToggle: false,
      leavesPopUpToggle: false,
      tasklogPopUpToggle: false,
      employeeSelectDropDown: false,
      addAccountPopUp: false,
      editAccountPopUp: false,
    })
  }, []);

  useEffect(() => {

    // axios.post(import.meta.env.VITE_BASE_ADDRESS + 'get_user_list').then((response) => {
    //   console.log(response?.data)
    //   setAllData(response?.data)
    // })

    
    setAllData({
      user_list: [
        {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234vivekeko'},
        {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234amriteko'},
        {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234simraneko'},
        {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234aayaneko'},
        {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234vivekeko'},
        {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234amriteko'},
        {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234simraneko'},
        {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', emp_id: 1, id: 0, PASSWORD: '1234aayaneko'},
      ],
      archived_list: [
        {FIRST_NAME: 'Vivek', LAST_NAME: 'Khanal', DESIGNATION: 'ReactJs Developer', JOINING_DATE: '23 March, 2021', EMAIL: 'vivek.k@ekoinfomatics', id: 0, PASSWORD: '1234vivekeko'},
        {FIRST_NAME: 'Sukh Amrit', LAST_NAME: 'Singh', DESIGNATION: 'Backend Developer', JOINING_DATE: '13 Sept, 2021', EMAIL: 'amrit.s@ekoinfomatics', id: 0, PASSWORD: '1234amriteko'},
        {FIRST_NAME: 'Simran', LAST_NAME: 'Kaur', DESIGNATION: 'Backend Developer', JOINING_DATE: '18 November, 2022', EMAIL: 'simran.k@ekoinfomatics', id: 0, PASSWORD: '1234simraneko'},
        {FIRST_NAME: 'Aayanjit', LAST_NAME: 'Bhuyan', DESIGNATION: 'Frontend Developer', JOINING_DATE: '17 October, 2022', EMAIL: 'Aayan.b@ekoinfomatics', id: 0, PASSWORD: '1234aayaneko'},
      ],
    })
  }, [])

  const dateConvtToDMY = (date) => {
    const arr = date.split('-');
    const newDate = arr[2]+'-'+arr[1]+'-'+arr[0];
    return newDate
  };


  useEffect(() => {
    console.log(allData)
    console.log(editAccountData)
    console.log(addAccountData)
    // console.log(activeAccountIndex)
    // console.log(editAccountData)

  }, [allData, editAccountData, addAccountData  ])


  return (
    <div className='w-full bg-gray-100 relative'>

      {/* header */}
      <div className='w-full flex justify-between p-6  bg-white shadow-md '>
        <h1 className='text-[40px] font-[500]'>Accounts</h1>
        <div className='flex items-center'>
          <button onClick={() => setPopUpToggle({
            ...popUpToggle,
            addAccountPopUp: !popUpToggle?.addAccountPopUp
          })} className='py-3 px-6 shadow-md active:scale-95 transition-all duration-200 ease-out rounded-[10px] bg-[var(--cta-color)] text-white text-[16px]'>+ Create User</button>
        </div>
      </div>


      {/* body */}
      <div className='h-[85vh]'>

        {/* tabs & searchbar */}
        <div className='w-full flex justify-between items-center my-8 px-8'>

          {/* tabs */}
          <div className='w-full flex justify-start gap-2'>
            <button onClick={() => setTabState('All')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'All' ? 'bg-[var(--cta-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--cta-color)] hover:bg-[#9ba0f5] transition-all text-[14px] duration-200 ease-out`}>All</button>
            <button onClick={() => setTabState('Archived')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'Archived' ? 'bg-[var(--cta-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--cta-color)] hover:bg-[#9ba0f5] transition-all text-[14px] duration-200 ease-out`}>Archived</button>
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
                  <div className='w-full grid grid-cols-[80px_140px_140px_auto_auto_130px] xl:grid-cols-[10%_15%_20%_auto_auto_15%] border rounded-t-[15px] text-white py-5 bg-white'>
                    {
                      titles?.map((data, i) => (
                        <div key={i} className='w-full flex justify-start pl-5 items-center text-gray-600 font-bold'>
                          <h1>{data}</h1>
                        </div>
                      ))
                    }
                  </div>
                  {
                    allData?.user_list?.length > 0 ?

                      <div className='w-full grid grid-cols-[80px_140px_140px_auto_auto_130px] xl:grid-cols-[10%_15%_20%_auto_auto_15%] border-b border-l border-r rounded-b-[15px] bg-white max-h-[650px] overflow-y-scroll pb-5'>
                        {
                          allData?.user_list?.filter((filterValue) => {
                            if (searchData === '') {
                              return filterValue
                            } else if (filterValue?.emp_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.designation?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.joining_date?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                              return filterValue
                            }
                          })?.map((data, i) => {
                            return (
                              <React.Fragment key={i}>
                                <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                  <h1>{i + 1}</h1>
                                </div>

                                <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                  <h1>{data?.id}</h1>
                                </div>

                                <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                  <h1>{data?.FIRST_NAME} {data?.LAST_NAME}</h1>
                                </div>

                                <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                  <h1>{data?.DESIGNATION}</h1>
                                </div>

                                <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                  <h1>{data?.JOINING_DATE}</h1>
                                </div>

                                <div className='w-full flex justify-start pl-5 gap-4 items-center py-5 '>
                                  <button><EditOutlinedIcon onClick={() => {
                                    setActiveAccountIndex(data?.id)
                                    // setEditAccountData({
                                    //   first_name: allData?.user_list?.filter((f_data) => {
                                    //     if (activeAccountIndex === f_data?.id) {
                                    //       return f_data?.FIRST_NAME
                                    //     }
                                    //   }).map((m_data) => {return m_data?.FIRST_NAME?.toString()}),
                                    // })
                                    setEditAccountData({
                                      FIRST_NAME: data?.FIRST_NAME,
                                      LAST_NAME: data?.LAST_NAME,
                                      DESIGNATION: data?.DESIGNATION,
                                      JOINING_DATE: data?.JOINING_DATE,
                                      EMAIL: data?.EMAIL,
                                      PASSWORD: data?.PASSWORD,
                                    })
                                    setSignUpPopUpToggle(!signUpPopUpToggle)
                                    setPopUpToggle({
                                      ...popUpToggle,
                                      editAccountPopUp: !popUpToggle?.editAccountData
                                    })
                                  }} className='text-gray-600' fontSize='small' /></button>
                                  <button><ArchiveOutlinedIcon onClick={() => console.log(i)} className='text-gray-600' fontSize='small' /></button>
                                  <button><DeleteOutlinedIcon onClick={() => console.log(i)} className='text-red-600' fontSize='small' /></button>
                                </div>

                              </React.Fragment>
                            )
                          })
                        }
                      </div>
                      :
                      <div className='w-full flex flex-col justify-center items-center border-b border-l border-r rounded-b-[15px] bg-white min-h-[580px] overflow-y-scroll pb-5'>
                        <div className='w-full max-w-[300px] flex flex-col justify-center items-center'>
                          <img src={no_data} className='w-full' alt="" />
                          <h1 className='text-2xl font-bold text-blue-500'>No accounts!</h1>
                        </div>
                      </div>
                  }
                </div>
              </>
              :
              tabState === 'Archived' ?

                <>
                  {/* table content */}
                  <div className='w-full px-6 py-4'>
                    <div className='w-full grid grid-cols-[80px_140px_140px_auto_auto_130px] xl:grid-cols-[10%_15%_20%_auto_auto_15%] border rounded-t-[15px] text-white py-5 bg-white'>
                      {
                        titles?.map((data, i) => (
                          <div key={i} className='w-full flex justify-start pl-5 items-center text-gray-600 font-bold'>
                            <h1>{data}</h1>
                          </div>
                        ))
                      }
                    </div>
                    {
                      allData?.archived_list?.length > 0 ?
                        <div className='w-full grid grid-cols-[80px_140px_140px_auto_auto_130px] xl:grid-cols-[10%_15%_20%_auto_auto_15%] border-b border-l border-r rounded-b-[15px] bg-white max-h-[650px] overflow-y-scroll pb-5'>
                          {
                            allData?.archived_list?.filter((filterValue) => {
                              if (searchData === '') {
                                return filterValue
                              } else if (filterValue?.emp_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.designation?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.joining_date?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                return filterValue
                              }
                            })?.map((data, i) => {
                              return (
                                <React.Fragment key={i}>
                                  <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                    <h1>{i + 1}</h1>
                                  </div>

                                  <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                    <h1>{data?.emp_id}</h1>
                                  </div>

                                  <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                    <h1>{data?.FIRST_NAME} {data?.LAST_NAME}</h1>
                                  </div>

                                  <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                    <h1>{data?.DESIGNATION}</h1>
                                  </div>

                                  <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                                    <h1>{data?.JOINING_DATE}</h1>
                                  </div>

                                  <div className='w-full flex justify-start pl-5 gap-4 items-center py-5 '>
                                    <button><EditOutlinedIcon onClick={() => console.log(i)} className='text-gray-600' fontSize='small' /></button>
                                    <button><ArchiveOutlinedIcon onClick={() => console.log(i)} className='text-gray-600' fontSize='small' /></button>
                                    <button><DeleteOutlinedIcon onClick={() => console.log(i)} className='text-gray-600' fontSize='small' /></button>
                                  </div>

                                </React.Fragment>
                              )
                            })
                          }
                        </div>
                        :
                        <div className='w-full flex flex-col justify-center items-center border-b border-l border-r rounded-b-[15px] bg-white min-h-[580px] overflow-y-scroll pb-5'>
                          <div className='w-full max-w-[300px] flex flex-col justify-center items-center'>
                            <img src={no_data} className='w-full' alt="" />
                            <h1 className='text-2xl font-bold text-blue-500'>Archived list is empty!</h1>
                          </div>
                        </div>
                    }
                  </div>
                </>
                :
                null
          }
        </>

      </div>

      {/* create user popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${popUpToggle?.addAccountPopUp ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setPopUpToggle({
            ...popUpToggle,
            addAccountPopUp: false
          })} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Add User</h1>
        </div>
        <div className='flex flex-col p-3'>

          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" value={addAccountData?.first_name} onChange={(e) => setAddAccountData({
                ...addAccountData,
                first_name: e?.target?.value
              })} placeholder='First Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" value={addAccountData?.last_name} onChange={(e) => setAddAccountData({
                ...addAccountData,
                last_name: e?.target?.value
              })} placeholder='Last Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>

          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" value={addAccountData?.designation} onChange={(e) => setAddAccountData({
                ...addAccountData,
                designation: e?.target?.value
              })} placeholder='Designation' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="date" value={addAccountData?.joining_date} onChange={(e) => setAddAccountData({
                ...addAccountData,
                joining_date: e?.target?.value
              })} placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>

          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="email" value={addAccountData?.email} onChange={(e) => setAddAccountData({
                ...addAccountData,
                email: e?.target?.value
              })} placeholder='Email' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" value={addAccountData?.password} onChange={(e) => setAddAccountData({
                ...addAccountData,
                password: e?.target?.value
              })} placeholder='Password' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>

          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button onClick={ async () => {
                await axios.post(import.meta.env.VITE_BASE_ADDRESS + 'create_user', addAccountData).then((response) => {
                  console.log(response?.data);
                  if (response?.data?.status) {
                    // alert(response?.data?.message)
                    toast.success(response?.data?.message, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      // draggable: true,
                      progress: undefined,
                      theme: "colored",
                    })
                    // navigate('/')
                  } else {
                    // alert(response?.data?.message)
                    toast.error(response?.data?.message, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      // draggable: true,
                      progress: undefined,
                      theme: "colored",
                    })
                  }
                })
                await axios.post(import.meta.env.VITE_BASE_ADDRESS + 'get_user_list').then((response) => {
                  console.log(response?.data)
                  setAllData(response?.data)
                })
                setPopUpToggle({
                  ...popUpToggle,
                  addAccountPopUp: false
                })
                setAddAccountData({
                  first_name: '',
                  last_name: '',
                  designation: '',
                  joining_date: '',
                  email: '',
                  password: '',
                })
              }} className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white'>Save</button>
            </div>
          </div>

        </div>
      </div>

      {/* edit user popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${popUpToggle?.editAccountPopUp ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setPopUpToggle({
            ...popUpToggle,
            editAccountData: false
          })} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Edit User</h1>
        </div>
        <div className='flex flex-col p-3'>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='First Name' onChange={(e) => {
                // setAllData({
                //   ...allData,
                //   user_list: allData?.user_list?.map((data, i) => {
                //     if (activeAccountIndex === data?.id) {
                //       return {
                //         ...data,
                //         FIRST_NAME: e?.target?.value
                //       }
                //     } else {
                //       return data
                //     }
                //   })
                // })

                setEditAccountData({
                  ...editAccountData,
                  FIRST_NAME: e?.target?.value
                })
              }}
                // value={allData?.user_list?.filter((f_data) => {
                //   if (activeAccountIndex === f_data?.id) {
                //     return f_data?.FIRST_NAME
                //   }
                // }).map((m_data) => {return m_data?.FIRST_NAME})}
                value={editAccountData?.FIRST_NAME}
                className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Last Name' onChange={(e) => {
                // setAllData({
                //   ...allData,
                //   user_list: allData?.user_list?.map((data, i) => {
                //     if (activeAccountIndex === data?.id) {
                //       return {
                //         ...data,
                //         LAST_NAME: e?.target?.value
                //       }
                //     } else {
                //       return data
                //     }
                //   })
                // })
                setEditAccountData({
                  ...editAccountData,
                  LAST_NAME: e?.target?.value
                })
              }}
              value={editAccountData?.LAST_NAME}
                // value={allData?.user_list?.filter((f_data) => {
                //   if (activeAccountIndex === f_data?.id) {
                //     return f_data?.LAST_NAME
                //   }
                // }).map((m_data) => { return m_data?.LAST_NAME })}
                className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Designation' onChange={(e) => {
                // setAllData({
                //   ...allData,
                //   user_list: allData?.user_list?.map((data, i) => {
                //     if (activeAccountIndex === data?.id) {
                //       return {
                //         ...data,
                //         DESIGNATION: e?.target?.value
                //       }
                //     } else {
                //       return data
                //     }
                //   })
                // })
                setEditAccountData({
                  ...editAccountData,
                  DESIGNATION: e?.target?.value
                })
              }}
              value={editAccountData?.DESIGNATION}
                // value={allData?.user_list?.filter((f_data) => {
                //   if (activeAccountIndex === f_data?.id) {
                //     return f_data?.DESIGNATION
                //   }
                // }).map((m_data) => { return m_data?.DESIGNATION })}
              className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full flex'>
              <input type="text" value={editAccountData?.JOINING_DATE} className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
              <input type="date" placeholder='Joining Date' onChange={(e) => {
                setEditAccountData({
                  ...editAccountData,
                  JOINING_DATE: e?.target?.value
                })
              }} value={editAccountData?.JOINING_DATE} className='w-full max-w-[40px] cursor-pointer shadow-md text-[13px] px-3 py-[6px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-between mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="email" placeholder='Email' onChange={(e) => {
                setEditAccountData({
                  ...editAccountData,
                  EMAIL: e?.target?.value
                })
              }} value={editAccountData?.EMAIL} className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='border rounded-[15px] w-full'>
              <input type="text" placeholder='Password'
                // onChange={(e) => {setEditAccountData({
                //   ...editAccountData,
                //   password: e?.target?.value
                // })}}
                onChange={(e) => {
                  // setAllData({
                  //   ...allData,
                  //   user_list: allData?.user_list?.map((data, i) => {
                  //     if (activeAccountIndex === data?.id) {
                  //       return {
                  //         ...data,
                  //         PASSWORD: e?.target?.value
                  //       }
                  //     } else {
                  //       return data
                  //     }
                  //   })
                  // })
                  setEditAccountData({
                    ...editAccountData,
                    PASSWORD: e?.target?.value
                  })
                }}
                 value={editAccountData?.PASSWORD}
                // value={allData?.user_list?.map((data, i) => {
                //   if (activeAccountIndex === data?.id) {
                //     return data?.PASSWORD
                //   } else {
                //     return null
                //   }
                // })}
                className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>
          </div>
          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white' onClick={() => {
                axios.post(import.meta.env.VITE_BASE_ADDRESS + 'user_edit' ).then((response) => {
                  console.log(response?.data)
                })
              }}>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <Overlay />
    </div >
  )
}

export default AccountsPage