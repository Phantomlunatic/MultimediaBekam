class MPI{static btnDB=[];static dragDB=[];static inputDB=[];static vlabDB=[];static dragMC;static ob;static appLib;static suaraAktif=!0;static currentAudio;static isVideo=!1;static isPopup=!1;static isDrag=!1;static isMouseDown=!1;static popMC;static pengaturSuara;static scrMC;static xscale;static yscale;static volumeSuara=100;static textMC;static inputTextMC;static isInputText=!1;static isText=!1;static isTimer=!1;static timerMC;static kuisMC;static isKuis=!1;static soalKuis;static nilaiBenar=10;static nilaiSalah=0;static score=0;static frameKuis;static frameTimer;static suhuRuang=20;static vlabLantai=400;static mouseTimer=0;constructor(a,t){this.versi=.1,this.root=a,MPI.ob=this.root,this.stage=this.root.stage,this.lib=t,MPI.appLib=t,MPI.that=this,MPI.xscale=canvas.width/MPI.appLib.properties.width,MPI.yscale=canvas.height/MPI.appLib.properties.height,MPI.vlabLantai=MPI.appLib.properties.height,this.init()}init(){canvas.onmousedown=this.canvasDown.bind(this.root),canvas.onmouseup=this.canvasUp.bind(this.root),this.root.on("mousedown",this.mouseDown.bind(this.root)),this.root.on("mouseout",this.mouseOut.bind(this.root)),stage.on("stagemouseup",this.mouseUp.bind(this.root)),this.root.on("click",this.clickHandler.bind(this.root)),window.onkeydown=this.tekan.bind(this.root),createjs.Ticker.addEventListener("tick",this.update.bind(this.root)),console.log("MPI version "+this.versi),createjs.Touch.enable(stage),stage.mouseMoveOutside=!0}warnaBG(a=0){document.body.style.backgroundColor=0==a?MPI.appLib.properties.color:a}canvasDown(a){if(MPI.vlabDB.length>0&&!MPI.dragMC)for(let a=0;a<MPI.vlabDB.length;a++){let t=MPI.vlabDB[a];if(t.drag){let a=t.globalToLocal(stage.mouseX,stage.mouseY);stage.mouseInBounds&&t.hitTest(a.x,a.y)&&(MPI.dragMC=t,t.isDrag=!0,MPI.dragMC.offX=-a.x*t.scaleX,MPI.dragMC.offY=-a.y*t.scaleY,t.goyang=Math.round(6*Math.random()))}}MPI.isMouseDown=!0}canvasUp(a){if(MPI.isInputText&&null!=MPI.inputTextMC){let a=MPI.inputTextMC.globalToLocal(stage.mouseX,stage.mouseY);stage.mouseInBounds&&MPI.inputTextMC.hitTest(a.x,a.y)||(MPI.inputTextMC.inputTxt.text=MPI.inputTextMC.val,MPI.isInputText=!1)}MPI.dragMC&&("vlab-burner"==MPI.dragMC.tipe&&MPI.mouseTimer<10&&MPI.dragMC.auto&&(MPI.dragMC.menyala=!MPI.dragMC.menyala),MPI.dragMC.isDrag=!1),MPI.mouseTimer=0,MPI.isMouseDown=!1}update(){var a;if(MPI.isPopup&&(0==(a=MPI.popMC).popStat&&(a.visible=!0,a.scaleAcc+=.05,a.scaleX+=a.scaleAcc,a.scaleY+=a.scaleAcc,a.scaleX>1.1&&(a.popStat=1)),1==a.popStat&&(a.scaleX*=.95,a.scaleY*=.95,a.scaleX<1&&(a.scaleX=1,a.scaleY=1,a.popStat=2)),3==a.popStat&&(a.scaleX*=1.05,a.scaleY*=1.05,a.scaleX>1.2&&(a.popStat=4,a.scaleAcc=.1)),4==a.popStat&&(a.scaleAcc+=.01,a.scaleX-=a.scaleAcc,a.scaleY-=a.scaleAcc,a.scaleX<.5&&(null!=a.closeFunc&&a.closeFunc(),a.popStat=5,MPI.isPopup=!1,MPI.ob.removeChild(a)))),MPI.isMouseDown&&MPI.mouseTimer++,MPI.isDrag){let t=stage.mouseX/stage.scaleX-MPI.scrMC.x,e=stage.mouseY/stage.scaleY-MPI.scrMC.y,i=Math.sqrt(t*t+e*e)/MPI.scrMC.scaleX;if(MPI.scrMC.scrollbarMC.x=i,MPI.scrMC.scrollbarMC.x<0&&(MPI.scrMC.scrollbarMC.x=0),MPI.scrMC.scrollbarMC.x>MPI.scrMC.xmin&&(MPI.scrMC.scrollbarMC.x=MPI.scrMC.xmin),MPI.scrMC.val=Math.round(i/MPI.scrMC.xmin*100),MPI.scrMC.val<0&&(MPI.scrMC.val=0),MPI.scrMC.val>100&&(MPI.scrMC.val=100),null!=MPI.scrMC.nfunc&&MPI.scrMC.nfunc(),null!=MPI.scrMC.tgtScroll){let t;t=0==MPI.scrMC.rotation?"x":"y";let e=100,i=(a=MPI.scrMC.tgtScroll).kontenMC,s=a,l=MPI.scrMC.val;0==l&&(l=1),"x"!=t&&"h"!=t||(e=i.nominalBounds.width-s.nominalBounds.width,i.x=-l/100*e),"y"!=t&&"v"!=t||(e=i.nominalBounds.height-s.nominalBounds.height,i.y=-l/100*e+i.nominalBounds.height/2+5)}}if(MPI.isText&&(null==MPI.textMC?MPI.isText=!1:(MPI.textMC.textTime++,MPI.textMC.textTime>1&&(MPI.textMC.textTime=0,MPI.textMC.textPos++,MPI.textMC.textPos==MPI.textMC.textVal.length&&(MPI.isText=!1,null!=MPI.textMC.textFunc&&MPI.textMC.textFunc())),MPI.textMC.text=MPI.textMC.textVal.substr(0,MPI.textMC.textPos))),MPI.dragMC&&(""==MPI.dragMC.limit&&(MPI.dragMC.x=stage.mouseX/stage.scaleX+MPI.dragMC.offX,MPI.dragMC.y=stage.mouseY/stage.scaleY+MPI.dragMC.offY),"x"==MPI.dragMC.limit&&(MPI.dragMC.x=stage.mouseX/stage.scaleX+MPI.dragMC.offX,MPI.dragMC.y=MPI.dragMC.ya),"y"==MPI.dragMC.limit&&(MPI.dragMC.x=MPI.dragMC.xa,MPI.dragMC.y=stage.mouseY/stage.scaleY+MPI.dragMC.offY),MPI.dragMC.limit.indexOf(",")>-1)){var t=dragOb.limit.split(",");MPI.dragMC.x=stage.mouseX/stage.scaleX+MPI.dragMC.offX,MPI.dragMC.y=stage.mouseY/stage.scaleY+MPI.dragMC.offY,4==t.length&&(MPI.dragMC.x<t[0]&&(MPI.dragMC.x=t[0]),MPI.dragMC.y<t[1]&&(MPI.dragMC.y=t[1]),MPI.dragMC.x>t[2]&&(MPI.dragMC.x=t[2]),MPI.dragMC.y>t[3]&&(MPI.dragMC.y=t[3]))}if(MPI.isKuis){if(null==MPI.kuisMC)return void(MPI.isKuis=!1);if(MPI.frameKuis!=MPI.ob.currentFrame)return void(MPI.isKuis=!1);if(0==(a=MPI.kuisMC).statKuis){a.visible=!0,a.soal_txt.text=a.temp_soal[a.no_soal][0],a.no_soal_txt.text=String(a.no_soal+1)+".",a.temp_jawaban=a.temp_soal[a.no_soal].slice(1,a.jumlahJawaban+1);for(let t=0;t<a.temp_jawaban.length;t++){let e=Math.floor(Math.random()*a.temp_jawaban.length),i=a.temp_jawaban[e];a.temp_jawaban[e]=a.temp_jawaban[t],a.temp_jawaban[t]=i}let t=["a","b","c","d","e","f"],i=["A","B","C","D","E","F"],s=["1","2","3","4","5","6"];if("teks"==a.tipeJawaban)for(let e=0;e<a.jumlahJawaban;e++){let l="";"a"==a.opsi&&(l=t[e]+". "),"A"==a.opsi&&(l=i[e]+". "),"1"==a.opsi&&(l=s[e]+". "),a["jawaban_"+(e+1)].gotoAndStop(0),a["jawaban_"+(e+1)].jawaban_txt.text=l+a.temp_jawaban[e]}if("gambar"==a.tipeJawaban)for(let t=0;t<a.jumlahJawaban;t++)a["jawaban_"+(t+1)].gotoAndStop(0),a["jawaban_"+(t+1)].gambar.gotoAndStop(a.temp_jawaban[t]-1);if(a.isGambar){var e=a.temp_soal[a.no_soal][a.jumlahJawaban+1];null!=e&&e>0?(a.gambarMC.visible=!0,a.gambarMC.gotoAndStop(e-1)):a.gambarMC.visible=!1}a.suaraSoal.length>0&&MPI.that.suara(a.suaraSoal),a.statKuis=1}if(a.statKuis>1&&a.statKuis<8){a.hasilMC.y=a.hasilMC.ya,a.hasilMC.gotoAndStop(a.statKuis-1),a.hasilMC.visible=!0,a.hasilMC.waktu=0,a.hasilMC.tp=a.statKuis;for(let t=0;t<a.jumlahJawaban;t++)MPI.kuisMC.temp_jawaban[t]==MPI.kuisMC.temp_soal[MPI.kuisMC.no_soal][1]?a["jawaban_"+(t+1)].gotoAndStop(1):a["jawaban_"+(t+1)].gotoAndStop(2);MPI.timerMC&&(MPI.timerMC.aktif=!1),a.statKuis=8}8==a.statKuis&&(a.hasilMC.y+=-a.hasilMC.y/3,a.hasilMC.y>-1&&(a.hasilMC.waktu++,a.hasilMC.waktu>60&&(a.hasilMC.tp<5?(a.hasilMC.waktu=-1,a.no_soal++,a.hasilMC.y=a.hasilMC.ya,a.hasilMC.visible=!1,MPI.isTimer&&(MPI.timerMC.gotoAndStop(0),MPI.timerMC.waktuMax=MPI.timerMC.waktuSet,MPI.timerMC.aktif=!0),a.no_soal<a.max_soal?a.statKuis=0:a.statKuis=5):(a.visible=!1,a.hasilMC.y=a.hasilMC.ya,a.isGambar&&(a.gambarMC.visible=!1),a.score=MPI.score,null!=a.nfunc&&a.nfunc(),a.suaraSelesai.length>0&&MPI.that.suara(a.suaraSelesai),MPI.isKuis=!1,MPI.timerMC&&(MPI.timerMC.aktif=!1,MPI.timerMC.visible=!1,MPI.isTimer=!1)))))}if(MPI.isTimer){if(null==MPI.timerMC)return void(MPI.isTimer=!1);if(MPI.frameTimer!=MPI.ob.currentFrame)return void(MPI.isTimer=!1);if(!MPI.timerMC.aktif)return;MPI.timerMC.waktuMax--,MPI.timerMC.gotoAndStop(MPI.timerMC.frameMax-Math.ceil(MPI.timerMC.waktuMax/MPI.timerMC.waktuSet*MPI.timerMC.frameMax)-1),MPI.timerMC.waktuMax<=0&&(MPI.timerMC.detik=0,null!=MPI.timerMC.cfunc&&MPI.timerMC.cfunc(),MPI.isTimer=!1,MPI.isKuis&&null!=MPI.kuisMC&&(MPI.kuisMC.statKuis=4,a.suaraWaktuHabis.length>0&&MPI.that.suara(a.suaraWaktuHabis),MPI.isTimer=!0,MPI.timerMC.aktif=!1))}if(MPI.isInputText){if(null==MPI.inputTextMC)return void(MPI.isInputText=!1);a=MPI.inputTextMC,MPI.that.doInputText(a)}MPI.that.vlabEnterFrame()}mouseDown(a){if("scrollbarMC"==a.target.name){if(null==MPI.scrMC)return;MPI.isDrag=!0}if("scrollbgMC"==a.target.name){if(null==MPI.scrMC)return;MPI.isDrag=!0;let a=stage.mouseX/stage.scaleX-MPI.scrMC.x,t=stage.mouseY/stage.scaleY-MPI.scrMC.y,e=Math.sqrt(a*a+t*t)/MPI.scrMC.scaleX;MPI.scrMC.scrollbarMC.x=e,MPI.scrMC.val=Math.round(e/MPI.scrMC.xmin*100),MPI.scrMC.val<0&&(MPI.scrMC.val=0),MPI.scrMC.val>100&&(MPI.scrMC.val=100)}if(MPI.dragDB.length>0&&null==MPI.dragMC)for(let a=0;a<MPI.dragDB.length;a++){let t=MPI.dragDB[a],e=t.globalToLocal(stage.mouseX,stage.mouseY);t.drag&&stage.mouseInBounds&&t.hitTest(e.x,e.y)&&(MPI.dragMC=t,MPI.dragMC.offX=-e.x*t.scaleX,MPI.dragMC.offY=-e.y*t.scaleY)}if(MPI.isInputText=!1,MPI.inputDB.length>0)for(let a=0;a<MPI.inputDB.length;a++){let t=MPI.inputDB[a],e=t.globalToLocal(stage.mouseX,stage.mouseY);stage.mouseInBounds&&t.hitTest(e.x,e.y)&&(MPI.isInputText=!0,MPI.inputTextMC=t)}}mouseOut(a){"scrollbgMC"!=a.target.name&&"scrollbarMC"!=a.target.name||!MPI.isDrag||(MPI.isDrag=!1)}mouseUp(){if(MPI.isDrag&&(MPI.isDrag=!1),MPI.dragMC&&(null!=MPI.dragMC.nfunc&&MPI.dragMC.nfunc(),MPI.dragMC=null),MPI.isText){if(MPI.isText=!1,null==MPI.textMC)return;MPI.textMC.text=MPI.textMC.textVal,null!=MPI.textMC.textFunc&&MPI.textMC.textFunc()}}clickHandler(a){let t,e=-1;if("suaraOn"==a.target.name&&(null!=MPI.pengaturSuara?(MPI.suaraAktif=!1,MPI.pengaturSuara.gotoAndStop(1),MPI.currentAudio&&MPI.currentAudio.stop()):(MPI.suaraAktif=!0,MPI.currentAudio&&MPI.currentAudio.play())),"suaraOff"==a.target.name&&(null!=MPI.pengaturSuara?(MPI.suaraAktif=!0,MPI.pengaturSuara.gotoAndStop(0),MPI.currentAudio&&MPI.currentAudio.play()):(MPI.suaraAktif=!1,MPI.currentAudio&&MPI.currentAudio.stop())),MPI.isPopup)"okBtn"==a.target.name&&2==MPI.popMC.popStat&&(MPI.popMC.popStat=3);else{for(t=0;t<MPI.btnDB.length;t++)a.target.name==MPI.btnDB[t][0]&&(e=t);if(e>-1){let a=MPI.btnDB[e][1],t=MPI.btnDB[e][2];if(MPI.isInputText&&null!=MPI.inputTextMC&&(MPI.inputTextMC.inputTxt.text=MPI.inputTextMC.val,MPI.isInputText=!1),"function"==typeof a)0==t?a():a(t);else{if(a-=1,MPI.isVideo){const a=document.getElementById("videoku");a&&a.remove(),MPI.isVideo=!1}0==t&&(MPI.that.resetDB(),MPI.ob.gotoAndStop(a)),"play"==t&&(MPI.that.resetDB(),MPI.ob.gotoAndPlay(a))}}MPI.isKuis&&1==MPI.kuisMC.statKuis&&a.target.name.indexOf("jawabKuis")>-1&&(MPI.kuisMC.no_jawaban=Number(a.target.name.substr(9))-1,MPI.kuisMC.temp_jawaban[MPI.kuisMC.no_jawaban]==MPI.kuisMC.temp_soal[MPI.kuisMC.no_soal][1]?(MPI.score+=MPI.nilaiBenar,MPI.kuisMC.statKuis=2,MPI.kuisMC.suaraBenar.length>0&&MPI.that.suara(MPI.kuisMC.suaraBenar)):(MPI.score+=MPI.nilaiSalah,MPI.kuisMC.statKuis=3,MPI.kuisMC.suaraSalah.length>0&&MPI.that.suara(MPI.kuisMC.suaraSalah)))}}resetDB(){MPI.btnDB=[],MPI.dragDB=[],MPI.inputDB=[];for(let a=0;a<MPI.vlabDB.length;a++)MPI.that.resetMC(MPI.vlabDB[a].name);MPI.vlabDB=[],MPI.isDrag=!1,MPI.isText=!1,MPI.isInputText=!1,MPI.isTimer=!1,MPI.scrMC=null,MPI.textMC=null,MPI.inputTextMC=null}tekan(a){let t=a.keyCode;if(null==MPI.inputTextMC)return void(MPI.isInputText=!1);let e=MPI.inputTextMC;13==t?(MPI.isInputText=!1,e.inputTxt.text=e.val,MPI.inputTextMC=null):8==t?(e.val=e.val.substring(0,e.val.length-1),e.inputTxt.text=e.val):32==t?(e.val.length<e.maxText&&(e.val+=" "),e.inputTxt.text=e.val):(e.val.length<e.maxText&&(e.val+=String.fromCharCode(96<=t&&t<=105?t-48:t).toLowerCase()),e.inputTxt.text=e.val)}click(a,t,e=0){MPI.btnDB.push([a,t,e])}suara(a,t="play",e=100){if(this.stopAudio(),MPI.suaraAktif){let i,s=e/100;"play"==t&&(i={volume:s,loop:0}),"loop"==t&&(i={volume:s,loop:-1}),MPI.currentAudio=createjs.Sound.play(a,i)}}stopAudio(){MPI.currentAudio&&(MPI.currentAudio.stop(),MPI.currentAudio=null)}geser(a,t){if(null==MPI.ob[a])return;let e=MPI.ob[a],i=e.timeline.position+t;i<0&&(i=e.timeline.duration-1),i>e.timeline.duration-1&&(i=0),e.gotoAndStop(i)}video(a,t){if(null==MPI.ob[a])return;let e=MPI.ob[a],i=e.nominalBounds,s=Math.floor(e.x*MPI.xscale),l=Math.floor(e.y*MPI.yscale),u=Math.floor(i.width*MPI.xscale),o=Math.floor(i.height*MPI.yscale);if(e.alpha=0,t.length<5)return;var M;MPI.isVideo=!0;var n=document.createElement("div");n.setAttribute("id","videoku");var r='<iframe width="'+u+'" height="'+o+'" src="'+t+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';canvas.parentNode.appendChild(n),n.innerHTML=r;let p={position:"relative",left:s-u/2+"px",top:l-o/2+"px"};for(M in p)n.style[M]=p[M]}popup(a,t="",e="",i=null,s=0,l=0){if(MPI.isPopup)return;MPI.isPopup=!0;var u=new MPI.appLib[a];MPI.popMC=u,MPI.ob.addChild(u);let o=MPI.appLib.properties.width/2,M=MPI.appLib.properties.height/2;0==s&&0==l?(u.x=o,u.y=M):(u.x=s,u.y=l),u.judulTxt.text=t,u.pesanTxt.text=e,MPI.popMC.closeFunc=i,MPI.popMC.popStat=0,MPI.popMC.scaleX=.5,MPI.popMC.scaleY=.5,MPI.popMC.scaleAcc=.1,MPI.popMC.waktuTunggu=0}scroll(a,t=0,e=null){if(null==MPI.ob[a])return;let i=MPI.ob[a];MPI.scrMC=i;let s=i.scrollbgMC.nominalBounds;MPI.scrMC.xmin=s.width,MPI.scrMC.nfunc=e,"string"==typeof t?null==MPI.ob[t]?(console.log("Movieclip "+t+" tidak ditemukan"),MPI.scrMC.tgtScroll=null):MPI.scrMC.tgtScroll=MPI.ob[t]:(MPI.scrMC.scrollbarMC.x=t/100*s.width,MPI.scrMC.val=t)}scrollMC(a,t,e){let i;if("string"==typeof e){if(null==MPI.ob[a])return;i=MPI.ob[a]}else i=a;if(null==i.kontenMC)return console.log("tidak ada instance name kontenMC"),void(null!=MPI.scrMC&&(MPI.scrMC.tgtScroll=null));let s=100,l=i.kontenMC,u=i;0==e&&(e=1),"x"!=t&&"h"!=t||(s=l.nominalBounds.width-u.nominalBounds.width,l.x=-e/100*s),"y"!=t&&"v"!=t||(s=l.nominalBounds.height-u.nominalBounds.height,l.y=-e/100*s+l.nominalBounds.height/2+5)}teks(a,t,e=null){if(null==MPI.ob[a])return;let i=MPI.ob[a];MPI.textMC=i,MPI.isText=!0,MPI.textMC.textTime=0,MPI.textMC.textPos=0,MPI.textMC.textVal=t,MPI.textMC.textFunc=e}aturSuara(a){null!=MPI.ob[a]&&(MPI.pengaturSuara=MPI.ob[a],MPI.suaraAktif?MPI.pengaturSuara.gotoAndStop(0):MPI.pengaturSuara.gotoAndStop(1))}jarakSudut(a,t){var e=t-a;return e+=e>180?-360:e<-180?360:0,Math.abs(e)}jarak(a,t){if(null==MPI.ob[a]||null==MPI.ob[t])return;let e=MPI.ob[a],i=MPI.ob[t];return Math.sqrt((e.x-i.x)*(e.x-i.x)+(e.y-i.y)*(e.y-i.y))}resetMC(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];null!=t.xa&&(t.x=t.xa,t.y=t.ya,null!=t.rot&&(t.rotation=t.rot))}drag(a,t=null,e=""){if(null==MPI.ob[a])return;let i=MPI.ob[a];this.tgt=i,i.xa=i.x,i.ya=i.y,i.rot=i.rotation,i.nfunc=t,i.drag=!0,i.tipe="drag",i.limit=e,MPI.dragDB.push(i)}kuis(a,t,e,i){if(null==MPI.ob[a])return;let s,l=MPI.ob[a];if(null!=l.no_soal_txt&&null!=l.hasilMC&&null!=l.soal_txt)if(null!=t)if(t.length<=e)console.log("jumlah soal harus lebih banyak");else{for(l.visible=!0,MPI.kuisMC=l,MPI.isKuis=!0,MPI.score=0,l.no_soal=0,l.isAnswer=!1,l.nfunc=i,l.soal=t,l.isGambar=!1,l.gambar="",l.max_soal=e,l.tipeJawaban="teks",l.linkageSuara="suara",l.soalSuara="",l.soalAcak=!0,l.opsi="",l.jumlahJawaban=4,l.suaraSoal="",l.suaraJawab="",l.suaraBenar="",l.suaraSalah="",l.suaraWaktuHabis="",l.suaraSelesai="",l.tipeSoal="teks",l.popup=null,l.waktuNPC=0,MPI.frameKuis=MPI.ob.currentFrame,l.temp_soal=l.soal.slice(0,l.soal.length),s=0;s<l.temp_soal.length;s++)l.temp_soal[s][10]=s+1;if(l.soalAcak)for(s=0;s<l.soal.length;s++){let a=Math.floor(Math.random()*l.soal.length),t=l.temp_soal[a];l.temp_soal[a]=l.temp_soal[s],l.temp_soal[s]=t}for(MPI.soalKuis=l.temp_soal,s=0;s<l.jumlahJawaban;s++)l["jawaban_"+(s+1)].stop();l.visible=!1,l.hasilMC.visible=!1,l.hasilMC.ya=l.hasilMC.y,l.statKuis=-1}else console.log("variabel soal belum dibuat");else console.log("kelengkapan instance name kuis belum sesuai")}startKuis(){null!=MPI.kuisMC&&MPI.isKuis&&(""!=MPI.kuisMC.gambar&&(null==MPI.ob[MPI.kuisMC.gambar]?console.log("gambar kuis belum memiliki instance name"):(MPI.kuisMC.isGambar=!0,MPI.kuisMC.gambarMC=MPI.ob[MPI.kuisMC.gambar])),MPI.kuisMC.statKuis=0)}timer(a,t=5,e=null){if(null==MPI.ob[a])return;if(MPI.isTimer)return;MPI.isTimer=!0;let i=MPI.ob[a];MPI.timerMC=i,i.visible=!0,i.xa=i.x,i.ya=i.y,i.tipe="timer",i.gotoAndStop(0),i.aktif=!0,i.waktuMax=30*t,i.waktuSet=i.waktuMax,i.frameMax=i.timeline.duration,i.cfunc=e,MPI.frameTimer=MPI.ob.currentFrame}inputText(a,t="",e=25){if(null==MPI.ob[a])return;if(null==MPI.ob[a].inputTxt)return void console.log("input text tidak memiliki instance name");let i=MPI.ob[a];i.maxText=e,i.inputTxt.text=t,i.val=t,i.waktu=0,MPI.inputDB.push(i)}doInputText(a){MPI.isInputText&&(a.waktu++,a.waktu<15?a.inputTxt.text=a.val:a.inputTxt.text=a.val+"_",a.waktu>30&&(a.waktu=0))}moveVlabOb(a){if(!a.gravitasi||a.isDrag||a.snap||(a.sumberPanas=null,a.y<MPI.vlabLantai?(a.sy++,a.y+=a.sy):(a.sy=0,a.y=MPI.vlabLantai)),!a.snap)if(null!=a.lastSnap)MPI.that.hits(a,a.lastSnap)&&!a.isDrag&&("normal"!=a.posisi&&"atas"!=a.posisi||(a.x=a.lastSnap.x,a.y=a.lastSnap.y-a.lastSnap.tinggi*a.lastSnap.scaleY),"bawah"==a.posisi&&(a.x=a.lastSnap.x,a.y=a.lastSnap.y),a.snap=!0,a.snapto=a.lastSnap);else{a.blokCek++,a.blokCek>MPI.vlabDB.length-1&&(a.blokCek=0);var t=MPI.vlabDB[a.blokCek];(t.blok||"tembus"==a.posisi)&&t!=a&&MPI.that.hits(a,t)&&!a.isDrag&&("normal"!=a.posisi&&"atas"!=a.posisi||(a.x=t.x,a.y=t.y-t.tinggi*t.scaleY),"bawah"==a.posisi&&(a.x=t.x,a.y=t.y),a.snap=!0,a.snapto=t)}a.snap&&("tembus"==a.posisi?MPI.that.hits(a,a.snapto)||(a.snap=!1,a.lastSnap=null,a.snapto=null):a.x!=a.snapto.x&&(a.snap=!1,a.lastSnap=a.snapto,a.snapto=null))}vlabEnterFrame(){if(0!=MPI.vlabDB.length)for(let t=0;t<MPI.vlabDB.length;t++){var a=MPI.vlabDB[t];a.isLoop||("vlab-glass"==a.tipe&&MPI.that.runGlass(a),"vlab-tripod"==a.tipe&&MPI.that.runTripod(a),"vlab-burner"==a.tipe&&MPI.that.runBurner(a),"vlab-termometer"==a.tipe&&MPI.that.runTermometer(a),"vlab-pHPaper"==a.tipe&&MPI.that.runpHPaper(a))}}updateMC(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];null!=t.tipe&&("vlab-glass"==t.tipe&&MPI.that.updateGlass(t),"vlab-tripod"==t.tipe&&MPI.that.updateTripod(t),"vlab-burner"==t.tipe&&MPI.that.updateBurner(t),"vlab-termometer"==t.tipe&&MPI.that.updateTermometer(t),"vlab-pHPaper"==t.tipe&&MPI.that.updatepHPaper(t))}hitxy(a,t,e,i=0){var s=!1,l=a.x-a.lebar/2*a.scaleX,u=a.x+a.lebar/2*a.scaleX,o=a.y-a.tinggi*a.scaleY,M=a.y;return u>t-i&&l<t+i&&o<e+i&&M>e-i&&(s=!0),s}hits(a,t){var e=!1,i=a.x-a.lebar/2*a.scaleX,s=a.x+a.lebar/2*a.scaleX,l=(a.y,a.tinggi,a.scaleY,a.y),u=t.x-t.lebar/2*t.scaleX,o=t.x+t.lebar/2*t.scaleX,M=t.y-t.tinggi*t.scaleY-10,n=t.y+10;return s>u&&s<o&&l<n&&l>M&&(e=!0),i>u&&i<o&&l<n&&l>M&&(e=!0),e}glass(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];MPI.that.propMC(t),t.tipe="vlab-glass",t.volume=0,t.warna=1,t.transparan=50,t.volumeMax=100,t.mendidih=!1,t.menguap=!1,t.waktuGelembung=0,t.idGelembung=1,t.idUap=1,t.gelOut=0,t.waktuUap=0,t.uapOut=0,t.suhu=20,t.titikUap=80,t.titikDidih=100,t.kalorJenis=1,t.isi.scaleY=1,t.goyang=0,t.snapLiq=!1,t.liqX=0,t.liqY=0,t.tuang=!1,t.jenisIsi=t.warna,t.blok=!1;for(let a=1;a<=5;a++)t["gelembung"+a]&&(t["gelembung"+a].visible=!1,t["gelembung"+a].out=0,t["gelembung"+a].vy=0,t["gelembung"+a].maxY=100),t["uap"+a]&&(t["uap"+a].visible=!1,t["uap"+a].out=0,t["uap"+a].vy=0,t["uap"+a].maxY=100);MPI.that.propMC(t)}updateGlass(a){a.isi.y=-a.volume/a.volumeMax*100,a.isi.gotoAndStop(a.warna-1),a.isi.alpha=a.transparan/100}propMC(a){a.xa=a.x,a.ya=a.y,a.lebar=a.nominalBounds.width,a.tinggi=a.nominalBounds.height,a.rot=a.rotation,a.konduktivitas=1,a.voltase=0,a.voltaseAktif=0,a.asamBasa=7,a.drag=!0,a.dragX=!0,a.dragY=!0,a.isDrag=!1,a.gravitasi=!1,a.sy=0,a.grot=1,a.gpos=0,a.blokCek=0,a.blokCek1=0,a.blokCek2=0,a.turning=!1,a.lastCek=-1,a.turnRot=0,a.turnDir=0,a.snap=!1,a.snapto=null,a.snapto1=null,a.snapto2=null,a.lastSnap=null,a.auto=!0,a.blok=!1,a.posisi="normal",a.limit="",a.nfunc=null,a.isLoop=!1,a.sumberPanas=null,a.suhu=MPI.suhuRuang,a.suhuAktif=MPI.suhuRuang,a.suhuMax=100,a.menyala=!1,MPI.vlabDB.push(a)}runGlass(a){if(a.volume<=0?(a.volume=0,a.isi.visible=!1):a.isi.visible=!0,a.isi.y=-a.volume/a.volumeMax*100,a.mendidih&&(a.waktuGelembung++,a.waktuGelembung>5&&(a.waktuGelembung=0,a.idGelembung++,a.idGelembung>5&&(a.idGelembung=1),null!=a["gelembung"+a.idGelembung]&&0==a["gelembung"+a.idGelembung].out))){a["gelembung"+a.idGelembung].out=1;let t=(2+5*Math.random())/15;a["gelembung"+a.idGelembung].scaleX=t,a["gelembung"+a.idGelembung].scaleY=t,a["gelembung"+a.idGelembung].x=Math.random()*a.lebar/2-Math.random()*a.lebar/2,a["gelembung"+a.idGelembung].y=-5,a["gelembung"+a.idGelembung].vy=2+2*Math.random(),a["gelembung"+a.idGelembung].maxY=a.isi.y,a["gelembung"+a.idGelembung].visible=!0}if(a.menguap&&(a.waktuUap++,a.waktuUap>10&&(a.waktuUap=0,a.idUap++,a.idUap>5&&(a.idUap=1),null!=a["uap"+a.idUap]&&0==a["uap"+a.idUap].out))){a["uap"+a.idUap].out=1;let t=(2+5*Math.random())/25;a["uap"+a.idUap].scaleX=t,a["uap"+a.idUap].scaleY=t,a["uap"+a.idUap].x=Math.random()*(a.lebar-10)/2-Math.random()*(a.lebar-10)/2,a["uap"+a.idUap].y=a.isi.y,a["uap"+a.idUap].vy=(1+2*Math.random())/2,a["uap"+a.idUap].rotation=180*Math.random(),a["uap"+a.idUap].maxY=a.isi.y-50-50*Math.random(),a["uap"+a.idUap].visible=!0,a["uap"+a.idUap].alpha=1}for(let t=1;t<=5;t++)1==a["uap"+t].out&&(a["uap"+t].y-=a["uap"+t].vy,a["uap"+t].alpha-=.025,a["uap"+t].scaleX+=.01,a["uap"+t].scaleY+=.01,a["uap"+t].y<a["uap"+t].maxY&&(a["uap"+t].visible=!1,a["uap"+t].out=0)),1==a["gelembung"+t].out&&(a["gelembung"+t].y-=a["gelembung"+t].vy,a["gelembung"+t].y<a["gelembung"+t].maxY&&(a["gelembung"+t].visible=!1,a["gelembung"+t].out=0));a.suhu>=a.titikUap?a.menguap=!0:a.menguap=!1,a.suhu>=a.titikDidih?(a.suhu=a.titikDidih,a.mendidih=!0):a.mendidih=!1,a.auto&&a.suhu>MPI.suhuRuang&&(a.suhu-=.01),a.goyang>0&&(a.gpos=a.goyang/5,a.grot>0?(a.isi.rotation+=a.gpos,a.isi.rotation>a.goyang&&(a.goyang*=.8,a.grot=-1)):(a.isi.rotation-=a.gpos,a.isi.rotation<-a.goyang&&(a.goyang*=.8,a.grot=1)),a.goyang<.01&&(a.goyang=0,a.gpos=0,a.isi.rotation=0)),MPI.that.moveVlabOb(a)}tripod(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];MPI.that.propMC(t),t.tipe="vlab-tripod",t.blok=!0,MPI.that.updateTripod(t)}updateTripod(a){}runTripod(a){MPI.that.moveVlabOb(a)}burner(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];MPI.that.propMC(t),t.tipe="vlab-burner",t.posisi="bawah",t.menyala=!1,t.api_out=0,t.idApi=1,t.waktu_api=3,t.radius=25,t.kalor=1,t.idApi=1,t.suhuMax=500;for(let a=1;a<=5;a++)t["api"+a]&&(t["api"+a].visible=!1,t["api"+a].out=0,t["api"+a].vy=0,t["api"+a].maxY=50);MPI.that.updateBurner(t)}updateBurner(a){}runBurner(a){if(a.menyala){if(a.api_out++,a.api_out>=a.waktu_api&&(a.api_out=0,a.idApi++,a.idApi>5&&(a.idApi=1),null!=a["api"+a.idApi]&&0==a["api"+a.idApi].out)){a["api"+a.idApi].out=1;let t=(4+5*Math.random())/15;a["api"+a.idApi].scaleX=t,a["api"+a.idApi].scaleY=t,a["api"+a.idApi].x=a.api.x+5*Math.random()-5*Math.random(),a["api"+a.idApi].y=a.api.y,a["api"+a.idApi].vy=2+2*Math.random(),a["api"+a.idApi].rotation=180*Math.random(),a["api"+a.idApi].maxY=a.api.y-20-20*Math.random(),a["api"+a.idApi].alpha=1,a["api"+a.idApi].visible=!0}a.blokCek++,a.blokCek>MPI.vlabDB.length-1&&(a.blokCek=0);var t=MPI.vlabDB[a.blokCek];if(t!=a){let e=a.x+a.api.x*a.scaleX,i=a.y+a.api.y*a.scaleY-50;MPI.that.hitxy(t,e,i,a.radius)&&(t.auto&&(t.suhu+=a.kalor/5),"vlab-termometer"==t.tipe&&(t.suhu=a.suhuMax,t.suhu>t.skalaAtas&&(t.suhu=t.skalaAtas)),t.sumberPanas=a)}}for(let t=1;t<=5;t++)1==a["api"+t].out&&(a["api"+t].y-=a["api"+t].vy,a["api"+t].alpha-=.025,a["api"+t].scaleX-=.01,a["api"+t].scaleY-=.01,a["api"+t].rotation+=5*Math.random(),(a["api"+t].y<=a["api"+t].maxY||a["api"+t].alpha<=0)&&(a["api"+t].visible=!1,a["api"+t].out=0));MPI.that.moveVlabOb(a)}termometer(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];MPI.that.propMC(t),t.tipe="vlab-termometer",t.blok=!1,t.posisi="tembus",t.suhu=20,t.suhuAktif=20,t.skalaBawah=0,t.skalaAtas=100,t.skala="C",MPI.that.updateTermometer(t)}updateTermometer(a){a.bawah.text=a.skalaBawah,a.atas.text=a.skalaAtas;var t=Number(a.skalaBawah)+Number(Math.round((a.skalaAtas-a.skalaBawah)/2));a.tengah.text=t,a.suhuTxt.text=String(Math.round(a.suhuAktif))+" "+a.skala,a.auto||(a.suhuAktif=a.suhu),a.suhuAktif<a.suhu&&(a.suhuAktif+=(a.suhu-a.suhuAktif)/25),a.suhuAktif>a.suhu&&(a.suhuAktif-=(a.suhuAktif-a.suhu)/25),a.suhuAktif>a.skalaAtas&&(a.suhuAktif=a.skalaAtas),a.suhuAktif<a.skalaBawah&&(a.suhuAktif=a.skalaBawah);var e=(a.suhuAktif-a.skalaBawah)/(a.skalaAtas-a.skalaBawah);a.isi.scaleY=e}runTermometer(a){if(MPI.that.moveVlabOb(a),MPI.that.updateTermometer(a),a.auto&&(a.snap||a.suhu!=MPI.suhuRuang&&(a.suhu+=(MPI.suhuRuang-a.suhu)/10),a.snap&&"vlab-glass"==a.snapto.tipe)){var t=a.snapto.y-a.snapto.volume/a.snapto.volumeMax*100*a.snapto.scaleY;a.snapto.volume>0&&a.y<a.snapto.y&&a.y>t&&(a.suhu=a.snapto.suhu)}}pHPaper(a){if(null==MPI.ob[a])return;let t=MPI.ob[a];MPI.that.propMC(t),t.tipe="vlab-pHPaper",t.blok=!1,t.posisi="tembus",t.suhu=20,t.gotoAndStop(0),t.sensor.y=0,MPI.that.updatepHPaper(t)}updatepHPaper(a){}runpHPaper(a){if(MPI.that.moveVlabOb(a),MPI.that.updatepHPaper(a),a.auto&&a.snap&&"vlab-glass"==a.snapto.tipe){var t=a.snapto.y-a.snapto.volume/a.snapto.volumeMax*100*a.snapto.scaleY;if(a.snapto.volume>0&&a.y<a.snapto.y&&a.y>t){var e=t-a.y;a.sensor.y>e&&(a.sensor.y=e),a.asamBasa=a.snapto.asamBasa,a.gotoAndStop(a.asamBasa)}}}}