import {useEffect} from 'react'
import Table from '../components/tables/Table'

import {  useMutation } from '@tanstack/react-query'
import { getAllIssues } from '../services/Api'
import TruckLoader from '../components/loaders/TruckLoader'

import PaginationPrimaryBasic from '../components/navigation/PaginationBar'
import { PageActions } from '../store/PageSlice'
import { useDispatch } from 'react-redux'
import { splitArray } from '../utils/helpers'

const Home = () => {

    const dispatch = useDispatch()

    const { isPending, isError,mutate} = useMutation({
        mutationKey: ['jira issues'],
        mutationFn: (k) => getAllIssues(k),
        onSuccess:(data)=>{
            
            let distributed = splitArray(data?.data?.issues?.issues,10)

            distributed?.reverse().forEach(page =>{
                const index = distributed.indexOf(page)

                const obj = {
                    'index' : index,
                    'items' : page
                }
                dispatch(PageActions.createPage(obj))
            }
            )
            
        }
       
    })

    useEffect(()=>{
       mutate(0)
    },[mutate])

   console.log(isPending)

    

    return (
        <>


            {
                isPending ?
                    
                    <TruckLoader />
                    :
                    isError ?
                        <>
                            error
                        </>
                        :
                        <>
                            {/* <div className='flex flex-row-reverse gap-x-5 '>
                                <DropdownBasic />
                                <DropdownIcon />
                            </div> */}

                            <Table  />

                            <PaginationPrimaryBasic/>
                        </>
            }



        </>


    )
}

export default Home