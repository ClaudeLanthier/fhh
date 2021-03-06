(function(){var _o={};
var $={
	mn:["intro","pages"],
	mm:"intro",
	sm:0,
	fld:{},
	fml:{
       "Grandparents":{
       		"Paternal grand father":"1",
      		"Paternal grand mother":"1",
       		"Maternal grand father":"1",
       		"Maternal grand mother":"1"
       	},
       "Parents":{
       		"Father":"1",
       		"Mother":"1"
   		}
	 },
	ini:function(){
		$.font_resize();
		window.addEventListener("resize",function(){
			$.font_resize();
		});
		no.targs=_o;
		$.field_set();
		no.$(document.body,
			no.div({id:"con_pag", _s:'p.0,m.0,w1,h1,,overflow:auto;display:block'})
		);
		$.page_handle();
		no.targs=0;
	 },
	field_set:function(){
		var p=_c.pages;
		for (var i = 0; i < p.length; i++) {
			var r=p[i].content;
			for (var j = 0; j < r.length; j++) {
				if(!p[i].generate && !p[i].condition){$.fld[r[j].field.name]="";}
			}
		}
	 },
	page_handle:function(o){
		if(!o){
			var ss=$.url_get()["search"];
			var j=$.search_to_json(ss);
			$.mm=(j.m && j.m.indexOf($.mn))?j.m:"intro";
			$.sm=(typeof (j.s*1) === 'number' && j.s< _c.pages.length)?j.s:"0";
		}
		var ns=$.json_to_search({"m":$.mm, "s":$.sm.toString()});
		$.url_set(ns);
		$[$.mm+"_build"]();
	 },
	intro_build:function(){
		_o.con_pag.clear();
		no.targs=_o;
		no.div(_o.con_pag,{id:"con_top",_s:'b.999,w1,h.20%,display:block;'},
			no.div({_s:'b.999,m0a,cen,h1'},
				no.div({_s:'b.999,m0a,cen,h.20%'}),
				no.img({src:"img/logo.png",_s:"blo,o.f,m0a,bw.10,height:60%"}),
				no.div({_s:'b.999,m0a,cen,h.20%'})
			)
		);
		no.div(_o.con_pag,{id:"con_intro",_s:',h.80%,w.70%,m0a,f.100%,blo'},
			no.div({_s:'m0a,cen,h.10%'}),
			no.div(_o.mid_cen,{id:"con_ini",_s:'blo,m0a,cen,h.80%,f.100%'}, 
				no.div({_s:"f.300%,m0a,c.6,mb.20,bb.999"},_c.title),
				no.div({_s:'m0a,c.8,f.130%,text-align:justify'},_c.intro),
				no.span("ENTER",{_c:'button',_s:''},function(){
					$.mm="start"; $.sm="0";
					var m={"m":$.mm,"s":$.sm};
					var ns=$.json_to_search(m);
					$.url_set(ns);
					$.page_handle(m); 
				})
			),
			no.div({_s:'m0a,cen,h.10%'})
		);
		no.targs=_o;
	 },
	pre_build:function(o){
		no.targs=_o;
		if(!_o.con_left){
			no.div(_o.con_pag,{id:"con_left",_s:'b.bbb,h1,w.17%,abs,l.0,'});
			$.logo_build();
			$.menu_build();
		}
		if(!_o.con_mid){
			no.div(_o.con_pag,{id:"con_mid",_s:'b.eee,w.83%,h1,abs,l.17%,pt.1%,pb.1%'});
		}
		no.targs=0;
	 },
	logo_build:function(){
		no.div(_o.con_left,{_s:'blo,b.999,h.12%,bb.ddd'},
			no.div({_s:'h.15%'}),
			no.img({src:"img/logo.png",_s:"o.f,bw.10,h.70%,poi,m0a,blo,max-width:100%"},function(){

			}),
			no.div({_s:'h.15%'})
		);
	 },
	menu_build:function(){
		//no.targs=_o;
		var m=no.div(0,_o.con_left,{id:"mnu_mn",_s:",c.f,w1,h.86%,display:table"});
		var p=_c.pages,l=p.length,h="5%";
		for (var i = 0; i<l; i++) {
			if(p[i].title){
				var slc=(i==$.sm)?"mnu_lbl_sel":"mnu_lbl";
				no.div(m,{_s:"p.3%,rel,display:table-row,height:"+h},
					no.div(p[i].title,{nu:i,_c:slc,_s:"poi,cel,pl.5%,bt.ddd,bb.bbb,f.120%,w.90%,vertical-align:middle"},function(o){
						var nu=o.getAttribute("nu");
						$.mm="pages";$.sm=nu.toString();
						var m={"m":$.mm,"s":$.sm};
						$.page_handle(m); 
						$.menu_selected(o);
					}),
					no.div({_s:"cel,w.10%,bt.ddd,bb.bbb,vertical-align:middle"},
						no.div({id:"lc_"+i,_s:"dib,w.7,h.14,b.fff,border-radius:20px 0 0 20px"}),
						no.div({id:"rc_"+i,_s:"dib,w.7,h.14,b.fff,border-radius:0 20px 20px 0"})
					)
				)
			}
		}
		no.div(_o.con_left,{_s:"h.2%,b.999,bt.ddd,bw.2"});
		//no.targs=0;
	 },

	menu_selected:function(o){
		if(o.className=="mnu_lbl"){
			cls=document.getElementsByClassName("mnu_lbl_sel");
			if(cls.length!==0){cls[0].className="mnu_lbl";}
			o.className="mnu_lbl_sel";
		}
	 },
	start_build:function(o){
		_o.con_pag.clear();
		$.pre_build();
		var p=_c.start.content,button;
		var inr=no.div(0,_o.con_mid,"",{id:"con_inr",_s:'m0a,h.85%,w.30%,b.f,display:table'})
		no.div(inr,p[0].title,{_s:'m0a,h.5%,w.90%,c.3070ab,f.150%,pl.2%'});
		no.div(_o.con_mid,{id:"con_but",_s:'m0a,h.10%,w.30%,b.f,blo,cen,p.1%,b.e0e0e0,display:table'},
			no.div({_s:'cel,cen,vertical-align:middle'},
				no.span("START",{_c:"button",_s:'m.1|20'},function(){
					$.mm="pages";$.sm="0";
					$.page_handle({"m":$.mm, "s":$.sm});
					//var cls=document.getElementsByClassName("mnu_lbl_sel")[0].parentNode.nextSibling.children[0];
					//$.menu_selected(cls);
				})
			)
		)
		//document.getElementsByTagName("Xname")[0].firstChild.nodeValue="Jim";
	 },	 
	pages_build:function(o,t){
		$.pre_build();
		_o.con_mid.clear();
		no.targs=_o;
		var p=_c.pages;
		var cn=no.div(0,_o.con_mid, {_s:"m0a,w.80%,box-shadow: 0px 0px 0px #ccc"});
		no.div(cn,{_s:'m0a,h.5%,w1,b.3070ab,c.f,f.150%,pl.2%,display:table'},
			no.div(p[$.sm].title,{_s:'cel,vertical-align:middle'})
		);
		var inr=no.div(0,cn,{id:"con_inr",_s:'h.85%,w1,b.f,bl.e0e0e0,br.e0e0e0,display:table'});
		var pp=p[$.sm].content;
		//$.table_build(inr,c)
		if(p[$.sm].format){
			$.table_build(inr,pp);
		}else{
			for (var k in pp){
				var c=pp[k];
				var nu=(Number(k)+1).toString();

				if(c.generate){$.question_generate(inr,c,"");}else{	$.row_build(inr,c,"");}
				var f=($.fld[c.field.name]=="")?0:1;
				if(c.condition && f==0){
					_o["q_"+c.field.name].style.display="none"; 
					_o["q_"+c.field.name].sa("condition",1) 
				}
			}
		}
		var but=(p[$.sm].title=="Final step")?"CONCLUDE": "CONTINUE";
		no.div(cn,{id:"con_but",_s:'h.10%,w1,b.f,blo,cen,p.1%,b.e0e0e0,display:table'},
			no.div({_s:'cel,cen,,vertical-align:middle'},
				no.span(but,{_c:"button",_s:'m.1|20'},function(){
					var l=_c.pages.length*1-2;
					if($.sm > l){
						$.sm="0";$.mm="end";
					}else{
						$.sm++;$.mm="pages";
						var cls=document.getElementsByClassName("mnu_lbl_sel")[0].parentNode.nextSibling.children[0];
						$.menu_selected(cls);
					}
					$.page_handle({"m":$.mm, "s":$.sm.toString()});
				})
			)
		 )
		$.page_nu();
		no.targs=0;
	 },
	row_build:function(inr,c,nu,x){
		var ttl=(x)?c.title.replace("_Xvar","#"+x):c.title;
		no.div(inr,{id:"q_"+c.field.name,_c:"qrow","field":c.field.name ,_s:"blo,w1,bb.eee,display:table-row"},
			no.div({_s:"w1,bb.eee,cel,cen,padding-bottom:0.6%,padding-top:0.3%"},
				no.div({_s:"w1,blo"},
					no.div({_s:"dib,w.6%,cen,pl.1%"},
						no.div(nu,{_c:"pag_nu",_s:"w.22,h.22,b.999,r.22,c.f,cen,f.90%,lh.22,b.3070ab,font-weight:bold"})
					),
					no.div(ttl,{_s:"dib,w.94%,f.120%,c.666,lft"})
				),
				no.div({id:"d_"+c.field.name,_s:"blo,w1"})
			)
		)
		var w=no.div(0,_o["d_"+c.field.name],{_s:"lft,w.94%,ml.6%"});

		$.control[c.field.type](c,w)
		$.dependence(c,w);
	 },
	family_build:function(){
		//fml[c.field.name]=c.member;
	 },
	table_build:function(tg,o){
		var r=no.div(0,tg,{_s:"w1,display:table-row"});
		var c=no.div(0,r,{_s:"cel,w1,pb.2%"});
		for(var i in $.fml){
			var t=no.div(0,c,{_c:"f_tbl",_s:"display:table,w1,p.2%,pb.0%"});
			var fi=$.fml[i];
			var kt=no.div(0,t,{_s:"display:table-row"})
			for (var m = 0; m < 6; m++) {
				var ttl=(m==0)?i:o[m].title;
				no.div(ttl,kt,{_s:"cel,c.6,b.b,c.f,o.ddd"})
			}
			for(var j in fi){
				var fj=fi[j];
				for (var k = 0; k < fj; k++) {
					var kr=no.div(0,t,{_s:"display:table-row"})
					for (var l = 0; l < 6; l++) {
						//var ttl=(l==0)?j:o[l].title;
						fc=no.div(0,kr,{_s:"cel,c.6,o.ddd"})
						if(l==0){
							var nb=(fj>1)?" #"+(k*1+1):"";
							var yv=j.replace("_Yvar",nb);
							no.div(fc,yv,{_s:""})
						}else{
							$.control[o[l].field.type](o[l],fc)
						}
					}
				}
			}
		}
	 },
	/*nu_count:function(q){
		var n=1;
		var p=_c.pages;
		for (var i = 0; i < p.length; i++){
			if(p[i].title=="Your siblings' family"){return n;}
			var pc=p[i].content;
			for (var j = 0; j < pc.length; j++) {
				if(pc[j].field.name==q){i=p.length;j=pc.length }
				else{n++}
			}
		}
		return n;
	 },*/
	page_nu:function(){
		var nu=document.getElementsByClassName('pag_nu');
		var j=0;
		for (var i = 0; i < nu.length; i++) {
			if(nu[i].parentNode.parentNode.parentNode.parentNode.style.display!="none"){
				j++
			}
			nu[i].innerHTML=j;
		}
	 },
	dependence:function(c,w){
		var d=c.dependence;
		if(d){
			var e=w.childNodes;
			for (var i = 0; i < e.length; i++){
				e[i].addEventListener("click",function(ev){
					for(var j in d){
						if(ev.target.ga("value")==d[j].value){
							_o[d[j].id].parentNode.parentNode.style.display="table-row";
						}else{
							_o[d[j].id].parentNode.parentNode.style.display="none";
						}
					}
					$.page_nu();
				});
			}
		}
	 },
	question_generate:function(inr,c,nu){
		var g=c.generate;
		var n=0;
		if(g){
			var f=Object.keys($.fld);
			for(var i in f){
				if (f[i]==g.q_gen){
					n=$.fld[f[i]];
				}
			}
			for (var j = 0; j < n; j++) {
				var ns=(nu*1+j).toString();
				c.field.name=c.field.name.split("_")[0]+"_"+(j*1+1*1)
				$.row_build(inr,c,ns,(j*1+1*1))
			}
		}
	 },
	filled_count:function(){
		var q=document.getElementsByClassName("qrow");
		var r=document.getElementsByClassName("rad_but_sel");
		var p=document.getElementsByClassName("inputs");
		var n=0,jp=0,jq=0,jr=0;

		for (var iq = 0; iq < q.length; iq++) {
			if(q[iq].style.display!="none"){
				jq++;
			}
		}
		for (var ip = 0; ip < p.length; ip++) {
			if(p[ip].parentNode.parentNode.parentNode.parentNode.style.display!="none"){
				if(p[ip].value!=""){jp++;}
			}
		}
		for (var ir = 0; ir < r.length; ir++) {
			if(r[ir].parentNode.parentNode.parentNode.parentNode.style.display!="none"){
				jr++;
			}
		}

		if(jr>0 || jp>0){
			_o["lc_"+$.sm].style.background="#3070ab";
		}else{
			_o["lc_"+$.sm].style.background="#fff";
		}
		if(jr+jp==jq){
			_o["rc_"+$.sm].style.background="#3070ab";
		}
	 },
	end_build:function(){
		$.pre_build();
		var cls=document.getElementsByClassName("mnu_lbl_sel")[0]
		cls.className="mnu_lbl";
		_o.con_mid.clear();
		var inr=no.div(0,_o.con_mid,"",{id:"con_inr",_s:'m0a,h.85%,w.30%,b.f,display:table'})
		no.div(inr,_c.end,{_s:'m0a,h.5%,w.90%,c.3070ab,f.150%,pl.2%'});
		no.div(_o.con_mid,{id:"con_but",_s:'m0a,h.10%,w.30%,b.f,blo,cen,p.1%,b.e0e0e0,display:table'},
			no.div({_s:'cel,cen,vertical-align:middle'}

			)
		)
	 },
	
	control:{
		radio:function(o,tg){
			var v=o.field.values;
			var vl=$.fld[o.field.name]
			for (var i = 0; i < v.length; i++) {
				var cls=(v[i]==vl)?"rad_but_sel":"rad_but";
				no.span(tg,v[i],{_c:cls,_s:"",fld:o.field.name,value:v[i]},function(oo){
					if(tg.getElementsByClassName("rad_but_sel").length>0){
						tg.getElementsByClassName("rad_but_sel")[0].className="rad_but";
					}
					oo.className="rad_but_sel";
					$.fld[oo.ga("fld")]=oo.ga("value");
					$.filled_count();
				})
			}
		},
		input:function(o,tg){
			var vl=($.fld[o.field.name])?$.fld[o.field.name]:"";
			var ip=no.input(0,tg,{fld:o.field.name,type:o.field.subtype,value:vl,_c:"inputs"},function onchange(v){
				$.fld[v.ga("fld")]=v.value;
				var number_of_question=v.value;
				if(o.member){
					var vf=v.ga("fld").split("_")[1]
					var n=(vf>0)?" #"+vf:"";
					if(v.value>0){
						if(!$.fml[o.member[0]]){$.fml[o.member[0]]={}}
						$.fml[o.member[0]][o.member[1]+n]=v.value;
					}else{
						if($.fml[o.member[0]]){
							if($.fml[o.member[0]][o.member[1]+n]){
								delete $.fml[o.member[0]][o.member[1]+n];
							}
							if(Object.keys($.fml[o.member[0]]).length==0){delete $.fml[o.member[0]]}
						}

					}
				}
				$.filled_count();
			});
			if(o.field.subtype=="number"){ip.sa("min",0)}
		},
		date:function(o,tg){
			no.input(tg,{_s:"w.10%",_c:"inputs"});
		},
		select:function(o,tg){
			var s=no.select(0,tg,{_s:"",_c:"inputs"});
			v=o.field.values;
			var vl=$.fld[o.field.name]
			for (var i = 0; i < v.length; i++){
				var op=no.option(0,s,v[i],{fld:o.field.name,value:v[i]},function(oo){
					$.fld[oo.ga("fld")]=oo.ga("value");
					$.filled_count();
				})
				if(vl==v[i])(op.selected=true)
			}

		},
		textarea:function(o,tg){
			var vl=($.fld[o.field.name])?$.fld[o.field.name]:"";
			no.textarea(tg,vl,{fld:o.field.name,_s:"w.99%",_c:"inputs"},function onchange(v){
				$.fld[v.ga("fld")]=v.value;
				$.filled_count();
			});
		},
		title:function(){

		}
	 },
	font_resize:function(){
		document.getElementsByTagName("html")[0].style.fontSize=Math.round(document.body.offsetWidth*document.body.offsetHeight/150000)*1+6+'px';
	 },
	url_get:function(){
		return { host:window.location.hostname,path:window.location.pathname, search:window.location.search};
	 },
	url_set:function(search){
		history.pushState(0,0,search);
	 },
	search_to_json:function(s){
		s=s.replace("?", "");
		s=s.replace(/&/g, '","');
		s=s.replace(/=/g, '":"');
		s='{"'+s.replace(/_/g, " ")+'"}';
		return jeval(s);
	 },
	json_to_search:function(o){
		var s="?";
		for(var i in o){
		    s+=i+"="+o[i].replace(/ /g, "_")+"&";
		}
		return s.slice(0, -1);
	 },
	json_merge:function(o1,o2){
	 	var o3={};
	 	for(var k1 in o1){o3[k1]=o1[k1];}
	 	for(var k2 in o2){o3[k2]=o2[k2];}
	 	return o3;
	 },
	db:{
		con:{
			rebuild:function(v){
			 	jax({c:v},function(r){
			 	});
			}
		}
	 }
}
this.$dom=$;
})();
$ajax.tag('$dom');