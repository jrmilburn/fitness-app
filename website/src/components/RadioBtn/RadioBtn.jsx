export default function RadioBtn({id, name, text, onChange}) {

    return (
        <div className="flex space-x-6">
        <div className="relative">
          <input type="radio" id={`${id}`} name={`${name}`} value={`${text}`} className="hidden peer" onChange={onChange} />
          <label htmlFor={`${id}`}
            className="peer-checked:bg-blue-500 peer-checked:text-white w-16 h-10 border-2 border-gray-300 flex items-center justify-center text-center text-gray-700 cursor-pointer">
            {text}
          </label>
        </div>
        </div>
    )

}