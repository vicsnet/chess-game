import './chessboard.css'

        const xaxis=["a","b","c","d","e","f","g","h"]; //horizontal
        const yaxis=["1","2","3","4","5","6","7","8"]; //vertical

        // even is dark 
        // odd is white

export default function Chessboard() {
        let board =[];
        for (let j = yaxis.length-1; j>=0; j--) {
                for (let i = 0; i < xaxis.length; i++) {
                        const number = j + i + 2;
                        if(number % 2 === 0){
                                board.push(<div className='tile black-tile'>
                                {/* [{xaxis[i]}{yaxis[j]}] */}
                        </div>)
                        }else{
                                board.push(<div className='tile white-tile'>
                                {/* [{xaxis[i]}{yaxis[j]}] */}
                        </div>)    
                        }
                      
                        
                }
                
        }

  return (
    <div className='chessboard'>{board}</div>
  )
}
