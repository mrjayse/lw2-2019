window.onload = function () {
  var btn = document.getElementById('button-add');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function () {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('li');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = "";

    // register events here:

    // complete task
    // TODO: labeled - not valid name for CSS and context
    check.onclick = function () {
      label.classList.toggle('labeled');
    };

    // TODO: delete task event
    icon.onclick = function () {
      console.log('delete');
      this.parentNode.remove();
    };
  };

  // TODO: complete all handler here
  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function () {
    var taskNodes = document.getElementsByClassName("new checkbox");
    var label;

    for (var i = 0; i < taskNodes.length; i++) {
      label = taskNodes[i].getElementsByTagName("label");
      label[0].classList.toggle("labeled");
      label[0].getElementsByTagName("input")[0].checked = (label[0].getElementsByTagName("input")[0].checked === false) ? true : false;
    }

    console.log('complete all');
  };


  // TODO: filter tasks

  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function () {
    var taskNodes = document.getElementsByClassName("new checkbox");
    var label;

    for (var i = 0; i < taskNodes.length; i++) {
      label = taskNodes[i].getElementsByTagName("label");
      taskNodes[i].style.display = "block";
    }

    console.log('show all');
  }

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function () {
    var taskNodes = document.getElementsByClassName("new checkbox");
    var label;

    for (var i = 0; i < taskNodes.length; i++) {
      label = taskNodes[i].getElementsByTagName("label");
      if (label[0].getElementsByTagName("input")[0].checked === true)
        taskNodes[i].style.display = "block"
      else
        taskNodes[i].style.display = "none";

      console.log('show completed');
    }
  };

  // var filterShowCompleted = document.getElementById('filter-show-removed');
  // filterShowRemoved.onclick = function () {
  //   console.log('show removed');
  // };
}