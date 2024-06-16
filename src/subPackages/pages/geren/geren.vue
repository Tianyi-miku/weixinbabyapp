<template>
    <nut-grid :border="false" column-num="5">
        <nut-grid-item>
            <nut-avatar>
                <span class="iconfont icon-yonghu"></span>
            </nut-avatar>
        </nut-grid-item>
        <nut-grid-item>
            <div>姓名</div>
            <div>年龄</div>
        </nut-grid-item>
        <nut-grid-item>
        </nut-grid-item>
        <nut-grid-item>
        </nut-grid-item>
        <nut-grid-item>
            <div class="grids">
                <span class="iconfont icon-xinzeng myionc"></span>
                <span class="iconfont icon-24gl-swapHorizontal3 myionc"></span>
            </div>
        </nut-grid-item>
    </nut-grid>
    <div class="cotnet">
        <nut-button size="large" type="primary">
            <div class="smrc">
                家庭共享
            </div>
            <div class="smrc">
                共同记录宝宝的日常
            </div>
        </nut-button>

        <nut-cell title="账号设置" is-link class="topa">
            <template #icon>
                <My />
            </template>
        </nut-cell>
        <nut-cell title="数据统计" is-link></nut-cell>
        <nut-cell title="联系我们" is-link></nut-cell>
        <nut-cell title="隐私政策" is-link></nut-cell>
    </div>
</template>
<script setup>
import { My } from '@nutui/icons-vue-taro'

</script>
<style>
.cotnet {
    margin: 0 2rem;
}

.topa {
    margin-top: 1rem;
}

.iconfont {
    font-size: large;
}

.grids {
    width: 2rem;
    display: flex !important;
    flex-wrap: wrap;
}

.myionc {
    font-size: small;
    display: flex;
    flex-wrap: wrap;
    width: 1rem;
}

.smrc {
    padding: 0;
    font-size: small;
    height: 50%;
    line-height: 1.5rem;
}
</style>