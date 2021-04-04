let t = 0; // 시간 변수
let mode='WAVE'
let x,y,r;

function setup(){
  createCanvas(windowWidth,windowHeight); 
}

function draw(){

  background(10,10);
  randomSeed(0);
  stroke(255);
  
  delta=map(mouseX,0,windowWidth,10,100);

  for(y=0;y<windowHeight;y+=delta){
    for(x=0;x<windowWidth;x+=delta){
      r=random(0,1);
      
      if(r<0.2){
        push();
        stroke(0,149,118);
        strokeWeight(2);
        line(x,y+delta,x+delta,y);
        pop()
        } else if(r<0.5){
          noStroke();
          switch(mode){
            case 'BLACK': 
              noFill();
              stroke(0,149,118);
              break;
            case 'WAVE': fill(0,198,198); 
              break;
          }
          ellipse(x,y,delta/2,delta/2,10);

        } else {
          stroke(0,198,198);
          line(x+delta,y,x,y);
          moveell()}
      } 
    }
    t = t + 0.01; // 시간 업데이트
}

function moveell(){
    // 각 타원의 시작 점은 마우스 위치에 따라 달라집니다.
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
// 또, 파티클의 위치에 따라 달라집니다.
      const angle = xAngle * (x / width) + yAngle * (y / height);
  

// 각 파티클은 동그라미를 그리며 움직입니다.
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
      ellipse(myX, myY, 10); // 파티클로 그리기
}

function keyPressed(){
  switch(key){
    case '1': mode='BLACK';
    break;
    case '2': mode='WAVE';
    break;
    default: mode='NONE';
    break;
  }
  print(mode);
}