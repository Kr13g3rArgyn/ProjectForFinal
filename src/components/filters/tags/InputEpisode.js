import React from 'react'

const InputEpisode = ({total, name, setId}) => {
// console.log([...Array(total).keys()]) Vyvod kolichestva episodov
  return (
    <div class="input-group mb-3">
    <select 
    class="form-select" 
    onChange={e => setId(e.target.value)}
    id={name}>
      <option value="1" selected>Choose...</option>

      {[...Array(total).keys()].map((epVal) => {
        return <option value={epVal + 1}>
          {name} - {" "}
          {epVal + 1}
          </option> 

      })}

    </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>

  )
}

export default InputEpisode