import { ErrorMessage } from "formik";

function FormikSelectGroup({ label, options, ...selectData }) {
    return (
        <div className="field-group"  >
            {/* Label */}
            <label htmlFor={selectData.id}>{label}</label>
            {/* Select Field */}
            <select
                {...selectData}
                className="p-3 rounded-md w-full bg-grey-10 border border-grey-15 mt-2 placeholder:transition-opacity focus:placeholder:opacity-0 transition-colors focus:border-purple-60"
            >
                {
                    options.map((option, index) => (<option
                        key={index}
                        value={option.value}
                    >{option.label}</option>))
                }
            </select>
            {/* Error Message */}
            <ErrorMessage name={selectData.name} component={'p'} className="mt-2 !text-red-500" />
        </div>
    )
}

export default FormikSelectGroup;