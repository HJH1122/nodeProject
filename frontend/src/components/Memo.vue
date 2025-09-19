<template>
    <div class="memo">
        <div class="act">
            <button class="btn btn-primary" @click="add()">+ 추가</button>
        </div>
        <ul>
            <li v-for="(d, idx) in state.data" :key="idx">{{ d }}</li>
           
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default{
    setup(){
        const state = reactive({
            data: [
            "메모 내용1",
            "메모 내용2",
            "메모 내용3",
            "메모 내용4",
            "메모 내용5",
        ]
        });


        const add = () =>{
            state.data.push('추가된 메모 내용');
        }
        return {state, add};
    }
}



</script>

<style lang="scss" scoped>

.memo {
    .act{
        padding: 10px 10px 5px 5px;
        text-align: right;
    }
    ul{
        border-top: 1px solid #eee;
        list-style: none;
        padding: 15px 0;
        margin: 0;

        li{
            padding: 5px 10px;
            margin: 5px;
        }
    }
}

</style>