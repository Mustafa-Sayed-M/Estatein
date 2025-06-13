import { ErrorMessage } from "formik";

function FormikInputGroup({ label, ...inputData }) {
    return (
        <div className="formik-input-group" >
            {/* Label */}
            <label htmlFor={inputData.id}>{label}</label>
            {/* Input Field */}
            <input
                {...inputData}
                className="p-3 rounded-md w-full bg-grey-10 border border-grey-15 mt-2 placeholder:transition-opacity focus:placeholder:opacity-0 transition-colors focus:border-purple-60"
            />
            {/* Error Message */}
            <ErrorMessage name={inputData.name} component={'p'} className="mt-2 !text-red-500" />
        </div>
    )
}

export default FormikInputGroup;