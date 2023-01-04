# React Array Sum
#### This package will help you to add array values


Basic use

Need to import 

`import Sum from 'react-array-sum'`

use of function

 `Sum([1,2,3,4,5,6,7])`

Example Code: 

    import {useEffect, useState} from "react"
    import Sum from 'react-array-sum'
    function App() {
        const [numbers] = useState([1,2,3,4,5,6,7])
        const [numbers_sum, set_numbers_sum] = useState()

        useEffect(()=>{
            set_numbers_sum(Sum(numbers))
        }, [])

        return (
            <div className="App">
                <h1>{numbers_sum}</h1>
            </div>
        )
    }
    export default App;

# Bug Report 

- Please feel free to report a bug <naim886@gmail.com>

# Contributors

Thanks to everyone who has contributed to the project so far:
- MD. Naimul Hasan ( **[Web Learn BD](https://weblearnbd.com)** )

