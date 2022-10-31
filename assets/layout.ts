import { _decorator, Component, Node, Layout, Gradient } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('layout')
export class layout extends Component {
    // @property({
    //     type:Layout,
    // })setLayout = null!
    @property({type :Node})
    card : Node;

    
    onLoad() {
        // this.node.getComponent(Layout).type = 2
    }

    update(deltaTime: number) {
        
    }
}

