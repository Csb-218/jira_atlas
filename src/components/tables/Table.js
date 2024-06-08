import React from 'react'
import { useSelector } from 'react-redux'




const Table = () => {

  const currentPage = useSelector(state => state.page.currentPage)
  const pages = useSelector(state => state.page.pages)


  return (
    <div className="w-full overflow-x-auto mt-12">
      <table  className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
        <tbody>
          <tr>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Assignee</th>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Summary</th>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Issue type</th>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Status</th>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Issue key</th>
          </tr>

          {
            pages[currentPage]?.items?.map(issue => {
              return (
                
                  <tr key={issue?.id} className="odd:bg-slate-50">

                    <td className="h-12 px-6  text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">

                      <img
                        className="relative mx-3 inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-emerald-500"
                        alt='avatar'
                        src={
                          issue?.fields?.assignee?.avatarUrls["48x48"] ?
                            issue?.fields?.assignee?.avatarUrls["48x48"]
                            :
                            "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                        }
                      />
                      {issue?.fields?.assignee?.displayName}
                    </td>

                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {issue?.fields?.summary}
                    </td>

                    <td className="h-12 flex px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      <img src={issue?.fields?.issuetype?.iconUrl} className='h-5' alt='icon' />
                      {issue?.fields?.issuetype?.name}


                    </td>

                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">

                      {
                        issue?.fields?.status.name === 'In Progress' ?
                          <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                            <span>{issue?.fields?.status.name}</span>
                          </button>
                          :
                          issue?.fields?.status.name === 'To Do' ?
                            <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-stone-50 px-6 text-sm font-medium tracking-wide text-stone-500 transition duration-300 hover:bg-stone-100 hover:text-stone-600 focus:bg-stone-200 focus:text-stone-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-stone-300 disabled:bg-stone-100 disabled:text-stone-400 disabled:shadow-none">
                              <span>{issue?.fields?.status.name}</span>
                            </button>
                            :
                            <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-blue-50 px-6 text-sm font-medium tracking-wide text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-100 disabled:text-blue-400 disabled:shadow-none">
                              <span>{issue?.fields?.status.name}</span>
                            </button>


                      }


                    </td>

                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {issue?.key}

                    </td>
                  </tr>
                
              )
            }).reverse()
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table