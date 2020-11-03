class FourthScreen{
    constructor(){
        this.subTitle = createElement('h3');
        this.nextButton = createButton('NEXT');
    }
    displayMissiles(){
        if(player.index%2 !== 0){
            Missile_1_Player_1Sprite = createSprite(300,300,50,50);
            Missile_1_Player_1Sprite.addImage(Missile_1_Player_1Img);
            Missile_1_Player_1Sprite.scale = 0.5;

            Missile_2_Player_1Sprite = createSprite(900,300,50,50);
            Missile_2_Player_1Sprite.addImage(Missile_2_Player_1Img);
            Missile_2_Player_1Sprite.scale = 0.5;

            Missile_3_Player_1Sprite = createSprite(600,500,50,50);
            Missile_3_Player_1Sprite.addImage(Missile_3_Player_1Img);
            Missile_3_Player_1Sprite.scale = 0.5;
        }
        if(player.index%2 === 0){
            Missile_1_Player_2Sprite = createSprite(300,300,50,50);
            Missile_1_Player_2Sprite.addImage(Missile_1_Player_2Img);
            Missile_1_Player_2Sprite.scale = 0.5;

            Missile_2_Player_2Sprite = createSprite(900,300,50,50);
            Missile_2_Player_2Sprite.addImage(Missile_2_Player_2Img);
            Missile_2_Player_2Sprite.scale = 0.5;

            Missile_3_Player_2Sprite = createSprite(600,500,50,50);
            Missile_3_Player_2Sprite.addImage(Missile_3_Player_2Img);
            Missile_3_Player_2Sprite.scale = 0.5;
        }
        this.subTitle.html("Please select an Image of Missile by clicking on it");
        this.subTitle.position(displayWidth/2 -210 , displayHeight/2 - 280);
    }
    selectMissiles(){
        if(player.index%2 !== 0){
            if(mousePressedOver(Missile_1_Player_1Sprite)){
                Missile_1_Player_1Sprite.scale = 1;
                Missile_2_Player_1Sprite.scale = 0.5;
                Missile_3_Player_1Sprite.scale = 0.5;

                missileSelected = 1;
            }
            if(mousePressedOver(Missile_2_Player_1Sprite)){
                Missile_1_Player_1Sprite.scale = 0.5;
                Missile_2_Player_1Sprite.scale = 1;
                Missile_3_Player_1Sprite.scale = 0.5;

                missileSelected = 2;
            }
            if(mousePressedOver(Missile_3_Player_1Sprite)){
                Missile_1_Player_1Sprite.scale = 0.5;
                Missile_2_Player_1Sprite.scale = 0.5;
                Missile_3_Player_1Sprite.scale = 1;

                missileSelected = 3;
            }
            this.nextButton.mousePressed(()=>{
                this.nextButton.hide();
                this.subTitle.hide();
                if(missileSelected === 1){
                    player.Missile = "Missile_1_Player_1Img";
                    player.update();
                }
                if(missileSelected === 2){
                    player.Missile = "Missile_2_Player_1Img";
                    player.update();
                }
                if(missileSelected === 3){
                    player.Missile = "Missile_3_Player_1Img";
                    player.update();
                }
                Missile_1_Player_1Sprite.destroy();
                Missile_2_Player_1Sprite.destroy();
                Missile_3_Player_1Sprite.destroy();
            })
        }
        if(player.index%2 === 0){
            if(mousePressedOver(Missile_1_Player_2Sprite)){
                Missile_1_Player_2Sprite.scale = 1;
                Missile_2_Player_2Sprite.scale = 0.5;
                Missile_3_Player_2Sprite.scale = 0.5;

                missileSelected = 1;
            }
            if(mousePressedOver(Missile_2_Player_2Sprite)){
                Missile_1_Player_2Sprite.scale = 0.5;
                Missile_2_Player_2Sprite.scale = 1;
                Missile_3_Player_2Sprite.scale = 0.5;

                missileSelected = 2;
            }
            if(mousePressedOver(Missile_3_Player_2Sprite)){
                Missile_1_Player_2Sprite.scale = 0.5;
                Missile_2_Player_2Sprite.scale = 0.5;
                Missile_3_Player_2Sprite.scale = 1;

                missileSelected = 3;
            }
            this.nextButton.mousePressed(()=>{
                this.nextButton.hide();
                this.subTitle.hide();
                if(missileSelected === 1){
                    player.Missile = "Missile_1_Player_2Img";
                    player.update();
                }
                if(missileSelected === 2){
                    player.Missile = "Missile_2_Player_2Img";
                    player.update();
                }
                if(missileSelected === 3){
                    player.Missile = "Missile_3_Player_2Img";
                    player.update();
                }
                Missile_1_Player_2Sprite.destroy();
                Missile_2_Player_2Sprite.destroy();
                Missile_3_Player_2Sprite.destroy();
            })
        }
        
    }
}