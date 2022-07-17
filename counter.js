var current = document.querySelectorAll('.current');
var next = document.querySelectorAll('.next');
var input = document.getElementById('number');
// var number = input.value;

function startCounter(){
    var count = 0;
    var ones = 0;
    var tens = 0;
    var hundreds = 0;
    var  thousands = 0;
    var tenThousands = 0;

    if(input.value > 99999){
        alert("Please Enter a valid Value");
        input.value = '';
        return;
    }

    var interval = setInterval(function(){

        if(count == input.value){
            clearInterval(interval);
            return;
        }
        count++;

        if(thousands == 9  && hundreds == 9 && tens == 9 && ones == 9){
            thousands = -1;
            tenThousands++;
            next[0].innerHTML = tenThousands;
            animate(tenThousands,0);
        }

        if(hundreds == 9 && tens == 9 && ones == 9){
            hundreds = -1;
            thousands++;
            next[1].innerHTML = thousands;
            animate(thousands,1);
        }

        if(tens == 9 && ones == 9){
            tens = -1;
            hundreds++;
            next[2].innerHTML = hundreds;
            animate(hundreds,2);
        }

        if(ones == 9){
            ones = -1;
            tens++;
            next[3].innerHTML = tens;
            animate(tens,3);
        }

        ones++;
        next[4].innerHTML = ones;
        animate(ones,4);
    },1000);
}

function animate(count,index){
    next[index].classList.add('animate');
    setTimeout(function(){
        next[index].classList.remove('animate');
        current[index].innerHTML = count;
    },550);
}