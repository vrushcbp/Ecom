
    function decreaseNumber(tb,item,product,ship,totalamt){
        var itemval=document.getElementById(tb);
        var itempr=document.getElementById(item);
        var prodAmount=document.getElementById(product);
        var shipamount=document.getElementById(ship);
        var totalamount=document.getElementById(totalamt);
        console.log(totalamount.innerHTML)

       
        if(itemval.value<=0)
        {
            itemval.value=0;
            totalamount.innerHTML=0;
            alert("Please select atleast one item")
        }
        else
        {
            itemval.value= parseInt(itemval.value) - 1;
            itempr.innerHTML=parseInt(itempr.innerHTML) - 20;
            prodAmount.innerHTML=parseInt(prodAmount.innerHTML) - 20;
            totalamount.innerHTML=parseInt(prodAmount.innerHTML) - parseInt(shipamount.innerHTML);
            itemval.style.background='white'
            itemval.style.color='black'
        }
    }

        function increaseNumber(tb,item,product,ship,totalamt)
        {   
             var itemval=document.getElementById(tb);
            var itempr=document.getElementById(item);
            var prodAmount=document.getElementById(product);
            var shipamount=document.getElementById(ship);
            var totalamount=document.getElementById(totalamt)
           

          if(itemval.value>=5)  
          {
              itemval.value=5;
              alert("Only 5 Items allowed");
              itemval.style.background='red'
              itemval.style.color='black'
          }
          else
          {
            itemval.value= parseInt(itemval.value) + 1;
            itempr.innerHTML=parseInt(itempr.innerHTML) + 20;
            prodAmount.innerHTML=parseInt(prodAmount.innerHTML) + 20;
             console.log(prodAmount.innerHTML)
             totalamount.innerHTML=parseInt(prodAmount.innerHTML) + parseInt(shipamount.innerHTML);
            
          }
        }

        function discount_code(){
            var totalamount=document.getElementById('total_cart_amt');
            var disc=document.getElementById('discount_code1').value;
            var curramt=parseInt(totalamount.innerHTML);
            var errort=document.getElementById('error_throw');
           if(disc=="PATIL")
           {
            totalamount.innerHTML=curramt - 15;
            errort.innerHTML="<span style='color:green;font-weight:bold'>Hurrayyy...!! you got Discount!!</span>"
           }
           else{
            errort.innerHTML="<span style='color:red;font-weight:bold'>Enter Valid Coupen Code.</span>"
           }
        }
