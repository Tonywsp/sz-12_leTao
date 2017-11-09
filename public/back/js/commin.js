/* 进度条 */

/* 关闭进度环 */
NProgress.configure({ showSpinner: false });

// ajax事件 发ajax时开始
$(document).ajaxStart(function () {
    NProgress.start();
})
$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done();
    },500);
})


//页面一加载，先发送一个判断用户是否登录的请求，如果登录，不做任何的使用，如果没登录，跳转到登录页面。
//非登陆页发送这个ajax请求
if(location.href.indexOf("login.html") == -1){
    $.ajax({
        url:'/employee/checkRootLogin',
        type:'get',
        success:function (data) {
            if(data===400){
                location.href = "login.html";
            }
        }
    })
}



// 二级菜单隐藏
$('.child').prev().on("click",function () {
    $(this).next().slideToggle();
})

// 侧边栏显示隐藏
$(".btn_menu").on("click",function () {
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
});

/* 退出功能 */
$('.btn_logout').on("click",function () {
    $('#logoutModal').modal('show');

    //on注册事件不会覆盖
    //off()解绑所有的事件
    //off("click") 只解绑click事件
    //off("click", "**"); 解绑委托事件
    // $('.btn_logout').off().on('click',function () {
    //     //给服务器发送ajax请求，让服务器清除session
    //     $.ajax({
    //         url:'/employee/employeeLogout',
    //         type:'get',
    //
    //         success:function (data) {
    //             // 如果退出成功,则回首页
    //             if(data.success){
    //                 location.href = "login.html";
    //             }
    //         }
    //     })
    // })

})