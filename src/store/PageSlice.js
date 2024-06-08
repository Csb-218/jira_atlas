import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
    name: 'page',
    initialState: {
        pages: [

        ],
        currentPage: 0

    },
    reducers: {

        prevPage(state, action) {
            console.log('prev',state.currentPage)
            if (state.currentPage > 0) {
                state.currentPage -= 1
            }
        },

        nextPage(state, action) {

            if (state.currentPage < state.pages.length-1) {
                state.currentPage += 1
            }
            else{

            }

            
        },

        setPage(state,action){
            const index = action.payload;
            state.currentPage = index
        },

        createPage(state, action) {

            const obj = action.payload

            const isFound = state.pages.find(page => page.index === obj.index)

            if(!isFound){
                state.pages.push(obj)
            }

            


        }


    }

})

export const PageActions = PageSlice.actions

export default PageSlice