import { defineStore } from "pinia";

type PostCategory = "Technology" | "Architecture"

type Post = {
    id: string,
    title: string,
    description: string,
    content: string,
    category: PostCategory
}

type Blog = {
    posts: Post[],
}

export const useBlogStore = defineStore("blogStore", {
    state: ():Blog => ({
        posts:[]
    }),
    getters: {
        allPostsLength: state => state.posts.length,
        techPosts: state => state.posts.filter(({category}) => category === "Technology"),
        architecturePosts: state => state.posts.filter(({category}) => category === "Architecture"),
    },
    actions: {
        addPost(post: Post){
            this.posts.push(post)
        },
        deletePost(postId: string) {
            this.posts = [...this.posts.filter(({id}) => id === postId)]
        }
    }
})