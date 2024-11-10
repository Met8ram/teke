const nameInput = document.getElementById("name_input");
nameInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
      calculate_matrix(e);
    }
});
function print_specific_div_content(){var win=window.open('','','left=0,top=0');var content="<html>";content+="<body onload=\"window.print(); window.close();\">";content+=document.getElementById("whole").innerHTML;content+=document.getElementById("style").innerHTML;content+="</body>";content+="</html>";win.document.write(content);win.document.close();}

  function correct(n){if(n<0){throw"Negative value"}
  if(n<=22){return n}
  else{var sum=0;var number=n
  while(number){sum+=number%10;number=Math.floor(number/10);}}
  return correct(sum)}
  function count_line(n1,n2){var line=new Array(7).fill(0);line[3]=correct(n1+n2)
  line[1]=correct(n1+line[3])
  line[5]=correct(n2+line[3])
  line[0]=correct(n1+line[1])
  line[2]=correct(line[1]+line[3])
  line[4]=correct(line[3]+line[5])
  line[6]=correct(n2+line[5])
  return line}

  function reversing(){
    document.getElementById("buttons").style.display="block";
    document.getElementById("whole").style.display="none";
    document.getElementById('energy-description').innerHTML = '';
  }
  
  function calculate_matrix(){

    const dateField = document.getElementById("birthday");
    const nameField = document.getElementById("name_input");

    if(dateField.value == "" || nameField.value == ""){
      return false;
    } 

    var all_array=["point-01","point-02","point-03","point-04","point-05","point-06","point-07","point-08","point-09","point-10","point-11","point-12","point-13","point-14","point-15","point-16","point-17","point-18","point-19","point-20","point-21","point-22","point-23","point-24","point-25","point-26","point-27","point-28","point-29","point-30","point-31","point-32","point-33","point-34","point-35","point-36","point-37","point-38","point-39","point-40","point-41","point-42","point-43","point-44","point-45","point-46","point-47","point-48","point-49","point-51","point-52","point-53","point-54","point-55","point-56","point-57","point-58","point-59","point-60","point-61","point-62","point-63","point-64","point-65","point-66","point-67","point-68","point-69","point-70","point-71","point-72","point-73","point-74","point-75","point-76","point-77","point-78","point-79","point-80","point-81","point-82","point-83","point-84","point-85","point-86","point-87",]
  const dateString=document.getElementById("birthday").value;
  const true_year=parseInt(dateString.split('-')[0]);
  const true_month=parseInt(dateString.split('-')[1]);
  const true_day=parseInt(dateString.split('-')[2]);
  var temp=new Date(document.getElementById("birthday").value);
  var userTimezoneOffset=temp.getTimezoneOffset()*60000;
  const date=new Date(temp.getTime()-userTimezoneOffset);
  const year=correct(true_year)
  const month=correct(true_month)
  const day=correct(true_day)
  var arr=[];
  arr.push(day,month,year,correct(day+month+year));

  //Show energy descriptions 
  var coreEnergy = correct(arr[0]+arr[1]+arr[2]+arr[3]);
  ShowEnergies.findDescription(coreEnergy,day,month);

  arr.push(correct(arr[0]+arr[1]+arr[2]+arr[3]))
  arr.push(correct(arr[0]+arr[1]),correct(arr[1]+arr[2]),correct(arr[2]+arr[3]),correct(arr[3]+arr[0]))
  arr.push(correct(arr[3]+arr[4]),correct(arr[2]+arr[4]))
  arr.push(correct(arr[9]+arr[10]))
  arr.push(correct(arr[9]+arr[11]),correct(arr[10]+arr[11]))
  arr.push(correct(arr[0]+arr[4]))
  arr.push(correct(arr[1]+arr[4]))
  arr.push(correct(arr[0]+arr[14]))
  arr.push(correct(arr[1]+arr[15]))
  arr.push(correct(arr[3]+arr[9]))
  arr.push(correct(arr[2]+arr[10]))
  arr.push(correct(arr[4]+arr[14]))
  arr.push(correct(arr[4]+arr[15]))
  arr.push(correct(arr[5]+correct(arr[5]+arr[6]+arr[7]+arr[8])))
  arr.push(correct(arr[5]+arr[22]))
  arr.push(correct(arr[6]+correct(arr[5]+arr[6]+arr[7]+arr[8])))
  arr.push(correct(arr[6]+arr[24]))
  arr.push(correct(arr[7]+correct(arr[5]+arr[6]+arr[7]+arr[8])))
  arr.push(correct(arr[7]+arr[26]))
  arr.push(correct(arr[8]+correct(arr[5]+arr[6]+arr[7]+arr[8])))
  arr.push(correct(arr[8]+arr[28]))
  const final=arr.concat(count_line(arr[0],arr[5]),count_line(arr[5],arr[1]),count_line(arr[1],arr[6]),count_line(arr[6],arr[2]),count_line(arr[2],arr[7]),count_line(arr[7],arr[3]),count_line(arr[3],arr[8]),count_line(arr[8],arr[0]))
  var arrayLength=all_array.length;
  document.getElementById('purp-1').innerHTML=arr[0]
  document.getElementById('purp-2').innerHTML=arr[1]
  document.getElementById('purp-3').innerHTML=correct(arr[0]+arr[1])
  document.getElementById('blue-1').innerHTML=arr[16]
  document.getElementById('blue-2').innerHTML=arr[17]
  document.getElementById('blue-3').innerHTML=correct(arr[16]+arr[17])
  document.getElementById('cyan-1').innerHTML=arr[14]
  document.getElementById('cyan-2').innerHTML=arr[15]
  document.getElementById('cyan-3').innerHTML=correct(arr[14]+arr[15])
  document.getElementById('green-1').innerHTML=arr[20]
  document.getElementById('green-2').innerHTML=arr[21]
  document.getElementById('green-3').innerHTML=correct(arr[20]+arr[21])
  document.getElementById('yellow-1').innerHTML=arr[4]
  document.getElementById('yellow-2').innerHTML=arr[4]
  document.getElementById('yellow-3').innerHTML=correct(arr[4]+arr[4])
  document.getElementById('orange-1').innerHTML=arr[10]
  document.getElementById('orange-2').innerHTML=arr[9]
  document.getElementById('orange-3').innerHTML=correct(arr[10]+arr[9])
  document.getElementById('red-1').innerHTML=arr[2]
  document.getElementById('red-2').innerHTML=arr[3]
  document.getElementById('red-3').innerHTML=correct(arr[2]+arr[3])
  document.getElementById('total-1').innerHTML=correct(arr[0]+arr[16]+arr[14]+arr[20]+arr[4]+arr[10]+arr[2])
  document.getElementById('total-2').innerHTML=correct(arr[1]+arr[17]+arr[15]+arr[21]+arr[4]+arr[9]+arr[3])
  document.getElementById('total-3').innerHTML=correct(correct(arr[0]+arr[1])+correct(arr[16]+arr[17])+correct(arr[14]+arr[15])+correct(arr[20]+arr[21])+correct(arr[4]+arr[4])+correct(arr[10]+arr[9])+correct(arr[2]+arr[3]))
  document.getElementById('nebo1').innerHTML=correct(arr[1]+arr[3])
  document.getElementById('zemlia1').innerHTML=correct(arr[0]+arr[2])
  document.getElementById('for_self1').innerHTML=correct(correct(arr[1]+arr[3])+correct(arr[0]+arr[2]))
  document.getElementById('male1').innerHTML=correct(arr[5]+arr[7])
  document.getElementById('female1').innerHTML=correct(arr[6]+arr[8])
  document.getElementById('socium1').innerHTML=correct(correct(arr[5]+arr[7])+correct(arr[6]+arr[8]))
  document.getElementById('duhovnoe1').innerHTML=correct(correct(correct(arr[1]+arr[3])+correct(arr[0]+arr[2]))+correct(correct(arr[5]+arr[7])+correct(arr[6]+arr[8])))
  document.getElementById('planetarnoe1').innerHTML=correct(correct(correct(arr[5]+arr[7])+correct(arr[6]+arr[8]))+correct(correct(correct(arr[1]+arr[3])+correct(arr[0]+arr[2]))+correct(correct(arr[5]+arr[7])+correct(arr[6]+arr[8]))))
  var today=new Date()
  const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];document.getElementById('date').innerHTML='&nbsp;'+true_day+'/'+true_month+'/'+true_year
  document.getElementById('age').innerHTML='&nbsp;'+Math.floor((today-date)/(1000*60*60*24*365))
  document.getElementById('weekday').innerHTML=weekday[date.getDay()];document.getElementById('username').innerHTML=document.getElementById("name_input").value;document.getElementById('m3').innerHTML=arr[5]+', '+arr[7]+', '+correct(arr[5]+arr[7])
  document.getElementById('w3').innerHTML=arr[6]+', '+arr[8]+', '+correct(arr[6]+arr[8])
  document.getElementById('power_root').innerHTML=correct(arr[5]+arr[6]+arr[7]+arr[8])
  document.getElementById('power_inner').innerHTML=correct(arr[4])+', '+correct(arr[5]+arr[6]+arr[7]+arr[8])+', '+correct(correct(arr[4])+correct(arr[5]+arr[6]+arr[7]+arr[8]))
  for(var i=0;i<arrayLength;i++){document.getElementById(all_array[i]).innerHTML=final[i]}
  document.getElementById("buttons").style.display="none";document.getElementById("whole").style.display="contents";return true};