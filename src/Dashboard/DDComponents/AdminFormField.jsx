/**
* @param {String} label Form field label 
* @param {String} type Form field type 
* @param {String} id Form field id and label htmlFor
* @returns Form field
*/
export const AdminFormField = ({ label = String, type = String, id = String }) => {
    return <div>
        <label htmlFor={`${id}`}>{label}</label>
        <input
            {...register(`${id}`)}
            type={`${type}`}
            id={`${id}`}
            className='w-full input-field-dd px-3 py-2'
        />
    </div>
};
