document.querySelector("#calculate").addEventListener("click", function(){
    let bill = parseInt(document.querySelector("#bill").value)
    if(bill > 50 && bill < 300){
        let tip = bill * 0.15
        document.querySelector("#result").innerText = `The bill was ${bill}, the tip was ${tip}, and the total value $${bill + tip}`
    }else if(bill >= 300){
        let tip = bill * 0.20
        document.querySelector("#result").innerText = `The bill was ${bill}, the tip was ${tip}, and the total value $${bill + tip}`
    }
})