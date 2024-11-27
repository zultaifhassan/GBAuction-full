import React from 'react'
import './Current.css'

const Current = () => {
  return (
    <div className='current-table'>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Bid Price</th>
                    <th>Highest Bid</th>
                    <th>Lowest Bid</th>
                    <th>Expires</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>100</td>
                    <td>130</td>
                    <td>88</td>
                    <td>22/04/2024</td>

                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>100</td>
                    <td>130</td>
                    <td>88</td>
                    <td>22/04/2024</td>

                </tr>
                <tr>
                    <td>Item 1</td>
                    <td>100</td>
                    <td>130</td>
                    <td>88</td>
                    <td>22/04/2024</td>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Current