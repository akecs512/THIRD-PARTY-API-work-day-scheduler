
$("#currentDay").html(dayjs().format("dddd MM/DD/YYYY HH:mm a"))
var currentHour = dayjs().hour()
var startHour = 9
var endHour = 18
var timeArray = []

$(document).on("click", ".saveBtn", function (event) {
  let timeBlockId = event.currentTarget.parentElement.id;
  localStorage.setItem(timeBlockId, $(this).siblings('textarea').val())
}
);

for (let index = startHour; index < endHour; index++) {
  let color = "past"
  let hour = index
  if (hour === currentHour) {
    color = "present"
  } else if (hour > currentHour) {
    color = "future"
  }
  let text = localStorage.getItem("hour-" + hour) || ""

  let timeBlockEl = `
<div id="hour-${hour}" class="row time-block ${color}">
  <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
  <textarea class="col-8 col-md-10 description" rows="3">${text}</textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
   <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`

  timeArray.push(timeBlockEl)
}

$(".container-fluid").html(timeArray)
