const LinkList = require('./linkedList')

function main() {
    
    const SLL = new LinkList()
    
    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Boomer', 'Athena')
    return SLL
    
}
console.log(JSON.stringify(main(), null, 2))