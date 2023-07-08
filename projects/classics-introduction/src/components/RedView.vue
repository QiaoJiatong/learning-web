<template>
    <h1>红楼梦</h1>
    <div>
        <img src="./img/红楼梦.png" class="box">
        <p>作者：<a href="https://baike.baidu.com/item/%E6%9B%B9%E9%9B%AA%E8%8A%B9/14919">曹雪芹</a></p>
        <p>《红楼梦》,原名《石头记》,是中国古代章回体长篇小说,中国古典四大名著之首。其通行本共120回,
            一般认为前80回是清代作家曹雪芹所著，后40回作者为无名氏,由高鹗,程伟元整理。小说以贾、史、王、
            薛四大家族的兴衰为背景，以富贵公子贾宝玉为视角，以贾宝玉与林黛玉、薛宝钗的爱情婚姻悲剧为主线，
            描绘了一些闺阁佳人的人生百态，展现了真正的人性美和悲剧美，是一部从各个角度展现女性美以及中国
            古代社会百态的史诗性著作。</p>
        <p>《红楼梦》版本有120回“程本”和80回“脂本”两大系统。程本为程伟元排印的印刷本,脂本为脂砚斋在不同
            时期抄评的早期手抄本。脂本是程本的底本。</p>
        <p>《红楼梦》是一部具有世界影响力的人情小说、中国封建社会的百科全书、传统文化的集大成者。其作者以
            “大旨谈情，实录其事”自勉，只按自己的事体情理，按迹循踪，摆脱旧套，新鲜别致，取得了非凡的艺术成
            就。“真事隐去，假语存焉”的特殊笔法更是令后世读者脑洞大开，揣测之说久而遂多。二十世纪以来，《红
            楼梦》更以其丰富深刻的思想底蕴和异常出色的艺术成就使学术界产生了以其为研究对象的专门学问—红学。</p>
        <h2>相关星图</h2>
        <nav class="people" aria-labelledby="ucj-1">
            <div class="character">
                <img src="./img/林黛玉.webp" class="box1">
                <div>
                    <a href="https://baike.baidu.com/item/%E6%9E%97%E9%BB%9B%E7%8E%89">林黛玉</a>
                    <span></span>
                </div>
            </div>
            <div class="character"><img src="./img/贾宝玉.webp" class="box1"><p><a href="https://baike.baidu.com/item/%E8%B4%BE%E5%AE%9D%E7%8E%89/59563">贾宝玉</a></p></div>
            <div class="character"><img src="./img/薛宝钗.webp" class="box1"><p><a href="https://baike.baidu.com/item/%E8%96%9B%E5%AE%9D%E9%92%97">薛宝钗</a></p></div>
            <div class="character"><img src="./img/王熙凤.webp" class="box1"><p><a href="https://baike.baidu.com/item/%E7%8E%8B%E7%86%99%E5%87%A4/2466327">王熙凤</a></p></div>
            <div class="character"><img src="./img/贾元春.webp" class="box1"><p><a href="https://baike.baidu.com/item/%E8%B4%BE%E5%85%83%E6%98%A5">贾元春</a></p></div>
        </nav>
    </div>
</template>
<script>

export default {
    name: "Red",
}

</script>

<style scoped>
p {
    font-size: 14px;
    word-wrap: break-word;
    color: #333;
    margin-bottom: 15px;
    text-indent: 2em;
    line-height: 24px;
    zoom: 1;
}
.people {
    display: flex;
    padding: 12px;
}
.character {
    padding: 5px;
}
.box1{
    width: 150px;
    height: 150px;
}

</style>