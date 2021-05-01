// 先模拟数据
let todolist = [{
        id: 1,
        todoName: '123',
        isDone: true,
    },
    {
        id: 2,
        todoName: '456',
        isDone: false,
    },
]

// 一、将拿到的数据写入 ul 中
// 1.获取 ul 元素
// 2.遍历拿到的数据，模拟的数据数组中有几个对象就会遍历几次
// 3.因为目前只有两个数据，所以要根据遍历的次数得到每次遍历之后都创建一个新的 li
// 4.然后再在动态创建好的 li 中动态插入拿到数据对象中的 todoName 
// 5.再将动态创建好的 li 插入 ul 中

var oUl = document.querySelector(".todo-main");
// console.log(oUl);
let str = "";
todolist.forEach(function(item) {
    let texts = item.todoName;
    let isDone = item.isDone;
    if (isDone) {
        str = "<li><label><input type='checkbox'><span>" + texts + "</span>\
    </label><button class='btn btn-danger'>删除</button></li>"
    } else {
        str = "<li><label><input type='checkbox' checked/><span class='done'>" + texts + "</span>\
    </label><button class='btn btn-danger'>删除</button></li>"
    }
    // console.log(str);
    oUl.innerHTML += str;
    console.log(oUl);
})