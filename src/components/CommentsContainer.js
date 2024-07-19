import React from 'react'
import { USER_ICON } from '../utils/Constants'
const Comment =({data})=>{
    const {name,comment,replies}=data;
    return(
        <div className='flex m-3 shadow-sm bg-gray-100 p-2 rounded'>
        <a><img src={USER_ICON} className='w-12 h-12'/></a>
        <div className='px-5'>
        <p className='font-bold'>{name}</p>
        <p>{comment}</p>
        </div>
        
        </div>
    )

}
const CommentsList = ({comments}) => {
  
    return comments.map((comment, index) => (
        <div key={index}>
    <Comment  data={comment} />
      <div className='pl-5 border border-l-black ml-8'>
     {comment.replies && <CommentsList comments={comment.replies} />}
      </div>
      </div>
    ));
};
             
                    
const CommentsContainer = () => {
    
    const commentsData=[
        {
            name:"Deega",
            comment:"Average",
            replies:[
                {
                name:"Juvan",
                comment:"very good movie",  
                replies:[
                    {
                        name:"Dony",
                        comment:"We Enjoyed it.",  
                        replies:[
                            {
                                name:"Priya",
                                comment:"One time watchable movie.",  
                                replies:[
                                    {
                                        name:"Kiran",
                                        comment:"nice movie!",  
                                    }
                                ]
                            }
                        ]
                    },
                    ,
                    
                ]

                
            },
            
            
           
        ]
        },
        {
            name:"Juvan",
            comment:"very good movie",
            replies:[{
                name:"Juvan",
                comment:"very good movie",  
            }]
        },
        {
            name:"Norah",
            comment:"nice",
            replies:[{
                name:"Juvan",
                comment:"very good movie",  
            }]
        },
        {
            name:"Dony",
            comment:"good video",
            replies:[{
                name:"Juvan",
                comment:"very good movie",
                replies:[
                    {
                        name:"Justin",
                        comment:"Not Bad!.",  
                        replies:[
                            {
                                name:"Abel",
                                comment:"Excited to watch",  
                            }
                        ]
                    }
                ]
            }]
        }
    ]
  return (
  
    <div className='m-5 p-1'><h1 className='text-xl font-bold'>Comments:</h1>
              <CommentsList comments={commentsData} />
                      </div>
         
  )
}

export default CommentsContainer