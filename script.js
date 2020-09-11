var container = document.getElementsByClassName("container")[0]; 
var timeBlock = document.createElement("div");
var todayDate = moment(). date(String).local().format("DDDD, MMMM Do YYYY, h:mm:ss a");
var timeInputs;

var events;
 
//?append child
container.appendChild(timeBlock);

//adding a class to timeblocks

//todo: current date 
var todaytDate.text(moment().format("DDDD, MMMM Do YYYY, h:mm:ss a"));
console.log(todayDate);

//!timeblocks with hours from 9 am to 5pm
var timeInputs =[
    {time:9, input:""}
    {time:10, input:""}
    {time:11, input:""}
    {time:12, input:""}
    {time:13, input:""}
    {time:14, input:""}
    {time:15, input:""}
    {time:16, input:""}
    {time:17, input:""}
]
//?past, present and future timeblocks represented by colors
//todo: enter events

//save all to local storage
$(#9am).val(localStorage.getItem("9am"));
$(#10am).val(localStorage.getItem("10am"));
$(#11am).val(localStorage.getItem("11am"));
$(#12am).val(localStorage.getItem("12am"));
$(#13am).val(localStorage.getItem("13am"));
$(#14am).val(localStorage.getItem("14am"));
$(#15am).val(localStorage.getItem("15am"));
$(#16am).val(localStorage.getItem("16am"));
$(#17am).val(localStorage.getItem("17am"));
//?After you refresh the page, make sure the events persist
