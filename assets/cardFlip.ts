import { _decorator, Component, Node, Label, Sprite, TERRAIN_HEIGHT_BASE, SpriteFrame, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("cardFlip")
export class cardFlip extends Component {
    @property({
        type: Label,
    })
    text = null!;

    @property({
        type: SpriteFrame,
    })
    faceDown = null!;
    // isFaceDown
    //start method
    start() {
        let scale = this.node.getScale();

        this.text.string = "Hello";

        this.node.on(
            Node.EventType.MOUSE_DOWN,(event) => {
              if (this.faceDown) {
                    tween(this.node)
                        .to(0.5, { scale: new Vec3(0, 1, 1) })
                       // .to(0.5, { position: new Vec3(1,0,0)})
                        .call(() => {
                            this.node.getComponent(Sprite).spriteFrame = this.faceDown;
                        })
                        .to(0.5, { scale: new Vec3(1, 1, 1) })
                        .start();
                }else{
                    console.log("Please add sprite frame");
                    
                }
            },
            this
        );
    }

    update(deltaTime: number) {}
}



   // let label = this.node.getComponentInChildren(Label)
                // if(scale.x ==1){
                //     label.string="^"
                //     scale.x = -1;
                //     let sp = this.node.getComponent(Sprite);
                //     console.log(sp)

                // }
                // else{
                //     scale.x = 1;
                //     label.string="*"
                //     console.log(label.string)
                // }
                // this.node.setScale(scale);

               