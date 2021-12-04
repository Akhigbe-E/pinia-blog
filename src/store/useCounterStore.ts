import { defineStore } from "pinia";
import { useBlogStore } from "./useBlogStore";

export const useCounterStore = defineStore("counterStore", {
    state: () => ({

    }),
    getters: {
        allPostNo() {
            const blog = useBlogStore()
            return blog.allPostsLength
        },
        techPostNo() {
            const blog = useBlogStore()
            return blog.techPosts.length
        },
        acrchitecturePostNo() {
            const blog = useBlogStore()
            return blog.architecturePosts.length
        }
    },
    actions: {
        
    }
})