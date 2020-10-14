const LinkList = require('./linkedList')

function main() {
    
    const SLL = new LinkList()
    
    SLL.insertFirst('Apollo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')
    return SLL
    
}
console.log(main())