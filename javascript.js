function tabuada(){
    let num = window.document.querySelector('#txtn')
    let tab = window.document.querySelector('#seltab')
    if (num.value.length == 0){
        window.alert("por favor digite um numero valido")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}