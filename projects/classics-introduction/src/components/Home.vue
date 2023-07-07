<template>
    <div>
        <h2 @click="clickHandler">{{ names }}</h2>
        <div v-if="names === '红楼梦' & flag">
            <h3>简介</h3>
            <router-link to="/Red"><img src="./img/红楼梦.png" class="box"></router-link>
            <p>{{ Intro1 }}</p>
            <Comment />
        </div>
        <div v-if="names === '西游记' & flag">
            <h3>简介</h3>
            <img src="./img/西游记.png" class="box">
            <p>{{ Intro2 }}</p>
            <Comment />
        </div>
        <div v-if="names === '三国演义' & flag">
            <h3>简介</h3>
            <img src="./img/三国演义.png" class="box">
            <p>{{ Intro3 }}</p>
            <Comment />
        </div>
        <div v-if="names === '水浒传' & flag">
            <h3>简介</h3>
            <img src="./img/水浒传.png" class="box">
            <p>{{ Intro4 }}</p>
            <Comment />
        </div>
    </div>
</template>

<script>
import Comment from "./Comment.vue"

export default {
    name: 'titles',
    props: {
        names: String,
    },

    components: { Comment },
    data() {
        return {
            flag: false,
            Intro1: "《红楼梦》是中国古代小说的巅峰之作，也是中国四大名著之一。全书以贾、史、王、薛四大家族的兴衰为背景，通过对人物命运的描述，展现了封建社会的残酷和虚伪。小说中涉及了丰富的人物形象和精彩的故事情节，既以宏大的篇章展示了封建社会的体制与伦理，又通过草木调和、笔墨凝聚出世界文学史上独一无二的文化艺术光辉。",
            Intro2: "《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。 今见最早的《西游记》版本是明代万历二十年金陵世德堂《新刻出像官板大字西游记》，未署作者姓名。 鲁迅、董作宾等人根据《淮安府志》“吴承恩《西游记》”的记载予以最终论定“吴承恩原著”。",
            Intro3: "《三国演义》（又名《三国志演义》《三国志通俗演义》）是元末明初小说家罗贯中根据陈寿《三国志》和裴松之注解以及民间三国故事传说经过艺术加工创作而成的长篇章回体历史演义小说，与《西游记》《水浒传》《红楼梦》并称为中国古典四大名著。",
            Intro4: "《水浒传》是中国古典四大名著之一，问世后，在社会上产生了巨大的影响，成为后世中国小说创作的典范。《水浒传》是中国历史上最早用白话文写成的章回小说之一，流传极广，脍炙人口；同时也是汉语言文学中具备史诗特征的作品之一，对中国乃至东亚的叙事文学都有深远的影响。",
        }
    },

    methods: {
        clickHandler() {
            if (this.flag) {
                this.flag = false
            } else {
                this.flag = true
            }
        },
    }
}



</script>


<style>
.box {
    width: 150px;
}

p {
    font-size: 14px;
    word-wrap: break-word;
    color: #333;
    margin-bottom: 15px;
    text-indent: 2em;
    line-height: 24px;
    zoom: 1;
}
</style>