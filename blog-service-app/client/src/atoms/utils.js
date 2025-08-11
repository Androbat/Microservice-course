
export function Button(){
    return <button className="btn btn-primary">Submit</button>
}

export function Title({ title }){
    return <label>{title}</label>
}

export function Input({ value, onChange }){
    return <input className="form-control" value={value} onChange={onChange} />
}