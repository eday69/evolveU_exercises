import ll from './LinkedList';

test('prints Hello World', () => {
    console.log('Hello World');
//    expect(console.log('Hello World')).toBe('Hello World');
});

test('showing linked list', () => {
    let myList = new ll.LinkedList('First', 10);
    expect(myList.showAll()).toBe('First : 10');
});

test('create a class of Node', () => {
    let myNode = new ll.Node('First', 30);
//    expect(myNode).instanceof(ll.Node);
    expect(myNode).toBeInstanceOf(ll.Node);
});

test('add more nodes to linked list', () => {
    let myList = new ll.LinkedList('First', 30);
    myList.add('Second', 40);
//    expect(myNode).instanceof(ll.Node);
    expect(myList.showAll()).toBe('First : 30, Second : 40');
});

test('point & show first node in linked list', () => {
    let myList = new ll.LinkedList('First', 30);
    myList.add('Second', 40);
    myList.add('Third', 40);
    myList.add('Fourth', 40);
    let ptr = myList.firstNode();
    expect(myList.show(ptr)).toBe('First : 30');
});

test('point & show to next node in linked list', () => {
    let myList = new ll.LinkedList('First', 30);
    myList.add('Second', 40);
    myList.add('Third', 50);
    myList.add('Fourth', 60);

    let ptr = myList.firstNode();

    ptr = myList.nextNode(ptr);
    expect(myList.show(ptr)).toBe('Second : 40');

    ptr = myList.nextNode(ptr);
    expect(myList.show(ptr)).toBe('Third : 50');
});
