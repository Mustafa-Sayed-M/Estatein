import { ErrorMessage } from "formik";

function FormikTextareaGroup({ label, ...textareaData }) {
    return (
        <div className="field-group col-span-1 md:col-span-2 lg:col-span-3 2xl:col-span-4">
            {/* Label */}
            <label htmlFor={textareaData.id}>{label}</label>
            {/* Select Field */}
            <textarea
                {...textareaData}
                className="p-3 rounded-md w-full bg-grey-10 border border-grey-15 mt-2 placeholder:transition-opacity focus:placeholder:opacity-0 transition-colors focus:border-purple-60 resize-none min-h-[180px]"
            ></textarea>
            {/* Error Message */}
            <ErrorMessage name={textareaData.name} component={'p'} className="mt-2 !text-red-500" />
        </div>
    )
}

export default FormikTextareaGroup;