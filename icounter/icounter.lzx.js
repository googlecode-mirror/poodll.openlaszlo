var $runtime="dhtml";var $dhtml=true;var $as3=false;var $as2=false;var $swf10=false;var $j2me=false;var $debug=false;var $backtrace=false;var $js1=true;var $swf7=false;var $swf9=false;var $swf8=false;var $svg=false;var $profile=false;var main=null;var callback=null;canvas=new LzCanvas(null,{__LZproxied:"false",appbuilddate:"2010-08-12T02:52:03Z",bgcolor:15658734,embedfonts:true,fontname:"Verdana,Vera,sans-serif",fontsize:11,fontstyle:"plain",height:"100%",lpsbuild:"branches/4.6@14781 (14781)",lpsbuilddate:"2009-09-18T12:18:17Z",lpsrelease:"Production",lpsversion:"4.6.1",runtime:"dhtml",width:"100%"});lz.colors.offwhite=15921906;lz.colors.gray10=1710618;lz.colors.gray20=3355443;lz.colors.gray30=5066061;lz.colors.gray40=6710886;lz.colors.gray50=8355711;lz.colors.gray60=10066329;lz.colors.gray70=11776947;lz.colors.gray80=13421772;lz.colors.gray90=15066597;lz.colors.iceblue1=3298963;lz.colors.iceblue2=5472718;lz.colors.iceblue3=12240085;lz.colors.iceblue4=14017779;lz.colors.iceblue5=15659509;lz.colors.palegreen1=4290113;lz.colors.palegreen2=11785139;lz.colors.palegreen3=12637341;lz.colors.palegreen4=13888170;lz.colors.palegreen5=15725032;lz.colors.gold1=9331721;lz.colors.gold2=13349195;lz.colors.gold3=15126388;lz.colors.gold4=16311446;lz.colors.sand1=13944481;lz.colors.sand2=14276546;lz.colors.sand3=15920859;lz.colors.sand4=15986401;lz.colors.ltpurple1=6575768;lz.colors.ltpurple2=12038353;lz.colors.ltpurple3=13353453;lz.colors.ltpurple4=15329264;lz.colors.grayblue=12501704;lz.colors.graygreen=12635328;lz.colors.graypurple=10460593;lz.colors.ltblue=14540287;lz.colors.ltgreen=14548957;Class.make("$lzc$class_basefocusview",LzView,["active",void 0,"$lzc$set_active",function($1){
with(this){
setActive($1)
}},"target",void 0,"$lzc$set_target",function($1){
with(this){
setTarget($1)
}},"duration",void 0,"_animatorcounter",void 0,"ontarget",void 0,"_nexttarget",void 0,"onactive",void 0,"_xydelegate",void 0,"_widthdel",void 0,"_heightdel",void 0,"_delayfadeoutDL",void 0,"_dofadeout",void 0,"_onstopdel",void 0,"reset",function(){
with(this){
this.setAttribute("x",0);this.setAttribute("y",0);this.setAttribute("width",canvas.width);this.setAttribute("height",canvas.height);setTarget(null)
}},"setActive",function($1){
this.active=$1;if(this.onactive){
this.onactive.sendEvent($1)
}},"doFocus",function($1){
with(this){
this._dofadeout=false;this.bringToFront();if(this.target){
this.setTarget(null)
};this.setAttribute("visibility",this.active?"visible":"hidden");this._nexttarget=$1;if(visible){
this._animatorcounter+=1;var $2=null;var $3;var $4;var $5;var $6;if($1["getFocusRect"]){
$2=$1.getFocusRect()
};if($2){
$3=$2[0];$4=$2[1];$5=$2[2];$6=$2[3]
}else{
$3=$1.getAttributeRelative("x",canvas);$4=$1.getAttributeRelative("y",canvas);$5=$1.getAttributeRelative("width",canvas);$6=$1.getAttributeRelative("height",canvas)
};var $7=this.animate("x",$3,duration);this.animate("y",$4,duration);this.animate("width",$5,duration);this.animate("height",$6,duration);if(this.capabilities["minimize_opacity_changes"]){
this.setAttribute("visibility","visible")
}else{
this.animate("opacity",1,500)
};if(!this._onstopdel){
this._onstopdel=new LzDelegate(this,"stopanim")
};this._onstopdel.register($7,"onstop")
};if(this._animatorcounter<1){
this.setTarget(this._nexttarget);var $2=null;var $3;var $4;var $5;var $6;if($1["getFocusRect"]){
$2=$1.getFocusRect()
};if($2){
$3=$2[0];$4=$2[1];$5=$2[2];$6=$2[3]
}else{
$3=$1.getAttributeRelative("x",canvas);$4=$1.getAttributeRelative("y",canvas);$5=$1.getAttributeRelative("width",canvas);$6=$1.getAttributeRelative("height",canvas)
};this.setAttribute("x",$3);this.setAttribute("y",$4);this.setAttribute("width",$5);this.setAttribute("height",$6)
}}},"stopanim",function($1){
with(this){
this._animatorcounter-=1;if(this._animatorcounter<1){
this._dofadeout=true;if(!this._delayfadeoutDL){
this._delayfadeoutDL=new LzDelegate(this,"fadeout")
};lz.Timer.addTimer(this._delayfadeoutDL,1000);this.setTarget(_nexttarget);this._onstopdel.unregisterAll()
}}},"fadeout",function($1){
with(this){
if(_dofadeout){
if(this.capabilities["minimize_opacity_changes"]){
this.setAttribute("visibility","hidden")
}else{
this.animate("opacity",0,500)
}};this._delayfadeoutDL.unregisterAll()
}},"setTarget",function($1){
with(this){
this.target=$1;if(!this._xydelegate){
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
};if(this.target==null){
return
};var $2=$1;var $3=0;while($2!=canvas){
this._xydelegate.register($2,"onx");this._xydelegate.register($2,"ony");$2=$2.immediateparent;$3++
};this._widthdel.register($1,"onwidth");this._heightdel.register($1,"onheight");followXY(null);followWidth(null);followHeight(null)
}},"followXY",function($1){
with(this){
var $2=null;if(target["getFocusRect"]){
$2=target.getFocusRect()
};if($2){
this.setAttribute("x",$2[0]);this.setAttribute("y",$2[1])
}else{
this.setAttribute("x",this.target.getAttributeRelative("x",canvas));this.setAttribute("y",this.target.getAttributeRelative("y",canvas))
}}},"followWidth",function($1){
with(this){
var $2=null;if(target["getFocusRect"]){
$2=target.getFocusRect()
};if($2){
this.setAttribute("width",$2[2])
}else{
this.setAttribute("width",this.target.width)
}}},"followHeight",function($1){
with(this){
var $2=null;if(target["getFocusRect"]){
$2=target.getFocusRect()
};if($2){
this.setAttribute("height",$2[3])
}else{
this.setAttribute("height",this.target.height)
}}},"$m3",function(){
with(this){
var $1=lz.Focus;return $1
}},"$m4",function($1){
with(this){
this.setActive(lz.Focus.focuswithkey);if($1){
this.doFocus($1)
}else{
this.reset();if(this.active){
this.setActive(false)
}}}}],["tagname","basefocusview","attributes",new LzInheritedHash(LzView.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({$delegates:["onstop","stopanim",null,"onfocus","$m4","$m3"],_animatorcounter:0,_delayfadeoutDL:null,_dofadeout:false,_heightdel:null,_nexttarget:null,_onstopdel:null,_widthdel:null,_xydelegate:null,active:false,duration:400,initstage:"late",onactive:LzDeclaredEvent,ontarget:LzDeclaredEvent,options:{ignorelayout:true},target:null,visible:false},$lzc$class_basefocusview.attributes)
}}})($lzc$class_basefocusview);Class.make("$lzc$class_$2F$40focusoverlay$2F$40topleft",LzView,["$m5",function($1){
with(this){
var $2=-classroot.offset;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m6",function(){
with(this){
return [classroot,"offset"]
}},"$m7",function($1){
with(this){
var $2=-classroot.offset;if($2!==this["y"]||!this.inited){
this.setAttribute("y",$2)
}}},"$m8",function(){
with(this){
return [classroot,"offset"]
}},"$classrootdepth",void 0],["tagname","view","children",[{attrs:{$classrootdepth:2,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_$2F$40focusoverlay$2F$40topright",LzView,["$m9",function($1){
with(this){
var $2=parent.width-width+classroot.offset;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m10",function(){
with(this){
return [parent,"width",this,"width",classroot,"offset"]
}},"$m11",function($1){
with(this){
var $2=-classroot.offset;if($2!==this["y"]||!this.inited){
this.setAttribute("y",$2)
}}},"$m12",function(){
with(this){
return [classroot,"offset"]
}},"$classrootdepth",void 0],["tagname","view","children",[{attrs:{$classrootdepth:2,frame:2,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:2,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_$2F$40focusoverlay$2F$40bottomleft",LzView,["$m13",function($1){
with(this){
var $2=-classroot.offset;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m14",function(){
with(this){
return [classroot,"offset"]
}},"$m15",function($1){
with(this){
var $2=parent.height-height+classroot.offset;if($2!==this["y"]||!this.inited){
this.setAttribute("y",$2)
}}},"$m16",function(){
with(this){
return [parent,"height",this,"height",classroot,"offset"]
}},"$classrootdepth",void 0],["tagname","view","children",[{attrs:{$classrootdepth:2,frame:3,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:3,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_$2F$40focusoverlay$2F$40bottomright",LzView,["$m17",function($1){
with(this){
var $2=parent.width-width+classroot.offset;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m18",function(){
with(this){
return [parent,"width",this,"width",classroot,"offset"]
}},"$m19",function($1){
with(this){
var $2=parent.height-height+classroot.offset;if($2!==this["y"]||!this.inited){
this.setAttribute("y",$2)
}}},"$m20",function(){
with(this){
return [parent,"height",this,"height",classroot,"offset"]
}},"$classrootdepth",void 0],["tagname","view","children",[{attrs:{$classrootdepth:2,frame:4,opacity:0.25,resource:"lzfocusbracket_shdw",x:1,y:1},"class":LzView},{attrs:{$classrootdepth:2,frame:4,resource:"lzfocusbracket_rsrc"},"class":LzView}],"attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_focusoverlay",$lzc$class_basefocusview,["offset",void 0,"topleft",void 0,"topright",void 0,"bottomleft",void 0,"bottomright",void 0,"doFocus",function($1){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["doFocus"]||this.nextMethod(arguments.callee,"doFocus")).call(this,$1);if(visible){
this.bounce()
}}},"bounce",function(){
with(this){
this.animate("offset",12,duration/2);this.animate("offset",5,duration)
}}],["tagname","focusoverlay","children",[{attrs:{$classrootdepth:1,name:"topleft",x:new LzAlwaysExpr("$m5","$m6"),y:new LzAlwaysExpr("$m7","$m8")},"class":$lzc$class_$2F$40focusoverlay$2F$40topleft},{attrs:{$classrootdepth:1,name:"topright",x:new LzAlwaysExpr("$m9","$m10"),y:new LzAlwaysExpr("$m11","$m12")},"class":$lzc$class_$2F$40focusoverlay$2F$40topright},{attrs:{$classrootdepth:1,name:"bottomleft",x:new LzAlwaysExpr("$m13","$m14"),y:new LzAlwaysExpr("$m15","$m16")},"class":$lzc$class_$2F$40focusoverlay$2F$40bottomleft},{attrs:{$classrootdepth:1,name:"bottomright",x:new LzAlwaysExpr("$m17","$m18"),y:new LzAlwaysExpr("$m19","$m20")},"class":$lzc$class_$2F$40focusoverlay$2F$40bottomright}],"attributes",new LzInheritedHash($lzc$class_basefocusview.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({offset:5},$lzc$class_focusoverlay.attributes)
}}})($lzc$class_focusoverlay);Class.make("$lzc$class__componentmanager",LzNode,["focusclass",void 0,"keyhandlers",void 0,"lastsdown",void 0,"lastedown",void 0,"defaults",void 0,"currentdefault",void 0,"defaultstyle",void 0,"ondefaultstyle",void 0,"init",function(){
with(this){
var $1=this.focusclass;if(typeof canvas.focusclass!="undefined"){
$1=canvas.focusclass
};if($1!=null){
canvas.__focus=new (lz[$1])(canvas);canvas.__focus.reset()
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this)
}},"_lastkeydown",void 0,"upkeydel",void 0,"$m22",function(){
with(this){
var $1=lz.Keys;return $1
}},"dispatchKeyDown",function($1){
with(this){
var $2=false;if($1==32){
this.lastsdown=null;var $3=lz.Focus.getFocus();if($3 instanceof lz.basecomponent){
$3.doSpaceDown();this.lastsdown=$3
};$2=true
}else{
if($1==13&&this.currentdefault){
this.lastedown=this.currentdefault;this.currentdefault.doEnterDown();$2=true
}};if($2){
if(!this.upkeydel){
this.upkeydel=new LzDelegate(this,"dispatchKeyTimer")
};this._lastkeydown=$1;lz.Timer.addTimer(this.upkeydel,50)
}}},"dispatchKeyTimer",function($1){
if(this._lastkeydown==32&&this.lastsdown!=null){
this.lastsdown.doSpaceUp();this.lastsdown=null
}else{
if(this._lastkeydown==13&&this.currentdefault&&this.currentdefault==this.lastedown){
this.currentdefault.doEnterUp()
}}},"findClosestDefault",function($1){
with(this){
if(!this.defaults){
return null
};var $2=null;var $3=null;var $4=this.defaults;$1=$1||canvas;var $5=lz.ModeManager.getModalView();for(var $6=0;$6<$4.length;$6++){
var $7=$4[$6];if($5&&!$7.childOf($5)){
continue
};var $8=this.findCommonParent($7,$1);if($8&&(!$2||$8.nodeLevel>$2.nodeLevel)){
$2=$8;$3=$7
}};return $3
}},"findCommonParent",function($1,$2){
while($1.nodeLevel>$2.nodeLevel){
$1=$1.immediateparent;if(!$1.visible){
return null
}};while($2.nodeLevel>$1.nodeLevel){
$2=$2.immediateparent;if(!$2.visible){
return null
}};while($1!=$2){
$1=$1.immediateparent;$2=$2.immediateparent;if(!$1.visible||!$2.visible){
return null
}};return $1
},"makeDefault",function($1){
with(this){
if(!this.defaults){
this.defaults=[]
};this.defaults.push($1);this.checkDefault(lz.Focus.getFocus())
}},"unmakeDefault",function($1){
with(this){
if(!this.defaults){
return
};for(var $2=0;$2<this.defaults.length;$2++){
if(this.defaults[$2]==$1){
this.defaults.splice($2,1);this.checkDefault(lz.Focus.getFocus());return
}}}},"$m24",function(){
with(this){
var $1=lz.Focus;return $1
}},"checkDefault",function($1){
with(this){
if(!($1 instanceof lz.basecomponent)||!$1.doesenter){
if($1 instanceof lz.inputtext&&$1.multiline){
$1=null
}else{
$1=this.findClosestDefault($1)
}};if($1==this.currentdefault){
return
};if(this.currentdefault){
this.currentdefault.setAttribute("hasdefault",false)
};this.currentdefault=$1;if($1){
$1.setAttribute("hasdefault",true)
}}},"$m26",function(){
with(this){
var $1=lz.ModeManager;return $1
}},"$m27",function($1){
with(this){
switch(arguments.length){
case 0:
$1=null;

};if(lz.Focus.getFocus()==null){
this.checkDefault(null)
}}},"setDefaultStyle",function($1){
this.defaultstyle=$1;if(this.ondefaultstyle){
this.ondefaultstyle.sendEvent($1)
}},"getDefaultStyle",function(){
with(this){
if(this.defaultstyle==null){
this.defaultstyle=new (lz.style)(canvas,{isdefault:true})
};return this.defaultstyle
}}],["tagname","_componentmanager","attributes",new LzInheritedHash(LzNode.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({$delegates:["onkeydown","dispatchKeyDown","$m22","onfocus","checkDefault","$m24","onmode","$m27","$m26"],_lastkeydown:0,currentdefault:null,defaults:null,defaultstyle:null,focusclass:"focusoverlay",keyhandlers:null,lastedown:null,lastsdown:null,ondefaultstyle:LzDeclaredEvent,upkeydel:null},$lzc$class__componentmanager.attributes)
}}})($lzc$class__componentmanager);Class.make("$lzc$class_style",LzNode,["isstyle",void 0,"$m28",function($1){
with(this){
this.setAttribute("canvascolor",LzColorUtils.convertColor("null"))
}},"canvascolor",void 0,"$lzc$set_canvascolor",function($1){
with(this){
setCanvasColor($1)
}},"$m29",function($1){
with(this){
this.setAttribute("textcolor",LzColorUtils.convertColor("gray10"))
}},"textcolor",void 0,"$lzc$set_textcolor",function($1){
with(this){
setStyleAttr($1,"textcolor")
}},"$m30",function($1){
with(this){
this.setAttribute("textfieldcolor",LzColorUtils.convertColor("white"))
}},"textfieldcolor",void 0,"$lzc$set_textfieldcolor",function($1){
with(this){
setStyleAttr($1,"textfieldcolor")
}},"$m31",function($1){
with(this){
this.setAttribute("texthilitecolor",LzColorUtils.convertColor("iceblue1"))
}},"texthilitecolor",void 0,"$lzc$set_texthilitecolor",function($1){
with(this){
setStyleAttr($1,"texthilitecolor")
}},"$m32",function($1){
with(this){
this.setAttribute("textselectedcolor",LzColorUtils.convertColor("black"))
}},"textselectedcolor",void 0,"$lzc$set_textselectedcolor",function($1){
with(this){
setStyleAttr($1,"textselectedcolor")
}},"$m33",function($1){
with(this){
this.setAttribute("textdisabledcolor",LzColorUtils.convertColor("gray60"))
}},"textdisabledcolor",void 0,"$lzc$set_textdisabledcolor",function($1){
with(this){
setStyleAttr($1,"textdisabledcolor")
}},"$m34",function($1){
with(this){
this.setAttribute("basecolor",LzColorUtils.convertColor("offwhite"))
}},"basecolor",void 0,"$lzc$set_basecolor",function($1){
with(this){
setStyleAttr($1,"basecolor")
}},"$m35",function($1){
with(this){
this.setAttribute("bgcolor",LzColorUtils.convertColor("white"))
}},"bgcolor",void 0,"$lzc$set_bgcolor",function($1){
with(this){
setStyleAttr($1,"bgcolor")
}},"$m36",function($1){
with(this){
this.setAttribute("hilitecolor",LzColorUtils.convertColor("iceblue4"))
}},"hilitecolor",void 0,"$lzc$set_hilitecolor",function($1){
with(this){
setStyleAttr($1,"hilitecolor")
}},"$m37",function($1){
with(this){
this.setAttribute("selectedcolor",LzColorUtils.convertColor("iceblue3"))
}},"selectedcolor",void 0,"$lzc$set_selectedcolor",function($1){
with(this){
setStyleAttr($1,"selectedcolor")
}},"$m38",function($1){
with(this){
this.setAttribute("disabledcolor",LzColorUtils.convertColor("gray30"))
}},"disabledcolor",void 0,"$lzc$set_disabledcolor",function($1){
with(this){
setStyleAttr($1,"disabledcolor")
}},"$m39",function($1){
with(this){
this.setAttribute("bordercolor",LzColorUtils.convertColor("gray40"))
}},"bordercolor",void 0,"$lzc$set_bordercolor",function($1){
with(this){
setStyleAttr($1,"bordercolor")
}},"$m40",function($1){
this.setAttribute("bordersize",1)
},"bordersize",void 0,"$lzc$set_bordersize",function($1){
with(this){
setStyleAttr($1,"bordersize")
}},"$m41",function($1){
with(this){
this.setAttribute("menuitembgcolor",LzColorUtils.convertColor("textfieldcolor"))
}},"menuitembgcolor",void 0,"isdefault",void 0,"$lzc$set_isdefault",function($1){
with(this){
_setdefault($1)
}},"onisdefault",void 0,"_setdefault",function($1){
with(this){
this.isdefault=$1;if(isdefault){
lz._componentmanager.service.setDefaultStyle(this);if(this["canvascolor"]!=null){
canvas.setAttribute("bgcolor",this.canvascolor)
}};if(this.onisdefault){
this.onisdefault.sendEvent(this)
}}},"onstylechanged",void 0,"setStyleAttr",function($1,$2){
this[$2]=$1;if(this["on"+$2]){
this["on"+$2].sendEvent($2)
};if(this.onstylechanged){
this.onstylechanged.sendEvent(this)
}},"setCanvasColor",function($1){
with(this){
if(this.isdefault&&$1!=null){
canvas.setAttribute("bgcolor",$1)
};this.canvascolor=$1;if(this.onstylechanged){
this.onstylechanged.sendEvent(this)
}}},"extend",function($1){
with(this){
var $2=new (lz.style)();$2.canvascolor=this.canvascolor;$2.textcolor=this.textcolor;$2.textfieldcolor=this.textfieldcolor;$2.texthilitecolor=this.texthilitecolor;$2.textselectedcolor=this.textselectedcolor;$2.textdisabledcolor=this.textdisabledcolor;$2.basecolor=this.basecolor;$2.bgcolor=this.bgcolor;$2.hilitecolor=this.hilitecolor;$2.selectedcolor=this.selectedcolor;$2.disabledcolor=this.disabledcolor;$2.bordercolor=this.bordercolor;$2.bordersize=this.bordersize;$2.menuitembgcolor=this.menuitembgcolor;$2.isdefault=this.isdefault;for(var $3 in $1){
$2[$3]=$1[$3]
};new LzDelegate($2,"_forwardstylechanged",this,"onstylechanged");return $2
}},"_forwardstylechanged",function($1){
if(this.onstylechanged){
this.onstylechanged.sendEvent(this)
}}],["tagname","style","attributes",new LzInheritedHash(LzNode.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({basecolor:new LzOnceExpr("$m34"),bgcolor:new LzOnceExpr("$m35"),bordercolor:new LzOnceExpr("$m39"),bordersize:new LzOnceExpr("$m40"),canvascolor:new LzOnceExpr("$m28"),disabledcolor:new LzOnceExpr("$m38"),hilitecolor:new LzOnceExpr("$m36"),isdefault:false,isstyle:true,menuitembgcolor:new LzOnceExpr("$m41"),onisdefault:LzDeclaredEvent,onstylechanged:LzDeclaredEvent,selectedcolor:new LzOnceExpr("$m37"),textcolor:new LzOnceExpr("$m29"),textdisabledcolor:new LzOnceExpr("$m33"),textfieldcolor:new LzOnceExpr("$m30"),texthilitecolor:new LzOnceExpr("$m31"),textselectedcolor:new LzOnceExpr("$m32")},$lzc$class_style.attributes)
}}})($lzc$class_style);canvas.LzInstantiateView({"class":lz.script,attrs:{script:function(){
lz._componentmanager.service=new (lz._componentmanager)(canvas,null,null,true)
}}},1);Class.make("$lzc$class_statictext",LzText,null,["tagname","statictext","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_basecomponent",LzView,["enabled",void 0,"$lzc$set_focusable",function($1){
with(this){
_setFocusable($1)
}},"_focusable",void 0,"onfocusable",void 0,"text",void 0,"doesenter",void 0,"$lzc$set_doesenter",function($1){
this._setDoesEnter($1)
},"$m42",function($1){
var $2=this.enabled&&(this._parentcomponent?this._parentcomponent._enabled:true);if($2!==this["_enabled"]||!this.inited){
this.setAttribute("_enabled",$2)
}},"$m43",function(){
return [this,"enabled",this,"_parentcomponent",this._parentcomponent,"_enabled"]
},"_enabled",void 0,"$lzc$set__enabled",function($1){
this._setEnabled($1)
},"_parentcomponent",void 0,"_initcomplete",void 0,"isdefault",void 0,"$lzc$set_isdefault",function($1){
this._setIsDefault($1)
},"onisdefault",void 0,"hasdefault",void 0,"_setEnabled",function($1){
with(this){
this._enabled=$1;var $2=this._enabled&&this._focusable;if($2!=this.focusable){
this.focusable=$2;if(this.onfocusable.ready){
this.onfocusable.sendEvent()
}};if(_initcomplete){
_showEnabled()
};if(this.on_enabled.ready){
this.on_enabled.sendEvent()
}}},"_setFocusable",function($1){
this._focusable=$1;if(this.enabled){
this.focusable=this._focusable;if(this.onfocusable.ready){
this.onfocusable.sendEvent()
}}else{
this.focusable=false
}},"construct",function($1,$2){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$1,$2);var $3=this.immediateparent;while($3!=canvas){
if($3 instanceof lz.basecomponent){
this._parentcomponent=$3;break
};$3=$3.immediateparent
}}},"init",function(){
with(this){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["init"]||this.nextMethod(arguments.callee,"init")).call(this);this._initcomplete=true;this._mousedownDel=new LzDelegate(this,"_doMousedown",this,"onmousedown");if(this.styleable){
_usestyle()
};if(!this["_enabled"]){
_showEnabled()
}}},"_doMousedown",function($1){

},"doSpaceDown",function(){
return false
},"doSpaceUp",function(){
return false
},"doEnterDown",function(){
return false
},"doEnterUp",function(){
return false
},"_setIsDefault",function($1){
with(this){
this.isdefault=this["isdefault"]==true;if(this.isdefault==$1){
return
};if($1){
lz._componentmanager.service.makeDefault(this)
}else{
lz._componentmanager.service.unmakeDefault(this)
};this.isdefault=$1;if(this.onisdefault.ready){
this.onisdefault.sendEvent($1)
}}},"_setDoesEnter",function($1){
with(this){
this.doesenter=$1;if(lz.Focus.getFocus()==this){
lz._componentmanager.service.checkDefault(this)
}}},"updateDefault",function(){
with(this){
lz._componentmanager.service.checkDefault(lz.Focus.getFocus())
}},"$m44",function($1){
this.setAttribute("style",null)
},"style",void 0,"$lzc$set_style",function($1){
with(this){
styleable?setStyle($1):(this.style=null)
}},"styleable",void 0,"_style",void 0,"onstyle",void 0,"_styledel",void 0,"_otherstyledel",void 0,"setStyle",function($1){
with(this){
if(!styleable){
return
};if($1!=null&&!$1["isstyle"]){
var $2=this._style;if(!$2){
if(this._parentcomponent){
$2=this._parentcomponent.style
}else{
$2=lz._componentmanager.service.getDefaultStyle()
}};$1=$2.extend($1)
};this._style=$1;if($1==null){
if(!this._otherstyledel){
this._otherstyledel=new LzDelegate(this,"_setstyle")
}else{
this._otherstyledel.unregisterAll()
};if(this._parentcomponent&&this._parentcomponent.styleable){
this._otherstyledel.register(this._parentcomponent,"onstyle");$1=this._parentcomponent.style
}else{
this._otherstyledel.register(lz._componentmanager.service,"ondefaultstyle");$1=lz._componentmanager.service.getDefaultStyle()
}}else{
if(this._otherstyledel){
this._otherstyledel.unregisterAll();this._otherstyledel=null
}};_setstyle($1)
}},"_usestyle",function($1){
switch(arguments.length){
case 0:
$1=null;

};if(this._initcomplete&&this["style"]&&this.style.isinited){
this._applystyle(this.style)
}},"_setstyle",function($1){
with(this){
if(!this._styledel){
this._styledel=new LzDelegate(this,"_usestyle")
}else{
_styledel.unregisterAll()
};if($1){
_styledel.register($1,"onstylechanged")
};this.style=$1;_usestyle();if(this.onstyle.ready){
this.onstyle.sendEvent(this.style)
}}},"_applystyle",function($1){

},"setTint",function($1,$2,$3){
with(this){
switch(arguments.length){
case 2:
$3=0;

};if($1.capabilities.colortransform){
if($2!=""&&$2!=null){
var $4=$2;var $5=$4>>16&255;var $6=$4>>8&255;var $7=$4&255;$5+=51;$6+=51;$7+=51;$5=$5/255*100;$6=$6/255*100;$7=$7/255*100;$1.setColorTransform({ra:$5,ga:$6,ba:$7,rb:$3,gb:$3,bb:$3})
}}}},"on_enabled",void 0,"_showEnabled",function(){

},"acceptValue",function($1,$2){
switch(arguments.length){
case 1:
$2=null;

};this.setAttribute("text",$1)
},"presentValue",function($1){
switch(arguments.length){
case 0:
$1=null;

};return this.text
},"$lzc$presentValue_dependencies",function($1,$2,$3){
switch(arguments.length){
case 2:
$3=null;

};return [this,"text"]
},"applyData",function($1){
this.acceptValue($1)
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
var $1="";var $2="";var $3="";if(this["id"]!=null){
$1="  id="+this.id
};if(this["name"]!=null){
$2=' named "'+this.name+'"'
};if(this["text"]&&this.text!=""){
$3="  text="+this.text
};return this.constructor.tagname+$2+$1+$3
}],["tagname","basecomponent","attributes",new LzInheritedHash(LzView.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({_enabled:new LzAlwaysExpr("$m42","$m43"),_focusable:true,_initcomplete:false,_otherstyledel:null,_parentcomponent:null,_style:null,_styledel:null,doesenter:false,enabled:true,focusable:true,hasdefault:false,on_enabled:LzDeclaredEvent,onfocusable:LzDeclaredEvent,onisdefault:LzDeclaredEvent,onstyle:LzDeclaredEvent,style:new LzOnceExpr("$m44"),styleable:true,text:""},$lzc$class_basecomponent.attributes)
}}})($lzc$class_basecomponent);Mixin.make("DrawviewShared",null,["$lzsc$initialize",function($1,$2,$3,$4){
switch(arguments.length){
case 0:
$1=null;
case 1:
$2=null;
case 2:
$3=null;
case 3:
$4=false;

};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzsc$initialize"]||this.nextMethod(arguments.callee,"$lzsc$initialize")).call(this,$1,$2,$3,$4)
},"lineTo",function($1,$2){

},"moveTo",function($1,$2){

},"quadraticCurveTo",function($1,$2,$3,$4){

},"arc",function($1,$2,$3,$4,$5,$6){
switch(arguments.length){
case 5:
$6=false;

};var $7=$1+$3*Math.cos($4);var $8=$2+$3*Math.sin(2*Math.PI-$4);$4*=180/Math.PI;$5*=180/Math.PI;var $9=$6==true?$5-$4-360:$5-$4;this.moveTo($7,$8);return this._drawArc($1,$2,$3,$9,$4)
},"rect",function($1,$2,$3,$4,$5){
switch(arguments.length){
case 4:
$5=0;

};if($5>0){
var $6,$7,$8,$9,$10;if($5>Math.min($3,$4)/2){
$5=Math.min($3,$4)/2
};var $11=Math.PI/4;this.moveTo($1+$5,$2);this.lineTo($1+$3-$5,$2);$6=-Math.PI/2;$7=$1+$3-$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$3-$5+Math.cos($6+$11)*$5;$10=$2+$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);$6+=$11;$7=$1+$3-$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$3-$5+Math.cos($6+$11)*$5;$10=$2+$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);this.lineTo($1+$3,$2+$4-$5);$6+=$11;$7=$1+$3-$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$4-$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$3-$5+Math.cos($6+$11)*$5;$10=$2+$4-$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);$6+=$11;$7=$1+$3-$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$4-$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$3-$5+Math.cos($6+$11)*$5;$10=$2+$4-$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);this.lineTo($1+$5,$2+$4);$6+=$11;$7=$1+$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$4-$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$5+Math.cos($6+$11)*$5;$10=$2+$4-$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);$6+=$11;$7=$1+$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$4-$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$5+Math.cos($6+$11)*$5;$10=$2+$4-$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);this.lineTo($1,$2+$5);$6+=$11;$7=$1+$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$5+Math.cos($6+$11)*$5;$10=$2+$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10);$6+=$11;$7=$1+$5+Math.cos($6+$11/2)*$5/Math.cos($11/2);$8=$2+$5+Math.sin($6+$11/2)*$5/Math.cos($11/2);$9=$1+$5+Math.cos($6+$11)*$5;$10=$2+$5+Math.sin($6+$11)*$5;this.quadraticCurveTo($7,$8,$9,$10)
}else{
this.moveTo($1,$2);this.lineTo($1+$3,$2);this.lineTo($1+$3,$2+$4);this.lineTo($1,$2+$4);this.lineTo($1,$2)
}},"oval",function($1,$2,$3,$4){
switch(arguments.length){
case 3:
$4=NaN;

};if(isNaN($4)){
$4=$3
};var $5=$3<20&&$4<20?5:8;var $6=Math.PI/($5/2);var $7=$3/Math.cos($6/2);var $8=$4/Math.cos($6/2);this.moveTo($1+$3,$2);var $9=0,$10,$11,$12,$13,$14;for(var $15=0;$15<$5;$15++){
$9+=$6;$10=$9-$6/2;$13=$1+Math.cos($10)*$7;$14=$2+Math.sin($10)*$8;$11=$1+Math.cos($9)*$3;$12=$2+Math.sin($9)*$4;this.quadraticCurveTo($13,$14,$11,$12)
};return {x:$11,y:$12}},"_drawArc",function($1,$2,$3,$4,$5,$6){
switch(arguments.length){
case 5:
$6=NaN;

};if(isNaN($6)){
$6=$3
};if(Math.abs($4)>360){
$4=360
};var $7=Math.ceil(Math.abs($4)/45);var $8,$9;if($7>0){
var $10=$4/$7;var $11=-($10/180)*Math.PI;var $12=-($5/180)*Math.PI;var $13,$14,$15;for(var $16=0;$16<$7;$16++){
$12+=$11;$13=$12-$11/2;$8=$1+Math.cos($12)*$3;$9=$2+Math.sin($12)*$6;$14=$1+Math.cos($13)*($3/Math.cos($11/2));$15=$2+Math.sin($13)*($6/Math.cos($11/2));this.quadraticCurveTo($14,$15,$8,$9)
}};return {x:$8,y:$9}},"distance",function($1,$2){
var $3=$2.x-$1.x;var $4=$2.y-$1.y;return Math.sqrt($3*$3+$4*$4)
},"intersection",function($1,$2,$3,$4){
var $5=($4.x-$3.x)*($1.y-$3.y)-($4.y-$3.y)*($1.x-$3.x);var $6=($4.y-$3.y)*($2.x-$1.x)-($4.x-$3.x)*($2.y-$1.y);if($6==0){
if($5==0){
return -1
}else{
return null
}};$5/=$6;return {x:$1.x+($2.x-$1.x)*$5,y:$1.y+($2.y-$1.y)*$5}},"midpoint",function($1,$2){
return {x:($1.x+$2.x)/2,y:($1.y+$2.y)/2}}],null);Class.make("$lzc$class_drawview",[DrawviewShared,LzView],["globalAlpha",1,"lineWidth",1,"lineCap","round","lineJoin","round","miterLimit",3,"strokeStyle","#000000","fillStyle","#000000","context",null,"__LZcanvas",null,"__globalAlpha",null,"__lineWidth",null,"__lineCap",null,"__lineJoin",null,"__miterLimit",null,"__strokeStyle",null,"__fillStyle",null,"oncontext",LzDeclaredEvent,"getContext",function($1){
return this.context
},"construct",function($1,$2){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["construct"]||this.nextMethod(arguments.callee,"construct")).call(this,$1,$2);new LzDelegate(this,"_onconstruct",this,"onconstruct")
},"_onconstruct",function($1){
var $2=Math.floor($1?$1["width"]:this.width);var $3=Math.floor($1?$1["height"]:this.height);if(this["__id"]==null&&$2>0&&$3>0){
this._buildcanvas($2,$3)
}},"_buildcanvas",function($1,$2){
this.beginPath();if(this.__LZcanvas){
this.__lineWidth=null;this.__lineCap=null;this.__lineJoin=null;this.__miterLimit=null;this.__fillStyle=null;this.__strokeStyle=null;this.__globalAlpha=null;if(lz.embed.browser.isIE){
LzSprite.prototype.__discardElement(this.__LZcanvas)
}else{
this.__LZcanvas.setAttribute("width",$1);this.__LZcanvas.setAttribute("height",$2);this.__canvaswidth=$1;this.__canvasheight=$2;this.setAttribute("context",this.__LZcanvas.getContext("2d"));return
}};this.__id="canvas-"+lz.drawview.uid++;this.__LZcanvas=document.createElement("canvas");this.__LZcanvas.owner=this.sprite;this.__LZcanvas.setAttribute("id",this.__id);this.__LZcanvas.setAttribute("width",$1);this.__LZcanvas.setAttribute("height",$2);this.__LZcanvas.setAttribute("style","position: absolute");this.__canvaswidth=$1;this.__canvasheight=$2;var $3=this.getMCRef();$3.appendChild(this.__LZcanvas);if(lz.embed.browser.isIE){
this._hidden=false;this.maxTries=10;this.__initie();LzSprite.prototype.__sprites[this.sprite.uid+"canvas"]=this
}else{
this.setAttribute("context",this.__LZcanvas.getContext("2d"))
}},"destroy",function(){
if(lz.embed.browser.isIE){
if(this.__LZcanvas){
this.__LZcanvas.owner=null;this.__LZcanvas.getContext=null;var $1=LzSprite.prototype;$1.__discardElement(this.__LZcanvas);delete $1.__sprites[this.sprite.uid+"canvas"]
}};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["destroy"]||this.nextMethod(arguments.callee,"destroy")).call(this)
},"$lzc$set_width",function($1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_width"]||this.nextMethod(arguments.callee,"$lzc$set_width")).call(this,$1);$1=Math.floor($1);var $2=Math.floor(this.height);if($2>0&&$1>0){
this._buildcanvas($1,$2);if(this.__LZcanvas&&this["_hidden"]){
this._hidden=false;this.__LZcanvas.style.visibility=null
}}else{
if(this.__LZcanvas&&this["_hidden"]!=true){
this._hidden=true;this.__LZcanvas.style.visibility="hidden"
}}},"$lzc$set_height",function($1){
(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["$lzc$set_height"]||this.nextMethod(arguments.callee,"$lzc$set_height")).call(this,$1);var $2=Math.floor(this.width);$1=Math.floor($1);if($2>0&&$1>0){
this._buildcanvas($2,$1);if(this.__LZcanvas&&this["_hidden"]){
this._hidden=false;this.__LZcanvas.style.visibility=null
}}else{
if(this.__LZcanvas&&this["_hidden"]!=true){
this._hidden=true;this.__LZcanvas.style.visibility="hidden"
}}},"__drawImageCnt",0,"getImage",function($1){
var $2=lz.drawview.images[$1];if(!$2){
var $3=$1;if($1.indexOf("http:")!=0&&$1.indexOf("https:")!=0){
$3=this.sprite.getResourceUrls($1)[0]
};$2=new Image();$2.src=$3;lz.drawview.images[$1]=$2;if($3!=$1){
lz.drawview.images[$3]=$2
}};return $2
},"drawImage",function(image,x,y,w,h,r){
if(typeof image=="string"){
image=this.getImage(image)
};if(!(image&&image.nodeType==1&&image.nodeName=="IMG")){

}else{
if(!image.complete){
var fname="__drawImage"+this.__drawImageCnt++;this[fname]=function(){
lz.embed.removeEventHandler(image,"load",this,fname);delete this[fname];this.drawImage(image,x,y,w,h,r)
};lz.embed.attachEventHandler(image,"load",this,fname)
}else{
var $1=r?r:0;this.context.save();this.clear();var $2=x?x:0;var $3=y?y:0;this.context.translate($2,$3);this.context.rotate($1);this.context.drawImage(image,0,0,w,h);this.context.restore()
}}},"__initie",function(){
try{
if(this.__LZcanvas&&this.__LZcanvas.parentNode!=null){
this.__LZcanvas=G_vmlCanvasManager.initElement(this.__LZcanvas);if(this.tId){
clearTimeout(this.tId)
};this.setAttribute("context",this.__LZcanvas.getContext("2d"))
}else{
var $1=lz.BrowserUtils.getcallbackstr(this,"__initie");this.tId=setTimeout($1,50)
}}
catch(e){
if(this.maxTries-->0){
var $1=lz.BrowserUtils.getcallbackstr(this,"__initie");this.tId=setTimeout($1,50)
}}},"__checkContext",function(){

},"beginPath",function(){
this.__path=[[1,0,0]];this.__pathisopen=true
},"closePath",function(){
if(this.__pathisopen){
this.__path.push([0])
};this.__pathisopen=false
},"moveTo",function($1,$2){
if(this.__pathisopen){
this.__path.push([1,$1,$2])
}},"lineTo",function($1,$2){
if(this.__pathisopen){
this.__path.push([2,$1,$2])
}},"quadraticCurveTo",function($1,$2,$3,$4){
if(this.__pathisopen){
this.__path.push([3,$1,$2,$3,$4])
}},"bezierCurveTo",function($1,$2,$3,$4,$5,$6){
if(this.__pathisopen){
this.__path.push([4,$1,$2,$3,$4,$5,$6])
}},"fill",function(){
this.__playPath();this.context.fill()
},"__updateFillStyle",function(){
if(this.__fillStyle!=this.fillStyle){
if(this.fillStyle instanceof LzCanvasGradient){
this.fillStyle.__applyFillTo(this.context)
}else{
var $1=lz.drawview.__colorcache;var $2=$1[this.fillStyle];if($2==null){
$2=LzColorUtils.torgb(this.fillStyle);$1[this.fillStyle]=$2
};this.context.fillStyle=$2
};this.__fillStyle=this.fillStyle
}},"__updateStyles",function(){
var $1={lineWidth:"__lineWidth",lineCap:"__lineCap",lineJoin:"__lineJoin",miterLimit:"__miterLimit",globalAlpha:"__globalAlpha"};for(var $2 in $1){
var $3=$1[$2];var $4=this[$2];if(this[$3]!=$4){
this.context[$2]=$4;this[$3]=$4
}};if(this.__strokeStyle!=this.strokeStyle){
if(this.strokeStyle instanceof LzCanvasGradient){
this.strokeStyle.__applyStrokeTo(this.context)
}else{
var $5=lz.drawview.__colorcache;var $6=$5[this.strokeStyle];if($6==null){
$6=LzColorUtils.torgb(this.strokeStyle);$5[this.strokeStyle]=$6
};this.context.strokeStyle=$6
};this.__strokeStyle=this.strokeStyle
}},"__playPath",function(){
if(this.__path.length==0){
return
};this.__updateStyles();this.__updateFillStyle();this.context.beginPath();for(var $1=0;$1<this.__path.length;$1+=1){
var $2=this.__path[$1];var $3=$2[0];if($3==0){
this.context.closePath()
}else{
if($3==3){
this.context.quadraticCurveTo($2[1],$2[2],$2[3],$2[4])
}else{
if($3==4){
this.context.bezierCurveTo($2[1],$2[2],$2[3],$2[4],$2[5],$2[6])
}else{
if($3==1){
this.context.moveTo($2[1],$2[2])
}else{
if($3==2){
this.context.lineTo($2[1],$2[2])
}}}}}}},"clipPath",function(){

},"clipButton",function(){

},"stroke",function(){
this.__playPath();this.context.stroke()
},"clear",function(){
this.context.clearRect(0,0,this.__canvaswidth,this.__canvasheight)
},"clearMask",function(){

},"createLinearGradient",function($1,$2,$3,$4){
return new LzCanvasGradient(this,[$1,$2,$3,$4],false)
},"createRadialGradient",function($1,$2,$3,$4,$5,$6){
return new LzCanvasGradient(this,[$1,$2,$3,$4,$5,$6],true)
},"rotate",function($1){
this.context.rotate($1)
},"translate",function($1,$2){
this.context.translate($1,$2)
},"save",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.save()
},"restore",function(){
this.__fillStyle=this.__strokeStyle=null;this.context.restore()
},"fillRect",function($1,$2,$3,$4){
this.__updateFillStyle();this.context.fillRect($1,$2,$3,$4)
}],["tagname","drawview","attributes",new LzInheritedHash(LzView.attributes),"uid",0,"__colorcache",{},"images",{}]);lz[$lzc$class_drawview.tagname]=$lzc$class_drawview;Class.make("LzCanvasGradient",null,["__context",null,"__g",null,"$lzsc$initialize",function($1,$2,$3){
this.__context=$1;if($3){
this.__g=$1.context.createRadialGradient.apply($1.context,$2)
}else{
this.__g=$1.context.createLinearGradient.apply($1.context,$2)
}},"addColorStop",function($1,$2){
var $3=lz.drawview.__colorcache;var $4=$3[$2];if($4==null){
$4=LzColorUtils.torgb($2);$3[$2]=$4
};var $5=this.__context.globalAlpha;if($5!=1){
$4=this.torgba($4,$5)
};this.__g.addColorStop($1,$4)
},"torgba",function($1,$2){
if($1.indexOf("rgba")==-1){
var $3=$1.substring(4,$1.length-1).split(",");$3.push($2);return "rgba("+$3.join(",")+")"
}else{
return $1
}},"__applyFillTo",function($1){
$1.fillStyle=this.__g
},"__applyStrokeTo",function($1){
$1.strokeStyle=this.__g
}],null);Class.make("$lzc$class_simplelayout",LzLayout,["axis",void 0,"$lzc$set_axis",function($1){
this.setAxis($1)
},"inset",void 0,"$lzc$set_inset",function($1){
this.inset=$1;if(this.subviews&&this.subviews.length){
this.update()
};if(this["oninset"]){
this.oninset.sendEvent(this.inset)
}},"spacing",void 0,"$lzc$set_spacing",function($1){
this.spacing=$1;if(this.subviews&&this.subviews.length){
this.update()
};if(this["onspacing"]){
this.onspacing.sendEvent(this.spacing)
}},"setAxis",function($1){
if(this["axis"]==null||this.axis!=$1){
this.axis=$1;this.sizeAxis=$1=="x"?"width":"height";if(this.subviews.length){
this.update()
};if(this["onaxis"]){
this.onaxis.sendEvent(this.axis)
}}},"addSubview",function($1){
with(this){
this.updateDelegate.register($1,"on"+this.sizeAxis);this.updateDelegate.register($1,"onvisible");if(!this.locked){
var $2=null;var $3=this.subviews;for(var $4=$3.length-1;$4>=0;--$4){
if($3[$4].visible){
$2=$3[$4];break
}};if($2){
var $5=$2[this.axis]+$2[this.sizeAxis]+this.spacing
}else{
var $5=this.inset
};$1.setAttribute(this.axis,$5)
};(arguments.callee["$superclass"]&&arguments.callee.$superclass.prototype["addSubview"]||this.nextMethod(arguments.callee,"addSubview")).call(this,$1)
}},"update",function($1){
switch(arguments.length){
case 0:
$1=null;

};if(this.locked){
return
};var $2=this.subviews.length;var $3=this.inset;for(var $4=0;$4<$2;$4++){
var $5=this.subviews[$4];if(!$5.visible){
continue
};if($5[this.axis]!=$3){
$5.setAttribute(this.axis,$3)
};$3+=this.spacing+$5[this.sizeAxis]
}}],["tagname","simplelayout","attributes",new LzInheritedHash(LzLayout.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({axis:"y",inset:0,spacing:0},$lzc$class_simplelayout.attributes)
}}})($lzc$class_simplelayout);Class.make("$lzc$class_$2F$40roundrect$2F$40content",LzView,["$m64",function($1){
with(this){
this.setAttribute("width",parent.width)
}},"$m65",function($1){
with(this){
this.setAttribute("height",parent.height)
}},"reset",function(){
with(this){
this.setAttribute("x",parent.insetleft);this.setAttribute("y",parent.insettop);this.setAttribute("width",parent.width-parent.insetleft-parent.insetright-1);this.setAttribute("height",parent.height-parent.insettop-parent.insetbottom-1)
}},"$classrootdepth",void 0],["tagname","view","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_roundrect",$lzc$class_drawview,["inset",void 0,"$lzc$set_inset",function($1){
with(this){
setInset($1)
}},"oninset",void 0,"$m45",function($1){
var $2=null;if($2!==this["insetleft"]||!this.inited){
this.setAttribute("insetleft",$2)
}},"$m46",function(){
return []
},"insetleft",void 0,"$lzc$set_insetleft",function($1){
with(this){
setInsetLeft($1)
}},"oninsetleft",void 0,"$m47",function($1){
var $2=null;if($2!==this["insetright"]||!this.inited){
this.setAttribute("insetright",$2)
}},"$m48",function(){
return []
},"insetright",void 0,"$lzc$set_insetright",function($1){
with(this){
setInsetRight($1)
}},"oninsetright",void 0,"$m49",function($1){
var $2=null;if($2!==this["insettop"]||!this.inited){
this.setAttribute("insettop",$2)
}},"$m50",function(){
return []
},"insettop",void 0,"$lzc$set_insettop",function($1){
with(this){
setInsetTop($1)
}},"oninsettop",void 0,"$m51",function($1){
var $2=null;if($2!==this["insetbottom"]||!this.inited){
this.setAttribute("insetbottom",$2)
}},"$m52",function(){
return []
},"insetbottom",void 0,"$lzc$set_insetbottom",function($1){
with(this){
setInsetBottom($1)
}},"oninsetbottom",void 0,"setInset",function($1){
with(this){
this.insetleft=$1;this.insetright=$1;this.insettop=$1;this.insetbottom=$1;if(this.context){
this.drawStructure()
};if(oninset){
this.oninset.sendEvent()
}}},"setInsetLeft",function($1){
with(this){
if($1){
this.insetleft=$1
};if(this.context){
this.drawStructure()
};if(oninsetleft){
this.oninsetleft.sendEvent()
}}},"setInsetRight",function($1){
with(this){
if($1){
this.insetright=$1
};if(this.context){
this.drawStructure()
};if(oninsetright){
this.oninsetright.sendEvent()
}}},"setInsetTop",function($1){
with(this){
if($1){
this.insettop=$1
};if(this.context){
this.drawStructure()
};if(oninsettop){
this.oninsettop.sendEvent()
}}},"setInsetBottom",function($1){
with(this){
if($1){
this.insetbottom=$1
};if(this.context){
this.drawStructure()
};if(oninsetbottom){
this.oninsetbottom.sendEvent()
}}},"$m54",function($1){
if(this.context){
this.drawStructure()
}},"$m56",function($1){
if(this.context){
this.drawStructure()
}},"borderWidth",void 0,"borderRadius",void 0,"borderColor",void 0,"borderOpacity",void 0,"$m57",function($1){
this.setAttribute("backgroundStartColor",null)
},"backgroundStartColor",void 0,"$m58",function($1){
this.setAttribute("backgroundStopColor",null)
},"backgroundStopColor",void 0,"backgroundStartOpacity",void 0,"backgroundStopOpacity",void 0,"backgroundGradientOrientation",void 0,"boxShadowX",void 0,"boxShadowY",void 0,"$m59",function($1){
this.setAttribute("boxShadowColor",null)
},"boxShadowColor",void 0,"boxShadowOpacity",void 0,"$m61",function($1){
if(this.context){
this.drawStructure()
}},"$m63",function($1){
this.drawStructure();this._cache=null
},"drawStructure",function(){
with(this){
if(!this.context){
return
};if(!this["_cache"]){
this._cache={borderWidth:this.borderWidth,borderRadius:this.borderRadius,borderColor:this.borderColor,borderOpacity:this.borderOpacity,backgroundStartColor:this.backgroundStartColor,backgroundStopColor:this.backgroundStopColor,backgroundGradientOrientation:this.backgroundGradientOrientation,backgroundStartOpacity:this.backgroundStartOpacity,backgroundStopOpacity:this.backgroundStopOpacity,boxShadowColor:this.boxShadowColor,boxShadowOpacity:this.boxShadowOpacity,boxShadowX:this.boxShadowX,boxShadowY:this.boxShadowY,insetleft:this.insetleft,insettop:this.insettop,insetright:this.insetright,insetbottom:this.insetbottom,inset:this["inset"],height:this.height,width:this.width}}else{
var $1=false;var $2=this._cache;for(var $3 in $2){
if($2[$3]!=this[$3]){
$2[$3]=this[$3];$1=true;break
}};if($1==false){
return
}};var $4=this.borderWidth;var $5=this.borderRadius;var $6=$4/2;var $7=$4/2;var $8=this.backgroundStartColor;var $9=this.backgroundStopColor;this.clear();if(typeof this.content!="undefined"){
this.content.reset()
};if($4!=0&&this.boxShadowColor!=null&&this.boxShadowOpacity!=0){
var $10=this.boxShadowX;var $11=this.boxShadowY;this.beginPath();this.rect($10+$6,$11+$7,this.width-$4,this.height-$4,$5);this.fillStyle=this.boxShadowColor;this.globalAlpha=this.boxShadowOpacity;this.lineWidth=this.borderWidth;this.fill();if($8==null&&$9==null){
$8=$9=16777215
}};this.beginPath();this.rect($6,$7,this.width-$4,this.height-$4,$5);if($8!=null||$9!=null){
var $12=this.backgroundGradientOrientation=="vertical"?this.createLinearGradient(0,$4/2,0,this.height-$4):this.createLinearGradient($4/2,0,this.width-$4,0);var $13=this.backgroundStartOpacity;var $14=this.backgroundStopOpacity;if($8==null){
$8=$9;$13=0
};if($9==null){
$9=$8;$14=0
};this.globalAlpha=$13;$12.addColorStop(0,$8);this.globalAlpha=$14;$12.addColorStop(1,$9);this.fillStyle=$12;this.fill()
};this.strokeStyle=this.borderColor;this.lineWidth=this.borderWidth;this.globalAlpha=this.borderOpacity;this.stroke()
}},"content",void 0],["tagname","roundrect","children",LzNode.mergeChildren([{attrs:{$classrootdepth:1,height:new LzOnceExpr("$m65"),name:"content",width:new LzOnceExpr("$m64"),x:0,y:0},"class":$lzc$class_$2F$40roundrect$2F$40content},{attrs:"content","class":$lzc$class_userClassPlacement}],$lzc$class_drawview["children"]),"attributes",new LzInheritedHash($lzc$class_drawview.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({$delegates:["onwidth","$m54",null,"onheight","$m56",null,"oninit","$m61",null,"oncontext","$m63",null],backgroundGradientOrientation:"vertical",backgroundStartColor:new LzOnceExpr("$m57"),backgroundStartOpacity:1,backgroundStopColor:new LzOnceExpr("$m58"),backgroundStopOpacity:1,borderColor:LzColorUtils.convertColor("0x0"),borderOpacity:1,borderRadius:5,borderWidth:1,boxShadowColor:new LzOnceExpr("$m59"),boxShadowOpacity:0.5,boxShadowX:5,boxShadowY:5,height:100,inset:5,insetbottom:new LzAlwaysExpr("$m51","$m52"),insetleft:new LzAlwaysExpr("$m45","$m46"),insetright:new LzAlwaysExpr("$m47","$m48"),insettop:new LzAlwaysExpr("$m49","$m50"),oninset:null,oninsetbottom:null,oninsetleft:null,oninsetright:null,oninsettop:null,width:100},$lzc$class_roundrect.attributes)
}}})($lzc$class_roundrect);Class.make("$lzc$class_$2F$40poodllbigbutton$2F$40_rr",$lzc$class_roundrect,["$m66",function($1){
with(this){
var $2=immediateparent.width;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m67",function(){
with(this){
return [immediateparent,"width"]
}},"$m68",function($1){
with(this){
var $2=immediateparent.height;if($2!==this["height"]||!this.inited){
this.setAttribute("height",$2)
}}},"$m69",function(){
with(this){
return [immediateparent,"height"]
}},"$m70",function($1){
with(this){
this.setAttribute("borderColor",parent.borderColor)
}},"$m71",function($1){
with(this){
this.setAttribute("borderWidth",parent.borderWidth)
}},"$m72",function($1){
with(this){
this.setAttribute("backgroundStartColor",parent.upStartColor)
}},"$m73",function($1){
with(this){
this.setAttribute("backgroundStopColor",parent.upStopColor)
}},"$classrootdepth",void 0],["tagname","roundrect","children",LzNode.mergeChildren([],$lzc$class_roundrect["children"]),"attributes",new LzInheritedHash($lzc$class_roundrect.attributes)]);Class.make("$lzc$class_$2F$40poodllbigbutton$2F$40_label",LzText,["$m74",function($1){
with(this){
var $2=parent.width*0.5;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m75",function(){
with(this){
return [parent,"width"]
}},"$m76",function($1){
with(this){
var $2=classroot.text;if($2!==this["text"]||!this.inited){
this.setAttribute("text",$2)
}}},"$m77",function(){
with(this){
return [classroot,"text"]
}},"$m78",function($1){
with(this){
var $2=parent.height*0.2;if($2!==this["fontsize"]||!this.inited){
this.setAttribute("fontsize",$2)
}}},"$m79",function(){
with(this){
return [parent,"height"]
}},"$m80",function($1){
with(this){
var $2=classroot.enabled?classroot.fgcolor:"#CCCCCC";if($2!==this["fgcolor"]||!this.inited){
this.setAttribute("fgcolor",$2)
}}},"$m81",function(){
with(this){
return [classroot,"enabled",classroot,"fgcolor"]
}},"$classrootdepth",void 0],["tagname","text","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_$2F$40poodllbigbutton$2F$40_iconview",LzView,["$m82",function($1){
var $2=this.height;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}},"$m83",function(){
return [this,"height"]
},"$m84",function($1){
with(this){
var $2=parent.height*0.8;if($2!==this["height"]||!this.inited){
this.setAttribute("height",$2)
}}},"$m85",function(){
with(this){
return [parent,"height"]
}},"$m86",function($1){
with(this){
var $2=parent.height*0.1;if($2!==this["x"]||!this.inited){
this.setAttribute("x",$2)
}}},"$m87",function(){
with(this){
return [parent,"height"]
}},"$m88",function($1){
with(this){
var $2=parent.height*0.1;if($2!==this["y"]||!this.inited){
this.setAttribute("y",$2)
}}},"$m89",function(){
with(this){
return [parent,"height"]
}},"$m90",function($1){
with(this){
var $2=classroot.resourcename;if($2!==this["resource"]||!this.inited){
this.setAttribute("resource",$2)
}}},"$m91",function(){
with(this){
return [classroot,"resourcename"]
}},"$m92",function($1){
with(this){
var $2=classroot.enabled?1:0.2;if($2!==this["opacity"]||!this.inited){
this.setAttribute("opacity",$2)
}}},"$m93",function(){
with(this){
return [classroot,"enabled"]
}},"$classrootdepth",void 0],["tagname","view","attributes",new LzInheritedHash(LzView.attributes)]);Class.make("$lzc$class_poodllbigbutton",$lzc$class_basecomponent,["downStartColor",void 0,"downStopColor",void 0,"upStartColor",void 0,"upStopColor",void 0,"overStartColor",void 0,"overStopColor",void 0,"borderColor",void 0,"borderWidth",void 0,"resourcename",void 0,"_rr",void 0,"_label",void 0,"_iconview",void 0,"$m95",function($1){
with(this){
_rr.setAttribute("backgroundStartColor",this.overStartColor);_rr.setAttribute("backgroundStopColor",this.overStopColor);_rr.drawStructure()
}},"_applystyle",function($1){
with(this){
this.setAttribute("downStartColor",$1.basecolor);this.setAttribute("downStopColor",$1.bgcolor);this.setAttribute("overStartColor",16777215);this.setAttribute("overStopColor",$1.basecolor);this.setAttribute("upStartColor",$1.hilitecolor);this.setAttribute("upStopColor",$1.basecolor);this._rr.setAttribute("backgroundStartColor",this.upStartColor);this._rr.setAttribute("backgroundStopColor",this.upStopColor);this._rr.setAttribute("bordercolor",$1.bordercolor);this._rr.setAttribute("borderwidth",$1.bordersize);_rr.drawStructure()
}},"$m97",function($1){
with(this){
_rr.setAttribute("backgroundStartColor",this.overStartColor);_rr.setAttribute("backgroundStopColor",this.overStopColor);_rr.drawStructure()
}},"$m99",function($1){
with(this){
_rr.setAttribute("backgroundStartColor",this.upStartColor);_rr.setAttribute("backgroundStopColor",this.upStopColor);_rr.drawStructure()
}},"$m101",function($1){
with(this){
_rr.setAttribute("backgroundStartColor",this.downStartColor);_rr.setAttribute("backgroundStopColor",this.downStopColor);_rr.drawStructure()
}},"$m103",function($1){
with(this){
if(!this["_rr"]){
return
};_rr.setAttribute("width",this.width);_rr.drawStructure()
}},"$m105",function($1){
with(this){
if(!this["_rr"]){
return
};_rr.setAttribute("height",this.height);_rr.drawStructure()
}}],["tagname","poodllbigbutton","children",[{attrs:{$classrootdepth:1,backgroundStartColor:new LzOnceExpr("$m72"),backgroundStopColor:new LzOnceExpr("$m73"),borderColor:new LzOnceExpr("$m70"),borderRadius:15,borderWidth:new LzOnceExpr("$m71"),boxShadowColor:LzColorUtils.convertColor("0xb3b3b3"),boxShadowX:0,boxShadowY:2,height:new LzAlwaysExpr("$m68","$m69"),name:"_rr",width:new LzAlwaysExpr("$m66","$m67")},"class":$lzc$class_$2F$40poodllbigbutton$2F$40_rr},{attrs:{$classrootdepth:1,clickable:false,fgcolor:new LzAlwaysExpr("$m80","$m81"),fontsize:new LzAlwaysExpr("$m78","$m79"),fontstyle:"bold",name:"_label",resize:true,text:new LzAlwaysExpr("$m76","$m77"),valign:"middle",x:new LzAlwaysExpr("$m74","$m75")},"class":$lzc$class_$2F$40poodllbigbutton$2F$40_label},{attrs:{$classrootdepth:1,clickable:false,height:new LzAlwaysExpr("$m84","$m85"),name:"_iconview",opacity:new LzAlwaysExpr("$m92","$m93"),resource:new LzAlwaysExpr("$m90","$m91"),stretches:"both",width:new LzAlwaysExpr("$m82","$m83"),x:new LzAlwaysExpr("$m86","$m87"),y:new LzAlwaysExpr("$m88","$m89")},"class":$lzc$class_$2F$40poodllbigbutton$2F$40_iconview}],"attributes",new LzInheritedHash($lzc$class_basecomponent.attributes)]);(function($1){
with($1){
with($1.prototype){
LzNode.mergeAttributes({$delegates:["onmouseover","$m95",null,"onmouseup","$m97",null,"onmouseout","$m99",null,"onmousedown","$m101",null,"onwidth","$m103",null,"onheight","$m105",null],borderColor:LzColorUtils.convertColor("0x999999"),borderWidth:2,clickable:true,downStartColor:LzColorUtils.convertColor("0xffffff"),downStopColor:LzColorUtils.convertColor("0xcccccc"),enabled:true,overStartColor:LzColorUtils.convertColor("0x999999"),overStopColor:LzColorUtils.convertColor("0x777777"),styleable:true,upStartColor:LzColorUtils.convertColor("0xcccccc"),upStopColor:LzColorUtils.convertColor("0x999999")},$lzc$class_poodllbigbutton.attributes)
}}})($lzc$class_poodllbigbutton);Class.make("$lzc$class_$23main$2Fpoodllbigbutton$5B1$5D",$lzc$class_poodllbigbutton,["$m110",function($1){
with(this){
var $2=immediateparent.width;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m111",function(){
with(this){
return [immediateparent,"width"]
}},"$m113",function($1){
with(this){
main.getPicture(main.picsourceLIBRARY)
}}],["tagname","poodllbigbutton","children",LzNode.mergeChildren([],$lzc$class_poodllbigbutton["children"]),"attributes",new LzInheritedHash($lzc$class_poodllbigbutton.attributes)]);Class.make("$lzc$class_$23main$2Fpoodllbigbutton$5B2$5D",$lzc$class_poodllbigbutton,["$m114",function($1){
with(this){
var $2=immediateparent.width;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m115",function(){
with(this){
return [immediateparent,"width"]
}},"$m117",function($1){
switch(this.text){
case "changeme":
this.setAttribute("text","changeyou");break;
case "changeyou":
this.setAttribute("text","changeme");break;

}}],["tagname","poodllbigbutton","children",LzNode.mergeChildren([],$lzc$class_poodllbigbutton["children"]),"attributes",new LzInheritedHash($lzc$class_poodllbigbutton.attributes)]);Class.make("$lzc$class_$23main$2Fpoodllbigbutton$5B3$5D",$lzc$class_poodllbigbutton,["$m119",function($1){
with(this){
navigator.geolocation.getCurrentPosition(callback.geoCallbackSuccess,callback.geoCallbackFailure)
}},"$m120",function($1){
with(this){
var $2=immediateparent.width;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m121",function(){
with(this){
return [immediateparent,"width"]
}}],["tagname","poodllbigbutton","children",LzNode.mergeChildren([],$lzc$class_poodllbigbutton["children"]),"attributes",new LzInheritedHash($lzc$class_poodllbigbutton.attributes)]);Class.make("$lzc$class_$23main$2F$40output",LzText,["$m122",function($1){
with(this){
var $2=immediateparent.width;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m123",function(){
with(this){
return [immediateparent,"width"]
}}],["tagname","text","attributes",new LzInheritedHash(LzText.attributes)]);Class.make("$lzc$class_$23main",LzView,["$m106",function($1){
with(this){
var $2=immediateparent.width*0.99;if($2!==this["width"]||!this.inited){
this.setAttribute("width",$2)
}}},"$m107",function(){
with(this){
return [immediateparent,"width"]
}},"$m108",function($1){
with(this){
var $2=immediateparent.height*0.99;if($2!==this["height"]||!this.inited){
this.setAttribute("height",$2)
}}},"$m109",function(){
with(this){
return [immediateparent,"height"]
}},"picsourceCAMERA",void 0,"picsourceLIBRARY",void 0,"getPicture",function($1){
with(this){
this.output.setAttribute("text","options");var $2={quality:10};this.output.setAttribute("text","sourcetype");if($1!=undefined){
$2["sourceType"]=$1
};this.output.setAttribute("text","getpicture");navigator.camera.getPicture(callback.getPictureSuccess,null,$2);this.output.setAttribute("text","called get picture")
}},"output",void 0],["tagname","view","children",[{attrs:{axis:"y",spacing:10},"class":$lzc$class_simplelayout},{attrs:{$delegates:["onclick","$m113",null],clickable:true,height:40,resourcename:"'add_button",text:"takepicture",width:new LzAlwaysExpr("$m110","$m111")},"class":$lzc$class_$23main$2Fpoodllbigbutton$5B1$5D},{attrs:{$delegates:["onclick","$m117",null],clickable:true,height:40,resourcename:"'add_button",text:"changeme",width:new LzAlwaysExpr("$m114","$m115")},"class":$lzc$class_$23main$2Fpoodllbigbutton$5B2$5D},{attrs:{$delegates:["onclick","$m119",null],clickable:true,height:40,resourcename:"'add_button",text:"Get my position",width:new LzAlwaysExpr("$m120","$m121")},"class":$lzc$class_$23main$2Fpoodllbigbutton$5B3$5D},{attrs:{bgcolor:LzColorUtils.convertColor("0xcccccc"),font:"Verdana,Vera,sans-serif",fontsize:11,fontstyle:"plain",height:60,name:"output",width:new LzAlwaysExpr("$m122","$m123")},"class":$lzc$class_$23main$2F$40output}],"attributes",new LzInheritedHash(LzView.attributes)]);canvas.LzInstantiateView({attrs:{$lzc$bind_id:function($1,$2){
switch(arguments.length){
case 1:
$2=true;

};if($2){
$1.id="main";main=$1
}else{
if(main===$1){
main=null;$1.id=null
}}},align:"center",bgcolor:LzColorUtils.convertColor("0xdddddd"),height:new LzAlwaysExpr("$m108","$m109"),id:"main",output:void 0,picsourceCAMERA:1,picsourceLIBRARY:0,valign:"middle",width:new LzAlwaysExpr("$m106","$m107")},"class":$lzc$class_$23main},18);Class.make("$lzc$class_$23callback",LzNode,["geoCallbackSuccess",function($1){
with(this){
navigator.notification.alert("Lat: "+$1.coords.latitude+" / Long: "+ +$1.coords.longitude)
}},"geoCallbackFailure",function(){
with(this){
navigator.notification.alert("Geoposition could not be loaded")
}},"getPictureSuccess",function($1){
with(this){
alert("getpic success")
}}],["tagname","node","attributes",new LzInheritedHash(LzNode.attributes)]);canvas.LzInstantiateView({attrs:{$lzc$bind_id:function($1,$2){
switch(arguments.length){
case 1:
$2=true;

};if($2){
$1.id="callback";callback=$1
}else{
if(callback===$1){
callback=null;$1.id=null
}}},id:"callback"},"class":$lzc$class_$23callback},1);lz["basefocusview"]=$lzc$class_basefocusview;lz["focusoverlay"]=$lzc$class_focusoverlay;lz["_componentmanager"]=$lzc$class__componentmanager;lz["style"]=$lzc$class_style;lz["statictext"]=$lzc$class_statictext;lz["basecomponent"]=$lzc$class_basecomponent;lz["simplelayout"]=$lzc$class_simplelayout;lz["roundrect"]=$lzc$class_roundrect;lz["poodllbigbutton"]=$lzc$class_poodllbigbutton;LzResourceLibrary.lzfocusbracket_rsrc={ptype:"sr",frames:["lps/components/lz/resources/focus/focus_top_lft.png","lps/components/lz/resources/focus/focus_top_rt.png","lps/components/lz/resources/focus/focus_bot_lft.png","lps/components/lz/resources/focus/focus_bot_rt.png"],width:7,height:7,sprite:"lps/components/lz/resources/focus/focus_top_lft.sprite.png"};LzResourceLibrary.lzfocusbracket_shdw={ptype:"sr",frames:["lps/components/lz/resources/focus/focus_top_lft_shdw.png","lps/components/lz/resources/focus/focus_top_rt_shdw.png","lps/components/lz/resources/focus/focus_bot_lft_shdw.png","lps/components/lz/resources/focus/focus_bot_rt_shdw.png"],width:9,height:9,sprite:"lps/components/lz/resources/focus/focus_top_lft_shdw.sprite.png"};LzResourceLibrary.add_button={ptype:"sr",frames:["my-apps/talkback/justinav/newicons/32/classic_add_button.png"],width:32,height:32};canvas.initDone();