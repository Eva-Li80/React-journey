type ChapterDetailsProps =  {
   params: {
    chapterId: string;
   }
}

export default function ChapterDetails({params}:ChapterDetailsProps){
    return(
        <div>
            <h1>olika kapitel {params.chapterId}</h1>
        </div>
    )
}