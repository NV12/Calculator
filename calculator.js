var count = 0,check=1;
var sign, num1, num2, ans, temp;
$("button").on('click', function() {

    // alert(console.log(this));
    // alert($(this).text());
    // console.log( $.isNumeric($(this).text()) || $(this).text() == '.');
    if ( $.isNumeric($(this).text()) || $(this).text() == '.') {
        // console.log(".....");
        
        if (check == 0) $("h2").text("");
        check=1;
        
        if($(this).text() == '.'){
        	
        	if($("h2").text()=="")	$("h2").text("0");
        	
        	document.getElementsByTagName("h2")[0].innerHTML += $(this).text();
        }
        else{
        	document.getElementsByTagName("h2")[0].innerHTML += $(this).text();
        }
        

    } else if ($(this).text() == "AC") {
        $("h2").text("");
        $("h5").text("");
        ans = 0;
        count = 0;
    } else if ($(this).text() == "CE") {
        $("h2").text("");
    } else {

        if ($("h2").text() == "" && $("h5").text() == "")
            alert("give number first");
        else {
            if (count === 1) {
                calculate(this);
            } else {

                if ($(this).text() == "=") {
                    $("h5").text($("h2").text());
                    $("h2").text("");
                } else {
                    // console.log("getting in");
                    // console.log("lol", $("h5").text());
                    document.getElementsByTagName("h5")[0].innerHTML += ($("h2").text()) + $(this).text();
                    $("h2").text("");
                    count = 1;
                }
                // console.log("sign",$(this).text());

            }
        }
        // alert("h");
    }
    // alert("give number");

});

function calculate(obj) {
    temp = $("h5").text();
    console.log("Before");
    console.log($("h5").text());
    console.log("num1: ",num1);
    console.log("num2: ",num2);
    console.log(ans);
    if (ans % 1 != 0  || $("h2").text().includes('.') ) {
    	console.log("float");
        num1 = parseFloat(temp.slice(0, (temp.length - 1)));
        num2 = parseFloat($("h2").text());
        console.log("num1: ",num1);
    	console.log("num2: ",num2);

    } else {
        num1 = parseInt(temp.slice(0, (temp.length - 1)));
        num2 = parseInt($("h2").text());
    }

    $("h2").text("");
    console.log("After");
    console.log("num1: ",num1);
    console.log("num2: ",num2);

    sign = $("h5").text().slice(-1);
    switch (sign) {
        case '+':
            ans = num1 + num2;
            break;
        case '-':
            ans = num1 - num2;
            break;
        case '*':
            ans = num1 * num2;
            break;
        case '/':
            ans = num1 / num2;
            break;
        case '=':
            break;
    }
    if (ans % 1 != 0) ans = ans.toFixed(2);

    $("h5").text(ans);

    console.log("obj", obj);
    console.log("this", this);

    console.log("Txt is ", $(this).text());
    if ($(obj).text() == "=") {
        console.log("===");
        $("h2").text(ans);
        $("h5").text("");
        count = 0;
        check = 0;
    } else {
        console.log("!==");
        $("h5").text(ans + $(obj).text());
    }

    console.log("ans:", ans);
}