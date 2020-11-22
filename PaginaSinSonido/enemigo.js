class Enemigo{
    constructor(posX,posY){
        this.x = posX;
        this.y = posY;
        this.tam= 90;
    }

    move(){
        if(personaje.getX()>this.x){
            this.x++;
        } else {
            this.x--;
        }
        if(personaje.getY()>this.y){
            this.y++;
        } else {
            this.y--;
        }
        // this.show();
    }
    show(){
        image(eImg,this.x, this.y, this.tam ,this.tam);
    }

    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

}
