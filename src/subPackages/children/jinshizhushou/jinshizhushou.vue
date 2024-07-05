<template>
    <div class="top">
        <div v-for="(item, index) in list" :key="index" class="topItem">
            <div :class="item.class">
                <div class="toux">
                    <nut-avatar size="large">
                        <img :src="baby?.avatarPath ? documentUrl + baby.avatarPath : ico_huluobo" />
                    </nut-avatar>
                </div>
                <div class="content">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
    <div class="bot">
        <div @click="addList('挑食偏食')" class="botItem">
            <nut-avatar size="large">
                <img :src="ico_tiaoshipianshi_nor" />
            </nut-avatar>
            <div class="title">挑食偏食</div>
        </div>
        <div @click="addList('被动进餐')" class="botItem">
            <div class="topBar"></div>
            <div class="title">被动进餐</div>
        </div>
        <div @click="addList('含饭')" class="botItem">
            <div class="topBar"></div>
            <div class="title">含饭</div>
        </div>
        <div @click="addList('食欲缺乏')" class="botItem">
            <div class="topBar"></div>
            <div class="title">食欲缺乏</div>
        </div>
        <div @click="addList('进餐拖延')" class="botItem">
            <div class="topBar"></div>
            <div class="title">进餐拖延</div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import ico_huluobo from '../../../assets/img/ico_huluobo.png'
import ico_tiaoshipianshi_nor from '../Aimgs/ico_tiaoshipianshi_nor.png'

let list = reactive([])
let baby = ref(null)

function addList(name) {
    list.push({
        class: 'left',
        content: name
    })
    setTimeout(() => {
        list.push({
            class: 'right',
            content: '挑食偏食挑食偏食挑食偏食挑食偏食挑食偏食'
        })
    }, 1000);
}

</script>

<style>
.top {
    height: 80vh;
    overflow: scroll;
}

.bot {
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
}

.title {
    text-align: center;
}

.botItem {
    width: 25%;
    text-align: center;
    height: 10vh;

}

.topBar {
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    background-color: gray;
    margin: auto;
}

.content {
    height: auto;
    width: max-content;
    display: flex;
    align-items: center;
}

.toux {
    height: auto;
    width: max-content;
}

.topItem {
    display: flex;
}

.left {
    display: flex;
    flex-direction: row;
    float: left;
    width: 100%;
    padding: 0.5rem;
}

.right {
    display: flex;
    flex-direction: row-reverse;
    float: right;
    width: 100%;
    padding: 0.5rem;
}
</style>