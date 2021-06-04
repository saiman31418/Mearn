import React from 'react'


const Form =({handlename,handlenumber,addNote,newName,focusName,Phonenumber}) =>{

    return (
        <div>
            <h2>add a new contact</h2>
            <form onSubmit={addNote}>
        <div>
        name:<input
          value={newName}
          onChange={handlename}
          required autoComplete='off' 
         ref={focusName}
        />
         <div>number: <input 
         value={Phonenumber}
         onChange={handlenumber}
         required autoComplete='off' 
         /></div>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
      </form> 

 

        </div>
    )
    
}

export default Form