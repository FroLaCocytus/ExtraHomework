class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    /**
     * Проверяет пустой ли стэк
     * 
     * @returns {boolean} возвращает True если стэк пустой
     */
    isEmpty(){
        if(this.size===0) return true; 
        return false;
    }
    
    /**
     * Добавляет узел в стэк (на верх)
     * 
     * @param {any} данные которые будут содержаться в узле
     */
    push(value){
        console.log('_______PUSH_______');
        console.log(value);
        let node = new Node(value, this.top);
        this.top = node;
        this.size++;
        console.log('**************************************');
    }

    /**
     * Показывает верхний узел стэка (top)
     */
    showTop(){
        console.log('__________TOP__________');
        if (this.isEmpty()){
            console.log(null);
        }
        else{
            console.log(this.top.data);
        }
        console.log('**************************************');
    } 

    /**
     * Показывает верхний узел стэка (top) и затем удаляет его
     */
    pop(){
        console.log('__________POP__________');
        if (this.isEmpty()){
            console.log(null);
        }
        else{
            let popTop = this.top.data;
            this.top = this.top.next;
            this.size--;
            console.log(popTop);
        }
        console.log('**************************************');
    }

    /**
     * Визуальная демонстрация стэка
     */
    show(){
        console.log('_______SHOW_______');
        let NodeNow = this.top;
        for(let i=0; i<this.size; i++){
            console.log('--------------------');
            console.log(NodeNow.data);
            console.log('--------------------');
            console.log('          |         ');
            console.log('          ᐁ         ');
            NodeNow = NodeNow.next;
        }
        console.log('        NULL        ');
        console.log('**************************************');

    }

}


// let stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push('hi');
// stack.showTop();
// stack.push({a:6, b:14});
// stack.show();
// stack.pop();
// stack.show();
// console.log(stack.isEmpty());


