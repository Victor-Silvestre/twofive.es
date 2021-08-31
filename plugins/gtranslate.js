/* <![CDATA[ */
function doGTranslate(lang_pair){
  if(lang_pair.value)lang_pair=lang_pair.value;
  if(lang_pair=='')return;
  var lang=lang_pair.split('|')[1];
  var plang=location.pathname.split('/')[1];
  if(plang.length !=2 && plang.toLowerCase() != 'zh-cn' && plang.toLowerCase() != 'zh-tw')plang='es';
  if(lang == 'es')location.href=location.protocol+'//'+location.host+location.pathname.replace('/'+plang+'/', '/')+location.search;
  else location.href=location.protocol+'//'+location.host+'/'+lang+location.pathname.replace('/'+plang+'/', '/')+location.search;
}

function autoDetect(){var e=document.querySelector("html").lang;"*"!=e&&e||(e="es");var t=navigator.language.toLowerCase()||navigator.userLanguage.toLowerCase();switch(t){case"zh-cn":case"zh":var a="zh-CN";break;case"zh-tw":case"zh-hk":a="zh-TW";break;default:a=t.substr(0,2)}var o=document.querySelector("a.glink[onclick*='es|"+a+"'], a.gflag[onclick*='es|"+a+"'], option[value='es|"+a+"']"),r=new Date;r.setMonth(r.getMonth()+1),a!=e&&o&&null==document.cookie.match("gt_auto_switch")&&void 0!==navigator.userAgent&&0==/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)&&(document.cookie="gt_auto_switch=1; expires="+r.toGMTString()+"; path=/;",doGTranslate("es|"+a))}
autoDetect();
/* ]]> */

