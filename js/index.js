const $multi_tap = document.querySelector(".main__multicampus-heading");
const $edeum_tap = document.querySelector(".main__edeum-heading")


$multi_tap.addEventListener("click", ()=>{
  if($edeum_tap.parentNode.classList.contains("is--act")){
    $edeum_tap.parentNode.classList.remove("is--act")
  }
  $multi_tap.parentNode.classList.add("is--act");
});
$edeum_tap.addEventListener("click", ()=>{
  if($multi_tap.parentNode.classList.contains("is--act")){
    $multi_tap.parentNode.classList.remove("is--act")
  }
  $edeum_tap.parentNode.classList.add("is--act");
});