<template>
    <div>
        <h1 @click="showFullIntro">《红楼梦》简介</h1>
        <div v-if="flag">
            <p>{{ intro }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            intro:
                "《红楼梦》是中国古代小说的巅峰之作，也是中国四大名著之一。全书以贾、史、王、薛四大家族的兴衰为背景，通过对人物命运的描述，展现了封建社会的残酷和虚伪。小说中涉及了丰富的人物形象和精彩的故事情节，既以宏大的篇章展示了封建社会的体制与伦理，又通过草木调和、笔墨凝聚出世界文学史上独一无二的文化艺术光辉。",
            flag: false
        };
    },
    methods: {
        showFullIntro() {
            if (this.flag) {
                this.flag = false
            } else {
                this.flag = true
            }
        }
    }
};
</script>