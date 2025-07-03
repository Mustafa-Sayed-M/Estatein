import { Formik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import SectionHeader from '../../UI/SectionHeader'
import FormikInputGroup from '../../UI/FormikInputGroup'
import FormikSelectGroup from '../../UI/FormikSelectGroup'
import FormikTextareaGroup from '../../UI/FormikTextareaGroup'

const inputsList = [
    {
        id: "fistName",
        type: "text",
        name: "first_name",
        label: "First Name",
        autoComplete: "on",
        placeholder: "Enter First Name"
    },
    {
        id: "lastName",
        type: "text",
        name: "last_name",
        label: "Last Name",
        autoComplete: "on",
        placeholder: "Enter Last Name"
    },
    {
        id: "email",
        type: "email",
        name: "email",
        label: "Email",
        autoComplete: "on",
        placeholder: "Enter your Email"
    },
    {
        id: "phone",
        type: "tel",
        name: "phone",
        label: "Phone",
        autoComplete: "on",
        placeholder: "Enter Phone Number"
    }
];
const selectsList = [
    {
        id: "location",
        type: "text",
        name: "location",
        label: "Preferred Location",
        options: [
            { value: "", label: "Select Location" }
        ]
    },
    {
        id: "propertyType",
        type: "text",
        name: "property_type",
        label: "Property Type",
        options: [
            { value: "", label: "Select Property Type" }
        ]
    },
    {
        id: "bedrooms",
        type: "number",
        name: "bedrooms",
        label: "No. of Bedrooms",
        options: [
            { value: "", label: "Select no. of Bedrooms" }
        ]
    },
    {
        id: "bathrooms",
        type: "number",
        name: "bathrooms",
        label: "No. of Bathrooms",
        options: [
            { value: "", label: "Select no. of Bathrooms" }
        ]
    },
    {
        id: "budget",
        type: "number",
        name: "budget",
        label: "Budget",
        options: [
            { value: "", label: "Select Budget" }
        ]
    },
];
const textareaList = [
    {
        id: "message",
        name: "message",
        label: "Message",
        placeholder: "Enter your Message here"
    }
];
const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    budget: "",
    message: ""
};
const validationSchema = {
    first_name: Yup.string("First name must be string")
        .required("First name is required!")
        .min(4, "Minimum length 4 characters")
        .max(32, "Maximum length 32 characters"),
    last_name: Yup.string("Last name must be string")
        .required("Last name is required!")
        .min(4, "Minimum length 4 characters")
        .max(32, "Maximum length 32 characters"),
    email: Yup.string("Email must be string")
        .required("Email is required!")
        .email("Must a valid email"),
    phone: Yup.number("Phone must be string"),
    inquiry_type: Yup.string("Inquiry type must be string")
        .required("Inquiry type is required!"),
    how_did_you_hear_about_us: Yup.string("How did you hear about us must be string"),
    message: Yup.string("Message must be string")
        .min(5, "Minimum length 10 characters")
        .max(100, "Minimum length 100 characters")
};

function InquirySection() {
    return (
        <section className="inquiry-section py-10" id="inquiry">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Let's Make it Happen"
                    description={`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}
                />
                {/* Formik Container */}
                <div className="formik-container p-3 sm:p-5 lg:p-10 rounded-3xl border border-grey-15">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Yup.object(validationSchema)}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {/* Fields Container */}
                                <div className="fields-wrapper mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                                    {/* Inputs */}
                                    {
                                        inputsList.map(({ ...inputData }, index) => (<FormikInputGroup
                                            {...{
                                                ...inputData,
                                                onBlur: handleBlur,
                                                onChange: handleChange
                                            }}
                                            key={index}
                                        />))
                                    }
                                    {/* Selects */}
                                    {
                                        selectsList.map(({ ...selectData }, index) => (<FormikSelectGroup
                                            key={index}
                                            {...{
                                                ...selectData,
                                                onChange: handleChange,
                                                onBlur: handleBlur
                                            }}
                                        />))
                                    }
                                    {/* Text Areas Messages */}
                                    {
                                        textareaList.map(({ ...textareaData }, index) => (<FormikTextareaGroup
                                            key={index}
                                            {...{
                                                ...textareaData,
                                                onChange: handleChange,
                                                onBlur: handleBlur
                                            }}
                                        />))
                                    }
                                </div>
                                {/* Submit */}
                                <div className="flex items-center justify-between">
                                    {/* Submit Conditions */}
                                    <div className="submit-conditions flex items-center">
                                        {/* Conditions Checkbox */}
                                        <label className="conditions-checkbox flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                name="submit_condition"
                                                className="hidden peer"
                                            />
                                            {/* Custom Checkbox */}
                                            <div className="custom-checkbox w-6 h-6 rounded-md border border-grey-15 flex items-center justify-center text-sm peer-checked:bg-purple-60 peer-checked:border-purple-60 cursor-pointer transition *:scale-0 peer-checked:*:scale-100">
                                                <i className="fa-solid fa-check fa-fw transition-transform"></i>
                                            </div>
                                            {/* Condition Text */}
                                            <p className="flex items-center gap-1.5">
                                                <span>I agree with</span>
                                                <Link to={''} className="underline transition-colors sm:hover:text-purple-60">Terms of Use</Link>
                                                <span>and</span>
                                                <Link to={''} className="underline transition-colors sm:hover:text-purple-60">Privacy Policy</Link>
                                            </p>
                                        </label>
                                    </div>
                                    {/* Submit Btn */}
                                    <button
                                        type="submit"
                                        title="Send Your Message"
                                        disabled={isSubmitting}
                                        className="py-2 px-4 rounded-md bg-purple-60"
                                    >
                                        Send Your Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default InquirySection;