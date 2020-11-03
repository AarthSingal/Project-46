class ThirdScreen{
    constructor(){
        this.subTitle = createElement('h3');
        this.next_btn = createButton('NEXT');
    }
    displayJets(){
        this.subTitle.html("Please Select an Image of the Jet by clicking on it");
        this.subTitle.position(displayWidth/2 -210 , displayHeight/2 - 280);
        if(player.index%2 !== 0 ){
            Jet_1_Player_1Sprite = createSprite(120,265,50,50);
            Jet_1_Player_1Sprite.addImage(Jet_1_Player_1Img);
            Jet_1_Player_1Sprite.scale = 0.5;


            Jet_2_Player_1Sprite = createSprite(365,265,50,50);
            Jet_2_Player_1Sprite.addImage(Jet_2_Player_1Img);
            Jet_2_Player_1Sprite.scale = 0.5;

            Jet_3_Player_1Sprite = createSprite(640,280,50,50);
            Jet_3_Player_1Sprite.addImage(Jet_3_Player_1Img);
            Jet_3_Player_1Sprite.scale = 0.5;

            Jet_4_Player_1Sprite = createSprite(880,250,50,50);
            Jet_4_Player_1Sprite.addImage(Jet_4_Player_1Img);
            Jet_4_Player_1Sprite.scale = 0.5;

            Jet_5_Player_1Sprite = createSprite(1125,265,50,50);
            Jet_5_Player_1Sprite.addImage(Jet_5_Player_1Img);
            Jet_5_Player_1Sprite.scale = 0.7;

            // next set

            Jet_6_Player_1Sprite = createSprite(120,530,50,50);
            Jet_6_Player_1Sprite.addImage(Jet_6_Player_1Img);
            Jet_6_Player_1Sprite.scale = 0.5;

            Jet_7_Player_1Sprite = createSprite(335,530,50,50);
            Jet_7_Player_1Sprite.addImage(Jet_7_Player_1Img);
            Jet_7_Player_1Sprite.scale = 0.5;

            Jet_8_Player_1Sprite = createSprite(605,545,50,50);
            Jet_8_Player_1Sprite.addImage(Jet_8_Player_1Img);
            Jet_8_Player_1Sprite.scale = 0.5;

            Jet_9_Player_1Sprite = createSprite(880,570,50,50);
            Jet_9_Player_1Sprite.addImage(Jet_9_Player_1Img);
            Jet_9_Player_1Sprite.scale = 0.5;

            Jet_10_Player_1Sprite = createSprite(1120,530,50,50);
            Jet_10_Player_1Sprite.addImage(Jet_10_Player_1Img);
            Jet_10_Player_1Sprite.scale = 0.7;


            Jet_1_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_2_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_3_Player_1Sprite.setCollider("Rectangle",0,0,400,400);
            Jet_4_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_5_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_6_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_7_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_8_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_9_Player_1Sprite.setCollider("Circle",0,0,200);
            Jet_10_Player_1Sprite.setCollider("Circle",0,0,200);
            
        }

        if(player.index%2 === 0){
            Jet_1_Player_2Sprite = createSprite(120,265,50,50);
            Jet_1_Player_2Sprite.addImage(Jet_1_Player_2Img);
            Jet_1_Player_2Sprite.scale = 0.5;

            Jet_2_Player_2Sprite = createSprite(365,265,50,50);
            Jet_2_Player_2Sprite.addImage(Jet_2_Player_2Img);
            Jet_2_Player_2Sprite.scale = 0.5;

            Jet_3_Player_2Sprite = createSprite(640,280,50,50);
            Jet_3_Player_2Sprite.addImage(Jet_3_Player_2Img);
            Jet_3_Player_2Sprite.scale = 0.5;

            Jet_4_Player_2Sprite = createSprite(880,250,50,50);
            Jet_4_Player_2Sprite.addImage(Jet_4_Player_2Img);
            Jet_4_Player_2Sprite.scale = 0.5;

            Jet_5_Player_2Sprite = createSprite(1125,265,50,50);
            Jet_5_Player_2Sprite.addImage(Jet_5_Player_2Img);
            Jet_5_Player_2Sprite.scale = 0.7;

            // next set

            Jet_6_Player_2Sprite = createSprite(120,530,50,50);
            Jet_6_Player_2Sprite.addImage(Jet_6_Player_2Img);
            Jet_6_Player_2Sprite.scale = 0.5;

            Jet_7_Player_2Sprite = createSprite(335,530,50,50);
            Jet_7_Player_2Sprite.addImage(Jet_7_Player_2Img);
            Jet_7_Player_2Sprite.scale = 0.5;

            Jet_8_Player_2Sprite = createSprite(605,545,50,50);
            Jet_8_Player_2Sprite.addImage(Jet_8_Player_2Img);
            Jet_8_Player_2Sprite.scale = 0.5;

            Jet_9_Player_2Sprite = createSprite(880,570,50,50);
            Jet_9_Player_2Sprite.addImage(Jet_9_Player_2Img);
            Jet_9_Player_2Sprite.scale = 0.5;

            Jet_10_Player_2Sprite = createSprite(1120,530,50,50);
            Jet_10_Player_2Sprite.addImage(Jet_10_Player_2Img);
            Jet_10_Player_2Sprite.scale = 0.7;

            //Jet_1_Player_2Sprite.debug = true;
            //Jet_2_Player_2Sprite.debug = true;
            //Jet_3_Player_2Sprite.debug = true;
            //Jet_4_Player_2Sprite.debug = true;
            //Jet_5_Player_2Sprite.debug = true;
            //Jet_6_Player_2Sprite.debug = true;
            //Jet_7_Player_2Sprite.debug = true;
            //Jet_8_Player_2Sprite.debug = true;
            //Jet_9_Player_2Sprite.debug = true;
            //Jet_10_Player_2Sprite.debug = true;

            Jet_1_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_2_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_3_Player_2Sprite.setCollider("Rectangle",0,0,400,400);
            Jet_4_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_5_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_6_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_7_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_8_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_9_Player_2Sprite.setCollider("Circle",0,0,200);
            Jet_10_Player_2Sprite.setCollider("Circle",0,0,200);
        }
        this.next_btn.show();
        this.next_btn.position(590,400);
    }
    selectJets(){
        if(player.index%2 !== 0 ){
           // console.log("I am in select jets")
            if(mousePressedOver(Jet_1_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.9;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;
                
                jetSelected = 1;
            }
            if(mousePressedOver(Jet_2_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.9;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 2;
            }
            if(mousePressedOver(Jet_3_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.9;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 3;
            }
            if(mousePressedOver(Jet_4_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.9;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 4;
            }
            if(mousePressedOver(Jet_5_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.9;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 5;
            }
            if(mousePressedOver(Jet_6_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.9;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 6;
            }
            if(mousePressedOver(Jet_7_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.9;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 7;
            }
            if(mousePressedOver(Jet_8_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.9;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 8;
            }
            if(mousePressedOver(Jet_9_Player_1Sprite) ){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.9;
                Jet_10_Player_1Sprite.scale = 0.7;

                jetSelected = 9;
            }
            if(mousePressedOver(Jet_10_Player_1Sprite)){
                Jet_1_Player_1Sprite.scale = 0.5;
                Jet_2_Player_1Sprite.scale = 0.5;
                Jet_3_Player_1Sprite.scale = 0.5;
                Jet_4_Player_1Sprite.scale = 0.5;
                Jet_5_Player_1Sprite.scale = 0.5;
                Jet_6_Player_1Sprite.scale = 0.5;
                Jet_7_Player_1Sprite.scale = 0.5;
                Jet_8_Player_1Sprite.scale = 0.5;
                Jet_9_Player_1Sprite.scale = 0.5;
                Jet_10_Player_1Sprite.scale = 1.1;

                jetSelected = 10;
            }

            this.next_btn.mousePressed(()=>{
                this.subTitle.hide();
                this.next_btn.hide();
                if(jetSelected === 1){
                    player.Jet = "Jet_1_Player_1Img"
                    player.update();
                }
                if(jetSelected === 2){
                    player.Jet = "Jet_2_Player_1Img"
                    player.update();
                }
                if(jetSelected === 3){
                    player.Jet = "Jet_3_Player_1Img"
                    player.update();
                }
                if(jetSelected === 4){
                    player.Jet = "Jet_4_Player_1Img"
                    player.update();
                }
                if(jetSelected === 5){
                    player.Jet = "Jet_5_Player_1Img"
                    player.update();
                }
                if(jetSelected === 6){
                    player.Jet = "Jet_6_Player_1Img"
                    player.update();
                }
                if(jetSelected === 7){
                    player.Jet = "Jet_7_Player_1Img"
                    player.update();
                }
                if(jetSelected === 8){
                    player.Jet = "Jet_8_Player_1Img"
                    player.update();
                }
                if(jetSelected === 9){
                    player.Jet = "Jet_9_Player_1Img"
                    player.update();
                }
                if(jetSelected === 10){
                    player.Jet = "Jet_10_Player_1Img"
                    player.update();
                }
                Jet_1_Player_1Sprite.destroy();
                Jet_2_Player_1Sprite.destroy();
                Jet_3_Player_1Sprite.destroy();
                Jet_4_Player_1Sprite.destroy();
                Jet_5_Player_1Sprite.destroy();
                Jet_6_Player_1Sprite.destroy();
                Jet_7_Player_1Sprite.destroy();
                Jet_8_Player_1Sprite.destroy();
                Jet_9_Player_1Sprite.destroy();
                Jet_10_Player_1Sprite.destroy();

                fourthScreen.displayMissiles();
            })
        }
        // next set
        if(player.index%2 === 0 ){
            //console.log("I am in select jets")
            if(mousePressedOver(Jet_1_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.9;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 1;
            }
            if(mousePressedOver(Jet_2_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.9;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 2;
            }
            if(mousePressedOver(Jet_3_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.9;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 3;
            }
            if(mousePressedOver(Jet_4_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.9;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 4;
            }
            if(mousePressedOver(Jet_5_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.9;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 5;
            }
            if(mousePressedOver(Jet_6_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.9;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 6;
            }
            if(mousePressedOver(Jet_7_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.9;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 7;
            }
            if(mousePressedOver(Jet_8_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.9;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 8;
            }
            if(mousePressedOver(Jet_9_Player_2Sprite) ){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.9;
                Jet_10_Player_2Sprite.scale = 0.7;

                jetSelected = 9;
            }
            if(mousePressedOver(Jet_10_Player_2Sprite)){
                Jet_1_Player_2Sprite.scale = 0.5;
                Jet_2_Player_2Sprite.scale = 0.5;
                Jet_3_Player_2Sprite.scale = 0.5;
                Jet_4_Player_2Sprite.scale = 0.5;
                Jet_5_Player_2Sprite.scale = 0.5;
                Jet_6_Player_2Sprite.scale = 0.5;
                Jet_7_Player_2Sprite.scale = 0.5;
                Jet_8_Player_2Sprite.scale = 0.5;
                Jet_9_Player_2Sprite.scale = 0.5;
                Jet_10_Player_2Sprite.scale = 1.1;

                jetSelected = 10;
            }
            this.next_btn.mousePressed(()=>{
                this.subTitle.hide();
                this.next_btn.hide();
                if(jetSelected === 1){
                    player.Jet = "Jet_1_Player_2Img"
                    player.update();
                }
                if(jetSelected === 2){
                    player.Jet = "Jet_2_Player_2Img"
                    player.update();
                }
                if(jetSelected === 3){
                    player.Jet = "Jet_3_Player_2Img"
                    player.update();
                }
                if(jetSelected === 4){
                    player.Jet = "Jet_4_Player_2Img"
                    player.update();
                }
                if(jetSelected === 5){
                    player.Jet = "Jet_5_Player_2Img"
                    player.update();
                }
                if(jetSelected === 6){
                    player.Jet = "Jet_6_Player_2Img"
                    player.update();
                }
                if(jetSelected === 7){
                    player.Jet = "Jet_7_Player_2Img"
                    player.update();
                }
                if(jetSelected === 8){
                    player.Jet = "Jet_8_Player_2Img"
                    player.update();
                }
                if(jetSelected === 9){
                    player.Jet = "Jet_9_Player_2Img"
                    player.update();
                }
                if(jetSelected === 10){
                    player.Jet = "Jet_10_Player_2Img"
                    player.update();
                }
                Jet_1_Player_2Sprite.destroy();
                Jet_2_Player_2Sprite.destroy();
                Jet_3_Player_2Sprite.destroy();
                Jet_4_Player_2Sprite.destroy();
                Jet_5_Player_2Sprite.destroy();
                Jet_6_Player_2Sprite.destroy();
                Jet_7_Player_2Sprite.destroy();
                Jet_8_Player_2Sprite.destroy();
                Jet_9_Player_2Sprite.destroy();
                Jet_10_Player_2Sprite.destroy();
                
                fourthScreen.displayMissiles();
            })
        }
    }
}