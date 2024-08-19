export default function UserInput({onChangeInput, values}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment </label>
                    <input type="number" required value= {values.input1} 
                    onChange={(event) => 
                        onChangeInput('input1', event.target.value)
                    }/>
                </p>
                <p>
                    <label>annual investment</label>
                     <input type="number" required value= {values.input2} 
                    onChange={(event) => 
                        onChangeInput('input2', event.target.value)
                        }/> 
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input type="number" required value= {values.input3} 
                    onChange={(event) => 
                        onChangeInput('input3', event.target.value)
                        }/> 
                </p>
                <p>
                    <label>duration </label>
                    <input type="number" required value= {values.input4} 
                    onChange={(event) => 
                        onChangeInput('input4', event.target.value)
                        }/>
                </p>
            </div>
        </section>
    );

}