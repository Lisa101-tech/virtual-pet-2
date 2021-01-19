var dog,dogImg,dogImg2;
var database;
var foodS,foodStock;
var feedTime,lastFed,Feed,addFood,foodObj
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
 database=firebase.database();
  createCanvas(800, 700);
  foodObj = new Food()

  feed = createButton("Feed the dog")
  feed.position(650,95)
  feed.mousePressed(feedDog)

  addFood = createButton("add milk")
  addFood.position(790,95)
  addFood.mousePressed(addFoods)
  
  dog = createSprite(400,400,30,40)
  dog.addImage(dogImg)
  dog.scale = 0.4
  
   foodStock = database.ref('food')
   foodStock.on("value",readStock);
   textSize(20); 
}


function draw() {  
  //readStock()
  background(46,139,87);
   database.ref('feed time')
  //feedTime.on('value',function(data){
 // lastFeed = data.val()

  text(20)
  if(lastFed>=12){
  text("last feed:"+lastFed%12+"pm",350,30)
  }else if(lastFed==0){
  text("last Fed:12pm",350,30)
  }else{
    text("last feed:"+lastFed+"am",350,30)
  }
  
  foodObj.display();
  

  drawSprites();
  
}
function readStock(data){
  foodS=data.val();
}
//function to update food stock and last fed time
function feedDog(){
 dog.addImg(dogImg2) 
 foodObj.updatefoodStock(foodObj.getfoodStock()-1)
 
 database.ref('/').update({
  Food:foodObj.getfoodStock()
  //feedTime:hour()
   })
}
function addFoods(){
  foods++
  database.ref('/').update({
  Food:foodS  
  })
}





