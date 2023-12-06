// this is where the visuliser with name will be imported and rendered

export default function Page({ params }: { params: { name: string } }){
    const visualiserName = params.name;
    return <p>{visualiserName}</p>
}