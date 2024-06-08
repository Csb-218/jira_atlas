import axios from 'axios';




export async function getAllIssues(startAt){
    const options = {
        // baseURL:`${process.env.REACT_APP_JIRA_BASE_URL}`,
        url:`${process.env.REACT_APP_JIRA_BASE_URL}/issues/all`,
        method:'GET',
        params:{
            startAt : startAt,
            maxResults : 50
        }

    }

    const response = await axios.request(options);
    // console.error(response)
    return response
   

}