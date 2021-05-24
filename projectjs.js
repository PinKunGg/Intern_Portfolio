window.onload = pageload;

var NavBar = document.getElementById("header");
var VerNavBar = document.getElementById("dropdownheader");

var currentWork = 0;

function pageload() {
    loadfooter();
    unityproject();
    NavBar.style.display = "none";
    VerNavBar.style.display = "block";
}

function unityproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Unity Projects</h3><br><b class="headerproject">GoGo Balls</b><br><img src="otherproject/unity/GoGo_Ball_1.jpg" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"GoGo Ball เป็นเกม 2D Endless ที่ผู้เล่นจะรับบทเป็นลูกบอล โดยจะต้องเอาชีวิตรอดให้ได้นานที่สุด"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GoGo Ball เป็นเกมมือถือที่ผมจัดทำขึ้นมาเพื่อลงใน Google PlayStore โดยจะเป็นเกม 2D Endless ที่ผู้เล่นจะอยู่ในห้อง ๆ หนึ่งที่จะมี ศัตรู Spawn ออกมาเรื่อย ๆ</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">และ ผู้เล่นจะต้องเอาชีวิตรอดให้ได้นานที่สุด เท่าที่จะทำได้ โดยที่ภายในเกมนั้น เมื่อผู้เล่นสะสมเงินได้ถึงจำนวนหนึ่ง ผู้เล่นก็จะสามารถนำเงินเหล่านั้นไปซื้อ item upgrade</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">เพื่อให้ตัวละครของตัวเองนั้นเก่งขึ้นนั้นเอง</p></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Preview Gameplay</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/GoGoBall_GamePlay.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/ggMTItJ9wt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Status: Developing</p></div>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">Dimension Break</b><br><img src="otherproject/unity/DimensionBreak_1.png" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Dimension Break เป็นเกม 2D Action Side Scrolling ที่จะให้ผู้เล่นได้สู้กับ Monster ต่าง ๆ เพื่อนำพื้นที่ที่อยู่อาศัยของมนุษย์กลับคืนมา"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Dimension Break เป็นเกมที่ผมได้ทำขึ้นมาในช่วง ปี 3 เป็นเกม 2D Action Side Scrolling ที่ได้รับแรงบันดาลใจมาจากเกม Starbound</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">โดย Concept ของเกมนี้ก็คือ จะเป็นเกม Grinding แบบ Monster Hunter โดยผู้เล่นจะต้อง หาทรัพยากรมาเพื่อที่จะพัฒนาตัวละครของตัวเองให้เก่งขึ้น</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">และ นำทรัพยากรกลับมาพัฒนา Camp ของตัวเองอีกด้วย</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Preview Gameplay</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/DimensionBreak_GamePlay.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/wNyXX1MSGMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/DimensionBreak-E0V" target="_blank">https://github.com/PinKunGg/DimensionBreak-E0V</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">The Bangkok Field</b><br><img src="otherproject/unity/TBF_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"The Bangkok Field เป็นเกม 3D FPS ที่จะให้ผู้เล่นได้สู้กับ Zombie ต่าง ๆ เพื่อเอาชีวิตรอดออกไปจากเมืองแห่งนี้"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">The Bangkok Field เป็นเกมที่กลุ่มพวกผม 8 คนได้ทำขึ้นมาในช่วง ปี 3 เป็นเกม 3D FPS ที่ได้รับแรงบันดาลใจมาจากภาพยนตร์ The Cloverfield</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">โดย Concept ของเกมนี้ก็คือ ผู้เล่นตื่นขึ้นมาในห้างแห่งหนึ่งโดยที่ไม่รู้เลยว่าเกิดอะไรขึ้น พร้อมกับเจอร์ Zombie จำนวนมากที่กำลังเดินอยู่รอบ ๆ ห้างแห่งนี้</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">และ เราจะต้องเอาชีวิตรอดหนีออกไปจากที่นี้ให้ได้</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Google Drive: <a href="https://drive.google.com/file/d/1DefOwqCW32101D5XQtjgapZZb5jewpZy/view?usp=sharing" target="_blank">https://drive.google.com/file/d/1DefOwqCW32101D5XQtjgapZZb5jewpZy/view?usp=sharing</a></p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Game Installer: <a href="https://drive.google.com/file/d/1-zdJakPp0R6botq675Lg90WBHx4E4Alk/view?usp=sharing" target="_blank">https://drive.google.com/file/d/1-zdJakPp0R6botq675Lg90WBHx4E4Alk/view?usp=sharing</a></p>'
    document.getElementById("projectshow").innerHTML += '<small class="projectcontent">*เนีิ้องจากตัวเกมมีขนาดที่ค่อนข้างใหญ่จึงไม่สามารถ Upload ขึ้น GitHub หรือ BitBucket ได้</small>'
    document.getElementById("projectshow").innerHTML += '<br>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">Slash and Shoot [AR]</b><br><img src="otherproject/unity/SlashAndShoot_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Slash and Shoot เป็นเกม 3D AR ที่จะให้ผู้เล่นป้องกันฐานในเวลาที่กำหนด"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Slash and Shoot เป็นเกมที่ผมได้ทำขึ้นมาในช่วง ปี 3 เป็นเกม AR ที่ผู้เล่นจะต้องป้องกันฐานของเราในเวลาที่กำหนด</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Preview Gameplay</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/Slash & Shoot_Xmas.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/BPr9Mbe7eUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/SlashAndShoot" target="_blank">https://github.com/PinKunGg/SlashAndShoot</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">GOA-T (NSC 2020)</b><br><img src="otherproject/unity/GOA-T_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"GOA-T เป็นเกม 3D Tower defense + เกมการ์ด เพื่อเพิ่มความแปลกใหม่ให้กับผู้เล่น"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GOA-T เป็นเกมที่พวกผม 3 คนได้ทำขึ้นมาในช่วง ปี 3 เพื่อใช้ในการแข่งขัน NSC 2020 โดยจะเป็นเกม 3D Tower defense + แนวเกมการ์ด</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">เพื่อเพิ่มความหลากหลายให้กับตัวเกม และ ผู้เล่น</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">โดยทั่วไปแล้วเกมแนว Tower defense ผู้เล่นจะสามารถรู้ได้ทันที่ว่าจะมีศัตรูกี่ตัว มีตัวอะไรบ้าง และ ผู้เล่นสามารถที่จะจัดทีมเพื่อเข้าไปเล่นได้ทันที่</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">แต่ พวกผมอยากที่จะเพิ่มความแปลใหม่ โดยการที่นำแนวการเล่นแบบ เกมการ์ด เข้ามาร่วมด้วย</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">โดยปกติเกมการ์ดนั้นผู้เล่นจะไม่สามารถรู้ได้เลยว่าอีกฝ่ายมีการ์ดแบบไหน การ์ดอะไรบ้าง ผู้เล่นจะต้องแก้ปัญหาเฉพาะหน้าด้วยตัวเอง</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">และ นี้ก็เป็น Concept ของเกม GOA-T ของพวกผมครับ</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Preview Gameplay</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/GOAT_GamePlay.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/zXMAdzW9ykI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/GOA-T" target="_blank">https://github.com/PinKunGg/GOA-T</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">Battle Suite</b><br><img src="otherproject/unity/BattleSuite_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Battle Suite เป็นเกม 3D Thirdperson shooter ที่จะให้ผู้เล่นได้ขับหุ่นยนตร์ในการปกป้องเมืองต่าง ๆ"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Battle Suite เป็นเกมที่ผมได้ทำขึ้นมาในช่วง ปี 2 เป็นเกม 3D Thirdperson shooter ที่ได้รับแรงบันดาลใจมาจากเกมหุ่นยนตร์ต่าง ๆ</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">โดยที่เกมหุ่นยนตร์ในตลาดส่วนใหญ่นั้นจะมีอยู่ 2 ประเภทก็คือ เกมหุ่นยนตร์ที่บินได้อย่างเดียว กับ เกมหุ่นยนตร์ที่เดินได้อย่างเดียว</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">ผมเลยอยากจะลองสร้างเกมหุ่นยนตร์ที่ทำให้ผู้เล่นเลือกได้ว่าจะบังคับหุ่นยนตร์เครื่องนี้ยังไงก็ได้อย่างอิสระ</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Preview Gameplay</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/BattleSuite_Gameplay.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/Ac-ltONUdCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/BattleSuite" target="_blank">https://github.com/PinKunGg/BattleSuite</a></p>'

    document.getElementById("projectshow").innerHTML += '<br><hr><br><b class="headerproject">I-Magin</b><br><img src="otherproject/unity/I-Magin_1.jpg" alt="" class="projectimg imgcenter">'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"I-Magin Project เป็นเกม 3D Action platformer ที่จะให้ผู้เล่นตะลุยไปในด่านต่าง ๆ ของเกม"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">I-Magin Project เป็นเกมที่ผมได้ทำขึ้นมาในช่วง ปี 1 เป็นเกม 3D Action platformer ที่ได้รับแรงบันดาลใจส่วนใหญ่มาจากเกม Typoman</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent","centertxt">Trailer</p>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/I-Magin_Trailer.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/4C2S3H9OD7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">GitHub: <a href="https://github.com/PinKunGg/I_Magin" target="_blank">https://github.com/PinKunGg/I_Magin</a></p><br><hr>'

    document.getElementById("unityproject").className = "active";
    document.getElementById("asepriteproject").className = "";
    document.getElementById("blenderproject").className = "";
    currentWork = 1;
}

function asepriteproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Aseprite Project</h3><br><b class="headerproject">Dimension Break monster design</b><br><img src="otherproject/unity/Aseprite_1.png" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Character design สำหรับเกม Dimension Break"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">Dimension Break เป็นเกม 2D Action Side Scrolling ที่จะให้ผู้เ"ล่นได้สู้กับ Monster ต่าง ๆ เพื่อนำพื้นที่ที่อยู่อาศัยของมนุษย์กลับคืนมา</p>'
    document.getElementById("projectshow").innerHTML += '<br><hr><br>'
    document.getElementById("projectshow").innerHTML += '<h3 class="projecttitle">Aseprite 2D Animation</h3><br><b class="headerproject">Dimension Break player animation</b><br>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/Aseprite.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/RLUcf0wfzmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Player animation สำหรับเกม Dimension Break"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">สำหรับ Animation ของ Player ผมได้ใช้ Asprite ในการทำ Animation</p>'
    document.getElementById("projectshow").innerHTML += '<br>'
    document.getElementById("projectshow").innerHTML += '<b class="headerproject">Dimension Break monster animation</b><br>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/2D_Animation.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/_AnIDHVbEL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Monster animation สำหรับเกม Dimension Break"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">สำหรับ Animation ของ Monster ผมได้ใช้ 2D Skeleton ของ Unity ในการทำ Animation เนื่องจากผมคำนวณระยะเวลาในการทำ Project นี้ผิดไป</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">เลยไม่สามารถทำ Animation ของ Monster ใน Asprite ได้ทันเวลา</p>'
    document.getElementById("projectshow").innerHTML += '<br>'

    document.getElementById("unityproject").className = "";
    document.getElementById("asepriteproject").className = "active";
    document.getElementById("blenderproject").className = "";
    currentWork = 2;
}

function blenderproject() {
    document.getElementById("projectshow").innerHTML = '<h3 class="projecttitle">Blender Project</h3><br><b class="headerproject">Battle Suite model</b><br><img src="otherproject/unity/Blender_1.jpg" alt="" class="projectimg imgcenter">';
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Model ที่ใช้สำหรับเกม Battle Suite"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="centertxt">Battle Suite เป็นเกม 3D Thirdperson shooter ที่จะให้ผู้เล่นได้ขับหุ่นยนตร์ในการปกป้องเมืองต่าง ๆ</p>'
    document.getElementById("projectshow").innerHTML += '<br><hr><br>'
    document.getElementById("projectshow").innerHTML += '<h3 class="projecttitle">Blender 3D Animation</h3><br><b class="headerproject">Battle Suite player animation</b><br>'
        //document.getElementById("projectshow").innerHTML += '<video class="GamePlayVideo" controls><source src="portfolio/vdo/BlenderModel.mp4" type="video/mp4"></video>'
    document.getElementById("projectshow").innerHTML += '<div class="GamePlayVideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/TeFg4DXY1kU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    document.getElementById("projectshow").innerHTML += '<p class="projectdescription">"Player animation สำหรับเกม Battle Suite"</p>'
    document.getElementById("projectshow").innerHTML += '<p class="projectcontent">สำหรับ Animation ของ Player ผมได้ใช้ Blender ในการทำ Animation</p>'
    document.getElementById("projectshow").innerHTML += '<br>'

    document.getElementById("unityproject").className = "";
    document.getElementById("asepriteproject").className = "";
    document.getElementById("blenderproject").className = "active";
    currentWork = 3;
}


//"Load HTML page in div" ref: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript

function reloadcurrentWork() {

    if (currentWork == 1) {
        work4();
    } else if (currentWork == 2) {
        work5();
    } else if (currentWork == 3) {
        work6();
    } else if (currentWork == 4) {
        work7();
    }
}