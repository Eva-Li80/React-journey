type InfoDetailsProps =  {
    params: {
     chapterId: string;
     infoId: string;
    }
 }
 

export default function infoDetails({params}: InfoDetailsProps){
    return(
        <div>
            <h1>info {params.infoId} i kapitel {params.chapterId} </h1>
        </div>
    )
}