// Choosing elements
var activities = [];
var elActivityForm = document.querySelector('.activity-form');
var elActivityInput = document.querySelector('.activity-input');
var elImportantActivityInput = document.querySelector('.important-activity');
var elActivityList = document.querySelector('.activity-list');

elActivityForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var activityInputText = elActivityInput.value.trim();

  if (activityInputText === '') {
    alert(`Ma'lumot kiriting!`);
  } else {
    var isChecked = elImportantActivityInput.checked;

    if (isChecked) {
      activities.unshift(activityInputText + ' ');
    } else {
      activities.push(activityInputText);
    }

    elActivityList.innerHTML = '';

    for (activity of activities) {
      var elActivityItem = document.createElement('li');

      elActivityItem.classList.add('list-group-item', 'list-group-item-info');
      elActivityItem.classList.remove('list-group-item-warning');

      if (activity.includes(' ')) {
        activity = activity.trim();
        elActivityItem.classList.remove('list-group-item-info');
        elActivityItem.classList.add('list-group-item-warning');
      }

      elActivityItem.textContent = activity;
      elActivityList.appendChild(elActivityItem);
    }
  }

  elActivityInput.value = '';
  elActivityInput.focus();
});
