import React, { useEffect, useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useRecoilState } from 'recoil';
import popUpToggleAtom from '../recoil/popUpToggleAtom';
import Overlay from '../components/individual-components/Overlay';
import axios from 'axios';
import { toast } from 'react-toastify';

const Events = () => {
  const titles = ['S. No', 'Event', 'Date', 'Actions',];

  const [activeEventId, setActiveInputId] = useState(null);

  const [eventsData, setEventsData] = useState();

  const [eventsEditData, setEventsEditData] = useState({
    event: '',
    start_date: '',
    end_date: '',
    id: ''
  })

  const events_data =

    [
      {
        id: 2,
        event: "Makar Sakranti",
        start_date: ["15 Jan 2023","2023-01-15"],
        end_date: ["15 Jan 2023","2023-01-15"]
      },
      {
        id: 1,
        event: "Republic Day",
        start_date: ["26 Jan 2023","2023-01-26"],
        end_date: ["26 Jan 2023","2023-01-26"]
      },
      {
        id: 3,
        event: "Ugadi",
        start_date: ["22 Mar 2023","2023-03-22"],
        end_date: ["22 Mar 2023","2023-03-22"]
      },
      {
        id: 5,
        event: "Good Friday",
        start_date: ["07 Apr 2023", "2023-04-07"],
        end_date: ["07 Apr 2023","2023-04-07"]
      },
      {
        id: 4,
        event: "Dr. Ambedkar Jayanti",
        start_date: ["14 Apr 2023","2023-04-14"],
        end_date: ["14 Apr 2023", "2023-04-14"]
      },
      {
        id: 6,
        event: "May Day",
        start_date: ["01 May 2023", "2023-05-01"],
        end_date: ["01 May 2023","2023-05-01"]
      },
      {
        id: 17,
        event: "Test Event",
        start_date: ["04 May 2023","2023-05-04"],
        end_date: ["25 May 2023","2023-05-25"]
      },
      {
        id: 7,
        event: "Independence Day",
        start_date: ["15 Aug 2023","2023-08-15"],
        end_date: ["15 Aug 2023","2023-08-15"]
      },
      {
        id: 8,
        event: "Gandhi Jayanti",
        start_date: ["02 Oct 2023","2023-10-02"],
        end_date: ["02 Oct 2023","2023-10-02"]
      },
      {
        id: 9,
        event: "Vijayadashami",
        start_date: ["24 Oct 2023","2023-10-24"],
        end_date: ["24 Oct 2023", "2023-10-24"]
      },
      {
        id: 11,
        event: "Karnatka Rajyotsava",
        start_date: [ "01 Nov 2023","2023-11-01"],
        end_date: ["01 Nov 2023","2023-11-01"]
      },
      {
        id: 10,
        event: "Diwali",
        start_date: ["14 Nov 2023","2023-11-14"],
        end_date: [ "14 Nov 2023", "2023-11-14"]
      },
      {
        id: 12,
        event: "Christmas",
        start_date: ["25 Dec 2023","2023-12-25"],
        end_date: ["25 Dec 2023","2023-12-25"]
      }
    ];

  const [addEventData, setAddEventData] = useState({
    event: '',
    start_date: '',
    end_date: '',
  })

  const [tabState, setTabState] = useState('All');

  const [searchData, setSearchData] = useState('');

  // const [popUpToggle, setPopUpToggle] = useState(false);

  // const [signUpPopUpToggle, setSignUpPopUpToggle] = useState(false);

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
    })


    // axios.get(import.meta.env.VITE_BASE_ADDRESS + 'event_list_view').then((response) => {
    //   console.log(response?.data)
    //   setEventsData(response?.data)
    // })

  }, []);


  // useEffect(() => { console.log(eventsEditData) }, [eventsEditData])



  return (
    <div className='w-full bg-gray-100 relative'>

      {/* header */}
      <div className='w-full flex justify-between p-6  bg-white shadow-md '>
        <h1 className='text-[40px] font-[500]'>Events</h1>
        <div className='flex items-center'>
          <button onClick={() => setPopUpToggle({
            ...popUpToggle,
            createEventPopUp: !popUpToggle?.createEventPopUp
          })} className='py-3 px-6 shadow-md active:scale-95 transition-all duration-200 ease-out rounded-[10px] bg-[var(--primary-color)] text-white text-[16px]'>+ Create Event</button>
        </div>
      </div>


      {/* body */}
      <div className='h-[85vh]'>

        {/* tabs & searchbar */}
        <div className='w-full flex justify-between items-center my-5 mt-10 px-8'>

          {/* tabs */}
          {/* <div className='w-full flex justify-start gap-2'>
            <button onClick={() => setTabState('All')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'All' ? 'bg-[var(--primary-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--primary-color)] transition-all text-[14px] duration-200 ease-out`}>Requests</button>
            <button onClick={() => setTabState('Archived')} className={`px-6 py-2 rounded-[10px] border ${tabState === 'Archived' ? 'bg-[var(--primary-color)] text-white font-[500]' : 'shadow-md bg-white'} active:bg-[var(--primary-color)] transition-all text-[14px] duration-200 ease-out`}>Records</button>
          </div> */}

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
                  <div className='w-full grid grid-cols-[120px_auto_auto_auto] border rounded-t-[15px] text-white py-5 bg-white'>
                    {
                      titles?.map((data, i) => (
                        <div key={i} className={`w-full ${data === 'S. No' || data === 'Event' ? 'justify-start' : 'justify-center'} flex pl-5 items-center text-gray-600 font-bold`}>
                          <h1>{data}</h1>
                        </div>
                      ))
                    }
                  </div>
                  <div className='w-full grid grid-cols-[120px_auto_auto_auto]  border-b border-l border-r rounded-b-[15px] bg-white max-h-[600px] overflow-y-scroll pb-5'>
                    {
                      events_data?.filter((filterValue) => {
                        if (searchData === '') {
                          return filterValue
                        } else if (filterValue?.event?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.start_date[0]?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.start_date[1]?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.joining_date?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                          return filterValue
                        }
                      })?.map((data, i) => {
                        return (
                          <React.Fragment key={i}>
                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{i + 1}</h1>
                            </div>

                            <div className='w-full flex justify-start pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.event}</h1>
                            </div>

                            <div className='w-full flex justify-center pl-5 items-center py-5 text-[13px] text-gray-600'>
                              <h1>{data?.start_date[0]}</h1>
                            </div>


                            <div className='w-full flex justify-center pl-5 xl:pl-8 gap-4 items-center py-5 '>

                              <button title='Edit'><EditOutlinedIcon onClick={() => {
                                setEventsEditData({
                                  event: data?.event,
                                  start_date: data?.start_date[1],
                                  end_date: data?.start_date[1],
                                  id: data?.id
                                })
                                setActiveInputId(data?.id)
                                setPopUpToggle({
                                  ...popUpToggle,
                                  editEventPopUp: !popUpToggle?.signUpPopUpToggle
                                })
                              }} className='text-gray-600 active:scale-110 transition-all duration-200 ease-out' fontSize='medium' /></button>
                              <button title='Delete'>
                                <DeleteOutlinedIcon onClick={async () => {
                                  let formdata = new FormData()
                                  formdata.append('id', data?.id)
                                  await axios.post(import.meta.env.VITE_BASE_ADDRESS + 'delete_event', formdata).then((response) => {
                                    console.log(response?.data)
                                    if (response?.data?.status) {
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
                                    }
                                  })
                                  await axios.get(import.meta.env.VITE_BASE_ADDRESS + 'event_list_view').then((response) => {
                                    // console.log(response?.data)
                                    setEventsData(response?.data)
                                  })
                                }} className='text-red-600 active:scale-110 transition-all duration-200 ease-out' fontSize='medium' /></button>
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
                null
                :
                null
          }
        </>

      </div>

      {/* create event popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${popUpToggle?.createEventPopUp ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setPopUpToggle({
            ...popUpToggle,
            createEventPopUp: false,
          })} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Add Event</h1>
        </div>
        <div className='flex flex-col p-3'>

          <div className='w-full flex gap-8 justify-between items-end mt-4'>
            <div className='border rounded-[15px] w-full'>
              <input type="text" value={addEventData?.event} onChange={(e) => setAddEventData({
                ...addEventData,
                event: e?.target?.value
              })} placeholder='Event Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' /></div>
            <div className='w-full'>
              <label htmlFor="" className='text-[11px] pl-2'>Start date</label>
              <div className='border rounded-[15px] w-full'>
                <input type="date" value={addEventData?.start_date} onChange={(e) => setAddEventData({
                  ...addEventData,
                  start_date: e?.target?.value
                })} placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
              </div>
            </div>
          </div>

          <div className='w-full flex gap-8 justify-end mt-4'>

            <div className='w-[46%]'>
              <label htmlFor="" className='text-[11px] pl-2'>End date</label>
              <div className='border rounded-[15px] w-full'>
                <input type="date" value={addEventData?.end_date} onChange={(e) => setAddEventData({
                  ...addEventData,
                  end_date: e?.target?.value
                })} min={addEventData?.start_date} placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
              </div>
            </div>
          </div>

          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white' onClick={async () => {
                await axios.post(import.meta.env.VITE_BASE_ADDRESS + 'create_event', addEventData).then((response) => {
                  console.log(response?.data)
                  if (response?.data?.status) {
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
                  } else {
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
                await axios.get(import.meta.env.VITE_BASE_ADDRESS + 'event_list_view').then((response) => {
                  // console.log(response?.data)
                  setEventsData(response?.data)
                })
                setPopUpToggle({
                  ...popUpToggle,
                  createEventPopUp: false,
                })
                setAddEventData({
                  event: '',
                  start_date: '',
                  end_date: ''
                })
              }}>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* edit event popup */}
      <div className={` w-[500px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-md z-[100] fixed ${popUpToggle?.editEventPopUp ? 'block' : 'hidden'} bg-white rounded-[15px] shadow-xl `}>
        <div className='pt-3 pl-3'>
          <CancelIcon onClick={() => setPopUpToggle({
            ...popUpToggle,
            editEventPopUp: false,
          })} fontSize='medium' className='text-[var(--primary-color)] cursor-pointer active:scale-90 transition-all duration-200 ease-out' />
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          <h1 className='text-[18px] text-gray-600 font-[500]'>Edit Event</h1>
        </div>

        <div className='flex flex-col p-3'>

          <div className='w-full flex gap-8 justify-between items-end mt-4'>

            <div className='border rounded-[15px] w-full'>
              <input type="text" value={eventsEditData?.event} onChange={(e) => setEventsEditData({
                ...eventsEditData,
                event: e?.target?.value
              })} placeholder='Event Name' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
            </div>

            <div className='w-full'>
              <label htmlFor="" className='text-[11px] pl-2'>Start date</label>
              <div className='border rounded-[15px] w-full'>
                <input type="date" value={eventsEditData?.start_date} onChange={(e) => setEventsEditData({
                  ...eventsEditData,
                  start_date: e?.target?.value
                })} placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
              </div>
            </div>

          </div>

          <div className='w-full flex gap-8 justify-end items-end mt-4'>
            <div className='w-[46%]'>
              <label htmlFor="" className='text-[11px] pl-2'>End date</label>
              <div className='border rounded-[15px] w-full'>
                <input type="date" value={eventsEditData?.end_date} onChange={(e) => setEventsEditData({
                  ...eventsEditData,
                  end_date: e?.target?.value
                })} min={eventsEditData?.start_date} placeholder='Joining Date' className='w-full text-[13px] px-3 py-[7px] rounded-[15px] outline-none' />
              </div>
            </div>
          </div>

          <div className='w-full flex gap-8 justify-end mt-8'>
            <div className=''>
              {/* <input type="text" placeholder='Last Name' className='w-full text-[14px] px-3 py-[5px] rounded-[15px] outline-none' /> */}
              <button className='px-6 py-[5px] text-[14px] bg-[var(--primary-color)] active:scale-95 transition-all duration-200 ease-out cursor-pointer rounded-[10px] shadow-md text-white' onClick={async () => {
                await axios.post(import.meta.env.VITE_BASE_ADDRESS + 'edit_event', eventsEditData).then((response) => {
                  console.log(response?.data)
                  if (response?.data?.status) {
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
                  } else {
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
                await axios.get(import.meta.env.VITE_BASE_ADDRESS + 'event_list_view').then((response) => {
                  // console.log(response?.data)
                  setEventsData(response?.data)
                })
                setPopUpToggle({
                  ...popUpToggle,
                  editEventPopUp: false,
                })
                setEventsEditData({
                  event: '',
                  start_date: '',
                  end_date: '',
                  id: ''
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

export default Events