// We have to create a template of the kind of props our component would take.
// Hence we use a type (or interface) to describe the shape of the props.
type Props = {
    data: string;
    //dataToSend: string;
}



export const ChildComponent: React.FC<Props> = ({data}) => { // the child component takes a data prop, which should be supplied when ca

   

return <div style={{}} className="animated-child">
    <h1>Child Component</h1>
    <p >Data: {data}</p>
    
</div>
}