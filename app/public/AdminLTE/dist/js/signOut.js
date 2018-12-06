
$('#signOut').on('click',function(){
    layer.confirm('确定要退出吗？', {
        btn: ['确定','取消'] //按钮
    }, function(){
        $.ajax({
            url:'holly/signOut',
            method:'get',
            success:function(data){
                if(data.status === '5000'){
                    layer.msg(data.message)
                }else{
                    layer.msg(data.message);
                    setTimeout(()=>{
                        window.location.href = '/'
                    },500)
                }
            },
            error:function(error){
                console.log(error)
            }
        })
    });

});
