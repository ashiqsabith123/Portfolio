



// $("#submit-form").validate({

//     rules:{
//         name:{
//             required:true,
//             minlength:4
//         },

//         email:{
//             required: true,
//             email:true
//         },

//         color:{
//             required: true,
//             minlength:10
//         },
        
//         message:{
//             required:true,
//             minlength:10
//         }
//     },
   

//     submitHandler: function(form) {
//         $.ajax({
//             url:"https://script.google.com/macros/s/AKfycbw157c2zP6HQebbTRtPvrFqNvUJmxcC0ldaok097DdR_R1xM8_cmFPjATmOHmHb0ZkX/exec",
//             method:"post",
//             data: $(form).serialize(),
//             success: function(response) {
//                 $('#send').show();
//               setTimeout(function(){
//                 window.location.reload()   
//               } ,3000)
//             }            
//         });
//     }
// });

var name =false;
var email = false;
var sub = false;
var message = false;
var count =0;

function validae(){
    
    var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var name = document.getElementById("name").value;

    if(name.length < 4){
        document.getElementById("namep").innerHTML="Please Enter at least 4 cheracters"
        
        
    }
    else{
        document.getElementById("namep").innerHTML=" " 
        count=1;
    }

    var email = document.getElementById("email").value;

    if(email.match(validemail)){
        document.getElementById("emailp").innerHTML=" "
       count=2;
        
    }else{
        document.getElementById("emailp").innerHTML="Enter a valid email address"
    }

    var sub = document.getElementById("subject").value;

    if(sub.length < 10){
        document.getElementById("subp").innerHTML="Please Enter at least 10 cheracters"
        
    }
    else{
        document.getElementById("subp").innerHTML=""
        count=3;
    }

    var msg = document.getElementById("message").value;

    if(msg.length < 10){
        document.getElementById("msgp").innerHTML="Please Enter at least 10 cheracters"
        
    }else{
        document.getElementById("msgp").innerHTML=" "
        count=4;
    }

    // if(name !=null && email !=null && sub !=null && msg !=null ){
    //     count=true;
        
    // }else{
    //     count=false;
    // }

    console.log(count)


}


function send(){
    if(count==4){
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw157c2zP6HQebbTRtPvrFqNvUJmxcC0ldaok097DdR_R1xM8_cmFPjATmOHmHb0ZkX/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                document.getElementById("send").style.display="block";   
                document.getElementById("send").innerHTML="Your Message has send succesfully"; 
                
                setTimeout(function(){
                 window.location.reload()   
              } ,3000)
                
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })  
    }else{
        
    }
}



