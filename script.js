// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             name:{
//                 required:true,
//                 minlength:4
//             },

//             email:{
//                 required: true,
//                 email:true
//             },

//             color:{
//                 required: true,
//                 minlength:10
//             },
            
//             message:{
//                 required:true,
//                 minlength:10
//             }
//         }
//     })
// })



$("#submit-form").validate({

    rules:{
        name:{
            required:true,
            minlength:4
        },

        email:{
            required: true,
            email:true
        },

        color:{
            required: true,
            minlength:10
        },
        
        message:{
            required:true,
            minlength:10
        }
    },
   

    submitHandler: function(form) {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbw157c2zP6HQebbTRtPvrFqNvUJmxcC0ldaok097DdR_R1xM8_cmFPjATmOHmHb0ZkX/exec",
            method:"post",
            data: $(form).serialize(),
            success: function(response) {
                $('#send').show();
              setTimeout(function(){
                window.location.reload()   
              } ,3000)
            }            
        });
    }
});


// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbw157c2zP6HQebbTRtPvrFqNvUJmxcC0ldaok097DdR_R1xM8_cmFPjATmOHmHb0ZkX/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })