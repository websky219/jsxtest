import ChildA from './ChildA'
import ChildB from './ChildB'

export default {
    name: 'test-me',
    components: {
        [ChildB.name]: ChildB,
        [ChildA.name]: ChildA
    },
    data() {
        return {
            componentName: 'child-a',
            prop:{
                is:'child-a',
                props:{
                    text:'aaaa'
                }
            }
        }
    },
    render(h) {
        return (
            <div style='height:50px;width:300px'>



                <component is={this.componentName}/>

                <component {...this.prop}/>

                <div>
                    <button onClick={() => this.componentName = 'child-a'}>组件A</button>
                    <button onClick={() => this.componentName = 'child-b'}>组件B</button>
                </div>

                <ChildA text={'sdfdsf'}/>
            </div>
        )
    }
}