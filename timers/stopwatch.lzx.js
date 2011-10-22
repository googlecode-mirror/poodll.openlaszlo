LzResourceLibrary.lzfocusbracket_rsrc={ptype:"sr",frames:["lps/components/lz/resources/focus/focus_top_lft.png","lps/components/lz/resources/focus/focus_top_rt.png","lps/components/lz/resources/focus/focus_bot_lft.png","lps/components/lz/resources/focus/focus_bot_rt.png"],width:7,height:7,sprite:"lps/components/lz/resources/focus/focus_top_lft.sprite.png",spriteoffset:0};LzResourceLibrary.lzfocusbracket_shdw={ptype:"sr",frames:["lps/components/lz/resources/focus/focus_top_lft_shdw.png","lps/components/lz/resources/focus/focus_top_rt_shdw.png","lps/components/lz/resources/focus/focus_bot_lft_shdw.png","lps/components/lz/resources/focus/focus_bot_rt_shdw.png"],width:9,height:9,sprite:"lps/components/lz/resources/focus/focus_top_lft_shdw.sprite.png",spriteoffset:7};LzResourceLibrary.play_button={ptype:"sr",frames:["penlaszlo/my-apps/talkback/justinav/newicons/32/classic_play_button.png"],width:32,height:32,spriteoffset:16};LzResourceLibrary.stop_button={ptype:"sr",frames:["penlaszlo/my-apps/talkback/justinav/newicons/32/classic_stop_button.png"],width:32,height:32,spriteoffset:48};LzResourceLibrary.reset_button={ptype:"sr",frames:["penlaszlo/my-apps/talkback/justinav/newicons/32/classic_reset_button.png"],width:32,height:32,spriteoffset:80};LzResourceLibrary.__allcss={path:"usr/local/red5/webapps/openlaszlo/my-apps/timers/stopwatch.sprite.png"};canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-08-09T14:18:14Z",bgcolor:16777215,embedfonts:true,fontheight:lz.Browser.getInitArg("fontheight"),fontname:"Verdana,Vera,sans-serif",fontsize:11,fontstyle:"plain",height:"100%",lpsbuild:"branches/4.7@15770 (15770)",lpsbuilddate:"2010-02-16T15:18:52Z",lpsrelease:"Production",lpsversion:"4.7.1",runtime:"dhtml",width:"100%"});lz.colors.offwhite=15921906;lz.colors.gray10=1710618;lz.colors.gray20=3355443;lz.colors.gray30=5066061;lz.colors.gray40=6710886;lz.colors.gray50=8355711;lz.colors.gray60=10066329;lz.colors.gray70=11776947;lz.colors.gray80=13421772;lz.colors.gray90=15066597;lz.colors.iceblue1=3298963;lz.colors.iceblue2=5472718;lz.colors.iceblue3=12240085;lz.colors.iceblue4=14017779;lz.colors.iceblue5=15659509;lz.colors.palegreen1=4290113;lz.colors.palegreen2=11785139;lz.colors.palegreen3=12637341;lz.colors.palegreen4=13888170;lz.colors.palegreen5=15725032;lz.colors.gold1=9331721;lz.colors.gold2=13349195;lz.colors.gold3=15126388;lz.colors.gold4=16311446;lz.colors.sand1=13944481;lz.colors.sand2=14276546;lz.colors.sand3=15920859;lz.colors.sand4=15986401;lz.colors.ltpurple1=6575768;lz.colors.ltpurple2=12038353;lz.colors.ltpurple3=13353453;lz.colors.ltpurple4=15329264;lz.colors.grayblue=12501704;lz.colors.graygreen=12635328;lz.colors.graypurple=10460593;lz.colors.ltblue=14540287;lz.colors.ltgreen=14548957;Class.make("$lzc$class_basefocusview",LzView,["active",void 0,"$lzc$set_active",function($0){
with(this){
setActive($0)
}},"target",void 0,"$lzc$set_target",function($0){
with(this){
setTarget($0)
}},"duration",void 0,"_animatorcounter",void 0,"ontarget",void 0,"_nexttarget",void 0,"onactive",void 0,"_xydelegate",void 0,"_widthdel",void 0,"_heightdel",void 0,"_delayfadeoutDL",void 0,"_dofadeout",void 0,"_onstopdel",void 0,"reset",function(){
with(this){
this.setAttribute("x",0);this.setAttribute("y",0);this.setAttribute("width",canvas.width);this.setAttribute("height",canvas.height);setTarget(null)
}},"setActive",function($0){
this.active=$0;if(this.onactive)this.onactive.sendEvent($0)
},"doFocus",function($0){
with(this){
this._dofadeout=false;this.bringToFront();if(this.target)this.setTarget(null);this.setAttribute("visibility",this.active?"visible":"hidden");this._nexttarget=$0;if(visible){
this._animatorcounter+=1;var $1=null;var $2;var $3;var $4;var $5;if($0["getFocusRect"])$1=$0.getFocusRect();if($1){
$2=$1[0];$3=$1[1];$4=$1[2];$5=$1[3]
}else{
$2=$0.getAttributeRelative("x",canvas);$3=$0.getAttributeRelative("y",canvas);$4=$0.getAttributeRelative("width",canvas);$5=$0.getAttributeRelative("height",canvas)
};var $6=this.animate("x",$2,duration);this.animate("y",$3,duration);this.animate("width",$4,duration);this.animate("height",$5,duration);if(this.capabilities["minimize_opacity_changes"]){
this.setAttribute("visibility","visible")
}else{
this.animate("opacity",1,500)
};if(!this._onstopdel)this._onstopdel=new LzDelegate(this,"stopanim");this._onstopdel.register($6,"onstop")
};if(this._animatorcounter<1){
this.setTarget(this._nexttarget);var $1=null;var $2;var $3;var $4;var $5;if($0["getFocusRect"])$1=$0.getFocusRect();if($1){
$2=$1[0];$3=$1[1];$4=$1[2];$5=$1[3]
}else{
$2=$0.getAttributeRelative("x",canvas);$3=$0.getAttributeRelative("y",canvas);$4=$0.getAttributeRelative("width",canvas);$5=$0.getAttributeRelative("height",canvas)
};this.setAttribute("x",$2);this.setAttribute("y",$3);this.setAttribute("width",$4);this.setAttribute("height",$5)
}}},"stopanim",function($0){
with(this){
this._animatorcounter-=1;if(this._animatorcounter<1){
this._dofadeout=true;if(!this._delayfadeoutDL)this._delayfadeoutDL=new LzDelegate(this,"fadeout");lz.Timer.addTimer(this._delayfadeoutDL,1000);this.setTarget(_nexttarget);this._onstopdel.unregisterAll()
}}},"fadeout",function($0){
with(this){
if(_dofadeout){
if(this.capabilities["minimize_opacity_changes"]){
this.setAttribute("visibility","hidden")
}else{
this.animate("opacity",0,500)
}};this._delayfadeoutDL.unregisterAll()
}},"setTarget",function($0){
with(this){
this.target=$0;if(!this._xydelegate){
this._xydelegate=new LzDelegate(this,"followXY")
}else{
this._xydelegate.unregisterAll()
};if(!this._widthdel){
this._widthdel=new LzDelegate(this,"followWidth")
}else{
this._widthdel.unregisterAll()
};if(!this._heightdel){
this._heightdel=new LzDelegate(this,"followHeight")
}else{
this._heightdel.unregisterAll()
};if(this.target==null)return;var $1=$0;var $2=0;while($1!=canvas){
this._xydelegate.register($1,"onx");this._xydelegate.register($1,"ony");$1=$1.immediateparent;$2++
};this._widthdel.register($0,"onwidth");this._heightdel.register($0,"onheight");followXY(null);followWidth(null);followHeight(null)
}},"followXY",function($0){
with(this){
var $1=null;if(target["getFocusRect"])$1=target.getFocusRect();if($1){
this.setAttribute("x",$1[0]);this.setAttribute("y",$1[1])
}else{
this.setAttribute("x",this.target.getAttributeRelative("x",canvas));this.setAttribute("y",this.target.getAttributeRelative("y",canvas))
}}},"followWidth",function($0){
with(this){
var $1=null;if(target["getFocusRect"])$1=target.getFocusRect();if($1){
this.setAttribute("width",$1[2])
}else{
this.setAttribute("width",this.target.width)
}}},"followHeight",function($0){
with(this){
var $1=null;if(target["getFocusRect"])$1=target.getFocusRect();if($1){
this.setAttribute("height",$1[3])
}else{
this.setAttribute("height",this.target.height)
}}},"$m1",function(){
with(this){
var $0=lz.Focus;return $0
}},"$m2",function($0){
with(this){
this.setActive(lz.Focus.focuswithkey);if($0){
this.doFocus($0)
}else{
this.reset();if(this.active){
this.setActive(false)
}}}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","basefocusview","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onstop","stopanim",null,"onfocus","$m2","$m1"],_animatorcounter:0,_delayfadeoutDL:null,_dofadeout:false,_heightdel:null,_nexttarget:null,_onstopdel:null,_widthdel:null,_xydelegate:null,active:false,duration:400,initstage:"late",onactive:LzDeclaredEvent,ontarget:LzDeclaredEvent,options:{ignorelayout:true},target:null,visible:false},$lzc$class_basefocusview.attributes)
}}})($lzc$class_basefocusview);Class.make("$lzc$class_m19",LzView,["$m3",function($0){
with(this){
var $1=-classroot.offset;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m4",function(){
with(this){
return [classroot,"offset"]
}},"$m5",function($0){
with(this){
var $1=-classroot.offset;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m6",function(){
with(this){
return [classroot,"offset"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",[{attrs:{$classrootdepth:2,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m20",LzView,["$m7",function($0){
with(this){
var $1=parent.width-width+classroot.offset;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m8",function(){
with(this){
return [parent,"width",this,"width",classroot,"offset"]
}},"$m9",function($0){
with(this){
var $1=-classroot.offset;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m10",function(){
with(this){
return [classroot,"offset"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",[{attrs:{$classrootdepth:2,frame:2,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:2,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m21",LzView,["$m11",function($0){
with(this){
var $1=-classroot.offset;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m12",function(){
with(this){
return [classroot,"offset"]
}},"$m13",function($0){
with(this){
var $1=parent.height-height+classroot.offset;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m14",function(){
with(this){
return [parent,"height",this,"height",classroot,"offset"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",[{attrs:{$classrootdepth:2,frame:3,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:3,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_m22",LzView,["$m15",function($0){
with(this){
var $1=parent.width-width+classroot.offset;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m16",function(){
with(this){
return [parent,"width",this,"width",classroot,"offset"]
}},"$m17",function($0){
with(this){
var $1=parent.height-height+classroot.offset;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m18",function(){
with(this){
return [parent,"height",this,"height",classroot,"offset"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",[{attrs:{$classrootdepth:2,frame:4,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:4,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_focusoverlay",$lzc$class_basefocusview,["offset",void 0,"topleft",void 0,"topright",void 0,"bottomleft",void 0,"bottomright",void 0,"doFocus",function($0){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["doFocus"]||this.nextMethod(arguments.callee,"doFocus")).call(this,$0);if(visible)this.bounce()
}},"bounce",function(){
with(this){
this.animate("offset",12,duration/2);this.animate("offset",5,duration)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","focusoverlay","children",[{attrs:{$classrootdepth:1,name:"topleft",x:new LzAlwaysExpr("$m3","$m4"),y:new LzAlwaysExpr("$m5","$m6")},"class":$lzc$class_m19},{attrs:{$classrootdepth:1,name:"topright",x:new LzAlwaysExpr("$m7","$m8"),y:new LzAlwaysExpr("$m9","$m10")},"class":$lzc$class_m20},{attrs:{$classrootdepth:1,name:"bottomleft",x:new LzAlwaysExpr("$m11","$m12"),y:new LzAlwaysExpr("$m13","$m14")},"class":$lzc$class_m21},{attrs:{$classrootdepth:1,name:"bottomright",x:new LzAlwaysExpr("$m15","$m16"),y:new LzAlwaysExpr("$m17","$m18")},"class":$lzc$class_m22}],"attributes",new LzInheritedHash($lzc$class_basefocusview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({offset:5},$lzc$class_focusoverlay.attributes)
}}})($lzc$class_focusoverlay);Class.make("$lzc$class__componentmanager",LzNode,["focusclass",void 0,"keyhandlers",void 0,"lastsdown",void 0,"lastedown",void 0,"defaults",void 0,"currentdefault",void 0,"defaultstyle",void 0,"ondefaultstyle",void 0,"init",function(){
with(this){
var $0=this.focusclass;if(typeof canvas.focusclass!="undefined"){
$0=canvas.focusclass
};if($0!=null){
canvas.__focus=new (lz[$0])(canvas);canvas.__focus.reset()
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"_lastkeydown",void 0,"upkeydel",void 0,"$m23",function(){
with(this){
var $0=lz.Keys;return $0
}},"dispatchKeyDown",function($0){
with(this){
var $1=false;if($0==32){
this.lastsdown=null;var $2=lz.Focus.getFocus();if($2 instanceof lz.basecomponent){
$2.doSpaceDown();this.lastsdown=$2
};$1=true
}else if($0==13&&this.currentdefault){
this.lastedown=this.currentdefault;this.currentdefault.doEnterDown();$1=true
};if($1){
if(!this.upkeydel)this.upkeydel=new LzDelegate(this,"dispatchKeyTimer");this._lastkeydown=$0;lz.Timer.addTimer(this.upkeydel,50)
}}},"dispatchKeyTimer",function($0){
if(this._lastkeydown==32&&this.lastsdown!=null){
this.lastsdown.doSpaceUp();this.lastsdown=null
}else if(this._lastkeydown==13&&this.currentdefault&&this.currentdefault==this.lastedown){
this.currentdefault.doEnterUp()
}},"findClosestDefault",function($0){
with(this){
if(!this.defaults){
return null
};var $1=null;var $2=null;var $3=this.defaults;$0=$0||canvas;var $4=lz.ModeManager.getModalView();for(var $5=0;$5<$3.length;$5++){
var $6=$3[$5];if($4&&!$6.childOf($4)){
continue
};var $7=this.findCommonParent($6,$0);if($7&&(!$1||$7.nodeLevel>$1.nodeLevel)){
$1=$7;$2=$6
}};return $2
}},"findCommonParent",function($0,$1){
while($0.nodeLevel>$1.nodeLevel){
$0=$0.immediateparent;if(!$0.visible)return null
};while($1.nodeLevel>$0.nodeLevel){
$1=$1.immediateparent;if(!$1.visible)return null
};while($0!=$1){
$0=$0.immediateparent;$1=$1.immediateparent;if(!$0.visible||!$1.visible)return null
};return $0
},"makeDefault",function($0){
with(this){
if(!this.defaults)this.defaults=[];this.defaults.push($0);this.checkDefault(lz.Focus.getFocus())
}},"unmakeDefault",function($0){
with(this){
if(!this.defaults)return;for(var $1=0;$1<this.defaults.length;$1++){
if(this.defaults[$1]==$0){
this.defaults.splice($1,1);this.checkDefault(lz.Focus.getFocus());return
}}}},"$m24",function(){
with(this){
var $0=lz.Focus;return $0
}},"checkDefault",function($0){
with(this){
if(!($0 instanceof lz.basecomponent)||!$0.doesenter){
if($0 instanceof lz.inputtext&&$0.multiline){
$0=null
}else{
$0=this.findClosestDefault($0)
}};if($0==this.currentdefault)return;if(this.currentdefault){
this.currentdefault.setAttribute("hasdefault",false)
};this.currentdefault=$0;if($0){
$0.setAttribute("hasdefault",true)
}}},"$m25",function(){
with(this){
var $0=lz.ModeManager;return $0
}},"$m26",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(lz.Focus.getFocus()==null){
this.checkDefault(null)
}}},"setDefaultStyle",function($0){
this.defaultstyle=$0;if(this.ondefaultstyle)this.ondefaultstyle.sendEvent($0)
},"getDefaultStyle",function(){
with(this){
if(this.defaultstyle==null){
this.defaultstyle=new (lz.style)(canvas,{isdefault:true})
};return this.defaultstyle
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","_componentmanager","attributes",new LzInheritedHash(LzNode.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onkeydown","dispatchKeyDown","$m23","onfocus","checkDefault","$m24","onmode","$m26","$m25"],_lastkeydown:0,currentdefault:null,defaults:null,defaultstyle:null,focusclass:"focusoverlay",keyhandlers:null,lastedown:null,lastsdown:null,ondefaultstyle:LzDeclaredEvent,upkeydel:null},$lzc$class__componentmanager.attributes)
}}})($lzc$class__componentmanager);Class.make("$lzc$class_style",LzNode,["isstyle",void 0,"$m27",function($0){
with(this){
this.setAttribute("canvascolor",LzColorUtils.convertColor("null"))
}},"canvascolor",void 0,"$lzc$set_canvascolor",function($0){
with(this){
setCanvasColor($0)
}},"$m28",function($0){
with(this){
this.setAttribute("textcolor",LzColorUtils.convertColor("gray10"))
}},"textcolor",void 0,"$lzc$set_textcolor",function($0){
with(this){
setStyleAttr($0,"textcolor")
}},"$m29",function($0){
with(this){
this.setAttribute("textfieldcolor",LzColorUtils.convertColor("white"))
}},"textfieldcolor",void 0,"$lzc$set_textfieldcolor",function($0){
with(this){
setStyleAttr($0,"textfieldcolor")
}},"$m30",function($0){
with(this){
this.setAttribute("texthilitecolor",LzColorUtils.convertColor("iceblue1"))
}},"texthilitecolor",void 0,"$lzc$set_texthilitecolor",function($0){
with(this){
setStyleAttr($0,"texthilitecolor")
}},"$m31",function($0){
with(this){
this.setAttribute("textselectedcolor",LzColorUtils.convertColor("black"))
}},"textselectedcolor",void 0,"$lzc$set_textselectedcolor",function($0){
with(this){
setStyleAttr($0,"textselectedcolor")
}},"$m32",function($0){
with(this){
this.setAttribute("textdisabledcolor",LzColorUtils.convertColor("gray60"))
}},"textdisabledcolor",void 0,"$lzc$set_textdisabledcolor",function($0){
with(this){
setStyleAttr($0,"textdisabledcolor")
}},"$m33",function($0){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("offwhite"))
}},"basecolor",void 0,"$lzc$set_basecolor",function($0){
with(this){
setStyleAttr($0,"basecolor")
}},"$m34",function($0){
with(this){
this.setAttribute("bgcolor",LzColorUtils.convertColor("white"))
}},"bgcolor",void 0,"$lzc$set_bgcolor",function($0){
with(this){
setStyleAttr($0,"bgcolor")
}},"$m35",function($0){
with(this){
this.setAttribute("hilitecolor",LzColorUtils.convertColor("iceblue4"))
}},"hilitecolor",void 0,"$lzc$set_hilitecolor",function($0){
with(this){
setStyleAttr($0,"hilitecolor")
}},"$m36",function($0){
with(this){
this.setAttribute("selectedcolor",LzColorUtils.convertColor("iceblue3"))
}},"selectedcolor",void 0,"$lzc$set_selectedcolor",function($0){
with(this){
setStyleAttr($0,"selectedcolor")
}},"$m37",function($0){
with(this){
this.setAttribute("disabledcolor",LzColorUtils.convertColor("gray30"))
}},"disabledcolor",void 0,"$lzc$set_disabledcolor",function($0){
with(this){
setStyleAttr($0,"disabledcolor")
}},"$m38",function($0){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("gray40"))
}},"bordercolor",void 0,"$lzc$set_bordercolor",function($0){
with(this){
setStyleAttr($0,"bordercolor")
}},"$m39",function($0){
this.setAttribute("bordersize",1)
},"bordersize",void 0,"$lzc$set_bordersize",function($0){
with(this){
setStyleAttr($0,"bordersize")
}},"$m40",function($0){
with(this){
this.setAttribute("menuitembgcolor",LzColorUtils.convertColor("textfieldcolor"))
}},"menuitembgcolor",void 0,"isdefault",void 0,"$lzc$set_isdefault",function($0){
with(this){
_setdefault($0)
}},"onisdefault",void 0,"_setdefault",function($0){
with(this){
this.isdefault=$0;if(isdefault){
lz._componentmanager.service.setDefaultStyle(this);if(this["canvascolor"]!=null){
canvas.setAttribute("bgcolor",this.canvascolor)
}};if(this.onisdefault)this.onisdefault.sendEvent(this)
}},"onstylechanged",void 0,"setStyleAttr",function($0,$1){
this[$1]=$0;if(this["on"+$1])this["on"+$1].sendEvent($1);if(this.onstylechanged)this.onstylechanged.sendEvent(this)
},"setCanvasColor",function($0){
with(this){
if(this.isdefault&&$0!=null){
canvas.setAttribute("bgcolor",$0)
};this.canvascolor=$0;if(this.onstylechanged)this.onstylechanged.sendEvent(this)
}},"extend",function($0){
with(this){
var $1=new (lz.style)();$1.canvascolor=this.canvascolor;$1.textcolor=this.textcolor;$1.textfieldcolor=this.textfieldcolor;$1.texthilitecolor=this.texthilitecolor;$1.textselectedcolor=this.textselectedcolor;$1.textdisabledcolor=this.textdisabledcolor;$1.basecolor=this.basecolor;$1.bgcolor=this.bgcolor;$1.hilitecolor=this.hilitecolor;$1.selectedcolor=this.selectedcolor;$1.disabledcolor=this.disabledcolor;$1.bordercolor=this.bordercolor;$1.bordersize=this.bordersize;$1.menuitembgcolor=this.menuitembgcolor;$1.isdefault=this.isdefault;for(var $2 in $0){
$1[$2]=$0[$2]
};new LzDelegate($1,"_forwardstylechanged",this,"onstylechanged");return $1
}},"_forwardstylechanged",function($0){
if(this.onstylechanged)this.onstylechanged.sendEvent(this)
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","style","attributes",new LzInheritedHash(LzNode.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({basecolor:new LzOnceExpr("$m33"),bgcolor:new LzOnceExpr("$m34"),bordercolor:new LzOnceExpr("$m38"),bordersize:new LzOnceExpr("$m39"),canvascolor:new LzOnceExpr("$m27"),disabledcolor:new LzOnceExpr("$m37"),hilitecolor:new LzOnceExpr("$m35"),isdefault:false,isstyle:true,menuitembgcolor:new LzOnceExpr("$m40"),onisdefault:LzDeclaredEvent,onstylechanged:LzDeclaredEvent,selectedcolor:new LzOnceExpr("$m36"),textcolor:new LzOnceExpr("$m28"),textdisabledcolor:new LzOnceExpr("$m32"),textfieldcolor:new LzOnceExpr("$m29"),texthilitecolor:new LzOnceExpr("$m30"),textselectedcolor:new LzOnceExpr("$m31")},$lzc$class_style.attributes)
}}})($lzc$class_style);canvas.LzInstantiateView({"class":lz.script,attrs:{script:function(){
lz._componentmanager.service=new (lz._componentmanager)(canvas,null,null,true)
}}},1);Class.make("$lzc$class_statictext",LzText,["$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","statictext","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_basecomponent",LzView,["enabled",void 0,"$lzc$set_focusable",function($0){
with(this){
_setFocusable($0)
}},"_focusable",void 0,"onfocusable",void 0,"text",void 0,"doesenter",void 0,"$lzc$set_doesenter",function($0){
this._setDoesEnter($0)
},"$m41",function($0){
var $1=this.enabled&&(this._parentcomponent?this._parentcomponent._enabled:true);if($1!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$1)
}},"$m42",function(){
return [this,"enabled",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"$lzc$set__enabled",function($0){
this._setEnabled($0)
},"_parentcomponent",void 0,"_initcomplete",void 0,"isdefault",void 0,"$lzc$set_isdefault",function($0){
this._setIsDefault($0)
},"onisdefault",void 0,"hasdefault",void 0,"_setEnabled",function($0){
with(this){
this._enabled=$0;var $1=this._enabled&&this._focusable;if($1!=this.focusable){
this.focusable=$1;if(this.onfocusable.ready)this.onfocusable.sendEvent()
};if(_initcomplete)_showEnabled();if(this.on_enabled.ready)this.on_enabled.sendEvent()
}},"_setFocusable",function($0){
this._focusable=$0;if(this.enabled){
this.focusable=this._focusable;if(this.onfocusable.ready)this.onfocusable.sendEvent()
}else{
this.focusable=false
}},"construct",function($0,$1){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$0,$1);var $2=this.immediateparent;while($2!=canvas){
if(lz.basecomponent["$lzsc$isa"]?lz.basecomponent.$lzsc$isa($2):$2 instanceof lz.basecomponent){
this._parentcomponent=$2;break
};$2=$2.immediateparent
}}},"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this._initcomplete=true;this._mousedownDel=new LzDelegate(this,"_doMousedown",this,"onmousedown");if(this.styleable){
_usestyle()
};if(!this["_enabled"])_showEnabled()
}},"_doMousedown",function($0){},"doSpaceDown",function(){
return false
},"doSpaceUp",function(){
return false
},"doEnterDown",function(){
return false
},"doEnterUp",function(){
return false
},"_setIsDefault",function($0){
with(this){
this.isdefault=this["isdefault"]==true;if(this.isdefault==$0)return;if($0){
lz._componentmanager.service.makeDefault(this)
}else{
lz._componentmanager.service.unmakeDefault(this)
};this.isdefault=$0;if(this.onisdefault.ready){
this.onisdefault.sendEvent($0)
}}},"_setDoesEnter",function($0){
with(this){
this.doesenter=$0;if(lz.Focus.getFocus()==this){
lz._componentmanager.service.checkDefault(this)
}}},"updateDefault",function(){
with(this){
lz._componentmanager.service.checkDefault(lz.Focus.getFocus())
}},"$m43",function($0){
this.setAttribute("style",null)
},"style",void 0,"$lzc$set_style",function($0){
with(this){
styleable?setStyle($0):(this.style=null)
}},"styleable",void 0,"_style",void 0,"onstyle",void 0,"_styledel",void 0,"_otherstyledel",void 0,"setStyle",function($0){
with(this){
if(!styleable)return;if($0!=null&&!$0["isstyle"]){
var $1=this._style;if(!$1){
if(this._parentcomponent){
$1=this._parentcomponent.style
}else $1=lz._componentmanager.service.getDefaultStyle()
};$0=$1.extend($0)
};this._style=$0;if($0==null){
if(!this._otherstyledel){
this._otherstyledel=new LzDelegate(this,"_setstyle")
}else{
this._otherstyledel.unregisterAll()
};if(this._parentcomponent&&this._parentcomponent.styleable){
this._otherstyledel.register(this._parentcomponent,"onstyle");$0=this._parentcomponent.style
}else{
this._otherstyledel.register(lz._componentmanager.service,"ondefaultstyle");$0=lz._componentmanager.service.getDefaultStyle()
}}else if(this._otherstyledel){
this._otherstyledel.unregisterAll();this._otherstyledel=null
};_setstyle($0)
}},"_usestyle",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(this._initcomplete&&this["style"]&&this.style.isinited){
this._applystyle(this.style)
}},"_setstyle",function($0){
with(this){
if(!this._styledel){
this._styledel=new LzDelegate(this,"_usestyle")
}else{
_styledel.unregisterAll()
};if($0){
_styledel.register($0,"onstylechanged")
};this.style=$0;_usestyle();if(this.onstyle.ready)this.onstyle.sendEvent(this.style)
}},"_applystyle",function($0){},"setTint",function($0,$1,$2){
switch(arguments.length){
case 2:
$2=0;

};if($0.capabilities.colortransform){
if($1!=""&&$1!=null){
var $3=$1;var $4=$3>>16&255;var $5=$3>>8&255;var $6=$3&255;$4+=51;$5+=51;$6+=51;$4=$4/255*100;$5=$5/255*100;$6=$6/255*100;$0.setColorTransform({ra:$4,ga:$5,ba:$6,rb:$2,gb:$2,bb:$2})
}}},"on_enabled",void 0,"_showEnabled",function(){},"acceptValue",function($0,$1){
switch(arguments.length){
case 1:
$1=null;

};this.setAttribute("text",$0)
},"presentValue",function($0){
switch(arguments.length){
case 0:
$0=null;

};return this.text
},"$lzc$presentValue_dependencies",function($0,$1,$2){
switch(arguments.length){
case 2:
$2=null;

};return [this,"text"]
},"applyData",function($0){
this.acceptValue($0)
},"updateData",function(){
return this.presentValue()
},"destroy",function(){
with(this){
if(this["isdefault"]&&this.isdefault){
lz._componentmanager.service.unmakeDefault(this)
};if(this._otherstyledel){
this._otherstyledel.unregisterAll();this._otherstyledel=null
};if(this._styledel){
this._styledel.unregisterAll();this._styledel=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
}},"toString",function(){
var $0="";var $1="";var $2="";if(this["id"]!=null)$0="  id="+this.id;if(this["name"]!=null)$1=' named "'+this.name+'"';if(this["text"]&&this.text!="")$2="  text="+this.text;return this.constructor.tagname+$1+$0+$2
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","basecomponent","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m41","$m42"),_focusable:true,_initcomplete:false,_otherstyledel:null,_parentcomponent:null,_style:null,_styledel:null,doesenter:false,enabled:true,focusable:true,hasdefault:false,on_enabled:LzDeclaredEvent,onfocusable:LzDeclaredEvent,onisdefault:LzDeclaredEvent,onstyle:LzDeclaredEvent,style:new LzOnceExpr("$m43"),styleable:true,text:""},$lzc$class_basecomponent.attributes)
}}})($lzc$class_basecomponent);Mixin.make("DrawviewShared",null,["$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
},"lineTo",function($0,$1){},"moveTo",function($0,$1){},"quadraticCurveTo",function($0,$1,$2,$3){},"arc",function($0,$1,$2,$3,$4,$5){
switch(arguments.length){
case 5:
$5=false;

};var $6=$0+$2*Math.cos($3);var $7=$1+$2*Math.sin(2*Math.PI-$3);$3*=180/Math.PI;$4*=180/Math.PI;var $8=$5==true?$4-$3-360:$4-$3;this.moveTo($6,$7);return this._drawArc($0,$1,$2,$8,$3)
},"rect",function($0,$1,$2,$3,$4){
switch(arguments.length){
case 4:
$4=0;

};LzKernelUtils.rect(this,$0,$1,$2,$3,$4)
},"oval",function($0,$1,$2,$3){
switch(arguments.length){
case 3:
$3=NaN;

};if(isNaN($3)){
$3=$2
};var $4=$2<20&&$3<20?5:8;var $5=Math.PI/($4/2);var $6=$2/Math.cos($5/2);var $7=$3/Math.cos($5/2);this.moveTo($0+$2,$1);var $8=0,$9,$a,$b,$c,$d;for(var $e=0;$e<$4;$e++){
$8+=$5;$9=$8-$5/2;$c=$0+Math.cos($9)*$6;$d=$1+Math.sin($9)*$7;$a=$0+Math.cos($8)*$2;$b=$1+Math.sin($8)*$3;this.quadraticCurveTo($c,$d,$a,$b)
};return {x:$a,y:$b}},"_drawArc",function($0,$1,$2,$3,$4,$5){
switch(arguments.length){
case 5:
$5=NaN;

};if(isNaN($5)){
$5=$2
};if(Math.abs($3)>360){
$3=360
};var $6=Math.ceil(Math.abs($3)/45);var $7,$8;if($6>0){
var $9=$3/$6;var $a=-($9/180)*Math.PI;var $b=-($4/180)*Math.PI;var $c,$d,$e;for(var $f=0;$f<$6;$f++){
$b+=$a;$c=$b-$a/2;$7=$0+Math.cos($b)*$2;$8=$1+Math.sin($b)*$5;$d=$0+Math.cos($c)*($2/Math.cos($a/2));$e=$1+Math.sin($c)*($5/Math.cos($a/2));this.quadraticCurveTo($d,$e,$7,$8)
}};return {x:$7,y:$8}},"distance",function($0,$1){
var $2=$1.x-$0.x;var $3=$1.y-$0.y;return Math.sqrt($2*$2+$3*$3)
},"intersection",function($0,$1,$2,$3){
var $4=($3.x-$2.x)*($0.y-$2.y)-($3.y-$2.y)*($0.x-$2.x);var $5=($3.y-$2.y)*($1.x-$0.x)-($3.x-$2.x)*($1.y-$0.y);if($5==0){
if($4==0){
return -1
}else{
return null
}};$4/=$5;return {x:$0.x+($1.x-$0.x)*$4,y:$0.y+($1.y-$0.y)*$4}},"midpoint",function($0,$1){
return {x:($0.x+$1.x)/2,y:($0.y+$1.y)/2}}],null);Class.make("$lzc$class_drawview",[DrawviewShared,LzView],["globalAlpha",1,"lineWidth",1,"lineCap","round","lineJoin","round","miterLimit",3,"strokeStyle","#000000","fillStyle","#000000","__globalAlpha",null,"__lineWidth",null,"__lineCap",null,"__lineJoin",null,"__miterLimit",null,"__strokeStyle",null,"__fillStyle",null,"init",function(){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this.createContext()
},"$lzc$set_context",function($0){
this.beginPath();if(this.context){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_context"]||this.nextMethod(arguments.callee,"$lzc$set_context")).call(this,$0)
},"__drawImageCnt",0,"getImage",function($0){
with(this){
var $1=lz.drawview.images;if(!$1[$0]){
var $2=$0;if($0.indexOf("http:")!=0&&$0.indexOf("https:")!=0){
$2=this.sprite.getResourceUrls($0)[0]
};var $3=new Image();$3.src=$2;$1[$0]=$3;if($2!=$0){
$1[$2]=$3
}};return $1[$0]
}},"drawImage",function($0,$1,$2,$3,$4,$5){
with(this){
var image=$0;var x=$1;var y=$2;var w=$3;var h=$4;var r=$5;if(typeof image=="string"){
image=this.getImage(image)
};if(!(image&&image.nodeType==1&&image.nodeName=="IMG")){

}else if(!image.complete){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
var $6=r?r:0;this.context.save();this.clear();var $7=x?x:0;var $8=y?y:0;this.context.translate($7,$8);this.context.rotate($6);this.context.drawImage(image,0,0,w,h);this.context.restore()
}}},"__checkContext",function(){},"beginPath",function(){
this.__path=[[1,0,0]];this.__pathisopen=true
},"closePath",function(){
if(this.__pathisopen){
this.__path.push([0])
};this.__pathisopen=false
},"moveTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([1,$0,$1])
}},"lineTo",function($0,$1){
if(this.__pathisopen){
this.__path.push([2,$0,$1])
}},"quadraticCurveTo",function($0,$1,$2,$3){
if(this.__pathisopen){
this.__path.push([3,$0,$1,$2,$3])
}},"bezierCurveTo",function($0,$1,$2,$3,$4,$5){
if(this.__pathisopen){
this.__path.push([4,$0,$1,$2,$3,$4,$5])
}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
with(this){
if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $0=lz.drawview.__colorcache;var $1=$0[this.fillStyle];if($1==null){
$1=LzColorUtils.torgb(this.fillStyle);$0[this.fillStyle]=$1
};this.context.fillStyle=$1
};this.__fillStyle=this.fillStyle
}}},"__updateStyles",function(){
with(this){
var $0={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit",globalAlpha:"__globalAlpha"};for(var $1 in $0){
var $2=$0[$1];var $3=this[$1];if(this[$2]!=$3){
this.context[$1]=$3;this[$2]=$3
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $4=lz.drawview.__colorcache;var $5=$4[this.strokeStyle];if($5==null){
$5=LzColorUtils.torgb(this.strokeStyle);$4[this.strokeStyle]=$5
};this.context.strokeStyle=$5
};this.__strokeStyle=this.strokeStyle
}}},"__playPath",function(){
if(this.__path.length==0)return;this.__updateStyles();this.__updateFillStyle();this.context.beginPath();for(var $0=0;$0<this.__path.length;$0+=1){
var $1=this.__path[$0];var $2=$1[0];if($2==0){
this.context.closePath()
}else if($2==3){
this.context.quadraticCurveTo($1[1],$1[2],$1[3],$1[4])
}else if($2==4){
this.context.bezierCurveTo($1[1],$1[2],$1[3],$1[4],$1[5],$1[6])
}else if($2==1){
this.context.moveTo($1[1],$1[2])
}else if($2==2){
this.context.lineTo($1[1],$1[2])
}}},"clipPath",function(){},"clipButton",function(){},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
this.context.clearRect(0,0,this.width,this.height)
},"clearMask",function(){},"createLinearGradient",function($0,$1,$2,$3){
with(this){
return new LzCanvasGradient(this,[$0,$1,$2,$3],false)
}},"createRadialGradient",function($0,$1,$2,$3,$4,$5){
with(this){
return new LzCanvasGradient(this,[$0,$1,$2,$3,$4,$5],true)
}},"rotate",function($0){
this.context.rotate($0)
},"translate",function($0,$1){
this.context.translate($0,$1)
},"save",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.save()
},"restore",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.restore()
},"fillRect",function($0,$1,$2,$3){
this.__updateFillStyle();this.context.fillRect($0,$1,$2,$3)
}],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"__colorcache",{},"__rrfactors",null,"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",null,["__context",null,"__g",null,"$lzsc$initialize",function($0,$1,$2){
this.__context=$0;if($2){
this.__g=$0.context.createRadialGradient.apply($0.context,$1)
}else{
this.__g=$0.context.createLinearGradient.apply($0.context,$1)
}},"addColorStop",function($0,$1){
var $2=lz.drawview.__colorcache;var $3=$2[$1];if($3==null){
$3=LzColorUtils.torgb($1);$2[$1]=$3
};var $4=this.__context.globalAlpha;if($4!=1){
$3=this.torgba($3,$4)
};this.__g.addColorStop($0,$3)
},"torgba",function($0,$1){
if($0.indexOf("rgba")==-1){
var $2=$0.substring(4,$0.length-1).split(",");$2.push($1);return "rgba("+$2.join(",")+")"
}else{
return $0
}},"__applyFillTo",function($0){
$0.fillStyle=this.__g
},"__applyStrokeTo",function($0){
$0.strokeStyle=this.__g
}],null);Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($0){
this.setAxis($0)
},"inset",void 0,"$lzc$set_inset",function($0){
this.inset=$0;if(this.subviews&&this.subviews.length)this.update();if(this["oninset"])this.oninset.sendEvent(this.inset)
},"spacing",void 0,"$lzc$set_spacing",function($0){
this.spacing=$0;if(this.subviews&&this.subviews.length)this.update();if(this["onspacing"])this.onspacing.sendEvent(this.spacing)
},"setAxis",function($0){
if(this["axis"]==null||this.axis!=$0){
this.axis=$0;this.sizeAxis=$0=="x"?"width":"height";if(this.subviews.length)this.update();if(this["onaxis"])this.onaxis.sendEvent(this.axis)
}},"addSubview",function($0){
this.updateDelegate.register($0,"on"+this.sizeAxis);this.updateDelegate.register($0,"onvisible");if(!this.locked){
var $1=null;var $2=this.subviews;for(var $3=$2.length-1;$3>=0;--$3){
if($2[$3].visible){
$1=$2[$3];break
}};if($1){
var $4=$1[this.axis]+$1[this.sizeAxis]+this.spacing
}else{
var $4=this.inset
};$0.setAttribute(this.axis,$4)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["addSubview"]||this.nextMethod(arguments.callee,"addSubview")).call(this,$0)
},"update",function($0){
switch(arguments.length){
case 0:
$0=null;

};if(this.locked)return;var $1=this.subviews.length;var $2=this.inset;for(var $3=0;$3<$1;$3++){
var $4=this.subviews[$3];if(!$4.visible)continue;if($4[this.axis]!=$2){
$4.setAttribute(this.axis,$2)
};if($4.usegetbounds){
$4=$4.getBounds()
};$2+=this.spacing+$4[this.sizeAxis]
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","simplelayout","attributes",new LzInheritedHash(LzLayout.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({axis:"y",inset:0,spacing:0},$lzc$class_simplelayout.attributes)
}}})($lzc$class_simplelayout);Class.make("$lzc$class_loopingtimer",LzView,["timer_resolution",void 0,"formertime",void 0,"currenttime",void 0,"timer_state",void 0,"reactToTimeChange",function($0){},"startTimer",function(){
with(this){
this.setAttribute("timer_state","COUNTING");var $0=new Date();var $1=$0.getTime();this.setAttribute("formertime",$1);this.doForTime()
}},"pauseTimer",function(){
this.setAttribute("timer_state","PAUSED")
},"unpauseTimer",function(){
with(this){
this.setAttribute("timer_state","COUNTING");var $0=new Date();var $1=$0.getTime();this.setAttribute("formertime",$1-this.currenttime);this.repeat()
}},"stopTimer",function(){
this.setAttribute("timer_state","STOPPED")
},"resetTimer",function(){
this.setAttribute("formertime",0);this.setAttribute("currenttime",0);this.setAttribute("timer_state","READY");this.reactToTimeChange(0)
},"doForTime",function($0){
with(this){
switch(arguments.length){
case 0:
$0=null;

};if(this.timer_state=="PAUSED"||this.timer_state=="STOPPED"||this.timer_state=="READY")return;var $1=new Date();var $2=$1.getTime();if(this.formertime!=0)var $3=$2-this.formertime;this.setAttribute("currenttime",$3);this.reactToTimeChange($3);this.repeat()
}},"repeat",function(){
with(this){
var $0=function(){
doForTime()
};setTimeout($0,this.timer_resolution)
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","loopingtimer","attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({currenttime:0,formertime:0,timer_resolution:40,timer_state:"READY"},$lzc$class_loopingtimer.attributes)
}}})($lzc$class_loopingtimer);Class.make("$lzc$class_m61",LzView,["$m59",function($0){
with(this){
this.setAttribute("width",parent.width)
}},"$m60",function($0){
with(this){
this.setAttribute("height",parent.height)
}},"reset",function(){
with(this){
this.setAttribute("x",parent.insetleft);this.setAttribute("y",parent.insettop);this.setAttribute("width",parent.width-parent.insetleft-parent.insetright-1);this.setAttribute("height",parent.height-parent.insettop-parent.insetbottom-1)
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_roundrect",$lzc$class_drawview,["inset",void 0,"$lzc$set_inset",function($0){
with(this){
setInset($0)
}},"oninset",void 0,"$m44",function($0){
var $1=null;if($1!==this["insetleft"]||!this.inited){
this.setAttribute("insetleft",$1)
}},"$m45",function(){
return []
},"insetleft",void 0,"$lzc$set_insetleft",function($0){
with(this){
setInsetLeft($0)
}},"oninsetleft",void 0,"$m46",function($0){
var $1=null;if($1!==this["insetright"]||!this.inited){
this.setAttribute("insetright",$1)
}},"$m47",function(){
return []
},"insetright",void 0,"$lzc$set_insetright",function($0){
with(this){
setInsetRight($0)
}},"oninsetright",void 0,"$m48",function($0){
var $1=null;if($1!==this["insettop"]||!this.inited){
this.setAttribute("insettop",$1)
}},"$m49",function(){
return []
},"insettop",void 0,"$lzc$set_insettop",function($0){
with(this){
setInsetTop($0)
}},"oninsettop",void 0,"$m50",function($0){
var $1=null;if($1!==this["insetbottom"]||!this.inited){
this.setAttribute("insetbottom",$1)
}},"$m51",function(){
return []
},"insetbottom",void 0,"$lzc$set_insetbottom",function($0){
with(this){
setInsetBottom($0)
}},"oninsetbottom",void 0,"setInset",function($0){
with(this){
this.insetleft=$0;this.insetright=$0;this.insettop=$0;this.insetbottom=$0;if(this.context)this.drawStructure();if(oninset)this.oninset.sendEvent()
}},"setInsetLeft",function($0){
with(this){
if($0)this.insetleft=$0;if(this.context)this.drawStructure();if(oninsetleft)this.oninsetleft.sendEvent()
}},"setInsetRight",function($0){
with(this){
if($0)this.insetright=$0;if(this.context)this.drawStructure();if(oninsetright)this.oninsetright.sendEvent()
}},"setInsetTop",function($0){
with(this){
if($0)this.insettop=$0;if(this.context)this.drawStructure();if(oninsettop)this.oninsettop.sendEvent()
}},"setInsetBottom",function($0){
with(this){
if($0)this.insetbottom=$0;if(this.context)this.drawStructure();if(oninsetbottom)this.oninsetbottom.sendEvent()
}},"$m52",function($0){
if(this.context)this.drawStructure()
},"$m53",function($0){
if(this.context)this.drawStructure()
},"borderWidth",void 0,"borderRadius",void 0,"borderColor",void 0,"borderOpacity",void 0,"$m54",function($0){
this.setAttribute("backgroundStartColor",null)
},"backgroundStartColor",void 0,"$m55",function($0){
this.setAttribute("backgroundStopColor",null)
},"backgroundStopColor",void 0,"backgroundStartOpacity",void 0,"backgroundStopOpacity",void 0,"backgroundGradientOrientation",void 0,"boxShadowX",void 0,"boxShadowY",void 0,"$m56",function($0){
this.setAttribute("boxShadowColor",null)
},"boxShadowColor",void 0,"boxShadowOpacity",void 0,"$m57",function($0){
if(this.context)this.drawStructure()
},"$m58",function($0){
this.drawStructure();this._cache=null
},"drawStructure",function(){
if(!this.context)return;if(!this["_cache"]){
this._cache={borderWidth:this.borderWidth,borderRadius:this.borderRadius,borderColor:this.borderColor,borderOpacity:this.borderOpacity,backgroundStartColor:this.backgroundStartColor,backgroundStopColor:this.backgroundStopColor,backgroundGradientOrientation:this.backgroundGradientOrientation,backgroundStartOpacity:this.backgroundStartOpacity,backgroundStopOpacity:this.backgroundStopOpacity,boxShadowColor:this.boxShadowColor,boxShadowOpacity:this.boxShadowOpacity,boxShadowX:this.boxShadowX,boxShadowY:this.boxShadowY,insetleft:this.insetleft,insettop:this.insettop,insetright:this.insetright,insetbottom:this.insetbottom,inset:this["inset"],height:this.height,width:this.width}}else{
var $0=false;var $1=this._cache;for(var $2 in $1){
if($1[$2]!=this[$2]){
$1[$2]=this[$2];$0=true;break
}};if($0==false)return
};var $3=this.borderWidth;var $4=this.borderRadius;var $5=$3/2;var $6=$3/2;var $7=this.backgroundStartColor;var $8=this.backgroundStopColor;this.clear();if(typeof this.content!="undefined"){
this.content.reset()
};if($3!=0&&this.boxShadowColor!=null&&this.boxShadowOpacity!=0){
var $9=this.boxShadowX;var $a=this.boxShadowY;this.beginPath();this.rect($9+$5,$a+$6,this.width-$3,this.height-$3,$4);this.fillStyle=this.boxShadowColor;this.globalAlpha=this.boxShadowOpacity;this.lineWidth=this.borderWidth;this.fill();if($7==null&&$8==null)$7=$8=16777215
};this.beginPath();this.rect($5,$6,this.width-$3,this.height-$3,$4);if($7!=null||$8!=null){
var $b=this.backgroundGradientOrientation=="vertical"?this.createLinearGradient(0,$3/2,0,this.height-$3):this.createLinearGradient($3/2,0,this.width-$3,0);var $c=this.backgroundStartOpacity;var $d=this.backgroundStopOpacity;if($7==null){
$7=$8;$c=0
};if($8==null){
$8=$7;$d=0
};this.globalAlpha=$c;$b.addColorStop(0,$7);this.globalAlpha=$d;$b.addColorStop(1,$8);this.fillStyle=$b;this.fill()
};this.strokeStyle=this.borderColor;this.lineWidth=this.borderWidth;this.globalAlpha=this.borderOpacity;this.stroke()
},"content",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","roundrect","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzOnceExpr("$m60"),name:"content",width:new LzOnceExpr("$m59"),x:0,y:0},"class":$lzc$class_m61},{attrs:"content","class":$lzc$class_userClassPlacement}],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onwidth","$m52",null,"onheight","$m53",null,"oninit","$m57",null,"oncontext","$m58",null],backgroundGradientOrientation:"vertical",backgroundStartColor:new LzOnceExpr("$m54"),backgroundStartOpacity:1,backgroundStopColor:new LzOnceExpr("$m55"),backgroundStopOpacity:1,borderColor:LzColorUtils.convertColor("0x0"),borderOpacity:1,borderRadius:5,borderWidth:1,boxShadowColor:new LzOnceExpr("$m56"),boxShadowOpacity:0.5,boxShadowX:5,boxShadowY:5,height:100,inset:5,insetbottom:new LzAlwaysExpr("$m50","$m51"),insetleft:new LzAlwaysExpr("$m44","$m45"),insetright:new LzAlwaysExpr("$m46","$m47"),insettop:new LzAlwaysExpr("$m48","$m49"),oninset:null,oninsetbottom:null,oninsetleft:null,oninsetright:null,oninsettop:null,width:100},$lzc$class_roundrect.attributes)
}}})($lzc$class_roundrect);Class.make("$lzc$class_m96",$lzc$class_roundrect,["$m62",function($0){
with(this){
var $1=immediateparent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m63",function(){
with(this){
return [immediateparent,"width"]
}},"$m64",function($0){
with(this){
var $1=immediateparent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m65",function(){
with(this){
return [immediateparent,"height"]
}},"$m66",function($0){
with(this){
this.setAttribute("borderColor",parent.borderColor)
}},"$m67",function($0){
with(this){
this.setAttribute("borderWidth",parent.borderWidth)
}},"$m68",function($0){
with(this){
this.setAttribute("backgroundStartColor",parent.upStartColor)
}},"$m69",function($0){
with(this){
this.setAttribute("backgroundStopColor",parent.upStopColor)
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",LzNode.mergeChildren([],$lzc$class_roundrect["children"]),"attributes",new LzInheritedHash($lzc$class_roundrect.attributes)]);Class.make("$lzc$class_m97",LzText,["$m70",function($0){
with(this){
var $1=parent.width*0.5;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m71",function(){
with(this){
return [parent,"width"]
}},"$m72",function($0){
with(this){
var $1=classroot.text;if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m73",function(){
with(this){
return [classroot,"text"]
}},"$m74",function($0){
with(this){
var $1=parent.height*0.2;if($1!==this["fontsize"]||!this.inited){
this.setAttribute("fontsize",$1)
}}},"$m75",function(){
with(this){
return [parent,"height"]
}},"$m76",function($0){
with(this){
var $1=classroot.enabled?classroot.fgcolor:"#CCCCCC";if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$m77",function(){
with(this){
return [classroot,"enabled",classroot,"fgcolor"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_m98",LzView,["$m78",function($0){
var $1=this.height;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}},"$m79",function(){
return [this,"height"]
},"$m80",function($0){
with(this){
var $1=parent.height*0.8;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m81",function(){
with(this){
return [parent,"height"]
}},"$m82",function($0){
with(this){
var $1=parent.height*0.1;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m83",function(){
with(this){
return [parent,"height"]
}},"$m84",function($0){
with(this){
var $1=parent.height*0.1;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m85",function(){
with(this){
return [parent,"height"]
}},"$m86",function($0){
with(this){
var $1=classroot.resourcename;if($1!==this["resource"]||!this.inited){
this.setAttribute("resource",$1)
}}},"$m87",function(){
with(this){
return [classroot,"resourcename"]
}},"$m88",function($0){
with(this){
var $1=classroot.enabled?1:0.2;if($1!==this["opacity"]||!this.inited){
this.setAttribute("opacity",$1)
}}},"$m89",function(){
with(this){
return [classroot,"enabled"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_poodllbigbutton",$lzc$class_basecomponent,["downStartColor",void 0,"downStopColor",void 0,"upStartColor",void 0,"upStopColor",void 0,"overStartColor",void 0,"overStopColor",void 0,"borderColor",void 0,"borderWidth",void 0,"resourcename",void 0,"_rr",void 0,"_label",void 0,"_iconview",void 0,"$m90",function($0){
with(this){
_rr.setAttribute("backgroundStartColor",this.overStartColor);_rr.setAttribute("backgroundStopColor",this.overStopColor);_rr.drawStructure()
}},"_applystyle",function($0){
with(this){
this.setAttribute("downStartColor",$0.basecolor);this.setAttribute("downStopColor",$0.bgcolor);this.setAttribute("overStartColor",16777215);this.setAttribute("overStopColor",$0.basecolor);this.setAttribute("upStartColor",$0.hilitecolor);this.setAttribute("upStopColor",$0.basecolor);this._rr.setAttribute("backgroundStartColor",this.upStartColor);this._rr.setAttribute("backgroundStopColor",this.upStopColor);this._rr.setAttribute("bordercolor",$0.bordercolor);this._rr.setAttribute("borderwidth",$0.bordersize);_rr.drawStructure()
}},"$m91",function($0){
with(this){
_rr.setAttribute("backgroundStartColor",this.overStartColor);_rr.setAttribute("backgroundStopColor",this.overStopColor);_rr.drawStructure()
}},"$m92",function($0){
with(this){
_rr.setAttribute("backgroundStartColor",this.upStartColor);_rr.setAttribute("backgroundStopColor",this.upStopColor);_rr.drawStructure()
}},"$m93",function($0){
with(this){
_rr.setAttribute("backgroundStartColor",this.downStartColor);_rr.setAttribute("backgroundStopColor",this.downStopColor);_rr.drawStructure()
}},"$m94",function($0){
with(this){
if(!this["_rr"])return;_rr.setAttribute("width",this.width);_rr.drawStructure()
}},"$m95",function($0){
with(this){
if(!this["_rr"])return;_rr.setAttribute("height",this.height);_rr.drawStructure()
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","poodllbigbutton","children",[{attrs:{$classrootdepth:1,backgroundStartColor:new LzOnceExpr("$m68"),backgroundStopColor:new LzOnceExpr("$m69"),borderColor:new LzOnceExpr("$m66"),borderRadius:15,borderWidth:new LzOnceExpr("$m67"),boxShadowColor:LzColorUtils.convertColor("0xb3b3b3"),boxShadowX:0,boxShadowY:2,height:new LzAlwaysExpr("$m64","$m65"),name:"_rr",width:new LzAlwaysExpr("$m62","$m63")},"class":$lzc$class_m96},{attrs:{$classrootdepth:1,clickable:false,fgcolor:new LzAlwaysExpr("$m76","$m77"),fontsize:new LzAlwaysExpr("$m74","$m75"),fontstyle:"bold",name:"_label",resize:true,text:new LzAlwaysExpr("$m72","$m73"),valign:"middle",x:new LzAlwaysExpr("$m70","$m71")},"class":$lzc$class_m97},{attrs:{$classrootdepth:1,clickable:false,height:new LzAlwaysExpr("$m80","$m81"),name:"_iconview",opacity:new LzAlwaysExpr("$m88","$m89"),resource:new LzAlwaysExpr("$m86","$m87"),stretches:"both",width:new LzAlwaysExpr("$m78","$m79"),x:new LzAlwaysExpr("$m82","$m83"),y:new LzAlwaysExpr("$m84","$m85")},"class":$lzc$class_m98}],"attributes",new LzInheritedHash($lzc$class_basecomponent.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({$delegates:["onmouseover","$m90",null,"onmouseup","$m91",null,"onmouseout","$m92",null,"onmousedown","$m93",null,"onwidth","$m94",null,"onheight","$m95",null],borderColor:LzColorUtils.convertColor("0x999999"),borderWidth:2,clickable:true,downStartColor:LzColorUtils.convertColor("0xffffff"),downStopColor:LzColorUtils.convertColor("0xcccccc"),enabled:true,overStartColor:LzColorUtils.convertColor("0x999999"),overStopColor:LzColorUtils.convertColor("0x777777"),styleable:true,upStartColor:LzColorUtils.convertColor("0xcccccc"),upStopColor:LzColorUtils.convertColor("0x999999")},$lzc$class_poodllbigbutton.attributes)
}}})($lzc$class_poodllbigbutton);Class.make("$lzc$class_stopwatch",$lzc$class_loopingtimer,["countevent",void 0,"stopevent",void 0,"inittime",void 0,"progresstime",void 0,"showmilli",void 0,"showsec",void 0,"showmin",void 0,"showhour",void 0,"reactToTimeChange",function($0){
this.setAttribute("progresstime",$0);var $1=this.progresstime%(60*60*1000);var $2=$1;var $3=(this.progresstime-$2)/(60*60*1000);this.setAttribute("showhour",$3);$2=$1%(60*1000);$3=($1-$2)/(60*1000);$1=$2;this.setAttribute("showmin",$3);$2=$1%1000;$3=($1-$2)/1000;$1=$2;this.setAttribute("showsec",$3);this.setAttribute("showmilli",$1);this.countevent.sendEvent()
},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","stopwatch","attributes",new LzInheritedHash($lzc$class_loopingtimer.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({countevent:LzDeclaredEvent,inittime:0,progresstime:0,showhour:0,showmilli:0,showmin:0,showsec:0,stopevent:LzDeclaredEvent},$lzc$class_stopwatch.attributes)
}}})($lzc$class_stopwatch);Class.make("$lzc$class_m131",$lzc$class_stopwatch,["$m101",function($0){
with(this){
classroot.displayview.timeDisplay.format("%02d:%02d:%02d",this.showhour,this.showmin,this.showsec);classroot.displayview.milliDisplay.format("%03d",this.showmilli)
}},"$m102",function($0){
this.resetTimer()
},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash($lzc$class_stopwatch.attributes)]);Class.make("$lzc$class_m133",LzText,["$m107",function($0){
with(this){
var $1=classroot.usefontheight;if($1!==this["fontsize"]||!this.inited){
this.setAttribute("fontsize",$1)
}}},"$m108",function(){
with(this){
return [classroot,"usefontheight"]
}},"$m109",function($0){
with(this){
var $1=classroot.ltimer.timer_state=="STOPPED"?16711680:0;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$m110",function(){
with(this){
return [classroot.ltimer,"timer_state"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_m134",LzText,["$m111",function($0){
with(this){
var $1=parent.timeDisplay.y+parent.timeDisplay.height+4;if($1!==this["y"]||!this.inited){
this.setAttribute("y",$1)
}}},"$m112",function(){
with(this){
return [parent.timeDisplay,"y",parent.timeDisplay,"height"]
}},"$m113",function($0){
with(this){
var $1=parent.timeDisplay.x+parent.timeDisplay.width-this.width;if($1!==this["x"]||!this.inited){
this.setAttribute("x",$1)
}}},"$m114",function(){
with(this){
return [parent.timeDisplay,"x",parent.timeDisplay,"width",this,"width"]
}},"$m115",function($0){
with(this){
var $1=parent.timeDisplay.fgcolor;if($1!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$1)
}}},"$m116",function(){
with(this){
return [parent.timeDisplay,"fgcolor"]
}},"$m117",function($0){
with(this){
var $1=classroot.usefontheight/8*3;if($1!==this["fontsize"]||!this.inited){
this.setAttribute("fontsize",$1)
}}},"$m118",function(){
with(this){
return [classroot,"usefontheight"]
}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_m132",$lzc$class_roundrect,["$m103",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m104",function(){
with(this){
return [parent,"width"]
}},"$m105",function($0){
with(this){
var $1=parent.height-parent.buttonsview.height-30;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m106",function(){
with(this){
return [parent,"height",parent.buttonsview,"height"]
}},"timeDisplay",void 0,"milliDisplay",void 0,"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",LzNode.mergeChildren([{attrs:{$classrootdepth:2,align:"center",fgcolor:new LzAlwaysExpr("$m109","$m110"),fontsize:new LzAlwaysExpr("$m107","$m108"),name:"timeDisplay",valign:"middle"},"class":$lzc$class_m133},{attrs:{$classrootdepth:2,fgcolor:new LzAlwaysExpr("$m115","$m116"),fontsize:new LzAlwaysExpr("$m117","$m118"),name:"milliDisplay",x:new LzAlwaysExpr("$m113","$m114"),y:new LzAlwaysExpr("$m111","$m112")},"class":$lzc$class_m134}],$lzc$class_roundrect["children"]),"attributes",new LzInheritedHash($lzc$class_roundrect.attributes)]);Class.make("$lzc$class_m135",$lzc$class_poodllbigbutton,["$m119",function($0){
with(this){
var $1=classroot.ltimer.timer_state=="READY"?"play_button":(classroot.ltimer.timer_state=="PAUSED"?"play_button":"stop_button");if($1!==this["resourcename"]||!this.inited){
this.setAttribute("resourcename",$1)
}}},"$m120",function(){
with(this){
return [classroot.ltimer,"timer_state"]
}},"$m121",function($0){
with(this){
var $1=parent.parent.displayview.width*0.5-5;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m122",function(){
with(this){
return [parent.parent.displayview,"width"]
}},"$m123",function($0){
with(this){
var $1=classroot.ltimer.timer_state=="READY"?"START":(classroot.ltimer.timer_state=="PAUSED"?"CONT.":"STOP");if($1!==this["text"]||!this.inited){
this.setAttribute("text",$1)
}}},"$m124",function(){
with(this){
return [classroot.ltimer,"timer_state"]
}},"$m125",function($0){
with(this){
switch(classroot.ltimer.timer_state){
case "READY":
classroot.ltimer.startTimer();break;
case "COUNTING":
classroot.ltimer.pauseTimer();break;
case "PAUSED":
classroot.ltimer.unpauseTimer();break;

}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",LzNode.mergeChildren([],$lzc$class_poodllbigbutton["children"]),"attributes",new LzInheritedHash($lzc$class_poodllbigbutton.attributes)]);Class.make("$lzc$class_m136",$lzc$class_poodllbigbutton,["$m126",function($0){
with(this){
var $1=parent.parent.displayview.width*0.5-5;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m127",function(){
with(this){
return [parent.parent.displayview,"width"]
}},"$m128",function($0){
with(this){
var $1=classroot.ltimer.timer_state!="READY";if($1!==this["enabled"]||!this.inited){
this.setAttribute("enabled",$1)
}}},"$m129",function(){
with(this){
return [classroot.ltimer,"timer_state"]
}},"$m130",function($0){
with(this){
if(this.enabled){
classroot.ltimer.resetTimer();classroot.ltimer.setAttribute("progresstime",0)
}}},"$classrootdepth",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",LzNode.mergeChildren([],$lzc$class_poodllbigbutton["children"]),"attributes",new LzInheritedHash($lzc$class_poodllbigbutton.attributes)]);Class.make("$lzc$class_stopwatchview",LzView,["fontheight",void 0,"$m99",function($0){
var $1=this.fontheight==null||this.fontheight==0?this.height*0.3:this.fontheight;if($1!==this["usefontheight"]||!this.inited){
this.setAttribute("usefontheight",$1)
}},"$m100",function(){
return [this,"fontheight",this,"height"]
},"usefontheight",void 0,"ltimer",void 0,"displayview",void 0,"buttonsview",void 0,"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["tagname","stopwatchview","children",[{attrs:{$classrootdepth:1,$delegates:["countevent","$m101",null,"oninit","$m102",null],name:"ltimer"},"class":$lzc$class_m131},{attrs:{$classrootdepth:1,axis:"y",inset:10,spacing:10},"class":$lzc$class_simplelayout},{attrs:{$classrootdepth:1,align:"center",backgroundStartColor:LzColorUtils.convertColor("0xeeeeee"),backgroundStopColor:LzColorUtils.convertColor("0xdddddd"),borderColor:LzColorUtils.convertColor("0xff"),borderWidth:5,height:new LzAlwaysExpr("$m105","$m106"),milliDisplay:void 0,name:"displayview",timeDisplay:void 0,width:new LzAlwaysExpr("$m103","$m104")},"class":$lzc$class_m132},{attrs:{$classrootdepth:1,actionButton:void 0,align:"center",name:"buttonsview",resetButton:void 0},children:[{attrs:{$classrootdepth:2,axis:"x",spacing:10},"class":$lzc$class_simplelayout},{attrs:{$classrootdepth:2,$delegates:["onclick","$m125",null],clickable:true,height:40,name:"actionButton",resourcename:new LzAlwaysExpr("$m119","$m120"),text:new LzAlwaysExpr("$m123","$m124"),width:new LzAlwaysExpr("$m121","$m122")},"class":$lzc$class_m135},{attrs:{$classrootdepth:2,$delegates:["onclick","$m130",null],clickable:true,enabled:new LzAlwaysExpr("$m128","$m129"),height:40,name:"resetButton",resourcename:"reset_button",text:"Reset",width:new LzAlwaysExpr("$m126","$m127")},"class":$lzc$class_m136}],"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);(function($0){
with($0)with($0.prototype){
{
LzNode.mergeAttributes({usefontheight:new LzAlwaysExpr("$m99","$m100")},$lzc$class_stopwatchview.attributes)
}}})($lzc$class_stopwatchview);Class.make("$lzc$class_m143",$lzc$class_stopwatchview,["$m137",function($0){
with(this){
var $1=canvas.fontheight;if($1!==this["fontheight"]||!this.inited){
this.setAttribute("fontheight",$1)
}}},"$m138",function(){
with(this){
return [canvas,"fontheight"]
}},"$m139",function($0){
with(this){
var $1=parent.width;if($1!==this["width"]||!this.inited){
this.setAttribute("width",$1)
}}},"$m140",function(){
with(this){
return [parent,"width"]
}},"$m141",function($0){
with(this){
var $1=parent.height;if($1!==this["height"]||!this.inited){
this.setAttribute("height",$1)
}}},"$m142",function(){
with(this){
return [parent,"height"]
}},"$lzsc$initialize",function($0,$1,$2,$3){
switch(arguments.length){
case 0:
$0=null;
case 1:
$1=null;
case 2:
$2=null;
case 3:
$3=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$0,$1,$2,$3)
}],["children",LzNode.mergeChildren([],$lzc$class_stopwatchview["children"]),"attributes",new LzInheritedHash($lzc$class_stopwatchview.attributes)]);canvas.LzInstantiateView({attrs:{fontheight:new LzAlwaysExpr("$m137","$m138"),height:new LzAlwaysExpr("$m141","$m142"),width:new LzAlwaysExpr("$m139","$m140")},"class":$lzc$class_m143},19);lz["basefocusview"]=$lzc$class_basefocusview;lz["focusoverlay"]=$lzc$class_focusoverlay;lz["_componentmanager"]=$lzc$class__componentmanager;lz["style"]=$lzc$class_style;lz["statictext"]=$lzc$class_statictext;lz["basecomponent"]=$lzc$class_basecomponent;lz["simplelayout"]=$lzc$class_simplelayout;lz["loopingtimer"]=$lzc$class_loopingtimer;lz["roundrect"]=$lzc$class_roundrect;lz["poodllbigbutton"]=$lzc$class_poodllbigbutton;lz["stopwatch"]=$lzc$class_stopwatch;lz["stopwatchview"]=$lzc$class_stopwatchview;canvas.initDone();