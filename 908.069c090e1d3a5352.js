"use strict";(self.webpackChunktech_job_site=self.webpackChunktech_job_site||[]).push([[908],{9908:(y,d,a)=>{a.r(d),a.d(d,{HomeModule:()=>q});var l=a(9808),m=a(7876),_=a(1669),p=a(5530),h=a(5245),u=a(7423),g=a(9516),n=a(5e3),f=a(5113);function C(o,t){if(1&o&&(n.TgZ(0,"div",11),n._UZ(1,"img",12),n.qZA()),2&o){const e=n.oxw().$implicit;n.xp6(1),n.MGl("src","assets/logos/",e.profession.logo,".png",n.LSH)}}function Z(o,t){if(1&o&&(n.TgZ(0,"li"),n._UZ(1,"a",17),n.qZA()),2&o){const e=n.oxw(2).$implicit;n.xp6(1),n.MGl("href","https://www.facebook.com/",null==e.social?null:e.social.facebook,"",n.LSH)}}function M(o,t){if(1&o&&(n.TgZ(0,"ul",13),n.TgZ(1,"li"),n._UZ(2,"a",14),n.qZA(),n.TgZ(3,"li"),n._UZ(4,"a",15),n.qZA(),n.YNc(5,Z,2,1,"li",16),n.qZA()),2&o){const e=n.oxw().$implicit;n.xp6(2),n.MGl("href","https://www.linkedin.com/in/",null==e.social?null:e.social.linkedIn,"",n.LSH),n.xp6(2),n.MGl("href","https://www.instagram.com/",null==e.social?null:e.social.instagram,"",n.LSH),n.xp6(1),n.Q6J("ngIf",null==e.social?null:e.social.facebook)}}function P(o,t){if(1&o&&(n.TgZ(0,"div",5),n.TgZ(1,"div",6),n._UZ(2,"img",7),n.TgZ(3,"h4"),n._uU(4),n.qZA(),n.TgZ(5,"h5"),n._uU(6),n._UZ(7,"br"),n._uU(8),n.qZA(),n.TgZ(9,"p",8),n._uU(10),n.qZA(),n.YNc(11,C,2,1,"div",9),n.YNc(12,M,6,3,"ul",10),n.qZA(),n.qZA()),2&o){const e=t.$implicit;n.xp6(2),n.s9C("alt",e.name),n.MGl("src","assets/profiles/",e.photo,"-lazy.jpg",n.LSH),n.xp6(2),n.Oqu(e.name),n.xp6(2),n.Oqu(e.profession.name),n.xp6(2),n.Oqu(e.profession.company),n.xp6(2),n.Oqu(e.description),n.xp6(1),n.Q6J("ngIf",e.profession.logo),n.xp6(1),n.Q6J("ngIf",e.social)}}function O(o,t){if(1&o&&(n.TgZ(0,"div",3),n.YNc(1,P,13,8,"div",4),n.qZA()),2&o){const e=t.$implicit,i=n.oxw();n.xp6(1),n.Q6J("ngForOf",i.professionals.slice(3*e,3*e+3))}}const b=function(){return[0,1]};let v=(()=>{class o{constructor(e){this.el=e,this.professionals=[{name:"Demetrio Guilardi",photo:"demetrio-guilardi",description:"Mestre em Engenharia de Software pela Universidade do Quebec e especialista Android certificado.",profession:{name:"Engenheiro de Software",company:"Google, Calif\xf3rnia - USA",logo:"google"},social:{linkedIn:"demetrioguilardi",instagram:"deguilardi",facebook:void 0}},{name:"Bruno Cabral",photo:"bruno-cabral",description:"Desenvolvedor analista com experi\xeancia em diversas linguagens de programa\xe7\xe3o e em diversos bancos de dados.",profession:{name:"Desenvolvedor Analista",company:"Phoenixx, Quebec - Canad\xe1",logo:"phoenixx"},social:{linkedIn:"bcscabral",instagram:"noahscabral",facebook:"rebeca.noah"}},{name:"Calebe Reis",photo:"calebe-reis",description:"Engenheiro de Redes de Comunica\xe7\xe3o pela Universidade de Bras\xedlia e Engenheiro Elasticsearch certificado.",profession:{name:"Consultor Elastic Search",company:"HP - Remoto - Cingapura",logo:"hp"},social:{linkedIn:"calebereis",instagram:"calebereis",facebook:"calebe.reis.94"}},{name:"Josu\xe9 Silva",photo:"josue-silva",description:"Pedagogo licenciado em Letras e p\xf3s-graduado em Administra\xe7\xe3o Educacional.",profession:{name:"Professor",company:"Cursinhos preparat\xf3rios, Bras\xedlia",logo:""},social:void 0},{name:"Filipe Reis",photo:"filipe-reis",description:"P\xf3s-graduado em Engenharia de Sotware pela Universidade Cat\xf3lica de Bras\xedlia e especialista em Java.",profession:{name:"Desenvolvedor Java",company:"PicPay, S\xe3o Paulo, Remoto",logo:void 0},social:{linkedIn:'filipesouzareis"',instagram:"filipe_sreis",facebook:void 0}},{name:"Giovanna Akemi",photo:"giovanna-akemi",description:"P\xf3s-graduada em gest\xe3o de recursos humanos pelo Centro Universit\xe1rio do Distrito Federal - UDF e em administra\xe7\xe3o de empresas pela Funda\xe7\xe3o Get\xfalio Vagas - FGV.",profession:{name:"Recursos Humanos",company:"TIT Consultoria & Servi\xe7os, Bras\xedlia",logo:void 0},social:{linkedIn:"giovannakemi",instagram:"giovannakemi",facebook:"giovanna.akemi.75"}}]}ngAfterViewInit(){this.lazyLoadImgs()}lazyLoadImgs(){const e=new IntersectionObserver(i=>{i.forEach(({isIntersecting:s},r)=>{if(s){let c=i[r].target;c.src=c.src.replace("-lazy",""),c.addEventListener("load",()=>c.classList.remove("blur-img")),e.unobserve(c)}})});this.el.nativeElement.querySelectorAll('img[class~="blur-img"]').forEach(i=>e.observe(i))}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.SBq))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-section-team"]],decls:5,vars:2,consts:[[1,"team"],["team",""],["class","row screen-limit",4,"ngFor","ngForOf"],[1,"row","screen-limit"],["class","item sinapsis",4,"ngFor","ngForOf"],[1,"item","sinapsis"],[1,"col"],[1,"avatar","blur-img",3,"alt","src"],[1,"hide-mobile"],["class","company-logo",4,"ngIf"],["class","social-icons",4,"ngIf"],[1,"company-logo"],[3,"src"],[1,"social-icons"],[1,"fa","fa-linkedin",3,"href"],[1,"fa","fa-instagram",3,"href"],[4,"ngIf"],[1,"fa","fa-facebook",3,"href"]],template:function(e,i){1&e&&(n.TgZ(0,"section",0,1),n.TgZ(2,"h3"),n._uU(3,"Nosso time"),n.qZA(),n.YNc(4,O,2,1,"div",2),n.qZA()),2&e&&(n.xp6(4),n.Q6J("ngForOf",n.DdM(1,b)))},directives:[l.sg,l.O5],styles:["section[_ngcontent-%COMP%]{padding:40px 100px}section[_ngcontent-%COMP%]   .legal-notes[_ngcontent-%COMP%]{font-style:italic;color:#aaa;font-size:.8em;padding-top:20px;text-align:right}section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.6em;margin-bottom:0}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex:1;padding:10px}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#50c970;font-size:1.5em}section.team[_ngcontent-%COMP%]{background-color:#eee;padding-bottom:60px}section.team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;color:#367a49;padding-bottom:20px}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{grid-gap:10px;gap:10px;padding-top:5px;padding-bottom:5px}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border:1px solid #fff;background-color:#f4f4f4}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex-flow:column wrap;height:100%}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;color:#367a49}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50%;margin:0 25% 10px}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .avatar.blur-img[_ngcontent-%COMP%]{filter:blur(8px)}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .company-logo[_ngcontent-%COMP%]{height:40px;position:relative}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .company-logo.negative[_ngcontent-%COMP%]{background-color:#000}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .company-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:right;justify-content:right;padding:0;margin:0}section.team[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:0 0 0 10px}@media only screen and (max-width: 1023px){.hide-mobile[_ngcontent-%COMP%]{display:none}section[_ngcontent-%COMP%]{padding-left:25px;padding-right:25px}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-direction:column;grid-gap:10px;gap:10px;padding-top:5px;padding-bottom:5px}section.team[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center}}"]}),o})();const x=["ytHolder"],T=[{path:"",component:(()=>{class o{constructor(e){this.breakpointObserver=e,this.isMobile=!1,this.videoWidth=520,this.videoHeight=290}ngOnInit(){this.fixLayout(),setTimeout(()=>{this.onResize()},0)}onResize(){let e=this.ytHolder.nativeElement.offsetWidth-(this.isMobile?70:242);e=this.isMobile?e:Math.min(e,520),e!==this.videoWidth&&setTimeout(()=>{this.onResize()},15),this.videoWidth=e,this.videoHeight=e*(9/16)}fixLayout(){this.breakpointObserver.observe(["(max-width: 1024px)"]).subscribe(e=>{this.isMobile=e.matches})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(f.Yg))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(e,i){if(1&e&&n.Gf(x,5),2&e){let s;n.iGM(s=n.CRH())&&(i.ytHolder=s.first)}},hostBindings:function(e,i){1&e&&n.NdJ("resize",function(r){return i.onResize(r)},!1,n.Jf7)},decls:145,vars:2,consts:[[1,"yt-holder"],["ytHolder",""],[1,"row","screen-limit"],[1,"col","left"],[1,"sinapsis","youtube-player-holder"],["videoId","udpQMzY8Ybk",3,"width","height"],[1,"highlights"],[1,"item","sinapsis","first","normal"],[1,"content"],[1,"item","sinapsis","second","primary"],[1,"item","sinapsis","third","normal"],[1,"item","first","sinapsis","primary"],[1,"item","sinapsis","second","normal"],[1,"item","third","sinapsis","primary"],[1,"legal-notes","screen-limit"],[1,"action"],["mat-raised-button","","color","accent","routerLink","/course/como-preparar-curriculo"],[1,"faamg","paralax"],[1,"screen-limit"],[1,"row"],[1,"primary"],[1,"white"],[1,"right"],[1,"row","hide-mobile"],[1,"logo"],["src","assets/logos/white/facebook.png"],["src","assets/logos/white/google.png"],["src","assets/logos/white/uber.png"],["src","assets/logos/white/amazon.png"],["src","assets/logos/white/airbnb.png"],[1,"book"],[1,"row","screen-limit","about"],[1,"inner"],[2,"color","#4285F4"],[2,"color","#DB4437"],[2,"color","#F4B400"],[2,"color","#0F9D58"],["mat-raised-button","","color","accent","href","https://www.amazon.com.br/Consiga-Tech-Job-Exterior-Bras%C3%ADlia-ebook/dp/B09DB4KKNY/"],[1,"illustration"],["src","assets/book.jpg"],[1,"row","screen-limit","reviews"]],template:function(e,i){1&e&&(n.TgZ(0,"section",0,1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div"),n.TgZ(5,"h2"),n._uU(6,"Liberdade financeira e geogr\xe1fica"),n.qZA(),n.TgZ(7,"p"),n._uU(8," Ganhe em d\xf3lar, trabalhe de casa ou mude-se para o exterior. "),n.qZA(),n.TgZ(9,"p"),n._uU(10," N\xf3s j\xe1 chegamos l\xe1 e vamos te ajudar a chegar l\xe1 tamb\xe9m =D. "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"div",4),n._UZ(12,"youtube-player",5),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"section",6),n.TgZ(14,"div",2),n.TgZ(15,"div",7),n.TgZ(16,"div",8),n.TgZ(17,"h4"),n._uU(18,"100% Gratuito"),n.qZA(),n.TgZ(19,"p"),n._uU(20," Aproveite! N\xe3o custa nenhum centavo. Todos nossos cursos s\xe3o "),n.TgZ(21,"strong"),n._uU(22,"0800"),n.qZA(),n._uU(23,". "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"div",9),n.TgZ(25,"div",8),n.TgZ(26,"h4"),n._uU(27,"Sal\xe1rios de at\xe9 R$ 160 mil"),n.qZA(),n.TgZ(28,"p"),n._uU(29," Novos funcion\xe1rios de big techs chegam a ganhar "),n.TgZ(30,"strong"),n._uU(31,"R$ 160 mil por m\xeas"),n.qZA(),n._uU(32,".* "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(33,"div",10),n.TgZ(34,"div",8),n.TgZ(35,"h4"),n._uU(36,"Liberdade geogr\xe1fica"),n.qZA(),n.TgZ(37,"p"),n._uU(38," Trabalhe remoto de casa ou de qualquer lugar do mundo. "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(39,"div",2),n.TgZ(40,"div",11),n.TgZ(41,"div",8),n.TgZ(42,"h4"),n._uU(43,"Inicial de at\xe9 R$ 87 mil"),n.qZA(),n.TgZ(44,"p"),n._uU(45," Saia direto da faculdade j\xe1 ganhando at\xe9 "),n.TgZ(46,"strong"),n._uU(47,"R$ 87 mil por m\xeas"),n.qZA(),n._uU(48,".* "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"div",12),n.TgZ(50,"div",8),n.TgZ(51,"h4"),n._uU(52,"Conte\xfado semanal"),n.qZA(),n.TgZ(53,"p"),n._uU(54," Vamos te ajudar durante toda a sua jornada com "),n.TgZ(55,"strong"),n._uU(56,"conte\xfados novos"),n.qZA(),n._uU(57," toda semana. "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(58,"div",13),n.TgZ(59,"div",8),n.TgZ(60,"h4"),n._uU(61,"Acelera\xe7\xe3o"),n.qZA(),n.TgZ(62,"p"),n._uU(63," Nosso m\xe9todo "),n.TgZ(64,"strong"),n._uU(65,"focado em brasileiros"),n.qZA(),n._uU(66," vai acelerar a sua jornada. "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(67,"div",14),n._uU(68,"* Dados de 2021/2022, de acordo com sal\xe1rios do nosso time e do site levels.fy"),n.qZA(),n.TgZ(69,"div",15),n.TgZ(70,"a",16),n._uU(71,"Preparar meu curr\xedculo"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(72,"section",17),n.TgZ(73,"div",18),n.TgZ(74,"div",19),n.TgZ(75,"div"),n.TgZ(76,"div",20),n._uU(77,"Prepare-se para entrevistas em empresas como"),n.qZA(),n.TgZ(78,"div",21),n._uU(79,"Google, Facebook, Amazon, Uber e Microsoft"),n.qZA(),n.TgZ(80,"div",20),n._uU(81,"com profissionais que passaram por esses desafios."),n.qZA(),n.qZA(),n.TgZ(82,"div",22),n.TgZ(83,"a",16),n._uU(84,"Come\xe7ar"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(85,"div",23),n.TgZ(86,"div",24),n._UZ(87,"img",25),n.qZA(),n.TgZ(88,"div",24),n._UZ(89,"img",26),n.qZA(),n.TgZ(90,"div",24),n._UZ(91,"img",27),n.qZA(),n.TgZ(92,"div",24),n._UZ(93,"img",28),n.qZA(),n.TgZ(94,"div",24),n._UZ(95,"img",29),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(96,"app-section-team"),n.TgZ(97,"section",30),n.TgZ(98,"h3"),n._uU(99,"Nosso livro"),n.qZA(),n.TgZ(100,"div",31),n.TgZ(101,"div",8),n.TgZ(102,"div",32),n._uU(103," Foi aos 34 anos que eu realizei o "),n.TgZ(104,"strong"),n._uU(105,"sonho"),n.qZA(),n._uU(106," de ser contratado como "),n.TgZ(107,"strong"),n._uU(108,"engenheiro de software pelo "),n.TgZ(109,"span",33),n._uU(110,"G"),n.qZA(),n.TgZ(111,"span",34),n._uU(112,"o"),n.qZA(),n.TgZ(113,"span",35),n._uU(114,"o"),n.qZA(),n.TgZ(115,"span",33),n._uU(116,"g"),n.qZA(),n.TgZ(117,"span",36),n._uU(118,"l"),n.qZA(),n.TgZ(119,"span",34),n._uU(120,"e"),n.qZA(),n.qZA(),n._uU(121,". Neste livro, compartilho algumas de minhas experi\xeancias e, principalmente, alguns detalhes sobre o processo. "),n.TgZ(122,"div",15),n.TgZ(123,"a",37),n._uU(124,"Quero ler"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(125,"div",38),n._UZ(126,"img",39),n.qZA(),n.qZA(),n.TgZ(127,"h4"),n._uU(128,"Quem leu diz:"),n.qZA(),n.TgZ(129,"div",40),n.TgZ(130,"blockquote"),n.TgZ(131,"strong"),n._uU(132,"Simplesmente magn\xedfico!"),n.qZA(),n._UZ(133,"br"),n._uU(134,"Esse livro \xe9 uma literatura obrigat\xf3ria para todos os brasileiros que sonham e pensam em ter um Tech Job no Exterior. Parab\xe9ns ao autor por ter trazido, de forma t\xe3o espetacular, ensinamentos essenciais sobre vida pessoal, tecnologia e o processo em si. "),n.qZA(),n.TgZ(135,"blockquote"),n.TgZ(136,"strong"),n._uU(137,"Espetacular!"),n.qZA(),n._UZ(138,"br"),n._uU(139,"O autor, sem d\xfavida, conseguiu seus dois objetivos ao escrever esta singular obra em l\xedngua portuguesa: motivar e ajudar todos que desejam um tech job no exterior. Vale a pena conferir. "),n.qZA(),n.TgZ(140,"blockquote"),n.TgZ(141,"strong"),n._uU(142,"Inspirador e pr\xe1tico!"),n.qZA(),n._UZ(143,"br"),n._uU(144,"Acompanhar todo o processo de sucesso de quem conseguiu alcan\xe7ar seus objetivos e receber ainda passos pr\xe1ticos pra aplicar na minha pr\xf3pria jornada \xe9 incr\xedvel. Mesmo n\xe3o sendo da \xe1rea de TI (sou designer), me inspirou demais a sonhar mais alto e a percorrer o caminho necess\xe1rio at\xe9 chegar l\xe1! "),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(12),n.Q6J("width",i.videoWidth)("height",i.videoHeight))},directives:[p.D,u.zs,g.yS,v],styles:['@charset "UTF-8";.action[_ngcontent-%COMP%]{padding:20px;text-align:center}.paralax[_ngcontent-%COMP%]{background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}section[_ngcontent-%COMP%]{padding:40px 100px}section[_ngcontent-%COMP%]   .legal-notes[_ngcontent-%COMP%]{font-style:italic;color:#aaa;font-size:.8em;padding-top:20px;text-align:right}section.yt-holder[_ngcontent-%COMP%]{background-color:#1f2428;color:#fff;padding-top:80px;padding-bottom:70px}section.yt-holder[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#70ff87;font-size:2.2em;line-height:1.2em}section.yt-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4em;line-height:1.5em}section.yt-holder[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{flex:1;padding-right:50px;justify-content:center;align-items:center}section.yt-holder[_ngcontent-%COMP%]   .youtube-player-holder[_ngcontent-%COMP%]{background-color:#00e480;border-color:#00e480;padding:20px}section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.6em;margin-bottom:0}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex:1;padding:10px}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#50c970;font-size:1.5em}section.highlights[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%]{background-color:#70ff87}section.highlights[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:0;border:1px solid #70ff87}section.highlights[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 58px);border-radius:24px;padding:29px}section.highlights[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item.primary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1f2428}section.faamg[_ngcontent-%COMP%]{background-image:linear-gradient(0deg,rgba(12,23,30,.9),#0c171e),url(assets/faamg-bg.jpg);font-size:2.2em;font-weight:600;letter-spacing:-1px;line-height:44px;padding-top:85px;padding-bottom:75px}section.faamg[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%]{color:#70ff87}section.faamg[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#fff}section.faamg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:invert(1)}section.faamg[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{justify-content:space-between;padding:60px 0 20px}section.faamg[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}section.book[_ngcontent-%COMP%]{background-color:#00e480;color:#1f2428;box-shadow:0 5px 30px;margin-bottom:25px}section.book[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;padding-bottom:20px}section.book[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;padding-bottom:20px;padding-top:20px}section.book[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:3;font-size:1.3em;line-height:1.9em;display:flex;align-items:center;justify-content:center}section.book[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]:before{color:#1f2428;content:open-quote;font-size:4em;line-height:.1em;margin-right:.25em;vertical-align:-.4em}section.book[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]{flex:2}section.book[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}section.book[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]{grid-gap:50px;gap:50px}section.book[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{quotes:"\\201c" "\\201c" "\\201c" "\\201c";font-style:italic;flex:1;margin:0}section.book[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:before{color:#1f2428;content:open-quote;font-size:4em;line-height:.1em;margin-right:.25em;vertical-align:-.4em}@media only screen and (max-width: 1023px){.hide-mobile[_ngcontent-%COMP%]{display:none}section[_ngcontent-%COMP%]{padding-left:25px;padding-right:25px}section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex-direction:column;grid-gap:10px;gap:10px;padding-top:5px;padding-bottom:5px}section.yt-holder[_ngcontent-%COMP%]   .youtube-player-holder[_ngcontent-%COMP%]{padding:10px}}@media only screen and (min-width: 1024px){section.highlights[_ngcontent-%COMP%]   .item.sinapsis.normal[_ngcontent-%COMP%]{background-color:#70ff87;border-width:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.normal.first[_ngcontent-%COMP%]{border-bottom-right-radius:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.normal.second[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.normal.third[_ngcontent-%COMP%]{border-bottom-left-radius:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.normal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:#f9f9f9}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.primary.first[_ngcontent-%COMP%]{border-top-right-radius:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.primary.second[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}section.highlights[_ngcontent-%COMP%]   .item.sinapsis.primary.third[_ngcontent-%COMP%]{border-top-left-radius:0}}']}),o})()},{path:"login",component:(()=>{class o{constructor(e){this.router=e}ngOnInit(){}uiShownCallback(){}successCallback(e){this.router.navigate(["course/catalog"])}errorCallback(e){}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(g.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:10,vars:0,consts:[[1,"holder"],[1,"banner"],["id","login-box"],[3,"signInSuccessWithAuthResult","signInFailure","uiShown"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h2"),n._uU(3,"Acesse dezenas de cursos gratuitos"),n.qZA(),n.TgZ(4,"p"),n._uU(5," Basta entrar com seu email ou usu\xe1rio. "),n.qZA(),n.qZA(),n.TgZ(6,"div",2),n.TgZ(7,"h1"),n._uU(8,"Entrar"),n.qZA(),n.TgZ(9,"firebase-ui",3),n.NdJ("signInSuccessWithAuthResult",function(r){return i.successCallback(r)})("signInFailure",function(r){return i.errorCallback(r)})("uiShown",function(){return i.uiShownCallback()}),n.qZA(),n.qZA(),n.qZA())},directives:[m.Sw],styles:[".holder[_ngcontent-%COMP%]{padding:25px}.banner[_ngcontent-%COMP%]{padding:20px 20px 10px;border:1px solid;border-color:#367a49;color:#1f2428;border-radius:4px;margin-bottom:25px}#login-box[_ngcontent-%COMP%]{max-width:300px;border:1px solid;border-color:#367a49;border-radius:4px;padding:25px 25px 0;margin:0 auto;background-color:#fff}#login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}"]}),o})()},{path:"privacy-policy",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-privacy-policy"]],decls:2,vars:0,template:function(e,i){1&e&&(n.TgZ(0,"p"),n._uU(1,"privacy-policy works!"),n.qZA())},styles:[""]}),o})()},{path:"terms-service",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-terms-service"]],decls:2,vars:0,template:function(e,i){1&e&&(n.TgZ(0,"p"),n._uU(1,"terms-service works!"),n.qZA())},styles:[""]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.Bz.forChild(T)],g.Bz]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.ez,m.Ci.forRoot(_.z),A,u.ot,h.Ps,p.e]]}),o})()}}]);