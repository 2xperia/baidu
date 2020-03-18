var code = document.getElementById('getcode');
var tel = document.getElementById('tel');
var zhuce = document.getElementById('login');
var name = document.getElementById('tell').value;
var pwd = document.getElementById('pwd');
var telm = document.getElementById('hide');
var hide2 = document.getElementById('hide2');
var hide3 = document.getElementById('hide3');
var hide4 = document.getElementById('hide4');
var hide5 = document.getElementById('hide5');
var hide6= document.getElementById('hide6');
var hide7= document.getElementById('hide7');
var user = document.getElementById('user');
var nameTrue = false;
var telTrue = false;
var pwdTrue = false;
console.log(name,code,tel,user);
code.onclick = function(){
    code.disabled = true;
    code.style.backgroundColor = 'grey'
    var time = 60;
    var timer = null;
    code.innerHTML = time;
    timer = setInterval(() => {
        if (time>0) {
            time = time-1;
            code.innerHTML = time;
            console.log(time);
        }else{
            hide2.style.display = 'block'
            code.disabled = false;
            code.style.backgroundColor = 'blue'
            code.innerHTML = "获取验证码"
        }
    }, 1000);
    
}
tel.onblur = function(){
    var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    console.log('fgfgfg')
    var tell = tel.value;
    console.log(tell);
    if (!tel.value) {
        hide4.style.display = 'block'
    } else {
        if(!reg.test(tell)){
            hide4.style.display = 'none'
            telm.style.display = 'block'
            tel.style.borderColor = 'red'
            
        }else{
            telm.style.display = 'none'
            tel.style.borderColor = 'white'
        }
    }
    return true;
}

user.onblur = function(){
    var reg = /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
    if (!user.value) {
        hide3.style.display = 'block'
    }
     else {
        
        if(!reg.test(user.value)){
            hide3.style.display = 'none'
            hide6.style.display = 'block'
        }else{
            hide3.style.display = 'none'
            hide6.style.display = 'none'
            nameTrue = true;
            console.log(nameTrue)
        }
    }
    console.log(user.value)
}
pwd.onblur = function () {
    if (!pwd.value.length) {
        hide5.style.display = 'block'
    } else {
        if (pwd.value.length < 9) {
            hide5.style.display = 'none'
            hide7.style.display = 'block'
        } else {
            hide5.style.display = 'none'
            hide7.style.display = 'none'
        }
    }
}

