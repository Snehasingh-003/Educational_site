let count1=document.querySelectorAll(".counter1");
// let count2=document.querySelectorAll(".counter2");
let count3=document.querySelectorAll(".counter3");


count1.forEach((counter)=>{
    let c1=4500;
    let target1=5000;
    const count_fn1=()=>{
        if(c1<target1){
            c1+=1;
            counter.innerText=`${c1}+`;
            setTimeout(count_fn1,1);
        }
    };
    count_fn1();
})

// count2.forEach((counter)=>{
//     let c2=1000;
//     let target2=5000;
//     const count_fn2=()=>{
//         if(c2<target2){
//             c2+=1;
//             counter.innerText=`${c2}+`;
//             setTimeout(count_fn2,15);
//         }
//     };
//     count_fn2();
// })

count3.forEach((counter)=>{
    let c3=99000;
    let target3=100000;
    const count_fn3=()=>{
        if(c3<target3){
            c3+=1;
            counter.innerText=`${c3}+`;
            setTimeout(count_fn3,5);
        }
    };
    count_fn3();
})
//to check if element is in view
function isvisible(element){
    const rect=element.getBoundingClientRect();
    return(
        rect.top >=0 &&
        rect.left>=0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function animateOnScroll(){
    const about_cnt=document.querySelector(".about_cnt");
    
    
    if(isvisible(about_cnt)){
        about_cnt.classList.add('active');
    }
    else{
        about_cnt.classList.remove('active');
    }
}
window.addEventListener('scroll',animateOnScroll);
window.addEventListener('load', animateOnScroll);