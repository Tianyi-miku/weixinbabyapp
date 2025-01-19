<template>

  <nut-form ref="formRef" :model-value="formData" :rules="{
    measureTime: [
      { required: true, message: '请输入日期' },
    ],
  }">
    <nut-form-item label="记录时间" prop="measureTime" required style="display: flex;flex-direction: column; ">
      <nut-input disabled="true" placeholder="请输入记录时间" v-model="formData.measureTime" type="text"
        @click="show = true" />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-date-picker v-model="riqi" type="datetime" :three-dimensional="false"
          @cancel="show = false"></nut-date-picker>
        <nut-button block type="primary" @click="riqichange">确认</nut-button>
      </nut-popup>
    </nut-form-item>

    <nut-form-item label="便便颜色" prop="color" required style="display: flex ; flex-direction: column;  " >
      <nut-radio-group v-model="formData.color" direction="horizontal" >
        <div class="zongbianbian">
          <div class="fenbianbian" >
        <nut-radio label="1" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
       <img  class="biantubiao" :src="bianbianhuangse"  />
        <span class="xuanzewenben">黄色</span>
           </div>

        <div class="fenbianbian"  >
        <nut-radio label="2" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img class="biantubiao" :src="bianbianlvse"  />
        <span class="xuanzewenben">绿色</span>
      </div>

       <div  class="fenbianbian" >
        <nut-radio label="3" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="bianbianhongse"  />
        <span class="xuanzewenben">红色</span>
      </div>

      <div  class="fenbianbian"  >
        <nut-radio label="4">
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="bianbianhuise"  />
        <span class="xuanzewenben">灰色</span>
      </div>

       <div class="fenbianbian"  >
        <nut-radio label="5" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="bianbianhuibai"  />
        <span class="xuanzewenben">灰白</span>
      </div>
        <!-- <nut-radio label="6" style="display: flex;flex-direction: column;">
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: red"> </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc selectiocn" style="color: red; border: 1px solid #002f49;">
              </span>
          </template>
        </nut-radio> -->
        
      </div>
      </nut-radio-group>

    </nut-form-item>
    <nut-form-item label="便便形态" prop="shape" required style="display: flex;flex-direction: column;" >
      <nut-radio-group v-model="formData.shape" direction="horizontal">

      <div class="zongbianbian">
          <div class="fenbiannbian">
        <nut-radio label="1" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame22"  />
        <span class="xuanzewenben">羊粪球状</span>
        </div>

        <div  class="fenbiannbian">
        <nut-radio label="2" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame16"  />
        <span class="xuanzewenben">麻花状</span>
        </div>

        <div  class="fenbiannbian">
        <nut-radio label="3" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame17"  />
        <span class="xuanzewenben">香肠状</span>
        </div>

        
        <div  class="fenbiannbian">
        <nut-radio label="4" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame18"  />
        <span class="xuanzewenben">香蕉状</span>
         </div>

        <div  class="fenbiannbian">
        <nut-radio label="5" >
        <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame19"  />
        <span class="xuanzewenben">棉花糖状</span>
         </div>

        <div  class="fenbiannbian">
        <nut-radio label="6" >
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame20"/>
        <span class="xuanzewenben">软稠状</span>
        </div>

        <div class="fenbiannbian">
        <nut-radio label="7">
          <template #icon>
            <img  class="xuanzeanniu" :src="guanli_kong"  />
          </template>
          <template #checkedIcon>
             <img  class="xuanzeanniu" :src="guanli_xuanze"  />
          </template>
        </nut-radio>
        <img  class="biantubiao" :src="Frame21"  />
        <span class="xuanzewenben">液态状</span>
         </div>
      </div>
      </nut-radio-group>
    </nut-form-item>
    <nut-form-item>
      <nut-button type="primary" block @click="handleSubmit">保存</nut-button>
    </nut-form-item>
  </nut-form>
  <div class="wenbenhezi">
        <div class="wenbenbiaoti">便便颜色</div>
        <div class="wenbenneirong">
          <span>黄色：理想大便颜色 </span>
          <span>绿色：肠道蠕动过快/浓缩胆汁未稀释/补铁未充分吸收/绿色蔬菜过多/肠道菌群影响 </span>
          <span>红色：下消化道出血、肛裂/过敏、红色食物过多 </span>
          <span> 灰色：上消化道出血、补铁未充分吸收、黑色食物过多、粪便停留太久 </span>
          <span> 灰白：胆汁不能排泄到肠道中染色，长期出现需就医</span>
        </div>
        <div class="wenbenbiaoti">便便形态</div>
        <div class="wenbenneirong">
          <span>第1型（羊粪球状）：一颗颗硬球（很难通过） </span> 
          <span>第2型（麻花状）：麻花状，但表面凹凸 </span> 
          <span> 第3型（香肠状）：香肠状，但表面有裂痕 </span> 
          <span>第4型（香蕉状）：像香肠或蛇一样，且表面很光滑 </span> 
          <span> 第5型（棉花糖状）：断边光滑的柔软块状（容易通过） </span> 
          <span> 第6型（软稠状）：粗边蓬松块，糊状大便 </span> 
          <span>第7型（液态状）：水状，无固体块（完全液体）</span> 
          <span> 第1型和第2型表示有便秘；</span> 
          <span>第3型和第4型是理想的便形，尤其第4型是最容易排便的形状；</span> 
          <span>第5至第7型则代表可能有腹泻（新生儿正常是第6型）。</span> 
         </div>
    </div>

    <div class="wenbenhezi">
        <div class="wenbenbiaoti">宝宝便秘的护理</div>
        <div class="wenbenneirong">
          <strong>督促宝宝多饮水多进食蔬菜水果：</strong>宝宝皮肤和肠胃娇嫩，需要水分的滋养，需要充足的水分。不能及时给宝宝补充水分的话，会造成水分损耗，肠道不润滑而便秘。 
          <span><strong>多让宝宝进行户外活动：</strong>久静不动的宝宝，胃胃肠蠕动较差，进食的食物不易消化，容易便秘、营养不良，造成恶性循环。</span></div>
        <div class="wenbenbiaoti">宝宝腹泻的护理</div>
        <div class="wenbenneirong">
          <span><strong>补充益生菌：</strong>益生菌是我们肠道中有益的细菌，能够帮助宝宝消化系统保持健康。 </span>
          <span><strong>饮食调节：</strong>在腹泻好转之前尽量少喝牛奶，不吃苹果、梨和樱桃汁这些可能加剧腹泻的食物。 </span>
          <span><strong>补充水分：</strong>预防脱水是腹泻宝宝最重要的措施。你可以把白葡萄汁或青苹果汁加水稀释后喂给宝宝，也可以在医生指导下口服补液盐溶液。</span>
          </div>
    </div>

</template>
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Jimi40 } from '@nutui/icons-vue-taro'
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'
import bianbianhuangse from '../../../assets/img/bianbianhuangse.png'
import bianbianlvse from '../../../assets/img/bianbianlvse.png'
import bianbianhongse from '../../../assets/img/bianbianhongse.png'
import bianbianhuise from '../../../assets/img/bianbianhuise.png'
import bianbianhuibai from '../../../assets/img/bianbianhuibai.png'
import Frame16 from '../../../assets/img/Frame16.png'
import Frame17 from '../../../assets/img/Frame17.png'
import Frame18 from '../../../assets/img/Frame18.png'
import Frame19 from '../../../assets/img/Frame19.png'
import Frame20 from '../../../assets/img/Frame20.png'
import Frame21 from '../../../assets/img/Frame21.png'
import Frame22 from '../../../assets/img/Frame22.png'
import guanli_kong from '../../../assets/img/guanli_kong.png'
import guanli_xuanze from '../../../assets/img/guanli_xuanze.png'

const formData = ref({
  color: '1',
  measureTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  shape: '1',
})
let data = dayjs(new Date())
const riqi = ref(new Date(data.year(), data.month(), data.date(), data.hour(), data.minute()))
const show = ref(false)
const riqichange = (param) => {
  formData.value.measureTime = dayjs(riqi.value).format('YYYY-MM-DD HH:mm:ss')
  show.value = false
}

const formRef = ref(null)
const handleSubmit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      const baby = Taro.getStorageSync('user')
      const data = {
        babyId: baby.id,
        color: parseInt(formData.value.color),
        shape: parseInt(formData.value.shape),
        measureTime: formData.value.measureTime
      }
      Axios.post('/poop/add', data).then(res => {
        Taro.showToast({
          title: '新增成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(() => {
          Taro.navigateBack({
            delta: 1
          })
        }, 1000);
      })
    } else {
      console.warn('error:', errors)
    }
  })
}

</script>
<style>
.myionc {
  font-size: small;
  display: flex;
  flex-wrap: wrap;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
}

.selectiocn {
  border-radius: 50%;
  border: solid;
  border: 1px solid #4a7330 !important;
}

.nut-picker__right {
  display: none;
}
.wenbenhezi{
  /* 添加必要的CSS样式 */
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 8px rgb(201, 198, 198);
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: start;
    /* background-color: #8CC269; */
    border-radius: 15px;
}
.wenbenhezi .wenbenbiaoti {
  font-weight: bold;
  font-size: 14pt;
  width: 98%;
  height: 28pt;
  margin-top: 20px;
}
.wenbenhezi .wenbenneirong {
  list-style-type: disc;
  font-size: 12pt  ;
  width: 98%;
  margin-bottom: 40px;
}
.zongbianbian {
display: flex;
justify-content: space-between;
}
.biantubiao{
  width: 3rem;
  height: 3rem;
  text-align: center
}
.fenbianbian {
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-justify-content: center;
}
.xuanzeanniu{
width: 1rem;
height: 1rem;
margin-left:1rem;
}
.xuanzewenben{
  color: #000;
  text-size-adjust: 5px;

}
</style>