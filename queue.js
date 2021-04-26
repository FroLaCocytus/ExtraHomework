class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    /**
     * Проверяет пустая ли очередь
     * 
     * @returns {boolean} возвращает True если очередь пустая
     */
    isEmpty(){
        if(this.size===0) return true; 
        return false;
    }
    
    /**
     * Добавляет узел в конец очереди 
     * 
     * @param {any} данные которые будут содержаться в узле
     */
    enqueue(value){
        console.log('__________ENQUEUE__________');
        console.log(value);
        let node = new Node(value);
        if (this.isEmpty()){
            this.front = this.back = node;
        }
        else{
            this.back.next=node;
            this.back=node;
        }
        this.size++;
        console.log('**************************************');
    }

    /**
     * Показывает узел в начале очереди (front) а затем удаляет его 
     */
    dequeue(){
        console.log('__________DEQUEUE__________');
        // console.log(value);
        if (this.isEmpty()){
            console.log(null);
        }
        else if(this.size===1){
            console.log(this.front.data);
            this.front = null;
            this.back = null;
            this.size--;
        }
        else{
            console.log(this.front.data);
            this.front = this.front.next;
            this.size--;
        }
        console.log('**************************************');
    }

    /**
     * Показывает узел в начале очереди (front)
     */
    peek(){
        console.log('__________PEEK__________');
        if (this.isEmpty()){
            console.log(null);
        }
        else{
            console.log(this.front.data);
        }
        console.log('**************************************');
    } 

    /**
     * Визуальная демонстрация очереди
     */
    show(){
        console.log('__________SHOW__________');
        console.log('        FRONT        ');
        let NodeNow = this.front;
        for(let i=0; i<this.size; i++){
            console.log('--------------------');
            console.log(NodeNow.data);
            if (i===this.size-1){
                console.log('--------------------');
                console.log('        BACK        ');
            }
            else{
                console.log('--------------------');
            }
            console.log('          |         ');
            console.log('          ᐁ         ');
            NodeNow = NodeNow.next;
        }
        console.log('        NULL        ');
        console.log('**************************************');

    }

}


// let queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(5);
// queue.enqueue('hi');
// queue.peek();
// queue.enqueue({a:6, b:14});
// queue.show();
// queue.dequeue();
// queue.show();
// console.log(queue.isEmpty());


