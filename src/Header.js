import React from 'react'

export const Header = () => {
  
  return (
    <div className='box'>
        <div>
           <select className='a'>
            <option>select</option>
            <option>Khadisakhar</option>
            <option>Jawari</option>
            <option>Bajari</option>
           </select>
           <button>Add</button>
        </div>
        <div className='b'>
          <table border={1}>
              <tr>
                <th>No</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>MRP</th>
                <th>Sale Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
              <tr>
                <td><input></input></td>
               <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
               <td><input></input></td>
               <td><input></input></td>
               <td><input></input></td>
              </tr>
          </table>

        </div>
             
       
     
    </div>
  )
}
