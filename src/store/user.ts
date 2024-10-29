//1. 引入定义仓库的方法
import { defineStore } from "pinia";

export const useUser = defineStore({
    id: 'user',
    state(){
        return {
            user:{}
        }
    },
    actions:{
        setUser(newUser:any){
            this.user = newUser
        }
    }
})