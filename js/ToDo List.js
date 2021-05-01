var todos = [];
var todo = $('.to_do')
var todolist = $('#todo_list')
$('.creattodo').on('click', addtodo); //mfish addEventListener fe jquery
//click - mousemove - dbclick..... , name of fun or all function

getToDos();

function creatToDoList(y){
			var todoitem = $('<div></div>');
			todoitem.addClass('todo_list_item'); //b3ml class ll div elly caritoo
			todoitem.text(y);
			todolist.append(todoitem);
}





$('.todo_list_item').on('click',function (){
	console.log('test');
	
	$(this).slideUp(700, function (){    //slideDown - fadeOut - fadeIn - hide - show
		$(this).remove();
	})
});



$(document).on('mouseover','.todo_list_item',function (){
//binding = 34an a5li el div dynamic lma a3ml wa7id gdid ytnafiz 3lih el fun 3la tol m4 lazem lma a3ml refresh
$(this).addClass('animate');
$(this).siblings().removeClass('animate');
});


$(document).on('mouseleave','.todo_list_item',function (){
	$('.todo_list_item').removeClass('animate');
});






function addtodo(){
	creatToDoList(todo.val()); //mfish .value fe jq lkn fih val() as a function
	savetodo(todo.val());
	todo.focus(); // kol ma a3ml click w anafiz el fun addtodo y3ml focus tlqa2i ll input kol mra
	todo.val(''); // minfa34 a7ot null hairg3li el qima elly mogoda lkn ana 3aizaha fadia 
	// kol ma a3ml click w anafiz el fun addtodo b3d ma ydif el your todo (text) ymsa7 elly fe el input kol mra 
}

// JSON 34an minfa34 a7ot fe el local storage 8ir text lkn obj , arr l2a 
//[stringify] f JSON bt7wlha li JSON text [akno arr]
//[parse] 3aks stringify 34an a get

function savetodo (x){
	todos.push(x);
	 localStorage.setItem('todos' , JSON.stringify(todos));
}

function getToDos(){
	var tododata = JSON.parse(localStorage.getItem('todos'));
	if(tododata !== null){
		for (var i = 0; i < tododata.length; i++) {
			console.log(tododata[i])
			creatToDoList(tododata[i]);
		}
		todos = tododata;
	}
}














