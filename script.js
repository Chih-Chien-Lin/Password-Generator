// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var count_enterpw=0;
  var num_password=0;
  //the following section create a array with number, special character, and lower letter
  var database=[];
  var abc="abcdefghijklmnopqrstuvwxyz";
  var numb="1234567890";
  var spech="\u0021\u0023\u0024\u0025\u0026\u002A\u002B\u002D\u002F\u003C\u003D\u003E\u003F\u0040";

  // this section asking user to decide number of password
  while(count_enterpw ==0){
      num_password = +prompt("How many characters would you like your password to contain?\n(Please enter number)")
      if(num_password < 8){
          alert("Password length must be at least 8 characters!")
      }
      else if(num_password > 128){
          alert("Password length must less than 129 characters!")
      }
      else{
          count_enterpw = 1;
      }
  }
  var spech_on=0;
  var num_on=0;
  var low_on=0;

  if_spech = confirm("Click OK to confirm including special characters.");
  if_num = confirm("Click OK to confirm including numeric characters.");
  if_low = confirm("Click OK to confirm including lowercase characters.");
  if(if_spech === true){
      spech_on = 1;
  }
  if(if_num === true){
      num_on = 1;
  }
  if(if_low === true){
      low_on = 1;
  }
  console.log("if_spech: "+if_spech+" & spech_on: "+spech_on);
  console.log("if_num: "+if_num+" & num_on: "+num_on);
  console.log("if_low: "+if_low+" & low_on: "+low_on);
  // the following section start to generate password!!
  var rand_num = 0;
  var remaining = 0;
  var password= "";
  var letter= "";
  console.log("number of password: "+num_password);
  //---------- Case 1, user decide to have three elements for his/her password!----------
  if (spech_on == 1 && num_on == 1 && low_on == 1){
      //here generate password selection narray
      console.log("case 1 active, all on");
      for(var i=0; i<51; i++){
      if(i<10){
          database.push(numb.slice(i,i+1));
      }
      else if(i>9 &&i<36){
          j=i-10;
          database.push(abc.slice(j,j+1));
      }
      else{
          k=i-36;
          database.push(spech.slice(k,k+1))
      }
      }
      // here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%51;
          letter = database[select_num];
          password+= letter;
          // console.log(password);
      }
  }
  //---------- Case 2, user decide to have number and lower case ----------
  if (spech_on == 0 && num_on == 1 && low_on == 1){
      console.log("case 2 active, lower and num");
      //here generate password selection narray
      for(var i=0; i<37; i++){
      if(i<10){
          database.push(numb.slice(i,i+1));
      }
      else{
          j=i-10;
          database.push(abc.slice(j,j+1));
      }
      }
      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%36;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 3, user decide to have number and special character ----------
  if (spech_on == 1 && num_on == 1 && low_on == 0){
      console.log("case 3 active, spech and num");
      //here generate password selection narray
      for(var i=0; i < 25 ; i++){
      if(i<10){
          database.push(numb.slice(i,i+1));
      }
      else{
          j=i-10;
          database.push(spech.slice(j,j+1));
      }
      }
      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%25;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 4, user decide to have lower case and special character ----------
  if (spech_on == 1 && num_on == 0 && low_on == 1){
      console.log("case 4 active, lower and spech");
      //here generate password selection narray
      for(var i=0; i < 41 ; i++){
      if(i<26){
          database.push(abc.slice(i,i+1));
      }
      else{
          j=i-26;
          database.push(spech.slice(j,j+1));
      }
      }
      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%41;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 5, user decide to have number only ---------- 
  if (spech_on == 0 && num_on == 1 && low_on == 0){
      console.log("case 5 active, only num");
      //here generate password selection narray
      for(var i=0; i < 10 ; i++){
          database.push(numb.slice(i,i+1));
      }
      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%10;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 6, user decide to have lower case only ----------
  if (spech_on == 0 && num_on == 0 && low_on == 1){
      console.log("case 6 active, only low");
      //here generate password selection narray
      for(var i=0; i < 25 ; i++){
          database.push(abc.slice(i,i+1));
      }

      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%26;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 7, user decide to have special character only----------
  if (spech_on == 1 && num_on == 0 && low_on == 0){
      console.log("case 7 active, only spech");
      //here generate password selection narray
      for(var i=0; i < 14 ; i++){
          database.push(spech.slice(i,i+1));
      }
      //here use random number to generate password
      for(var i=1;i<num_password+1;i+=1){
          num = Math.random();
          select_num= Math.floor(num*101)%14;
          letter = database[select_num];
          password+= letter;
      }
  }
  //---------- Case 8, user stupid case ----------
  if (spech_on == 0 && num_on == 0 && low_on == 0){
      alert("please select at least one of the elements as your password \npress \"Generate Password\" button and try again")
      password=null;
  }
  //---------- End of 7 cases ----------
  console.log(password);
  // alert("Your Password:\n "+password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
