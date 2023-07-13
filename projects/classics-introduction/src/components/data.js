import hongloumeng from './img/红楼梦.png'
import xiyouji from './img/西游记.png'
import sanguoyanyi from './img/三国演义.png'
import shuihuzhuan from './img/水浒传.png'
import lindaiyv from './img/林黛玉.webp'
import jiabaoyv from './img/贾宝玉.webp'
import xuebaochai from './img/薛宝钗.webp'
import wangxifeng from './img/王熙凤.webp'
import jiayuanchun from './img/贾元春.webp'

// const HOURS_PER_DAY = 24

export const starMapData = [
    {
        img: lindaiyv,
        Href:"https://baike.baidu.com/item/%E6%9E%97%E9%BB%9B%E7%8E%89",
        name: "林黛玉"
    },
    {
        img: jiabaoyv,
        Href:"https://baike.baidu.com/item/%E8%B4%BE%E5%AE%9D%E7%8E%89/59563",
        name: "贾宝玉"
    },
    {
        img: xuebaochai,
        Href:"https://baike.baidu.com/item/%E8%96%9B%E5%AE%9D%E9%92%97",
        name: "薛宝钗"
    },
    {
        img: wangxifeng,
        Href:"https://baike.baidu.com/item/%E7%8E%8B%E7%86%99%E5%87%A4/2466327",
        name: "王熙凤"
    },
    {
        img: jiayuanchun,
        Href:"https://baike.baidu.com/item/%E8%B4%BE%E5%85%83%E6%98%A5",
        name: "贾元春"
    }
]

export const data = [{
    name: '红楼梦',
    img: hongloumeng,
    intro: '红楼梦》是中国古代小说的巅峰之作，也是中国四大名著之一。全书以贾、史、王、薛四大家族的兴衰为背景，通过对人物命运的描述，展现了封建社会的残酷和虚伪。小说中涉及了丰富的人物形象和精彩的故事情节，既以宏大的篇章展示了封建社会的体制与伦理，又通过草木调和、笔墨凝聚出世界文学史上独一无二的文化艺术光辉。',
    router: '/Red'
}, {
    name: '西游记',
    img: xiyouji,
    intro: '《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。 今见最早的《西游记》版本是明代万历二十年金陵世德堂《新刻出像官板大字西游记》，未署作者姓名。 鲁迅、董作宾等人根据《淮安府志》“吴承恩《西游记》”的记载予以最终论定“吴承恩原著”。',
},{
    name:'三国演义',
    img: sanguoyanyi,
    intro:'《三国演义》可大致分为黄巾起义、董卓之乱、群雄逐鹿、三国鼎立、三国归晋五大部分，描写了从东汉末年到西晋初年之间近百年的历史风云，以描写战争为主，诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，最终司马炎一统三国，建立晋朝的故事。反映了三国时代各类社会斗争与矛盾的转化，并概括了这一时代的历史巨变，塑造了一群叱咤风云的三国英雄人物。'
},{
    name:'水浒传',
    img: shuihuzhuan,
    intro:'《水浒传》是中国古典四大名著之一，问世后，在社会上产生了巨大的影响，成为后世中国小说创作的典范。《水浒传》是中国历史上最早用白话文写成的章回小说之一，流传极广，脍炙人口；同时也是汉语言文学中具备史诗特征的作品之一，对中国乃至东亚的叙事文学都有深远的影响。'
}
]

// const allData = {
//     data: data,
//     starMapData: starMapData
// }

export default {
    data,
    starMapData
}