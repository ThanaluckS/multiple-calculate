// alert('you welcome to my web')

function showdata () {
    const message = document.getElementById('text-field')

    // console.log('message=>',message.value)
    message.value = 'basic css'
}

function showdetail () {
    const detail = document.getElementById('detail')
    detail.innerHTML = '<b>Description</b>'
}

function mutiplefomular (){
    const mutiple = document.getElementById('number-field')
    const display = document.getElementById('display')

    let content = ''
    for (let i = 1; i <= 12; i++) {
        content+= `<p>${ mutiple.value} * ${i} = ${mutiple.value * i}</p>`  
    }
    console.log(typeof content)

    display.innerHTML = content
}